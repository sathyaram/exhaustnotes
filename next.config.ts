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
 * Next prefixes its own chunks from basePath, but nothing prefixes a path we
 * write ourselves: fetch() never does, and next/image only does it via its
 * optimiser, which `unoptimized: true` turns off. Both the clip fetches and the
 * <Image> srcs go through lib/assets.ts, which reads NEXT_PUBLIC_BASE_PATH.
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
