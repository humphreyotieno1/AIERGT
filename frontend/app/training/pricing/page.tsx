import type { Metadata } from "next"

import { TrainingBreadcrumbs } from "@/components/sections/training/training-breadcrumbs"
import { PricingPlanCard } from "@/components/sections/training/pricing-plan-card"
import { trainingPricingPlans } from "@/lib/store/training-pricing.store"

export const metadata: Metadata = {
  title: "Training Plans & Pricing",
  description:
    "Compare AIERGT's training plans and choose the package that fits your team's learning goals and deployment needs.",
}

export default function TrainingPricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F4F8FF] to-white pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.2),_transparent_65%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <TrainingBreadcrumbs
          segments={[
            { label: "Training", href: "/training" },
            { label: "Plans & Pricing" },
          ]}
        />

        <header className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/30 bg-[#EAF3FF] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3978C0]">
            Pricing Plan
          </span>
          <h1 className="mt-6 font-garamond text-4xl font-semibold text-slate-900 sm:text-5xl">
            Choose Your Best Plan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Flexible pricing designed for individuals, teams, and enterprises rolling out geospatial and environmental upskilling programmes across Africa.
          </p>
        </header>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trainingPricingPlans.map((plan) => (
            <PricingPlanCard key={plan.slug} plan={plan} />
          ))}
        </div>
      </section>
    </main>
  )
}

