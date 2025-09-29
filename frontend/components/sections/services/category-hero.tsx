"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

const DEFAULT_ROTATION_INTERVAL = 6000

export type CategoryHeroProps = {
  backHref: string
  backLabel?: ReactNode
  title: string
  description: string
  icon?: LucideIcon
  backgroundImages: string[]
  rotationInterval?: number
}

export function CategoryHero({
  backHref,
  backLabel = "Back",
  title,
  description,
  icon: Icon,
  backgroundImages,
  rotationInterval = DEFAULT_ROTATION_INTERVAL,
}: CategoryHeroProps) {
  const usableImages = useMemo(
    () => (backgroundImages.length > 0 ? backgroundImages : ["/hero/c1.png"]),
    [backgroundImages],
  )
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (usableImages.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % usableImages.length)
    }, rotationInterval)

    return () => clearInterval(timer)
  }, [rotationInterval, usableImages])

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {usableImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Category background"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            } ${index === activeIndex ? "scale-100" : "scale-[1.02]"}`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-slate-900/50" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-12 text-left sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#79BAEC]/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-sm transition hover:border-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
        >
          {backLabel}
        </Link>
        <div className="flex items-center gap-3 text-[#79BAEC]">
          {Icon ? <Icon className="h-6 w-6" /> : null}
          <span className="text-xs font-semibold uppercase tracking-[0.35em]">Consultancy</span>
        </div>
        <h1 className="max-w-3xl font-garamond text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-3xl text-sm text-slate-100 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  )
}
