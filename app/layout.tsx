import type { Metadata } from "next";
import { Alfa_Slab_One, Bungee, Rajdhani } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const alfa = Alfa_Slab_One({
  variable: "--font-alfa",
  weight: "400",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Embedded, the site lives at sathyaram.com/exhaustnotes — and the base path
// has to be part of every absolute URL below, not just of metadataBase.
//
// A root-relative "/og-exhaustnotes.png" resolves against the ORIGIN of
// metadataBase, so it came out as sathyaram.com/og-exhaustnotes.png: the
// portfolio's root, where the file isn't, and a 404 for every scraper. The
// favicon had the same shape of bug. Both are spelled out in full below
// instead, which is the only form that survives being served from a sub-path.
const basePath = process.env.EMBED_BASE_PATH ?? "";
const SITE_URL = `https://sathyaram.com${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Exhaust Notes — hear and compare the cars that sound like something",
    template: "%s — Exhaust Notes",
  },
  description:
    "A curated collection of real exhaust recordings. Play any two cars side by side and hear exactly what a flat-plane crank, a supercharger, or 9,000rpm actually does.",
  icons: { icon: `${basePath}/favicon.png` },
  openGraph: {
    title: "Exhaust Notes",
    description:
      "Thirty real exhaust recordings. Play any two cars side by side and hear why they differ — curation, not a simulator.",
    type: "website",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-exhaustnotes.png`, width: 1826, height: 1048 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhaust Notes",
    description:
      "Thirty real exhaust recordings, played side by side. Curation, not a simulator.",
    images: [`${SITE_URL}/og-exhaustnotes.png`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alfa.variable} ${bungee.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
