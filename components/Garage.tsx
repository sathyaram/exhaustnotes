"use client";

import { useMemo, useState } from "react";
import CarCard from "./CarCard";
import { cars, fullName, type Aspiration } from "@/lib/cars";

const ASPIRATIONS: Aspiration[] = ["NA", "Turbo", "Twin-Turbo", "Supercharged"];

const SORTS = {
  curated: { label: "Curated", fn: () => 0 },
  redline: { label: "Redline", fn: (a: typeof cars[0], b: typeof cars[0]) => b.redline - a.redline },
  power: { label: "Power", fn: (a: typeof cars[0], b: typeof cars[0]) => b.power - a.power },
  cylinders: {
    label: "Cylinders",
    fn: (a: typeof cars[0], b: typeof cars[0]) =>
      b.engine.cylinders - a.engine.cylinders || b.engine.displacement - a.engine.displacement,
  },
  year: { label: "Year", fn: (a: typeof cars[0], b: typeof cars[0]) => b.year - a.year },
} as const;

export default function Garage() {
  const [query, setQuery] = useState("");
  const [aspiration, setAspiration] = useState<Aspiration | null>(null);
  const [sort, setSort] = useState<keyof typeof SORTS>("curated");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = cars.filter((car) => {
      if (aspiration && car.engine.aspiration !== aspiration) return false;
      if (!q) return true;
      // One flat haystack keeps "flat plane", "v10" and "9000" all searchable.
      const haystack = [
        fullName(car),
        car.engine.layout,
        car.engine.aspiration,
        `${car.engine.displacement}l`,
        `${car.redline}`,
        ...car.tags,
      ]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });
    return sort === "curated" ? filtered : [...filtered].sort(SORTS[sort].fn);
  }, [query, aspiration, sort]);

  return (
    <>
      <div className="mx-auto mb-14 max-w-2xl">
        <div className="group/search relative">
          <label htmlFor="car-search" className="sr-only">
            Search cars
          </label>
          <input
            id="car-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “v10”, “flat-plane”, “supercharged”, “ferrari”…"
            className="w-full rounded-xl border-b-2 border-ember-dark bg-well px-6 py-5 font-sans text-lg
                       text-white placeholder:text-white/35 shadow-[0_20px_25px_-10px_rgba(0,0,0,0.6)]
                       transition-all duration-300 focus:rounded-none focus:border-ember"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 font-sans text-xs uppercase tracking-wider text-white/40 transition hover:text-ember"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          <Chip active={aspiration === null} onClick={() => setAspiration(null)}>
            All
          </Chip>
          {ASPIRATIONS.map((a) => (
            <Chip key={a} active={aspiration === a} onClick={() => setAspiration(a)}>
              {a === "NA" ? "Naturally aspirated" : a}
            </Chip>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/30">
            Sort
          </span>
          {(Object.keys(SORTS) as (keyof typeof SORTS)[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSort(key)}
              className={`cursor-pointer font-sans text-xs uppercase tracking-wider transition ${
                sort === key ? "text-ember" : "text-white/40 hover:text-white"
              }`}
            >
              {SORTS[key].label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mx-auto max-w-sm py-20 text-center font-display text-2xl text-ember-glow [text-shadow:0_0_15px_var(--color-ember),0_10px_25px_black]">
          Darn, don&apos;t have that one. Check back later to see if we&apos;ve added it.
        </p>
      ) : (
        <div className="spotlight grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {results.map((car, i) => (
            <CarCard key={car.id} car={car} priority={i < 3} />
          ))}
        </div>
      )}
    </>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
        active
          ? "bg-ember text-white shadow-[0_0_20px_rgba(244,39,55,0.5)]"
          : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
