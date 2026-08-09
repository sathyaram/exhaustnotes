import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative px-6 pb-8 pt-20 text-center">
      <h1 className="group inline-block">
        <Link
          href="/"
          className="relative inline-block bg-[linear-gradient(115deg,#3a3a3a_0%,#dedede_28%,#ffffff_42%,#9a9a9a_58%,#e8e8e8_72%,#2f2f2f_100%)]
                     bg-[length:250%_100%] bg-clip-text font-display text-[clamp(3rem,11vw,8rem)] uppercase
                     leading-[0.82] tracking-[-0.03em] text-transparent
                     drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]
                     transition-[transform,letter-spacing,filter,background-position] duration-500 ease-out
                     hover:-skew-x-12 hover:tracking-[0.02em]
                     hover:bg-[position:100%_0]
                     hover:drop-shadow-[0_0_55px_rgba(248,50,50,0.65)]"
        >
          Exhaust Notes
        </Link>
      </h1>

      <p className="mx-auto mt-6 max-w-xl font-sans text-base font-medium leading-relaxed text-white/55">
        Thirty real recordings of specific cars. Not a simulator, not a synthesised
        engine — pick any two and hear{" "}
        <span className="text-white">exactly</span> what a flat-plane crank, a
        supercharger, or nine thousand rpm actually does.
      </p>
    </header>
  );
}
