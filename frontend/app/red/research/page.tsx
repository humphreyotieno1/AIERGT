import type { Metadata } from "next"
import { Megaphone, ScrollText, FileText, Building } from "lucide-react"
import { RedHero } from "@/components/sections/red/red-hero"

type ResearchHighlight = {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  accent: string
}

const researchHighlights: ResearchHighlight[] = [
  {
    title: "Call for Proposal",
    description:
      "Get a research stamp on your hard work and knowledge of the environment and geospatial with the African Institute for Environmental and Geospatial Research. We are on a constant hunt for bright contributors in the field and looking forward to hearing from you.",
    icon: Megaphone,
    accent: "bg-[#E5F2FF] text-[#1D6FB6]",
  },
  {
    title: "Call for papers",
    description:
      "We are constantly looking for the latest research in the field of environment and geospatial and would be delighted to publish your studies. We value every contribution towards the direction of a better planet, hence collectively requesting to submit your work.",
    icon: ScrollText,
    accent: "bg-[#FFE9DA] text-[#D37336]",
  },
  {
    title: "Abstracts",
    description:
      "You can send us a concise summary of your research paper or entire thesis. It should be your original work.",
    icon: FileText,
    accent: "bg-[#FFE6D6] text-[#D0611E]",
  },
  {
    title: "Funding Agencies, and Institutions",
    description:
      "African Institute for Environmental and Geospatial Studies is committed to sustainability and environmental-friendly practice. We eagerly look forward to helping researchers and environmentalists with sourcing for funds for their research.",
    icon: Building,
    accent: "bg-[#E6F4ED] text-[#2E7D4C]",
  },
]

export const metadata: Metadata = {
  title: "Research Programmes | AIERGT",
  description:
    "Explore AIERGT research calls, abstracts, and funding pathways supporting environmental and geospatial scholarship across Africa.",
}

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.18),_transparent_60%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
        <RedHero
          tagLabel="Research Hub"
          tagIcon="layers"
          title="Research"
          description="Partner with AIERGT to advance environmental and geospatial intelligence. Respond to open calls, share your findings, and unlock funding for transformative research."
          backgroundImages={["/hero/forest.jpg", "/hero/c1.png", "/hero/cape-town.jpg"]}
        />

        <div
          className="mt-16 grid gap-8 md:grid-cols-2"
          id="research-actions"
        >
          {researchHighlights.map(({ title, description, icon: Icon, accent }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-[22px] border border-[#E3E9F5] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`${accent} mb-6 flex h-12 w-12 items-center justify-center rounded-full text-lg`}> 
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="font-garamond text-xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
