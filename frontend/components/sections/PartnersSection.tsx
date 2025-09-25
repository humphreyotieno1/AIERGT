'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  website?: string;
}

const partners: Partner[] = [
  { id: '1', name: 'Agriculture', logo: '/partners/agriculture.png', category: 'Agriculture', website: '/' },
  { id: '2', name: 'Water', logo: '/partners/water.png', category: 'Water', website: '/' },
  { id: '3', name: 'Aviation Industry', logo: '/partners/aviation.png', category: 'Aviation Industry', website: '/' },
  { id: '4', name: 'Renewable Energy Industry', logo: '/partners/renewable.png', category: 'Renewable Energy Industry', website: '/' },
  { id: '5', name: 'Construction Industry', logo: '/partners/construction.png', category: 'Construction Industry', website: '/' },
  { id: '6', name: 'Tourism and Conservation Industry', logo: '/partners/tourism.png', category: 'Tourism and Conservation Industry', website: '/' },
  { id: '7', name: 'ICT Industry', logo: '/partners/ict.png', category: 'ICT Industry', website: '/' },
  { id: '8', name: 'Academic Research', logo: '/partners/academic.png', category: 'Academic Research', website: '/' },
];

export default function PartnersSection() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Duplicate partners array for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const partnerWidth = 160; // Approximate width of each partner item
        const maxScroll = partners.length * partnerWidth;
        return (prev + 1) % maxScroll;
      });
    }, 50); // Smooth scrolling

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePartnerClick = (partner: Partner) => {
    if (partner.website) {
      window.open(partner.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="partners" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders across various sectors
          </p>
        </div>

        {/* Auto-play Controls */}
        {/* <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              isAutoPlaying
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-red-500' : 'bg-green-500'}`}></div>
            <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div> */}

        {/* Partners Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="flex space-x-8 transition-transform duration-75 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
                onClick={() => handlePartnerClick(partner)}
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    priority
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <Link
                  href={partner.website || '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-700 hover:text-primary transition-colors text-center max-w-[160px] truncate"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                >
                  {partner.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}