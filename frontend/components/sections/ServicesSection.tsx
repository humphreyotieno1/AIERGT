'use client';

import Image from 'next/image';

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '1',
    name: 'Research',
    image: '/services/research.png',
    description: 'Comprehensive environmental research and data analysis to drive informed decision-making.',
    features: [
      'Environmental Impact Studies',
      'Data Collection & Analysis',
      'Policy Research',
      'Sustainability Assessments'
    ]
  },
  {
    id: '2',
    name: 'Training',
    image: '/services/training.png',
    description: 'Professional development programs to build capacity and expertise across environmental sectors.',
    features: [
      'Skills Development',
      'Certification Programs',
      'Workshop Sessions',
      'Online Learning'
    ]
  },
  {
    id: '3',
    name: 'Technology',
    image: '/services/technology.png',
    description: 'Cutting-edge technology solutions for environmental monitoring and management.',
    features: [
      'IoT Monitoring Systems',
      'Data Analytics Platforms',
      'Remote Sensing',
      'Digital Solutions'
    ]
  },
  {
    id: '4',
    name: 'Innovation',
    image: '/services/innovation.png',
    description: 'Fostering innovative approaches to environmental challenges and sustainable development.',
    features: [
      'Innovation Labs',
      'Pilot Projects',
      'Technology Transfer',
      'Startup Support'
    ]
  },
  {
    id: '5',
    name: 'Mentorship',
    image: '/services/mentor.png',
    description: 'Expert guidance and mentorship to nurture the next generation of environmental leaders.',
    features: [
      'Expert Mentorship',
      'Career Guidance',
      'Leadership Development',
      'Professional Networks'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to address environmental challenges and drive sustainable development across Africa
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-6">
                    {/* Service Image */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <Image
                        src={service.image}
                        alt={`${service.name} service`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">What We Offer:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors opacity-75 cursor-not-allowed">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
