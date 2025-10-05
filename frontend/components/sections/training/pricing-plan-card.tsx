import { Check, X } from "lucide-react"

import type { PricingPlan } from "@/lib/store/training-pricing.store"

type PricingPlanCardProps = {
  plan: PricingPlan
}

export function PricingPlanCard({ plan }: PricingPlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[28px] border border-[#D9E4F5] bg-white/80 p-8 text-slate-900 shadow-lg shadow-slate-200/30 transition hover:-translate-y-1 hover:shadow-2xl ${
        plan.highlight ? "scale-[1.02] border-[#79BAEC] bg-gradient-to-b from-[#DDF3FF] via-white to-white" : ""
      }`}
    >
      {plan.highlight ? (
        <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-[#79BAEC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Popular
        </span>
      ) : null}

      <header className="mb-6 flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
        <p className="text-sm text-slate-600">{plan.description}</p>
      </header>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
        <span className="text-sm font-semibold text-slate-500">{plan.cadence}</span>
      </div>

      <ul className="mb-8 space-y-4 text-sm">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-3">
            <span className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${feature.included ? "bg-[#A6D7FF] text-[#24527E]" : "bg-slate-200 text-slate-400"}`}>
              {feature.included ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
            </span>
            <span className={feature.included ? "text-slate-700" : "text-slate-400 line-through"}>{feature.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button className={`w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition ${plan.highlight ? "bg-[#79BAEC] text-white hover:bg-[#5EA6E5]" : "bg-white text-[#24527E] shadow-inner shadow-slate-200 hover:bg-[#F2F7FF]"}`}>
          Select plan
        </button>
      </div>
    </article>
  )
}

