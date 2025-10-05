export type PricingFeature = {
  label: string
  included: boolean
}

export type PricingPlan = {
  slug: string
  name: string
  price: number
  cadence: string
  highlight?: boolean
  description: string
  features: PricingFeature[]
}

export const trainingPricingPlans: PricingPlan[] = [
  {
    slug: "startup",
    name: "Startup",
    price: 19,
    cadence: "/Month",
    description: "Ideal for individuals exploring core modules and community access.",
    features: [
      { label: "100 Free Classes", included: true },
      { label: "960 Premium Classes", included: false },
      { label: "Expert Community (iOS, Android)", included: true },
      { label: "Cross Platform Apps", included: false },
      { label: "Offline Access", included: false },
      { label: "Support Teachers", included: true },
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    price: 49,
    cadence: "/Month",
    highlight: true,
    description: "Best for professionals needing full premium catalog and mobile access.",
    features: [
      { label: "100 Free Classes", included: true },
      { label: "960 Premium Classes", included: true },
      { label: "Expert Community (iOS, Android)", included: true },
      { label: "Cross Platform Apps", included: true },
      { label: "Offline Access", included: true },
      { label: "Support Teachers", included: true },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: 99,
    cadence: "/Month",
    description: "For organizations scaling teams with enterprise-grade features.",
    features: [
      { label: "Mobile-Optimized Website", included: true },
      { label: "Powerful Website Metrics", included: true },
      { label: "Free Custom Domain", included: true },
      { label: "Integrated E-Commerce", included: true },
      { label: "Sell Unlimited Products", included: true },
      { label: "24/7 Customer Support", included: true },
    ],
  },
]

export function getPricingPlan(slug: string) {
  return trainingPricingPlans.find((plan) => plan.slug === slug)
}

