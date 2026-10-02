import type { MetadataRoute } from "next";

// Concept site. Crawlers may fetch pages so they can read the noindex (the
// robots meta tag in layout.tsx and the X-Robots-Tag header in next.config.ts).
// A Disallow here would hide that noindex and leave the URL indexable without
// a snippet. No sitemap and no host: this is not the business's own site and
// must not point crawlers at its domain.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
