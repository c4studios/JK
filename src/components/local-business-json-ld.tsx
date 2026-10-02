import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    // No url or domain-based @id: this concept must not claim the business's
    // own website.
    "@id": "#business",
    name: site.legalName,
    alternateName: site.name,
    telephone: site.phone.international,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.director,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Campbelltown",
      },
      {
        "@type": "City",
        name: "Sydney",
      },
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ABN",
        value: site.abn,
      },
      {
        "@type": "PropertyValue",
        propertyID: "Plumbing Licence",
        value: site.plumbingLicence,
      },
    ],
    knowsAbout: site.services.map((service) => service.title),
    sameAs: [site.social.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
