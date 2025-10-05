import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { TrainingBreadcrumbs } from "@/components/sections/training/training-breadcrumbs"
import { TrainingCoursesSection } from "@/components/sections/training/training-courses-section"
import { TrainingHero } from "@/components/sections/training/training-hero"
import { getTrainingCategory, trainingCategories } from "@/lib/store/training-courses.store"

type TrainingPageParams = Promise<{ slug: "courses" | "certificate" | "bachelor" | "master" }>

type TrainingPageProps = {
  params: TrainingPageParams
}

type TrainingMetadataProps = {
  params: TrainingPageParams
}

export async function generateStaticParams() {
  return trainingCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: TrainingMetadataProps): Promise<Metadata> {
  const { slug } = await params
  const category = getTrainingCategory(slug)

  if (!category) {
    return {
      title: "Training",
    }
  }

  return {
    title: `${category.title} | AIERGT Training`,
    description: category.summary,
  }
}

export default async function TrainingCategoryPage({ params }: TrainingPageProps) {
  const { slug } = await params
  const category = getTrainingCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F2F6FF] to-white pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.2),_transparent_65%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <TrainingBreadcrumbs
          segments={[
            { label: "Training", href: "/training" },
            { label: category.heading ?? category.title },
          ]}
        />

        <div className="mt-10">
          <TrainingHero category={category} />
        </div>

        <TrainingCoursesSection category={category} />
      </section>
    </main>
  )
}

