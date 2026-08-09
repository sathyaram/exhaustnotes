import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CompareStage from "@/components/CompareStage";
import { carById, cars, fullName } from "@/lib/cars";

/** URLs look like /compare/lexuslfa-vs-ferrari458 so a comparison is shareable. */
function parsePair(pair: string) {
  const [aId, bId] = decodeURIComponent(pair).split("-vs-");
  const a = aId ? carById(aId) : undefined;
  const b = bId ? carById(bId) : undefined;
  return a && b && a.id !== b.id ? { a, b } : null;
}

export async function generateMetadata({
  params,
}: PageProps<"/compare/[pair]">): Promise<Metadata> {
  const { pair } = await params;
  const match = parsePair(pair);
  if (!match) return { title: "Comparison not found" };
  // The root layout appends " — Exhaust Notes" via its title template.
  const title = `${fullName(match.a)} vs ${fullName(match.b)}`;
  const description = `Hear the ${match.a.make} ${match.a.model} and the ${match.b.make} ${match.b.model} side by side, and crossfade between them.`;
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

/** Pre-render a handful of the most interesting matchups. */
export function generateStaticParams() {
  const featured = [
    ["lexuslfa", "ferrari458"],
    ["lexuslfa", "viper"],
    ["shelbygt350", "corvette"],
    ["hellcat", "911gt2rs"],
    ["huracan", "audir8"],
    ["maseratigt", "giulia"],
  ];
  return featured
    .filter(([a, b]) => carById(a) && carById(b))
    .map(([a, b]) => ({ pair: `${a}-vs-${b}` }));
}

export default async function ComparePage({ params }: PageProps<"/compare/[pair]">) {
  const { pair } = await params;
  const match = parsePair(pair);
  if (!match) notFound();

  return <CompareStage a={match.a} b={match.b} all={cars} />;
}
