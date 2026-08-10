import type { NextConfig } from "next";

/**
 * Exhaust Notes ships two ways, same as Spring Tuner.
 *
 * Standalone it builds at the root. Embedded it is exported and served from
 * sathyaram.com/exhaustnotes, which means every asset URL has to be prefixed
 * or the page loads and then fetches its chunks from the portfolio root.
 *
 *   npm run build                              # standalone
 *   EMBED_BASE_PATH=/exhaustnotes npm run build  # embedded
 *
 * next/image applies basePath to `src` on its own, but a bare fetch() does
 * not — and the audio engine fetches its clips directly. That's why the prefix
 * is also exposed as NEXT_PUBLIC_BASE_PATH for lib/assets.ts to read.
 */
const basePath = process.env.EMBED_BASE_PATH;

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS with no Node server behind it. Everything here is
  // client-side — the audio engine, the compare stage — so nothing is lost by
  // dropping the server, and the output can live in another site's public dir.
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  images: {
    // next/image's optimiser needs a running server, which an exported build
    // doesn't have. Set regardless of how it's built so the two outputs can't
    // diverge in behaviour.
    unoptimized: true,
  },
};

export default nextConfig;
