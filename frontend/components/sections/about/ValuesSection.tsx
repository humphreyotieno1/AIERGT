'use client';

import { Heart, Users, Lightbulb, Shield, Globe, Award } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: 'Diversity & Inclusion',
      description: 'We embrace Africa\'s rich diversity in race, ethnicity, culture, tradition, and religion as our greatest strength.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'We believe in the power of unity, bringing together diverse expertise and experiences for greater impact.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Technology',
      description: 'We leverage cutting-edge technology and innovative approaches to solve Africa\'s environmental challenges.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Integrity & Transparency',
      description: 'We maintain the highest standards of professional conduct and transparent communication in all our work.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Sustainable Development',
      description: 'We are committed to solutions that promote environmental sustainability and long-term prosperity.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Excellence & Quality',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to Africa's sustainable future
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Our Values
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              If these values resonate with you, join us in our mission to transform Africa 
              through environmental excellence and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#79BAEC] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#79BAEC]/90 transition-colors duration-300">
                Join Our Community
              </button>
              <button className="border-2 border-[#79BAEC] text-[#79BAEC] px-8 py-4 rounded-lg font-semibold hover:bg-[#79BAEC] hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
