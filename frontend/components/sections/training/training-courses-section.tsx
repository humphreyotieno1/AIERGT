import type { TrainingCategory } from "@/lib/store/training-courses.store"

import { TrainingDisciplineCard } from "./training-discipline-card"

type TrainingCoursesSectionProps = {
  category: TrainingCategory
}

export function TrainingCoursesSection({ category }: TrainingCoursesSectionProps) {
  return (
    <section className="relative mt-14 space-y-10">
      <header className="space-y-4">
        <h2 className="font-garamond text-3xl font-semibold text-slate-900 sm:text-4xl">
          {category.heading}
        </h2>
        <p className="max-w-3xl text-md text-slate-600">{category.subtitle}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {category.disciplines.map((discipline) => (
          <TrainingDisciplineCard key={discipline.id} discipline={discipline} />
        ))}
      </div>
    </section>
  )
}

