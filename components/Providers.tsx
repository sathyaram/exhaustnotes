"use client";

import { AudioProvider } from "./AudioEngine";
import { CompareProvider } from "./CompareContext";

/**
 * Both providers live in the root layout, not in a page. That's deliberate:
 * App Router keeps the layout mounted across client navigations, so the
 * AudioContext survives a jump to /compare and the sound never cuts out.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AudioProvider>
      <CompareProvider>{children}</CompareProvider>
    </AudioProvider>
  );
}
