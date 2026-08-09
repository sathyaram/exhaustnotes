export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto max-w-[1180px] font-sans text-sm leading-relaxed text-white/35">
        <p className="font-plate text-[10px] uppercase tracking-[0.2em] text-white/50">
          On the recordings
        </p>
        <p className="mt-3 max-w-2xl">
          Every clip here is a recording of an actual car, credited to whoever
          captured it — the credit sits on each card and links back to the
          source. Nothing on this site is synthesised. The rev control shifts a
          real recording rather than modelling an engine, which is why a 4.8-litre
          V10 still sounds like one at every point on the dial.
        </p>
        <p className="mt-4 max-w-2xl">
          Sounds gathered from enthusiast channels and used here for
          non-commercial, editorial purposes. If you recorded one of these and
          would like it removed or credited differently, get in touch.
        </p>

        <p className="mt-10 font-plate text-[10px] uppercase tracking-[0.2em] text-white/50">
          On the photography
        </p>
        <p className="mt-3 max-w-2xl">
          Most photographs come from Wikimedia Commons under Creative Commons or
          public-domain licences, and each card names the photographer and the
          licence for the frame currently on screen. Hover a car to cycle through
          the rest.
        </p>

        <p className="mt-8 text-white/20">
          Exhaust Notes — a revival of the 2019 original. Background texture by
          TransparentTextures.
        </p>
      </div>
    </footer>
  );
}
