import type { Metadata } from "next"
import Link from "next/link"

import { RedHero } from "@/components/sections/red/red-hero"
import { TrainingBreadcrumbs } from "@/components/sections/training/training-breadcrumbs"
import { getTrainingCategorySummaries } from "@/lib/store/training-courses.store"

const categorySummaries = getTrainingCategorySummaries()
const trainingTabs = [
  { label: "Programmes", href: "#catalogue" },
  { label: "Plans & Pricing", href: "/training/pricing" },
]

export const metadata: Metadata = {
  title: "AIERGT Training Programmes",
  description:
    "Upskill your teams with AIERGT's live online courses, certificate programmes, and accredited university degrees in geospatial intelligence and environmental governance.",
}

export default function TrainingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F3F7FF] to-white pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.22),_transparent_65%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <TrainingBreadcrumbs segments={[{ label: "Training" }]} />

        <div className="mt-10">
          <RedHero
            tagLabel="Capability Building"
            tagIcon="graduationCap"
            title="Training & Talent Development"
            description="Modular courses, diploma pathways, and university-backed degrees empowering climate and infrastructure teams across Africa."
            backgroundImages={["/hero/lagos.jpg", "/hero/buildings.jpg", "/hero/forest.jpg"]}
            primaryAction={{ label: "Explore training catalogue", href: "#catalogue", icon: "arrowRight" }}
            secondaryAction={{ label: "Talk to our academic advisors", href: "mailto:training@aiergt.africa", icon: "arrowRight" }}
          />
        </div>

        <nav
          aria-label="Training sections"
          className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#E3E9F5] bg-white/70 px-2 py-2 shadow-lg shadow-slate-200/30"
        >
          {trainingTabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                tab.href === "#catalogue"
                  ? "bg-[#79BAEC] text-white shadow-md"
                  : "text-[#24527E] hover:bg-[#EAF3FF]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        <section id="catalogue" className="relative mt-20 space-y-8 rounded-[32px] border border-[#E3E9F5] bg-white/90 p-10 shadow-xl shadow-slate-200/30">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/30 bg-[#EAF3FF] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3978C0]">
              Programmes
            </span>
            <div className="space-y-2">
              <h2 className="font-garamond text-3xl font-semibold text-slate-900 sm:text-4xl">
                Choose a pathway that meets your team&apos;s learning goals
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                Every track blends live mentorship, case-based assignments, and access to proprietary sector datasets. Select a level to explore detailed course outlines.
              </p>
            </div>
          </header>

          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categorySummaries.map((category, index) => (
              <li
                key={category.slug}
                className="group relative flex flex-col gap-4 rounded-2xl border border-[#E3E9F5] bg-white/95 p-6 shadow-lg shadow-slate-200/20 transition hover:-translate-y-1 hover:border-[#79BAEC]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-20 items-center justify-center rounded-full bg-[#79BAEC] text-lg font-semibold text-white shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">{category.subtitle}</h3>
                    <p className="text-md text-slate-600">
                      {category.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <Link
                    href={`/training/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3978C0] transition hover:text-[#24527E]"
                  >
                    View courses
                    <span aria-hidden="true" className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </main>
  )
}

