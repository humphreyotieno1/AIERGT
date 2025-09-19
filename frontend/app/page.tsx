import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection"
import PartnersSection from "@/components/sections/PartnersSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <WhyChooseUsSection />
      {/* <TrustBadgesSection /> */}
      
    </div>
  )
}