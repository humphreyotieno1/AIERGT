"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Layers, ArrowRight, ClipboardSignature } from "lucide-react"

const BACKGROUND_ROTATION_INTERVAL = 6000

const backgroundImages = [
  "/consultancy/management/environmental-economics.jpg",
  "/consultancy/management/forestry.jpg",
  "/consultancy/management/solid-waste.jpg",
  "/consultancy/management/water-resources.jpg",
  "/consultancy/management/natural-resources.jpg",
  "/consultancy/management/solid-waste.jpg",
  "/consultancy/management/water-resources.jpg",
]

export function ConsultancyHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (backgroundImages.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length)
    }, BACKGROUND_ROTATION_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  const currentImages = useMemo(() => backgroundImages, [])

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {currentImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Consultancy background"
            fill
            priority={index === 0}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            } ${index === activeIndex ? "scale-100" : "scale-[1.02]"}`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-slate-900/50" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-12 text-left sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#79BAEC]">
          <Layers className="h-4 w-4" /> Consultancy Services
        </div>
        <h1 className="max-w-3xl font-garamond text-3xl font-bold text-white sm:text-4xl">
          Integrated environmental, social, and geospatial advisory for Africa&apos;s boldest projects
        </h1>
        <p className="max-w-3xl text-sm text-slate-100 sm:text-base">
          AIERGT&apos;s multidisciplinary consultants partner with governments, investors, and developers to design compliant, resilient, and high-impact programmes. Explore a consultancy cluster to view the curated services and request a tailored quote instantly.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
          <Link
            href="#consultancy-categories"
            className="group inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/50 bg-[#79BAEC] px-5 py-2 text-white transition hover:border-[#5EA6E5] hover:bg-[#5EA6E5]"
          >
            View categories
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services/request-quote"
            className="group inline-flex items-center gap-2 rounded-full border border-[#79BAEC]/30 bg-white/80 px-5 py-2 text-black transition hover:border-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
          >
            Request quote
            <ClipboardSignature className="h-4 w-4 transition group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </section>
  )
}


