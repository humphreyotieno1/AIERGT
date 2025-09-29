import { HeroSection } from "@/components/sections/landing/hero-section"
import PartnersSection from "@/components/sections/landing/partners-section"
import ServicesSection from "@/components/sections/landing/services-section"
import LeadMagnetSection from "@/components/sections/landing/lead-magnet-section"
import WhyChooseUsSection from "@/components/sections/landing/why-choose-us-section"
import FAQsSection from "@/components/sections/landing/faqs-section"
import BackToTop from "@/components/ui/back-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <LeadMagnetSection />
      <WhyChooseUsSection />
      <FAQsSection />
      {/* <TrustBadgesSection /> */}
      <BackToTop />
    </div>
  )
}