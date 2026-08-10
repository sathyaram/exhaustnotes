/**
 * Prefix a public/ path with the deploy's base path.
 *
 * next/image does this to `src` automatically, so images don't need it. A bare
 * fetch() doesn't — and the audio engine fetches clips itself — so anything
 * loaded that way has to go through here or it will 404 when the app is served
 * from sathyaram.com/exhaustnotes rather than the root.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  path.startsWith("/") ? `${BASE}${path}` : path;
