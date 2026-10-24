import { business } from "@/lib/site-content"

/**
 * Structured data describing only client-verified facts visible on the
 * page: name, services summary, phone, email and service area.
 *
 * Intentionally omitted until confirmed: street address, logo, url,
 * opening hours, ratings, social profiles (sameAs).
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: "Aluminium fabricator serving Nairobi, Kenya.",
    telephone: business.phoneDisplay,
    email: business.email,
    areaServed: {
      "@type": "Place",
      name: "Nairobi, Kenya",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
