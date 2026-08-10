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

// Embedded, the site lives at sathyaram.com/exhaustnotes; this is what makes
// the OpenGraph image URL absolute rather than relative to localhost.
const SITE_URL = "https://sathyaram.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Exhaust Notes — hear and compare the cars that sound like something",
    template: "%s — Exhaust Notes",
  },
  description:
    "A curated collection of real exhaust recordings. Play any two cars side by side and hear exactly what a flat-plane crank, a supercharger, or 9,000rpm actually does.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Exhaust Notes",
    description:
      "Thirty real exhaust recordings. Play any two cars side by side and hear why they differ — curation, not a simulator.",
    type: "website",
    images: [{ url: "/og-exhaustnotes.png", width: 1826, height: 1048 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhaust Notes",
    description:
      "Thirty real exhaust recordings, played side by side. Curation, not a simulator.",
    images: ["/og-exhaustnotes.png"],
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
