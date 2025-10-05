"use client"

import { useMemo } from "react"

import { RedHero } from "@/components/sections/red/red-hero"
import type { TrainingCategory } from "@/lib/store/training-courses.store"

type TrainingHeroProps = {
  category: TrainingCategory
}

export function TrainingHero({ category }: TrainingHeroProps) {
  const backgroundImages = useMemo(() => {
    if (category.backgroundImages.length > 0) {
      return category.backgroundImages
    }

    return ["/hero/lagos.jpg", "/hero/forest.jpg"]
  }, [category.backgroundImages])

  return (
    <RedHero
      tagLabel="Training"
      tagIcon="graduationCap"
      title={category.title}
      description={category.summary}
      backgroundImages={backgroundImages}
      primaryAction={{ label: "View plans & pricing", href: "/training/pricing", icon: "arrowRight" }}
      secondaryAction={{ label: "Download brochure", href: "/training/brochure.pdf", icon: "arrowRight" }}
    />
  )
}

