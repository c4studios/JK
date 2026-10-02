import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// No metadataBase, canonical or og:url on purpose: this concept must not claim
// the business's own domain. On Vercel, social image URLs resolve against the
// deployment's own production URL.
export const metadata: Metadata = {
  title: {
    default: "JK Plumbing Solutions | Campbelltown Plumber Servicing Sydney",
    template: "%s | JK Plumbing Solutions",
  },
  description:
    "Campbelltown based plumber servicing Sydney. Call JK Plumbing Solutions for blocked drains, leaks, hot water, gas, renovations, new builds and commercial maintenance.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    title: "JK Plumbing Solutions | Campbelltown Plumber Servicing Sydney",
    description:
      "Blocked, leaking, cold or building? Call a licensed Campbelltown plumber for a practical next step.",
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JK Plumbing Solutions",
    description: "Campbelltown based plumber servicing Sydney repairs, maintenance and project work.",
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

// Runs before first paint so the server-rendered intro overlay is only ever
// painted for first-time visitors who want motion. The storage key must match
// INTRO_STORAGE_KEY in components/IntroAnimation.tsx.
const introStateScript = `(function(){var s="boot";try{if(sessionStorage.getItem("jk-plumbing:intro-complete:v1")==="true"||window.matchMedia("(prefers-reduced-motion: reduce)").matches){s="complete"}}catch(e){}document.documentElement.dataset.introState=s})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      // data-intro-state is set before hydration by introStateScript below.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">
        <script dangerouslySetInnerHTML={{ __html: introStateScript }} />
        {children}
      </body>
    </html>
  );
}
