"use client"

import { Globe, Users, Award, Shield } from "lucide-react"

// Trust badges and social proof
const trustBadges = [
  { text: "Trusted by 50+ Countries", icon: Globe },
  { text: "10,000+ Professionals Trained", icon: Users },
  { text: "ISO 14001 Certified", icon: Award },
  { text: "UN Environment Partner", icon: Shield }
]

export function TrustBadgesSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals and organizations who trust AIERGT for their environmental and geospatial needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustBadges.map((badge, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-6 lg:p-8 bg-gray-50 hover:bg-[#71B045]/5 rounded-2xl border border-gray-100 hover:border-[#71B045]/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#71B045] to-[#0F1023] rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <badge.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#71B045] transition-colors duration-300">
                {badge.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-[#71B045]">500+</div>
              <div className="text-lg text-gray-600">Research Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-[#71B045]">15+</div>
              <div className="text-lg text-gray-600">African Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-[#71B045]">100+</div>
              <div className="text-lg text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
