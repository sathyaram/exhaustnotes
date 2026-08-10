"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import CompareStage from "./CompareStage";
import { carById, cars, fullName } from "@/lib/cars";

/** /compare?a=lexuslfa&b=ferrari458 */
export function comparePath(aId: string, bId: string) {
  return `/compare?a=${encodeURIComponent(aId)}&b=${encodeURIComponent(bId)}`;
}

export default function CompareRoute() {
  const params = useSearchParams();
  const aId = params.get("a") ?? "";
  const bId = params.get("b") ?? "";

  // Swapping is local state rather than a navigation. Routing would remount
  // CompareStage, whose cleanup stops playback — so the sound would cut out
  // every time you flipped the sides, which is exactly when you least want it.
  //
  // The flip is stored against the pair it belongs to, so landing on a new pair
  // starts unflipped without an effect having to reset it.
  const pairKey = `${aId}|${bId}`;
  const [flip, setFlip] = useState({ pairKey, on: false });
  const flipped = flip.pairKey === pairKey && flip.on;

  const swap = useCallback(() => {
    const next = !flipped;
    const [x, y] = next ? [bId, aId] : [aId, bId];
    // Keep the URL honest without going through the router.
    window.history.replaceState(null, "", comparePath(x, y));
    setFlip({ pairKey, on: next });
  }, [flipped, aId, bId, pairKey]);

  const first = carById(flipped ? bId : aId);
  const second = carById(flipped ? aId : bId);

  if (!first || !second || first.id === second.id) {
    return <NotAPair aId={aId} bId={bId} />;
  }

  return <CompareStage a={first} b={second} all={cars} onSwap={swap} />;
}

function NotAPair({ aId, bId }: { aId: string; bId: string }) {
  const known = carById(aId) ?? carById(bId);
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-plate text-[11px] uppercase tracking-[0.25em] text-ember">
        Nothing to compare
      </p>
      <h1 className="mt-4 font-display text-3xl leading-tight">
        {aId || bId
          ? "That pairing doesn’t exist."
          : "Pick two cars to compare."}
      </h1>
      <p className="mt-4 font-sans text-white/45">
        {known
          ? `We have the ${fullName(known)}, but not whatever it was meant to sit next to.`
          : "Choose any two cars from the garage and they’ll play side by side."}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-ember px-6 py-3 font-plate text-xs uppercase tracking-wider transition hover:bg-white hover:text-black"
      >
        Back to the garage
      </Link>
    </main>
  );
}
