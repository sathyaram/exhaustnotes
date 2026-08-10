#!/usr/bin/env python3
"""Re-encode the exhaust clips smaller, using only macOS built-ins.

The originals are 192kbps MP3 running 34-70 seconds. That's far more than a
rev needs, and the whole file has to download and decode before a single note
plays (the site uses AudioBuffer, not <audio>, so the compare view can keep two
clips phase-locked). Both the byte count and the time-to-first-sound come down
if the clips are shorter and more efficiently coded.

    python3 scripts/optimise-audio.py            # writes public/sounds/*.m4a
    python3 scripts/optimise-audio.py --dry-run  # report only

Pipeline per file, all via afconvert (CoreAudio decodes MP3 for free):

    x.mp3 -> WAV -> pick loudest window, fade edges -> AAC .m4a

Window selection is by RMS energy: on a rev clip the loudest stretch is the rev
itself, which is the part worth keeping. Clips already at or under the target
keep their full duration and are only re-encoded.
"""

import array
import os
import shutil
import subprocess
import sys
import tempfile
import wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOUNDS = os.path.join(ROOT, "public", "sounds")

TARGET_SECONDS = 24.0
# Below this we keep the whole clip rather than shaving a couple of seconds off
# for no real gain.
KEEP_WHOLE_UNDER = 26.0
BITRATE = 96_000
FADE_MS = 40
# The envelope only needs to be accurate enough to rank half-second chunks, so
# reading every Nth frame is plenty and keeps this fast in pure Python.
ENVELOPE_STRIDE = 16
CHUNK_SECONDS = 0.5


def run(*args):
    subprocess.run(args, check=True, capture_output=True)


def rms_envelope(samples, channels, rate):
    """Coarse per-chunk RMS. Returns (chunk_energies, frames_per_chunk)."""
    frames_per_chunk = int(rate * CHUNK_SECONDS)
    step = channels * ENVELOPE_STRIDE
    energies = []
    for start in range(0, len(samples), frames_per_chunk * channels):
        window = samples[start : start + frames_per_chunk * channels]
        if not window:
            break
        total = 0
        count = 0
        for i in range(0, len(window), step):
            v = window[i]
            total += v * v
            count += 1
        energies.append((total / count) ** 0.5 if count else 0.0)
    return energies, frames_per_chunk


def loudest_window(energies, chunks_needed):
    """Index of the chunk starting the highest-energy run of chunks_needed."""
    if len(energies) <= chunks_needed:
        return 0
    running = sum(energies[:chunks_needed])
    best, best_at = running, 0
    for i in range(1, len(energies) - chunks_needed + 1):
        running += energies[i + chunks_needed - 1] - energies[i - 1]
        if running > best:
            best, best_at = running, i
    return best_at


def apply_fades(samples, channels, rate):
    """In-place fades so a hard cut doesn't click, and the loop seam is soft."""
    fade_frames = int(rate * FADE_MS / 1000)
    n_frames = len(samples) // channels
    fade_frames = min(fade_frames, n_frames // 2)
    for f in range(fade_frames):
        gain = f / fade_frames
        for c in range(channels):
            samples[f * channels + c] = int(samples[f * channels + c] * gain)
            tail = (n_frames - 1 - f) * channels + c
            samples[tail] = int(samples[tail] * gain)


def process(path, dry_run=False):
    name = os.path.basename(path)
    stem = os.path.splitext(name)[0]
    before = os.path.getsize(path)

    with tempfile.TemporaryDirectory() as tmp:
        wav_in = os.path.join(tmp, "in.wav")
        wav_out = os.path.join(tmp, "out.wav")
        run("afconvert", "-f", "WAVE", "-d", "LEI16", path, wav_in)

        with wave.open(wav_in, "rb") as w:
            channels, width, rate = w.getnchannels(), w.getsampwidth(), w.getframerate()
            n_frames = w.getnframes()
            duration = n_frames / rate
            raw = w.readframes(n_frames)

        if width != 2:
            print(f"  !! {name}: unexpected sample width {width}, skipping")
            return None

        samples = array.array("h")
        samples.frombytes(raw)

        if duration > KEEP_WHOLE_UNDER:
            energies, frames_per_chunk = rms_envelope(samples, channels, rate)
            chunks_needed = max(1, int(TARGET_SECONDS / CHUNK_SECONDS))
            start_chunk = loudest_window(energies, chunks_needed)
            start = start_chunk * frames_per_chunk * channels
            end = start + chunks_needed * frames_per_chunk * channels
            samples = samples[start:end]
            kept = len(samples) / channels / rate
            offset = start_chunk * CHUNK_SECONDS
        else:
            kept, offset = duration, 0.0

        apply_fades(samples, channels, rate)

        if dry_run:
            print(f"  {stem:16s} {duration:5.1f}s -> {kept:5.1f}s  (from {offset:5.1f}s)")
            return None

        with wave.open(wav_out, "wb") as w:
            w.setnchannels(channels)
            w.setsampwidth(2)
            w.setframerate(rate)
            w.writeframes(samples.tobytes())

        m4a = os.path.join(tmp, "out.m4a")
        run("afconvert", "-f", "m4af", "-d", "aac", "-b", str(BITRATE), wav_out, m4a)
        dest = os.path.join(SOUNDS, stem + ".m4a")
        shutil.move(m4a, dest)

    after = os.path.getsize(dest)
    print(
        f"  {stem:16s} {duration:5.1f}s->{kept:5.1f}s  "
        f"{before / 1e6:5.2f}MB -> {after / 1e6:5.2f}MB  "
        f"({100 - after / before * 100:4.1f}% smaller)"
    )
    return before, after


def main():
    dry = "--dry-run" in sys.argv
    mp3s = sorted(f for f in os.listdir(SOUNDS) if f.endswith(".mp3"))
    if not mp3s:
        print("no .mp3 files left in public/sounds — already converted?")
        return

    print(f"{'(dry run) ' if dry else ''}{len(mp3s)} clips\n")
    total_before = total_after = 0
    for f in mp3s:
        result = process(os.path.join(SOUNDS, f), dry)
        if result:
            total_before += result[0]
            total_after += result[1]

    if dry or not total_before:
        return
    print(
        f"\ntotal {total_before / 1e6:.1f}MB -> {total_after / 1e6:.1f}MB "
        f"({100 - total_after / total_before * 100:.1f}% smaller)"
    )
    print("\nRemove the originals once you've listened back:")
    print("  rm public/sounds/*.mp3")


if __name__ == "__main__":
    main()
