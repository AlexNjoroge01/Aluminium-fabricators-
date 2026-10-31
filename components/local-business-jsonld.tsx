import { business, services } from "@/lib/site-content"

/**
 * Structured data describing only client-verified facts visible on the
 * page: name, services summary, phone numbers, email, address and the
 * registration details supplied by the client.
 *
 * Intentionally omitted until confirmed: logo, opening hours, ratings,
 * social profiles (sameAs) and a price range.
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    legalName: business.legalName,
    description:
      "Aluminium, interiors, and light steel fabrication company in Nairobi, Kenya.",
    url: business.siteUrl,
    foundingDate: String(business.foundedYear),
    telephone: business.phoneDisplay,
    email: business.email,
    taxID: business.pinNumber,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Company registration number",
      value: business.registrationNumber,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "GW Cargo, off Old Mombasa Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: {
      "@type": "Place",
      name: "Nairobi, Kenya",
    },
    knowsAbout: services.map((service) => service.title),
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
