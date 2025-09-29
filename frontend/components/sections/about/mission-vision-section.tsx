'use client';

import Link from 'next/link';
import { Mountain, Lightbulb, Flag } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#79BAEC]">
            Guiding Purpose
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Mission & Vision
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Everything we do is anchored in a clear mandate to accelerate sustainable development across Africa.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 shadow-lg shadow-sky-100/40">
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#79BAEC]/30 bg-[#79BAEC]/10 text-[#79BAEC] transition-transform duration-300 group-hover:scale-105">
                <Mountain className="h-11 w-11" />
                <Flag className="absolute -bottom-2 right-1 h-6 w-6 text-[#79BAEC]" />
              </div>

              <div className="mt-6 flex items-center gap-3 text-base font-semibold uppercase tracking-[0.25em] text-gray-500">
                <span>Our</span>
                <span className="h-[1px] w-10 bg-gray-300" />
                <span className="text-[#79BAEC]">Mission</span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Transformation of the African Continent through Research, Training, Technology,
                Innovation and Mentorship in line with Agenda 2030 and the SDGs.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              <p className="mt-4 text-sm text-gray-500">
                Click here for info:
                <span className="mx-1 text-[#79BAEC]">
                  <Link href="https://worldtop20.org/global-movement/" target="_blank" rel="noopener noreferrer">
                    SGD Agenda 2030 & Global Movement
                  </Link>
                </span>
                <span className="text-gray-400">·</span>
                <span className="mx-1 text-[#79BAEC]">
                  <Link
                    href="https://worldtop20.org/global-movement/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SGD Agenda 2030 & Global Movement
                  </Link>
                </span>
              </p>

              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#79BAEC]/10 text-[#79BAEC]">
                <Mountain className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-10 shadow-lg shadow-sky-100/40">
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#79BAEC]/30 bg-[#79BAEC]/10 text-[#79BAEC] transition-transform duration-300 group-hover:scale-105">
                <Lightbulb className="h-11 w-11" />
              </div>

              <div className="mt-6 flex items-center gap-3 text-base font-semibold uppercase tracking-[0.25em] text-gray-500">
                <span>Our</span>
                <span className="h-[1px] w-10 bg-gray-300" />
                <span className="text-[#79BAEC]">Vision</span>
              </div>

              <p className="mt-6 text-2xl font-bold text-gray-900">
                “Preparing Africa for tomorrow”
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                A future where every African nation is equipped with environmental intelligence and
                geospatial capacity to build resilient, thriving communities.
              </p>

              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#79BAEC]/10 text-[#79BAEC]">
                <Lightbulb className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
