import type { Metadata } from "next"
import { Lightbulb, Workflow, Handshake } from "lucide-react"

import { RedHero } from "@/components/sections/red/red-hero"

const enterpriseHighlights = [
  {
    step: 1,
    title: "Concepts",
    description:
      "For building a company that is going to work for the environment, fabricating your concepts the correct way with the utmost sincerity plays a huge role. Until and unless you are able to understand the cause and the impact of certain environmental issues, you will not be able to build your green brand properly. Here, we assist you in having a clear picture of all these notions, train you with the best feasible methods in overcoming them, and prepare you to implement them efficiently.",
    icon: Lightbulb,
  },
  {
    step: 2,
    title: "Business models",
    description:
      "There are a lot of environmental problems out in the world. You can’t work on all of them at the same time. Hence, you pick your area of interest and we will help you in building a business model around it. With our expertise and your passion, we can create a more sustainable framework to save the ecology and make the world a greener place.",
    icon: Workflow,
  },
  {
    step: 3,
    title: "Funding Agencies and Institutions",
    description:
      "African Institute for Environmental Studies and Geospatial Studies is committed to sustainability and environmental-friendly practice. We eagerly look forward to helping researchers and environmentalists with sourcing for funds for their research.",
    icon: Handshake,
  },
]

const iconCards = [
  {
    icon: Lightbulb,
  },
  {
    icon: Workflow,
  },
  {
    icon: Handshake,
  },
]

export const metadata: Metadata = {
  title: "Enterprise Development | AIERGT",
  description:
    "Move climate-positive ventures from concept to scale with AIERGT guidance on ideation, green business modelling, and funding connections.",
}

export default function EnterpriseDevelopmentPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.18),_transparent_60%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
        <RedHero
          tagLabel="Enterprise Hub"
          tagIcon="layers"
          title="Enterprise Development"
          description="Turn sustainable ideas into investment-ready ventures. AIERGT guides founders through concept validation, resilient business models, and investment pathways tailored to African markets."
          backgroundImages={["/hero/buildings.jpg", "/hero/c2.png", "/hero/lagos.jpg"]}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-[minmax(0,_1fr)_260px]" id="enterprise-actions">
          <div className="space-y-8">
            {enterpriseHighlights.map(({ step, title, description }) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#E3E9F5] bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#71B74F] text-white">
                    <span className="text-sm font-semibold">{step}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="font-garamond text-xl font-semibold text-slate-900">{title}</h2>
                    <p className="text-base text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {iconCards.map(({ icon: Icon }, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center rounded-[24px] border border-[#E3E9F5] bg-white/70 p-10 shadow-sm"
              >
                <Icon className="h-20 w-20 text-[#79BAEC]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
