import type { LucideIcon } from "lucide-react"
import {
  SatelliteDish,
  Leaf,
  Globe2,
  Scale,
  Map,
  TreePine,
  Compass,
  FlaskRound,
  GraduationCap,
} from "lucide-react"

import type { TrainingDiscipline } from "@/lib/store/training-courses.store"

type TrainingDisciplineCardProps = {
  discipline: TrainingDiscipline
}

const iconRegistry: Record<string, LucideIcon> = {
  satellite: SatelliteDish,
  leaf: Leaf,
  globe: Globe2,
  scale: Scale,
  map: Map,
  treepine: TreePine,
  treePine: TreePine,
  compass: Compass,
  flaskRound: FlaskRound,
  graduationCap: GraduationCap,
}

export function TrainingDisciplineCard({ discipline }: TrainingDisciplineCardProps) {
  const Icon = iconRegistry[discipline.icon]

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#E3E9F5] bg-white/90 shadow-lg shadow-slate-200/30 transition hover:-translate-y-1 hover:border-[#71B045]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.15),_transparent_70%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative flex flex-col gap-6 p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF5FF] text-[#3978C0]">
            {Icon ? <Icon className="h-6 w-6" /> : null}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{discipline.name}</h3>
            <p className="text-md text-slate-600">{discipline.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {discipline.courses.map((course) => (
            <div
              key={course}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white/70 p-4 text-sm text-slate-700 transition group-hover:border-[#9CCAF0]"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#71B045]" aria-hidden="true" />
              <p>{course}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

