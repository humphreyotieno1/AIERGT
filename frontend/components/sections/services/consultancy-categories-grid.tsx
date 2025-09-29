"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Trees,
  Users,
  Activity,
  Building2,
  Waves,
  ShieldCheck,
  BriefcaseBusiness,
  SunMedium,
  Stamp,
} from "lucide-react"

import { getConsultancyServiceCategorySummaries } from "@/lib/store/consultancy-services.store"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  environmental: Trees,
  geospatial: Globe2,
  social: Users,
  monitoring: Activity,
  planning: Building2,
  modelling: Waves,
  management: ShieldCheck,
  security: ShieldCheck,
  consultancy: BriefcaseBusiness,
  climate: SunMedium,
  certifications: Stamp,
}

export function ConsultancyCategoriesGrid() {
  const categories = getConsultancyServiceCategorySummaries()
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0]?.slug ?? null)

  const handleToggle = (slug: string) => {
    setActiveCategory((current) => (current === slug ? null : slug))
  }

  return (
    <section
      id="consultancy-categories"
      className="relative z-10 mt-20 mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8"
    >
      <div className="space-y-4">
        {categories.map((category) => {
          const isActive = activeCategory === category.slug
          const Icon = categoryIcons[category.slug]

          return (
            <div
              key={category.slug}
              className="overflow-hidden rounded-3xl border border-white/30 bg-white/90 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => handleToggle(category.slug)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isActive}
                aria-controls={`${category.slug}-panel`}
              >
                <div className="flex items-start gap-4 text-left">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#79BAEC]/10">
                    <Icon className="h-5 w-5 text-[#79BAEC]" />
                  </span>
                  <div className="space-y-1">
                    <h2 className="font-garamond text-xl font-semibold text-slate-900">
                      {category.name}
                    </h2>
                    <p className="text-md text-black">
                      {category.summary}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#79BAEC] transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`${category.slug}-panel`}
                className={`grid gap-6 border-t border-[#79BAEC]/15 px-6 pb-6 transition-all duration-300 ease-in-out ${
                  isActive ? "grid-rows-[1fr] pt-6" : "grid-rows-[0fr] pt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),minmax(0,0.85fr)] lg:items-center">
                    <div className="space-y-4">
                      <p className="text-md text-black max-w-xl">
                        {category.description}
                      </p>
                      <Link
                        href={`/services/${category.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-white px-4 py-2 text-md font-semibold text-[#79BAEC] transition hover:border-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
                      >
                        View services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-[#79BAEC]/20 bg-[#F0F7FE]">
                      <Image
                        src={category.heroImage}
                        alt={`${category.name} illustration`}
                        width={720}
                        height={420}
                        className="h-44 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
