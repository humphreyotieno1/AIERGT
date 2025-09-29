import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, FileText } from "lucide-react"

import {
  getConsultancyServiceCategory,
  consultancyServiceCategories,
} from "@/lib/store/consultancy-services.store"
import { CategoryHero } from "@/components/sections/services/category-hero"

type ServiceCategoryPageProps = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: ServiceCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getConsultancyServiceCategory(categorySlug)
  if (!category) {
    return {}
  }

  return {
    title: `${category.name} Consultancy | AIERGT`,
    description: category.summary,
  }
}

export function generateStaticParams() {
  return consultancyServiceCategories.map((category) => ({
    category: category.slug,
  }))
}

export default async function ServiceCategoryPage({ params }: ServiceCategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getConsultancyServiceCategory(categorySlug)

  if (!category) {
    notFound()
  }

  const siblingCategories = consultancyServiceCategories.filter(
    (item) => item.slug !== category.slug,
  )

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <CategoryHero
        backHref="/services"
        backLabel={
          <>
            <ArrowLeft className="h-3.5 w-3.5" /> Back to consultancy services
          </>
        }
        title={category.name}
        description={category.description ?? category.summary}
        backgroundImages={[category.heroImage, "/hero/c1.png"]}
      />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.66fr,0.34fr]">
          <div className="space-y-6">
            {category.services.map((service) => (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/95 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#79BAEC]/7 via-transparent to-white" />
                <div className="relative grid gap-6 lg:grid-cols-[1fr,1.1fr] lg:items-center">
                  <div className="space-y-4">
                    <h2 className="font-garamond text-2xl font-semibold text-slate-900">
                      {service.name}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/request-quote?category=${category.slug}&service=${service.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-white px-4 py-2 text-sm font-semibold text-[#79BAEC] transition hover:border-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
                    >
                      Request quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-[#79BAEC]/25 bg-[#F5F9FF] shadow-md">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={720}
                      height={420}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[#79BAEC]/30 bg-white/95 p-6 shadow-lg">
              <h3 className="font-garamond text-xl font-semibold text-slate-900">
                Need supporting documents?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We can supply TOR drafts, inspection checklists, and participation frameworks tailored to your procurement requirements.
              </p>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#79BAEC]/20 bg-[#F7FBFF] px-4 py-3 text-sm text-slate-600">
                <FileText className="h-4 w-4 text-[#79BAEC]" />
                <span>Fast turnaround on proposal packs</span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#79BAEC]/40 bg-white/80 p-6 shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#79BAEC]">
                Explore other categories
              </h3>
              <ul className="mt-4 space-y-3">
                {siblingCategories.slice(0, 10).map((sibling) => (
                  <li key={sibling.slug}>
                    <Link
                      href={`/services/${sibling.slug}`}
                      className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-[#79BAEC]/40 hover:bg-[#F7FBFF] hover:text-[#79BAEC]"
                    >
                      {sibling.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.66fr,0.34fr]">
          <div className="rounded-3xl border border-[#79BAEC]/35 bg-white/95 p-8 shadow-xl">
            <h2 className="font-garamond text-2xl font-semibold text-slate-900">
              Ready to scope your {category.name.toLowerCase()} engagement?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Our consultants respond within two working days with a tailored proposal covering scope, timelines, and indicative budgets. Share your materials and we will fast-track the review.
            </p>
            <Link
              href={`/services/request-quote?category=${category.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-[#79BAEC] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#5EA6E5] hover:bg-[#5EA6E5]"
            >
              Go to request form
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-[#79BAEC]/25 bg-[#F4F8FE] p-6 shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#79BAEC]">
              Helpful tips
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Attach TORs, feasibility studies, or baseline data for faster turnaround.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Indicate any regulatory submission deadlines and stakeholder requirements.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Let us know the preferred engagement model (full delivery, advisory, or embedded teams).
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}


