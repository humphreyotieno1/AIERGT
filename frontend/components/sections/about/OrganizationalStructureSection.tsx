'use client';

import { Users, MapPin, Building, Award } from 'lucide-react';

export default function OrganizationalStructureSection() {
  const regions = [
    { name: 'Eastern Africa', color: 'bg-orange-500' },
    { name: 'Southern Africa', color: 'bg-green-600' },
    { name: 'Central Africa', color: 'bg-yellow-500' },
    { name: 'West Africa', color: 'bg-green-400' },
    { name: 'North Africa', color: 'bg-orange-400' }
  ];

  const directorates = [
    {
      name: 'Safety, Social, Health and Environmental Services',
      count: 5,
      description: 'Ensuring comprehensive environmental and social impact assessments'
    },
    {
      name: 'Geospatial and Space Technology',
      count: 5,
      description: 'Advancing mapping, remote sensing, and spatial analysis capabilities'
    },
    {
      name: 'Research and Enterprise Development',
      count: 5,
      description: 'Driving innovation through research and supporting enterprise growth'
    },
    {
      name: 'Digital Innovation and Media Services',
      count: 5,
      description: 'Leveraging digital tools and media for environmental communication'
    }
  ];

  return (
    <section id="structure" className="py-20 bg-white">
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
          {/* CEO Level */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#79BAEC] text-white rounded-2xl px-8 py-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">CEO and Founder</h3>
                  <p className="text-[#79BAEC]/80">Strategic Leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-800 text-white rounded-2xl px-8 py-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">The Africa Advisory Board</h3>
                  <p className="text-gray-300">Continental Governance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Coordinators */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Regional Coordinators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {region.name} Regional Coordinator
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Regional Directors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directorates.map((directorate, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79BAEC] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {directorate.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {directorate.description}
                      </p>
                      <div className="flex items-center">
                        <span className="text-[#79BAEC] font-semibold">
                          {directorate.count} Directors
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-br from-[#79BAEC]/5 to-[#79BAEC]/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Continental Reach
            </h3>
            <p className="text-lg text-gray-600">
              A network spanning across Africa with dedicated professionals in every region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#79BAEC] mb-2">5</div>
              <p className="text-gray-600">Regional Coordinators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#79BAEC] mb-2">20</div>
              <p className="text-gray-600">Regional Directors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#79BAEC] mb-2">50+</div>
              <p className="text-gray-600">Countries Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#79BAEC] mb-2">1000+</div>
              <p className="text-gray-600">Active Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
