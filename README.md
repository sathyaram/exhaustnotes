# Exhaust Notes

A curated collection of real exhaust recordings, built so you can play any two
specific cars **side by side** and hear why they differ.

A revival of the 2019 original (React + Express + MongoDB), rebuilt on Next.js
App Router with Tailwind v4 and the Web Audio API.

## What this is not

There are engine-sound projects out there — `realenginesimulator.com`,
`Antonio-R1/engine-sound-generator` — and they are a different product. Those
are physics sandboxes: you build a generic engine from parameters and hear
synthesised output. Nothing on this site is synthesised, and there is no generic
engine to configure. The product here is curation: an LFA against a 458, a
GT350 against a Corvette. That distinction is the whole point.

## Where the audio comes from

All 30 clips are recordings of actual cars, carried over from the 2019 build and
credited per car to whoever captured them (the credit links back to the source
from each card). They are used non-commercially and editorially.

The rev control does **not** synthesise anything. It shifts the playback rate of
the real recording, which moves pitch and speed together — so a 4.8-litre V10
still sounds like a V10 at every point on the dial. The rpm readout is an
estimate derived from the car's real redline, and the UI says so.

## Where the photos come from

`scripts/fetch-photos.py` pulls Creative Commons and public-domain photos from
Wikimedia Commons — currently 86 across the 30 cars, on top of each car's
original hero image. Every photo carries its photographer and licence, and the
credit line under each card tracks whichever frame is currently showing.

```bash
python3 scripts/fetch-photos.py     # resumable; regenerates lib/photos.ts
```

Then compress (macOS):

```bash
find public/photos -name '*.jpg' -print0 | xargs -0 -P4 -I{} sips -Z 1200 -s format jpeg -s formatOptions 72 {} --out {}
```

## Architecture

**`components/AudioEngine.tsx`** — one shared `AudioContext`; each sounding car
is a *voice*:

```
AudioBufferSourceNode -> GainNode -> AnalyserNode -> destination
```

Clips are decoded into `AudioBuffer`s rather than played through `<audio>`
elements. That costs a download up front but buys two things the comparison
depends on: two clips can be started in the same tick and stay phase-locked,
and `playbackRate` becomes available as the rev control. Buffers are cached by
URL and preloaded on card hover.

Live values (progress, analyser level) are read through `useVoiceMeter`, which
polls via `requestAnimationFrame` — the engine itself never re-renders at frame
rate.

**`components/CompareStage.tsx`** — the A/B view. The crossfade is equal-power,
not linear:

```ts
gainA = Math.cos((x * Math.PI) / 2);
gainB = Math.sin((x * Math.PI) / 2);
```

At the midpoint each side sits at `0.707`, and because `0.707² + 0.707² = 1`
total power stays constant. A linear fade would audibly sag in the middle.

**Providers live in the root layout**, not in a page, so the `AudioContext`
survives client-side navigation to `/compare/...` and the sound never cuts out.

**`lib/cars.ts`** — hand-editable car data, including the spec layer
(`engine.layout`, `aspiration`, `redline`) that drives both the filters and the
"why they sound different" table. **`lib/photos.ts`** is generated; don't edit it.

## Routes

| Route | |
|---|---|
| `/` | The garage: search, filter by aspiration, sort by redline/power/cylinders |
| `/compare/<a>-vs-<b>` | A/B stage — shareable, and six matchups are prerendered |

## Design

The palette, type and hover behaviour are carried over deliberately from the
2019 site: `#131313` base, `#f42737` red, Alfa Slab One / Bungee / Rajdhani, the
noise texture, and the corner-draw border that races around a card on hover.

## Develop

```bash
npm run dev
```

Runs on port 3004 via the workspace `.claude/launch.json`.
