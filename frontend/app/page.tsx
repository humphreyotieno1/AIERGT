import { HeroSection } from "@/components/sections/landing/HeroSection"
import { TrustBadgesSection } from "@/components/sections/landing/TrustBadgesSection"
import PartnersSection from "@/components/sections/landing/PartnersSection"
import ServicesSection from "@/components/sections/landing/ServicesSection"
import LeadMagnetSection from "@/components/sections/landing/LeadMagnetSection"
import WhyChooseUsSection from "@/components/sections/landing/WhyChooseUsSection"
import FAQsSection from "@/components/sections/landing/FAQsSection"
import BackToTop from "@/components/ui/BackToTop"

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