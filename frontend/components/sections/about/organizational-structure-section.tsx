'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function OrganizationalStructureSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isLightboxOpen]);

  return (
    <section id="structure" className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A continent-wide network of experts organized for maximum impact and efficiency
          </p>
        </div>

        {/* Leadership Hierarchy */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="relative rounded-[32px] border border-gray-100 bg-white p-4 shadow-lg shadow-blue-100/40">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="group relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-gray-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#79BAEC]/40"
                aria-label="View organizational structure in full screen"
              >
                <Image
                  src="/about/structure.png"
                  alt="AIERGT organizational structure"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.01]"
                  sizes="(min-width: 1280px) 960px, (min-width: 768px) 80vw, 100vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    Tap to enlarge
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-16 sm:px-8"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Organizational structure full screen view"
        >
          <div
            className="relative w-full max-w-5xl" 
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#79BAEC]/60"
              aria-label="Close full screen view"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] bg-white p-2 shadow-xl">
              <div className="relative h-full w-full rounded-[24px] bg-gray-50">
                <Image
                  src="/about/structure.png"
                  alt="AIERGT organizational structure"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 1280px) 960px, (min-width: 768px) 80vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
