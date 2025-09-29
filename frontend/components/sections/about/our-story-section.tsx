'use client';

import { Globe, Lightbulb, Heart, Target } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a vision to transform Africa through environmental excellence and geospatial innovation
          </p>
        </div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* The Challenge */}
          <div className="mb-16">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Africa faces unprecedented environmental challenges - from climate change impacts to rapid urbanization, 
                  biodiversity loss, and water scarcity. Yet, the continent lacked a unified platform where African 
                  environmental and geospatial experts could collaborate, share knowledge, and drive sustainable solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We recognized that Africa's environmental destiny needed to be shaped by Africans themselves, 
                  leveraging local knowledge, expertise, and innovative approaches tailored to our unique challenges.
                </p>
              </div>
            </div>
          </div>

          {/* The Vision */}
          <div className="mb-16">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  In 2020, AIERGT was founded with a clear vision: to create a professional platform that unites 
                  Africa's brightest minds in environmental research and geospatial technology. We envisioned a 
                  continent where sustainable solutions emerge from collaborative expertise, cutting-edge technology, 
                  and deep local understanding.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our founders, recognizing the power of unity in diversity, established AIERGT as a platform 
                  that embraces Africa's rich heritage while building a sustainable future.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  AIERGT emerged as Africa's premier platform for environmental research and geospatial technology, 
                  bringing together experts from across the continent. We provide comprehensive solutions through 
                  research, training, technology innovation, and mentorship programs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we serve 50+ countries, have trained over 10,000 professionals, and completed 500+ projects 
                  that directly contribute to Africa's sustainable development goals.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#79BAEC]/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#79BAEC]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Africa's diversity in race, ethnicity, culture, tradition, and religion is our greatest strength. 
                  We embrace this heritage as AIERGT, recognizing that diversity enriches our way of life and 
                  enhances our collective competence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that competence is not defined by background, but by dedication, expertise, and 
                  commitment to Africa's sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
