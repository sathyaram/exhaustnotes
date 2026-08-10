/**
 * Prefix a public/ path with the deploy's base path.
 *
 * Everything that loads a file by URL needs this. next/image only rewrites
 * `src` when its optimiser is in play — under `unoptimized: true`, which a
 * static export requires, the path is passed through untouched. fetch() never
 * gets any help. So both the <Image> srcs and the audio engine's clip fetches
 * go through here, or they 404 when served from sathyaram.com/exhaustnotes
 * instead of the root.
 *
 * Apply it at the point of render, once — double-prefixing is the failure mode
 * to watch for, not a missing prefix, which is at least loud.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  path.startsWith("/") ? `${BASE}${path}` : path;
