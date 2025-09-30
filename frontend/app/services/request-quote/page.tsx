import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ClipboardSignature, Sparkles } from "lucide-react"

import {
  consultancyServiceCategories,
  getConsultancyServiceCategory,
} from "@/lib/store/consultancy-services.store"
import { RequestQuoteForm } from "@/components/sections/services/request-quote-form"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Request a Consultancy Quote | AIERGT",
  description:
    "Share your project details to receive a tailored consultancy proposal from AIERGT's environmental and geospatial experts.",
}

type RequestQuotePageProps = {
  searchParams: Promise<{
    category?: string
    service?: string
  }>
}

export default async function RequestQuotePage({ searchParams }: RequestQuotePageProps) {
  const { category: categoryQuery, service: serviceQuery } = await searchParams
  const fallbackCategory = consultancyServiceCategories[0]
  const categorySlug = categoryQuery ?? fallbackCategory?.slug
  const category = categorySlug
    ? getConsultancyServiceCategory(categorySlug) ?? fallbackCategory
    : fallbackCategory

  if (!category) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-[#79BAEC]/30 bg-white/90 px-8 py-12 text-center shadow-xl">
          <h1 className="font-garamond text-3xl font-bold text-slate-900">
            Consultancy catalogue coming soon
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            We are populating the consultancy services portfolio. Please check back later or reach us at
            <Link href="mailto:info@aiergt.africa" className="ml-1 text-[#79BAEC] underline">
              info@aiergt.africa
            </Link>
            .
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-[#79BAEC] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#5EA6E5] hover:bg-[#5EA6E5]"
          >
            Explore consultancy categories
          </Link>
        </div>
      </main>
    )
  }

  const serviceId = serviceQuery
  const service = category.services.find((item) => item.id === serviceId)
  const defaultDescription = service
    ? `Project: ${service.name}\nScope overview:`
    : undefined
  const categoryDescription = category.description ?? category.summary

  return (
    <main className="relative min-h-screen overflow-hidden pb-20">
      <section className="relative isolate min-h-[200px] pb-12 pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#79BAEC33] via-white/70 to-white" />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 text-center">
            <Link
              href={`/services/${category.slug}`}
              className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#79BAEC]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#79BAEC] shadow-sm transition hover:border-[#79BAEC]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to consultancy services
            </Link>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#79BAEC] shadow-sm">
                <ClipboardSignature className="h-4 w-4" /> Request a Quote
              </span>
              <h1 className="font-garamond text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl drop-shadow-md">
                Scope your {category.name.toLowerCase()} engagement
              </h1>
              <p className="max-w-2xl text-sm text-slate-700 sm:text-base drop-shadow">
                Provide a concise brief, attach any supporting documents, and our consultants will respond within two working days with a tailored proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-12 grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr,0.9fr] lg:px-10">
        <RequestQuoteForm
          categoryName={category.name}
          defaultDescription={defaultDescription}
        />

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[#79BAEC]/35 bg-white/90 p-6 shadow-xl">
            <h2 className="font-garamond text-xl font-semibold text-slate-900">
              Included in {category.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {categoryDescription}
            </p>
            <div className="mt-4 rounded-2xl border border-[#79BAEC]/20 bg-[#F7FBFF] p-4 text-sm text-slate-600">
              <p className="font-semibold text-[#79BAEC]">Popular services in this category:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {category.services.slice(0, 3).map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#79BAEC]/25 p-6 shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#79BAEC]">
              Need additional support?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Request a discovery call to align expectations and co-design delivery.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Call
                <Link href="tel:+254720470545" className="ml-1 text-[#79BAEC] underline">
                  +254720470545
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Ask about retainers for ongoing compliance monitoring or embedded teams.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#79BAEC]" />
                Prefer email? Write to
                <Link href="mailto:info@aiergt.africa" className="ml-1 text-[#79BAEC] underline">
                  info@aiergt.africa
                </Link>
                with your brief.
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}
