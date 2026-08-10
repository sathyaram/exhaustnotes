"use client";

import Image from "next/image";
import Link from "next/link";
import { useCompare } from "./CompareContext";
import { comparePath } from "./CompareRoute";
import { asset } from "@/lib/assets";
import { carById, fullName } from "@/lib/cars";

/**
 * Sticky slate at the bottom of the page. Slides out of view entirely when
 * nothing is picked so it never competes with the grid.
 */
export default function CompareTray() {
  const { selected, toggle, clear, isFull } = useCompare();
  const picks = selected.map((id) => carById(id)).filter(Boolean);
  const open = picks.length > 0;

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-500 ease-out ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-4 px-6 py-4">
          <span className="font-plate text-[10px] uppercase tracking-[0.2em] text-white/35">
            Compare
          </span>

          <div className="flex flex-1 flex-wrap items-center gap-3">
            {picks.map((car) => (
              <button
                key={car!.id}
                type="button"
                onClick={() => toggle(car!.id)}
                title={`Remove ${fullName(car!)}`}
                className="group flex cursor-pointer items-center gap-3 rounded-sm bg-white/5 py-1.5 pl-1.5 pr-3 transition hover:bg-white/10"
              >
                <span className="relative size-10 overflow-hidden rounded-sm">
                  <Image src={asset(car!.image)} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <span className="text-left">
                  <span className="block font-sans text-sm font-semibold leading-tight">
                    {car!.make} {car!.model}
                  </span>
                  <span className="block font-sans text-[11px] leading-tight text-white/40">
                    {car!.engine.layout} · {car!.redline.toLocaleString()} rpm
                  </span>
                </span>
                <span className="ml-1 font-sans text-white/25 transition group-hover:text-ember">
                  ✕
                </span>
              </button>
            ))}

            {!isFull && (
              <span className="font-sans text-sm text-white/35">
                Pick one more car to compare.
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clear}
              className="cursor-pointer font-sans text-xs uppercase tracking-wider text-white/35 transition hover:text-white"
            >
              Clear
            </button>
            <Link
              href={isFull ? comparePath(selected[0], selected[1]) : "#"}
              aria-disabled={!isFull}
              tabIndex={isFull ? 0 : -1}
              className={`rounded-sm px-6 py-3 font-plate text-xs uppercase tracking-wider transition-all duration-300 ${
                isFull
                  ? "bg-ember text-white shadow-[0_0_25px_rgba(244,39,55,0.55)] hover:bg-white hover:text-black"
                  : "pointer-events-none bg-white/10 text-white/30"
              }`}
            >
              Listen side by side
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
