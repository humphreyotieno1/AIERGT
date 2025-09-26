'use client';

import { Target, Eye, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that drive every decision and action we take
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#79BAEC]/20 to-[#79BAEC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[#79BAEC]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            </div>
            
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              "Transformation of the African Continent through Research, Training, Technology, 
              Innovation and Mentorship in line with Agenda 2063 and the SDGs."
            </blockquote>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Advancing environmental research across Africa</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Building capacity through professional training</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Leveraging cutting-edge geospatial technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Fostering innovation and mentorship</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="aiergt"
                size="sm"
                className="flex-1"
              >
                Learn More About Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#79BAEC] text-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
              >
                View Agenda 2063
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#79BAEC]/20 to-[#79BAEC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-[#79BAEC]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            </div>
            
            <blockquote className="text-3xl font-bold text-[#79BAEC] leading-relaxed mb-8 text-center">
              "Preparing Africa for tomorrow"
            </blockquote>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              We envision an Africa where environmental challenges are met with innovative solutions, 
              where sustainable development is the norm, and where every community has access to 
              the tools and knowledge needed to thrive.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">A continent leading in environmental innovation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Sustainable development as the foundation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Empowered communities driving change</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#79BAEC] rounded-full mr-3"></div>
                <span className="text-gray-600">Technology serving humanity and nature</span>
              </div>
            </div>
            
            <Button
              variant="aiergt"
              size="lg"
              className="w-full"
            >
              Join Our Vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* SDGs Integration */}
        <div className="mt-16 bg-gradient-to-br from-[#79BAEC]/5 to-[#79BAEC]/10 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aligned with Global Goals
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Our mission directly supports the United Nations Sustainable Development Goals (SDGs) 
              and Africa's Agenda 2063, ensuring our work contributes to global sustainability efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="border-[#79BAEC] text-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
              >
                View SDGs
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-[#79BAEC] text-[#79BAEC] hover:bg-[#79BAEC] hover:text-white"
              >
                Agenda 2063
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
