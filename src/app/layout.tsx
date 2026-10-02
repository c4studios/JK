import type { Metadata, Viewport } from "next";
import { Holtwood_One_SC, League_Gothic, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Wood type: League Gothic (an Alternate Gothic revival) with its width axis,
// so long lines can swap to condensed type on narrow screens.
const gothic = League_Gothic({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-gothic",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});

// Section heads and labels only, all below the first screen: no preload.
const woodSlab = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-wood-slab",
  display: "swap",
  preload: false,
});

const text = Zilla_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

// The direction this build answers to (impeccable method). Kept as an HTML
// comment in the shipped markup so the finish review can audit against it.
const directionContract = `<!--
THESIS: A local plumber's broadside. Wood type names the problem and the number is the one red pass; it refuses the photo hero and service-card plumber template.
OWN-WORLD: Poster stock, black and JK-blue wood type, red kept for calls. League Gothic set to the full measure, Holtwood slab bands, Zilla Slab text, ruled modules, speckled ink, real photos printed in one ink, a yellow letterbox handbill with tear-off tabs.
STORY: Someone with water where it shouldn't be sees their problem named and taps the red band to call. Someone planning work checks what JK does and the real jobs, then sends a handbill.
FIRST VIEWPORT: Masthead with logo, nav and red call block. BLOCKED? LEAKING? in black and NO HOT WATER? GAS? in blue, each filling the measure. The full-width red band CALL 0447 798 126 is the primary action. Licence and ABN beneath.
FORM: Letterpress trade poster, the dealt Hatch Show Print challenger, chosen by Caleb from code-built previews. Seed 09963434.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

// No metadataBase, canonical or og:url on purpose: this concept must not claim
// the business's own domain. On Vercel, social image URLs resolve against the
// deployment's own production URL.
export const metadata: Metadata = {
  title: {
    default: "JK Plumbing Solutions | Licensed plumber, Campbelltown",
    template: "%s | JK Plumbing Solutions",
  },
  description:
    "Blocked, leaking, no hot water or gas work? JK Plumbing Solutions is a licensed plumber based in Campbelltown, working across Macarthur and Sydney. Call 0447 798 126.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    title: "JK Plumbing Solutions | Licensed plumber, Campbelltown",
    description: "Blocked? Leaking? No hot water? Gas? Call 0447 798 126.",
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Plumbing Solutions",
    description: "Licensed plumber based in Campbelltown, working across Macarthur and Sydney.",
  },
  // Concept site: never indexed. next.config.ts sends the matching
  // X-Robots-Tag header on every response.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ebe4d3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${gothic.variable} ${woodSlab.variable} ${text.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
