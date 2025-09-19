import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection"
import PartnersSection from "@/components/sections/PartnersSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <TrustBadgesSection />
      
    </div>
  )
}