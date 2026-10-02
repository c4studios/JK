import type { NextConfig } from "next";

// This is a C4 Studios concept for JK Plumbing Solutions. It must never be
// indexed or pass itself off as the business's own site, so every response
// (pages, images and anything else in public/) carries a noindex header on top
// of the robots meta tag set in the root layout.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
