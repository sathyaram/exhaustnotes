"use client";

import { asset } from "@/lib/assets";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * A single sounding car. Each one owns its own gain + analyser so cards can
 * show independent level meters and the compare view can crossfade between two.
 *
 *   AudioBufferSourceNode -> GainNode -> AnalyserNode -> destination
 */
type Voice = {
  source: AudioBufferSourceNode;
  gain: GainNode;
  analyser: AnalyserNode;
  duration: number;
  /** ctx.currentTime at the moment playback began */
  startedAt: number;
  rate: number;
  /** Backed by an explicit ArrayBuffer so getByteFrequencyData accepts it. */
  bins: Uint8Array<ArrayBuffer>;
};

type PlayOptions = { loop?: boolean; gain?: number; rate?: number };

type Engine = {
  play: (id: string, url: string, opts?: PlayOptions) => Promise<void>;
  stop: (id: string) => void;
  stopAll: () => void;
  /** Play `id` and stop everything else — the grid's one-at-a-time behaviour. */
  solo: (id: string, url: string, opts?: PlayOptions) => Promise<void>;
  setRate: (id: string, rate: number) => void;
  setGain: (id: string, gain: number) => void;
  preload: (url: string) => void;
  read: (id: string) => { progress: number; duration: number; level: number };
  playing: Record<string, boolean>;
  loading: Record<string, boolean>;
};

const Ctx = createContext<Engine | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const ctxRef = useRef<AudioContext | null>(null);
  const buffers = useRef(new Map<string, Promise<AudioBuffer>>());
  const voices = useRef(new Map<string, Voice>());
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  /* Browsers refuse to start an AudioContext outside a user gesture, so we
     create it lazily on the first play() rather than on mount. */
  const audioCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const decode = useCallback(
    (url: string) => {
      let pending = buffers.current.get(url);
      if (!pending) {
        // asset() applies the deploy's base path; fetch() gets no such help
        // from Next the way next/image does.
        pending = fetch(asset(url))
          .then((r) => r.arrayBuffer())
          .then((b) => audioCtx().decodeAudioData(b));
        buffers.current.set(url, pending);
        // A failed fetch shouldn't poison the cache forever.
        pending.catch(() => buffers.current.delete(url));
      }
      return pending;
    },
    [audioCtx],
  );

  const stop = useCallback((id: string) => {
    const v = voices.current.get(id);
    if (!v) return;
    try {
      v.source.onended = null;
      v.source.stop();
    } catch {
      /* already stopped */
    }
    v.source.disconnect();
    v.gain.disconnect();
    v.analyser.disconnect();
    voices.current.delete(id);
    setPlaying((p) => {
      const next = { ...p };
      delete next[id];
      return next;
    });
  }, []);

  const stopAll = useCallback(() => {
    for (const id of [...voices.current.keys()]) stop(id);
  }, [stop]);

  const play = useCallback(
    async (id: string, url: string, opts: PlayOptions = {}) => {
      const { loop = true, gain: g = 1, rate = 1 } = opts;
      stop(id);
      setLoading((l) => ({ ...l, [id]: true }));

      let buffer: AudioBuffer;
      try {
        buffer = await decode(url);
      } finally {
        setLoading((l) => {
          const next = { ...l };
          delete next[id];
          return next;
        });
      }

      const ctx = audioCtx();
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = loop;
      source.playbackRate.value = rate;

      const gain = ctx.createGain();
      gain.gain.value = 0;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;

      source.connect(gain).connect(analyser).connect(ctx.destination);

      // Ramp in rather than snapping — a hard gain step is an audible click.
      gain.gain.linearRampToValueAtTime(g, ctx.currentTime + 0.04);
      source.start();

      voices.current.set(id, {
        source,
        gain,
        analyser,
        duration: buffer.duration,
        startedAt: ctx.currentTime,
        rate,
        bins: new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount)),
      });
      setPlaying((p) => ({ ...p, [id]: true }));

      if (!loop) source.onended = () => stop(id);
    },
    [audioCtx, decode, stop],
  );

  const solo = useCallback(
    async (id: string, url: string, opts?: PlayOptions) => {
      for (const other of [...voices.current.keys()]) {
        if (other !== id) stop(other);
      }
      await play(id, url, opts);
    },
    [play, stop],
  );

  const setRate = useCallback((id: string, rate: number) => {
    const v = voices.current.get(id);
    if (!v || !ctxRef.current) return;
    const now = ctxRef.current.currentTime;
    // Glide instead of jumping, so a dragged slider sounds like an engine
    // picking up rather than a tape splice.
    v.source.playbackRate.linearRampToValueAtTime(rate, now + 0.08);
    v.rate = rate;
  }, []);

  const setGain = useCallback((id: string, g: number) => {
    const v = voices.current.get(id);
    if (!v || !ctxRef.current) return;
    v.gain.gain.linearRampToValueAtTime(g, ctxRef.current.currentTime + 0.05);
  }, []);

  const preload = useCallback(
    (url: string) => {
      if (!buffers.current.has(url)) void decode(url).catch(() => {});
    },
    [decode],
  );

  /* Read live values without going through React state — this gets called
     from a requestAnimationFrame loop, so re-rendering here would be fatal. */
  const read = useCallback((id: string) => {
    const v = voices.current.get(id);
    const ctx = ctxRef.current;
    if (!v || !ctx) return { progress: 0, duration: 0, level: 0 };

    const elapsed = (ctx.currentTime - v.startedAt) * v.rate;
    const progress = v.duration ? (elapsed % v.duration) / v.duration : 0;

    v.analyser.getByteFrequencyData(v.bins);
    let sum = 0;
    for (let i = 0; i < v.bins.length; i++) sum += v.bins[i];
    const level = sum / v.bins.length / 255;

    return { progress, duration: v.duration, level };
  }, []);

  useEffect(() => () => stopAll(), [stopAll]);

  return (
    <Ctx.Provider
      value={{
        play,
        stop,
        stopAll,
        solo,
        setRate,
        setGain,
        preload,
        read,
        playing,
        loading,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAudio must be used inside <AudioProvider>");
  return ctx;
}

/**
 * Per-car animation frame subscription. Components call this to get live
 * progress/level without the engine re-rendering the whole tree 60x a second.
 */
const RESTING = { progress: 0, duration: 0, level: 0 };

export function useVoiceMeter(id: string, active: boolean) {
  const { read } = useAudio();
  const [state, setState] = useState(RESTING);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const tick = () => {
      setState(read(id));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [id, active, read]);

  // Derived rather than reset via an effect, so stopping doesn't cost a
  // second render pass just to zero the meter.
  return active ? state : RESTING;
}
