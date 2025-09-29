import type { Metadata } from "next"

import { ConsultancyHeroSection } from "@/components/sections/services/consultancy-hero-section"
import { ConsultancyCategoriesGrid } from "@/components/sections/services/consultancy-categories-grid"

export const metadata: Metadata = {
  title: "Consultancy Services | AIERGT",
  description:
    "Explore AIERGT's consultancy clusters spanning environmental assessments, geospatial intelligence, climate strategy, and compliance advisory across Africa.",
  keywords: [
    "AIERGT consultancy",
    "environmental consulting Africa",
    "geospatial services",
    "climate advisory",
    "ESG consulting",
  ],
}

export default function ConsultancyServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <ConsultancyHeroSection />
      <ConsultancyCategoriesGrid />
    </main>
  )
}


