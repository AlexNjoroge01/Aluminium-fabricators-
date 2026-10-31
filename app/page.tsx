import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { HeroSection } from "@/components/hero-section"
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ValueTicker } from "@/components/value-ticker"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhyChooseUsSection } from "@/components/why-choose-us"
import { WorkGallery } from "@/components/work-gallery"

export default function Page() {
  return (
    <>
      <LocalBusinessJsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <ValueTicker />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <WorkGallery />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
