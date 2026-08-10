"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAudio, useVoiceMeter } from "./AudioEngine";
import PhotoStack from "./PhotoStack";
import { comparePath } from "./CompareRoute";
import { engineLabel, photosFor, type Car } from "@/lib/cars";

/** Playback-rate limits. 1.0 is the recording untouched. */
const MIN_RATE = 0.65;
const MAX_RATE = 1.55;

export default function CompareStage({
  a,
  b,
  all,
  onSwap,
}: {
  a: Car;
  b: Car;
  all: Car[];
  onSwap: () => void;
}) {
  const { play, stopAll, setGain, setRate, playing, loading, preload } = useAudio();
  const [mix, setMix] = useState(0.5);
  const [rates, setRates] = useState<Record<string, number>>({ [a.id]: 1, [b.id]: 1 });
  // Mirrored into a ref so the keyboard handler and start() read the live
  // value without either of them being re-created on every mix change.
  const mixRef = useRef(mix);
  useEffect(() => {
    mixRef.current = mix;
  }, [mix]);

  const live = !!playing[a.id] || !!playing[b.id];
  const busy = !!loading[a.id] || !!loading[b.id];

  /* Equal-power crossfade: squared gains sum to 1, so the midpoint doesn't
     sag the way a linear fade does. */
  const gainsFor = (x: number) => ({
    a: Math.cos((x * Math.PI) / 2),
    b: Math.sin((x * Math.PI) / 2),
  });

  useEffect(() => {
    preload(a.sound);
    preload(b.sound);
  }, [a.sound, b.sound, preload]);

  const start = useCallback(async () => {
    const g = gainsFor(mixRef.current);
    // Kick both off in the same tick so the loops stay phase-aligned.
    await Promise.all([
      play(a.id, a.sound, { gain: g.a, rate: rates[a.id] }),
      play(b.id, b.sound, { gain: g.b, rate: rates[b.id] }),
    ]);
  }, [a, b, play, rates]);

  const toggle = () => (live ? stopAll() : void start());

  const onMix = (x: number) => {
    setMix(x);
    const g = gainsFor(x);
    setGain(a.id, g.a);
    setGain(b.id, g.b);
  };

  const onRate = (car: Car, rate: number) => {
    setRates((r) => ({ ...r, [car.id]: rate }));
    setRate(car.id, rate);
  };

  useEffect(() => () => stopAll(), [stopAll]);

  // Space toggles, ←/→ nudge the crossfade — headphones-on, hands-on-keys use.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      } else if (e.code === "ArrowLeft") {
        onMix(Math.max(0, mixRef.current - 0.08));
      } else if (e.code === "ArrowRight") {
        onMix(Math.min(1, mixRef.current + 0.08));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-plate text-[11px] uppercase tracking-[0.2em] text-white/45 transition hover:text-ember"
        >
          ← All cars
        </Link>
        <button
          type="button"
          onClick={onSwap}
          className="cursor-pointer font-plate text-[11px] uppercase tracking-[0.2em] text-white/45 transition hover:text-ember"
        >
          Swap sides ⇄
        </button>
      </nav>

      <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
        <Panel car={a} side="left" rate={rates[a.id]} onRate={onRate} weight={gainsFor(mix).a} />
        <Panel car={b} side="right" rate={rates[b.id]} onRate={onRate} weight={gainsFor(mix).b} />
      </div>

      <div className="sticky bottom-0 z-40 border-t border-white/10 bg-black/85 px-6 py-6 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggle}
              className="grid size-16 shrink-0 cursor-pointer place-items-center rounded-full bg-ember shadow-[0_0_30px_rgba(244,39,55,0.6)] transition hover:bg-white hover:text-black"
            >
              {busy ? (
                <span className="size-6 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : live ? (
                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className="flex-1">
              <div className="mb-2 flex items-baseline justify-between font-plate text-[10px] uppercase tracking-[0.18em]">
                <span className={mix < 0.5 ? "text-ember" : "text-white/40"}>{a.make}</span>
                <span className="text-white/25">Crossfade</span>
                <span className={mix > 0.5 ? "text-ember" : "text-white/40"}>{b.make}</span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={mix}
                onChange={(e) => onMix(Number(e.target.value))}
                aria-label={`Crossfade between the ${a.make} and the ${b.make}`}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-ember via-white/25 to-ember
                           [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                           [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_16px_rgba(255,255,255,0.65)]"
              />
              <p className="mt-2 text-center font-sans text-[11px] text-white/30">
                Space to play · ← → to crossfade · both clips loop in sync
              </p>
            </div>
          </div>
        </div>
      </div>

      <SpecTable a={a} b={b} />
      <MoreMatchups current={[a.id, b.id]} all={all} />
    </div>
  );
}

function Panel({
  car,
  side,
  rate,
  onRate,
  weight,
}: {
  car: Car;
  side: "left" | "right";
  rate: number;
  onRate: (car: Car, rate: number) => void;
  weight: number;
}) {
  const { playing } = useAudio();
  const { level } = useVoiceMeter(car.id, !!playing[car.id]);
  const estRpm = Math.round((car.redline / 1.35) * rate);
  const photos = useMemo(() => photosFor(car), [car]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = photos[photoIndex] ?? photos[0];

  return (
    <section
      className={`relative flex min-h-[46vh] flex-col justify-end overflow-hidden p-8 md:min-h-[58vh] ${
        side === "left" ? "md:border-r md:border-white/10" : ""
      }`}
    >
      <PhotoStack
        photos={photos}
        active
        interval={4200}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        showDots={false}
        onIndexChange={setPhotoIndex}
        imageClassName="transition-[filter,transform] duration-700"
        imageStyle={{
          // The louder side of the crossfade is the one in colour.
          filter: `grayscale(${(1 - weight) * 0.85}) saturate(${0.5 + weight * 0.5}) brightness(${0.68 + weight * 0.42})`,
          transform: `scale(${1 + level * 0.04})`,
        }}
      />
      {/* Enough scrim to keep the copy legible, not so much that the car
          disappears — the photo is half the point of this view. */}
      <span className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

      <div className="relative">
        <p className="font-plate text-[11px] uppercase tracking-[0.2em] text-ember">
          {car.year}
        </p>
        <h2 className="mt-2 font-display text-4xl leading-none md:text-5xl">
          {car.make} {car.model}
        </h2>
        {car.trim && (
          <p className="mt-2 font-display text-xl text-ember">{car.trim}</p>
        )}
        <p className="mt-3 font-sans text-sm uppercase tracking-[0.12em] text-white/50">
          {engineLabel(car)}
        </p>
        <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-white/60">
          {car.signature}
        </p>

        <div className="mt-7 max-w-md">
          <div className="flex items-baseline justify-between font-plate text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span>Rev</span>
            <span className="text-white/70">
              ×{rate.toFixed(2)}
              <span className="pl-2 text-white/30">≈ {estRpm.toLocaleString()} rpm</span>
            </span>
          </div>
          <input
            type="range"
            min={MIN_RATE}
            max={MAX_RATE}
            step={0.01}
            value={rate}
            onChange={(e) => onRate(car, Number(e.target.value))}
            aria-label={`Rev the ${car.make} ${car.model}`}
            className="mt-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20
                       [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-ember [&::-webkit-slider-thumb]:shadow-[0_0_14px_var(--color-ember)]"
          />
          <p className="mt-2 font-sans text-[11px] leading-snug text-white/25">
            Shifts the real recording rather than synthesising one — rpm is an
            estimate from the car&apos;s {car.redline.toLocaleString()} rpm redline.
          </p>
        </div>

        <p className="mt-5 font-sans text-[10px] text-white/25">
          Sound:{" "}
          <a
            href={car.soundCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ember hover:underline"
          >
            {car.soundCredit.name}
          </a>
          <span className="px-1.5 opacity-40">·</span>
          Photo:{" "}
          <a
            href={photo.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ember hover:underline"
          >
            {photo.credit}
          </a>
          {photo.license !== "Editorial" && (
            <span className="pl-1.5 opacity-50">({photo.license})</span>
          )}
        </p>
      </div>
    </section>
  );
}

function SpecTable({ a, b }: { a: Car; b: Car }) {
  const rows: { label: string; a: string; b: string; winner?: "a" | "b" }[] = [
    {
      label: "Layout",
      a: `${a.engine.layout} · ${a.engine.cylinders} cyl`,
      b: `${b.engine.layout} · ${b.engine.cylinders} cyl`,
      winner: a.engine.cylinders === b.engine.cylinders ? undefined : a.engine.cylinders > b.engine.cylinders ? "a" : "b",
    },
    {
      label: "Displacement",
      a: `${a.engine.displacement.toFixed(1)} L`,
      b: `${b.engine.displacement.toFixed(1)} L`,
      winner: a.engine.displacement === b.engine.displacement ? undefined : a.engine.displacement > b.engine.displacement ? "a" : "b",
    },
    { label: "Aspiration", a: a.engine.aspiration, b: b.engine.aspiration },
    {
      label: "Redline",
      a: `${a.redline.toLocaleString()} rpm`,
      b: `${b.redline.toLocaleString()} rpm`,
      winner: a.redline === b.redline ? undefined : a.redline > b.redline ? "a" : "b",
    },
    {
      label: "Power",
      a: `${a.power} hp`,
      b: `${b.power} hp`,
      winner: a.power === b.power ? undefined : a.power > b.power ? "a" : "b",
    },
  ];

  return (
    <section className="px-6 py-16">
      <h3 className="mb-8 text-center font-plate text-[11px] uppercase tracking-[0.25em] text-white/35">
        Why they sound different
      </h3>
      <dl className="mx-auto max-w-3xl">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-white/8 py-4"
          >
            <dd
              className={`text-right font-sans text-lg ${
                row.winner === "a" ? "text-ember" : "text-white/55"
              }`}
            >
              {row.a}
            </dd>
            <dt className="whitespace-nowrap px-4 font-plate text-[10px] uppercase tracking-[0.18em] text-white/30">
              {row.label}
            </dt>
            <dd
              className={`font-sans text-lg ${
                row.winner === "b" ? "text-ember" : "text-white/55"
              }`}
            >
              {row.b}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function MoreMatchups({ current, all }: { current: string[]; all: Car[] }) {
  const picks: [string, string, string][] = [
    ["lexuslfa", "ferrari458", "Two of the highest-revving road engines ever built"],
    ["shelbygt350", "corvette", "Flat-plane vs cross-plane, same country, same decade"],
    ["hellcat", "911gt2rs", "Supercharger whine against turbocharged flat-six"],
    ["huracan", "viper", "Two very different ideas of what a V10 is for"],
    ["maseratigt", "giulia", "The same Ferrari bloodline, two cylinders apart"],
  ];
  const key = current.join();
  const shown = picks.filter(([x, y]) => [x, y].join() !== key && [y, x].join() !== key).slice(0, 3);

  return (
    <section className="border-t border-white/10 px-6 py-14">
      <h3 className="mb-6 text-center font-plate text-[11px] uppercase tracking-[0.25em] text-white/35">
        Try next
      </h3>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {shown.map(([x, y, why]) => {
          const ca = all.find((c) => c.id === x);
          const cb = all.find((c) => c.id === y);
          if (!ca || !cb) return null;
          return (
            <Link
              key={`${x}-${y}`}
              href={comparePath(x, y)}
              className="group rounded-sm border border-white/10 p-5 transition hover:border-ember hover:bg-white/5"
            >
              <p className="font-plate text-xs uppercase leading-snug tracking-wide transition group-hover:text-ember">
                {ca.model} vs {cb.model}
              </p>
              <p className="mt-2 font-sans text-[13px] leading-snug text-white/40">{why}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
