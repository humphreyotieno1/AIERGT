import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBadgesSection />
    </div>
  )
}