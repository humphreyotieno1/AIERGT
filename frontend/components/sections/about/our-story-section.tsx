"use client";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section id="our-story" className="relative isolate bg-gray-50 pb-24">
      {/* Visual Banner */}
      <div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] bg-gray-900 overflow-hidden">
        <Image
          src="/about/africa.jpg"
          alt="AIERGT supporting Africa"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/20" />
        <div className="absolute inset-0">
          <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end py-14 sm:py-16 lg:py-20">
            <span className="hidden sm:block inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] text-white/90 w-fit">
              About AIERGT
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              Preparing Africa for tomorrow through environmental intelligence
              and geospatial innovation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
              We unite Africa&apos;s leading environmental and geospatial
              experts to co-create sustainable solutions tailored to our
              continent.
            </p>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 mt-10 sm:mt-12 lg:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl shadow-blue-100/40 border border-gray-100 overflow-hidden">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center p-8 sm:p-10 lg:p-12">
              {/* Narrative */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-1 w-16 rounded-full bg-[#71B045]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#71B045]">
                    Our Story
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  African Institute for Environmental Research and Geospatial
                  Technology
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  AIERGT is a professional platform that provides sustainable solutions for the challenges facing the African continent. There is a need for African Environmental and Geospatial Experts to participate in shaping the destiny of the African continent. This can only be achieved in a united front with diverse expertise, experience, and competences.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Africa is rich in diversity in terms of race(color), ethnicity, culture, tradition, and religion. These are all our heritages, and we embrace them as AIERGT, they are our strength. We further acknowlegde that they do not define our competences, but rather enrich our way of life.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 mt-8">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Why we exist
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      To unite environmental and geospatial leaders across the
                      continent, providing the shared tools, knowledge, and
                      mentorship needed to design Africa-first solutions.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#71B045]/30 bg-[#71B045]/10 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      What drives us
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Diversity is our strength. We celebrate Africa&apos;s
                      cultures, traditions, and expertise while building a
                      sustainable future powered by local competence and global
                      collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Supporting Visual */}
              <div className="lg:h-full">
                <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-[#71B045]/10 via-white to-white p-4 shadow-sm">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                    <Image
                      src="/about/africa.jpg"
                      alt="AIERGT regional reach across Africa"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 360px, 60vw"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                    AIERGT operates across all five African regions, partnering
                    with governments, institutions, and communities to
                    accelerate environmental resilience.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">50+</p>
                      <p className="text-sm text-gray-500">Countries served</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">500+</p>
                      <p className="text-sm text-gray-500">
                        Projects delivered
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10k+</p>
                      <p className="text-sm text-gray-500">
                        Professionals trained
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15</p>
                      <p className="text-sm text-gray-500">
                        Years of collective expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
