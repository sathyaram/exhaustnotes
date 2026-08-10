import { Suspense } from "react";
import type { Metadata } from "next";
import CompareRoute from "@/components/CompareRoute";

/**
 * The pair used to live in the path — /compare/lexuslfa-vs-ferrari458 — with
 * six matchups prerendered. That doesn't survive `output: "export"`: a static
 * build can only emit the paths it knows at build time, so any pair a visitor
 * assembled themselves would 404. Enumerating them instead means 30 x 29 = 870
 * HTML files, which is absurd for a page whose only difference is two ids.
 *
 * A query string is one file and any pair works. The cost is per-pair OpenGraph
 * metadata, which static export couldn't have given us either.
 */
export const metadata: Metadata = {
  title: "Compare",
  description:
    "Play two cars side by side and crossfade between them to hear exactly where they differ.",
};

export default function ComparePage() {
  // useSearchParams suspends during prerender; without this boundary the whole
  // route opts out of static generation.
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <CompareRoute />
    </Suspense>
  );
}
