"use client";

import { useMemo, useState } from "react";
import PhotoStack from "./PhotoStack";
import { useAudio, useVoiceMeter } from "./AudioEngine";
import { useCompare } from "./CompareContext";
import { engineLabel, photosFor, type Car } from "@/lib/cars";

export default function CarCard({ car, priority }: { car: Car; priority?: boolean }) {
  const { solo, stop, playing, loading, preload } = useAudio();
  const { selected, toggle } = useCompare();

  const isPlaying = !!playing[car.id];
  const isLoading = !!loading[car.id];
  const isSelected = selected.includes(car.id);
  const { progress, level } = useVoiceMeter(car.id, isPlaying);

  const photos = useMemo(() => photosFor(car), [car]);
  const [hovered, setHovered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = photos[photoIndex] ?? photos[0];

  const togglePlay = () => {
    if (isPlaying) stop(car.id);
    else void solo(car.id, car.sound);
  };

  return (
    <article
      data-lit={isPlaying}
      onMouseEnter={() => {
        setHovered(true);
        preload(car.sound);
      }}
      onMouseLeave={() => setHovered(false)}
      className="spot group relative hover:z-30 data-[lit=true]:z-30"
    >
      <button
        type="button"
        onClick={togglePlay}
        aria-label={`${isPlaying ? "Stop" : "Play"} the ${car.year} ${car.make} ${car.model}`}
        className="corner-draw relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-well
                   transition-[transform,box-shadow] duration-300 ease-out
                   group-hover:scale-[1.04] group-data-[lit=true]:scale-[1.02]
                   group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        <PhotoStack
          photos={photos}
          active={hovered || isPlaying}
          priority={priority}
          sizes="(max-width: 680px) 100vw, (max-width: 1250px) 50vw, 33vw"
          onIndexChange={setPhotoIndex}
          imageClassName="grayscale-[0.3] saturate-75 group-hover:grayscale-0 group-hover:saturate-100
                          group-data-[lit=true]:grayscale-0 group-data-[lit=true]:saturate-100"
        />
        <span className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/85 via-black/20 to-black/35 transition-opacity duration-300 group-hover:opacity-65" />

        {/* Playhead — a hairline that sweeps the top edge while looping. */}
        <span className="absolute inset-x-0 top-0 z-[4] h-[3px] bg-white/10">
          <span
            className="block h-full bg-ember shadow-[0_0_12px_var(--color-ember)]"
            style={{ width: isPlaying ? `${progress * 100}%` : "0%" }}
          />
        </span>

        <span
          className="pointer-events-none absolute inset-0 z-[4] grid place-items-center transition-opacity duration-300
                     opacity-0 group-hover:opacity-100 group-data-[lit=true]:opacity-100"
        >
          {isLoading ? (
            <span className="size-12 animate-spin rounded-full border-2 border-white/25 border-t-ember" />
          ) : isPlaying ? (
            <Equalizer level={level} />
          ) : (
            <span className="grid size-14 place-items-center rounded-full bg-black/55 ring-1 ring-white/30 backdrop-blur-sm transition group-hover:bg-ember group-hover:ring-ember">
              <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          )}
        </span>

        <span className="absolute bottom-2 left-3 z-[4] font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
          {engineLabel(car)}
        </span>
      </button>

      {/* Compare toggle — the one action that isn't "play". */}
      <button
        type="button"
        onClick={() => toggle(car.id)}
        aria-pressed={isSelected}
        className={`absolute right-2 top-2 z-[5] cursor-pointer rounded-sm px-2.5 py-1.5 font-plate text-[10px] uppercase tracking-wider backdrop-blur-sm transition-all duration-300
          ${
            isSelected
              ? "bg-ember text-white opacity-100 shadow-[0_0_20px_rgba(244,39,55,0.7)]"
              : "bg-black/60 text-white/80 opacity-0 hover:bg-white hover:text-black group-hover:opacity-100 focus-visible:opacity-100"
          }`}
      >
        {isSelected ? "✓ Comparing" : "Compare"}
      </button>

      <div className="relative pt-4">
        <p
          className="font-plate text-[13px] leading-none text-white/70 transition-all duration-500
                     border-l-4 border-ember py-1 pl-3
                     opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                     group-data-[lit=true]:opacity-100 group-data-[lit=true]:translate-y-0"
        >
          {car.year}
        </p>

        <h3 className="mt-2 w-fit border-y border-white/70 py-0.5 font-plate text-lg uppercase leading-none">
          {car.make}
        </h3>

        <p className="mt-1 font-display text-2xl leading-tight">{car.model}</p>

        {car.trim && (
          <p
            className="mt-1 font-display text-base text-ember transition-all duration-500
                       group-hover:skew-x-[-12deg] group-hover:text-white
                       group-hover:[text-shadow:0_0_15px_var(--color-ember),0_0_35px_var(--color-ember)]"
          >
            {car.trim}
          </p>
        )}

        <p className="mt-2 max-w-[38ch] font-sans text-sm leading-snug text-white/45">
          {car.signature}
        </p>

        <p className="mt-2 font-sans text-[10px] text-white/25 transition-opacity duration-300 group-hover:text-white/45">
          <span className="font-semibold">Sound: </span>
          <a
            href={car.soundCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ember hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {car.soundCredit.name}
          </a>
          <span className="px-1.5 opacity-40">·</span>
          <span className="font-semibold">Photo: </span>
          <a
            href={photo.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ember hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {photo.credit}
          </a>
          {photo.license !== "Editorial" && (
            <span className="pl-1.5 opacity-50">({photo.license})</span>
          )}
        </p>
      </div>
    </article>
  );
}

/** Five bars driven by the analyser's RMS, each offset so it reads as motion. */
function Equalizer({ level }: { level: number }) {
  return (
    <span className="flex h-14 items-end gap-1.5">
      {[0.55, 0.85, 1, 0.75, 0.45].map((weight, i) => (
        <span
          key={i}
          className="w-1.5 rounded-full bg-ember shadow-[0_0_12px_var(--color-ember)] transition-[height] duration-75 ease-out"
          style={{ height: `${Math.max(6, level * weight * 150)}%` }}
        />
      ))}
    </span>
  );
}
