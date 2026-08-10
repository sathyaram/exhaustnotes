"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/assets";
import type { Photo } from "@/lib/cars";

/**
 * Crossfading stack of photos. Every frame is mounted and absolutely stacked;
 * only opacity changes, so the fade never reflows and never shows a gap the
 * way swapping a single <img> src would.
 */
export default function PhotoStack({
  photos,
  active,
  interval = 3400,
  sizes,
  priority,
  imageClassName = "",
  imageStyle,
  showDots = true,
  onIndexChange,
}: {
  photos: Photo[];
  /** Advance only while the card is hovered or sounding. */
  active: boolean;
  interval?: number;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
  /** Per-frame styling (the compare view drives filter/transform from audio). */
  imageStyle?: React.CSSProperties;
  showDots?: boolean;
  onIndexChange?: (i: number) => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  useEffect(() => {
    if (!active || photos.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % photos.length),
      interval,
    );
    return () => clearInterval(id);
  }, [active, photos.length, interval]);

  // Coming back to rest should return to the hero shot, not a random frame.
  useEffect(() => {
    if (!active) {
      const id = setTimeout(() => setIndex(0), 600);
      return () => clearTimeout(id);
    }
  }, [active]);

  return (
    <>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={asset(photo.src)}
          alt=""
          fill
          sizes={sizes}
          priority={priority && i === 0}
          // Only the hero is eager; the rest load when the card first wakes up.
          loading={i === 0 ? undefined : "lazy"}
          className={`object-cover transition-opacity duration-[900ms] ease-in-out ${imageClassName}`}
          style={{ ...imageStyle, opacity: i === index ? 1 : 0 }}
        />
      ))}

      {showDots && photos.length > 1 && (
        <span
          className="absolute bottom-2.5 right-3 z-[4] flex gap-1.5 opacity-0 transition-opacity duration-300
                     group-hover:opacity-100 group-data-[lit=true]:opacity-100"
        >
          {photos.map((photo, i) => (
            <span
              key={photo.src}
              role="button"
              tabIndex={-1}
              aria-hidden
              onClick={(e) => {
                // The whole tile is a play button; don't trigger it from a dot.
                e.stopPropagation();
                e.preventDefault();
                setIndex(i);
              }}
              className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-ember" : "w-1.5 bg-white/45 hover:bg-white"
              }`}
            />
          ))}
        </span>
      )}
    </>
  );
}
