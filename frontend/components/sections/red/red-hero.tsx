"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Layers, ArrowRight, ClipboardSignature, GraduationCap } from "lucide-react"

const BACKGROUND_ROTATION_INTERVAL = 6000

const iconRegistry = {
  layers: Layers,
  arrowRight: ArrowRight,
  clipboardSignature: ClipboardSignature,
  graduationCap: GraduationCap,
}

type IconKey = keyof typeof iconRegistry

export type RedHeroAction = {
  label: string
  href: string
  icon?: IconKey
  variant?: "primary" | "secondary"
  target?: string
}

type RedHeroProps = {
  tagLabel?: string
  tagIcon?: IconKey
  title: string
  description: string
  backgroundImages: string[]
  primaryAction?: RedHeroAction
  secondaryAction?: RedHeroAction
}

export function RedHero({
  tagLabel,
  tagIcon,
  title,
  description,
  backgroundImages,
  primaryAction,
  secondaryAction,
}: RedHeroProps) {
  const images = useMemo(() => (backgroundImages.length ? backgroundImages : ["/hero/cape-town.jpg"]), [
    backgroundImages,
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, BACKGROUND_ROTATION_INTERVAL)

    return () => clearInterval(timer)
  }, [images.length])

  const renderAction = (action: RedHeroAction, variant: "primary" | "secondary") => {
    const Icon = action.icon ? iconRegistry[action.icon] : undefined
    const baseClasses =
      "group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition"

    if (variant === "primary") {
      return (
        <Link
          key={action.label}
          href={action.href}
          target={action.target}
          className={`${baseClasses} border-[#71B045]/60 bg-[#71B045] text-white hover:border-[#5F9938] hover:bg-[#5F9938]`}
        >
          {action.label}
          {Icon ? <Icon className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
        </Link>
      )
    }

    return (
      <Link
        key={action.label}
        href={action.href}
        target={action.target}
        className={`${baseClasses} border-white/50 bg-white/15 text-white hover:border-white hover:bg-white/25`}
      >
        {action.label}
        {Icon ? <Icon className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
      </Link>
    )
  }

  const TagIcon = tagIcon ? iconRegistry[tagIcon] : undefined

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/60 shadow-2xl">
      <div className="pointer-events-none absolute inset-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Background"
            fill
            priority={index === 0}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            } ${index === activeIndex ? "scale-100" : "scale-[1.02]"}`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/65" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center text-white sm:px-10 lg:px-16">
        {tagLabel ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#71B045] backdrop-blur">
            {TagIcon ? <TagIcon className="h-4 w-4" /> : null}
            {tagLabel}
          </span>
        ) : null}
        <h1 className="font-garamond text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base text-slate-100 sm:text-base">{description}</p>
        {primaryAction || secondaryAction ? (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {primaryAction ? renderAction(primaryAction, "primary") : null}
            {secondaryAction ? renderAction(secondaryAction, "secondary") : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
