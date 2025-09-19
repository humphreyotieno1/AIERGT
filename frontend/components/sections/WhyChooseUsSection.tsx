'use client';

import { Check, X } from 'lucide-react';

export default function WhyChooseUsSection() {
  const comparisonData = [
    {
      feature: 'Expert Team',
      us: true,
      others: false,
      description: 'Certified environmental professionals with years of experience'
    },
    {
      feature: 'Local Knowledge',
      us: true,
      others: false,
      description: 'Deep understanding of African environmental challenges'
    },
    {
      feature: 'Technology Integration',
      us: true,
      others: false,
      description: 'Cutting-edge tools and digital solutions'
    },
    {
      feature: 'Sustainable Solutions',
      us: true,
      others: false,
      description: 'Environmentally responsible approaches'
    },
    {
      feature: '24/7 Support',
      us: true,
      others: false,
      description: 'Round-the-clock assistance and monitoring'
    },
    {
      feature: 'Cost-Effective',
      us: true,
      others: false,
      description: 'Competitive pricing with transparent costs'
    }
  ];

  return (
    <section className="relative py-12 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero/c1.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-primary">AIERGT</span>?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We're not just another environmental consultancy. We're your partners in creating a sustainable future for Africa.
          </p>
        </div>

        {/* Comparison Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {comparisonData.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full">
                    <X className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-white text-sm">{item.feature}</h4>
                  <div className="flex items-center space-x-1 text-xs">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="text-red-400 font-medium">✗</span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-xs text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-xs text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-xs text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-xs text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105">
            Get Free Consultation
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}