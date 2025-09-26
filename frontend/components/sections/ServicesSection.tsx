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
    <section id="services" className="py-16 bg-white">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#79BAEC]/20 group"
            >
              {/* Service Icon */}
              <div className="relative w-16 h-16 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#79BAEC]/10 to-[#6bb6ff]/10 rounded-xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={`${service.name} service`}
                    width={64}
                    height={64}
                    priority
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#79BAEC] transition-colors duration-300">
                {service.name}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                {service.description}
              </p>

              {/* Learn More Link */}
              {/*<div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#79BAEC] hover:text-[#6bb6ff] font-medium transition-colors duration-300 group-hover:translate-x-1 transform"
                >
                  Learn more →
                </a>
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
