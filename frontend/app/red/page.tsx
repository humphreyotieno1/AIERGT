import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Beaker, Building2 } from "lucide-react"

import { RedHero } from "@/components/sections/red/red-hero"

const overviewSections = [
  {
    slug: "research",
    title: "Research Programmes",
    summary:
      "Calls for proposals, papers, abstracts, and funding support that accelerate environmental and geospatial scholarship across Africa.",
    icon: Beaker,
    accent: "from-[#79BAEC]/20 to-white",
  },
  {
    slug: "enterprise",
    title: "Enterprise Development",
    summary:
      "Concept incubation, green business modelling, and funding enablement that help climate-positive ventures scale responsibly.",
    icon: Building2,
    accent: "from-[#5EA6E5]/20 to-white",
  },
]

export const metadata: Metadata = {
  title: "Research & Enterprise Development | AIERGT",
  description:
    "Discover AIERGT's hubs for research collaboration and enterprise development. Explore programmes, calls, and resources that unlock sustainable innovation.",
}

export default function ResearchEnterpriseDevelopmentPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.18),_transparent_55%)]" />

      <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <RedHero
          tagLabel="RED Hub"
          tagIcon="layers"
          title="Research & Enterprise Development"
          description="AIERGT’s RED Hub connects researchers, practitioners, and entrepreneurs working on environmental and geospatial solutions. Navigate our research programmes or build resilient ventures with enterprise development support."
          backgroundImages={["/hero/lagos.jpg", "/hero/kenya.jpg", "/hero/dakar.jpg"]}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <article className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/95 p-10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#79BAEC]/10 via-transparent to-white" />
            <div className="relative flex flex-col gap-6">
              <h2 className="font-garamond text-3xl font-semibold text-slate-900">
                A single gateway for climate intelligence
              </h2>
              <p className="text-base text-slate-600">
                From scholarly outputs to market-ready enterprises, RED harmonises AIERGT’s support into one journey. Start by exploring the dedicated spaces for research collaborations and enterprise acceleration.
              </p>
              <div className="grid gap-4 text-base text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#79BAEC]/25 bg-[#F7FBFF] p-5 shadow-sm">
                  <p className="font-semibold text-[#79BAEC]">Collaborative networks</p>
                  <p className="mt-1 text-slate-500">Meet academics, practitioners, and investors shaping resilient futures.</p>
                </div>
                <div className="rounded-2xl border border-[#79BAEC]/25 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-[#79BAEC]">Tailored toolkits</p>
                  <p className="mt-1 text-slate-500">Access templates, guidance, and funding pathways aligned to African contexts.</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-6">
            {overviewSections.map(({ slug, title, summary, icon: Icon, accent }) => (
              <Link
                key={slug}
                href={`/red/${slug}`}
                className="group relative block overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-inner">
                    <Icon className="h-6 w-6 text-[#79BAEC]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-garamond text-2xl font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-base text-slate-600">{summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#79BAEC]">
                      Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  )
}
