import Link from "next/link"
import { ChevronRight } from "lucide-react"

type TrainingBreadcrumbsProps = {
  segments: Array<{ label: string; href?: string }>
}

export function TrainingBreadcrumbs({ segments }: TrainingBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-slate-900">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          return (
            <li key={segment.label} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
              {segment.href && !isLast ? (
                <Link href={segment.href} className="transition hover:text-slate-900">
                  {segment.label}
                </Link>
              ) : (
                <span className="font-semibold text-slate-900">{segment.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

