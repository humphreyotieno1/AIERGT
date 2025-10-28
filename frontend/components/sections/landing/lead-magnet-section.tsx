'use client';

import { useState } from 'react';
import { Download, FileText, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LeadMagnetSection() {
  const resources = [
    {
      icon: FileText,
      title: "Environmental Impact Assessment Guide",
      description: "Complete framework for conducting EIAs in African contexts",
      downloads: "2,500+"
    },
    {
      icon: Users,
      title: "Geospatial Technology Toolkit",
      description: "Essential tools and techniques for environmental mapping",
      downloads: "1,800+"
    },
    {
      icon: Award,
      title: "Sustainability Best Practices Report",
      description: "Industry insights from 100+ successful projects",
      downloads: "3,200+"
    }
  ];

  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Resources for Environmental Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive guides and toolkits to accelerate your environmental projects. 
            Join thousands of professionals who trust AIERGT for expert insights.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#71B045]/10 to-[#8DD65E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <resource.icon className="w-8 h-8 text-[#71B045]" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-500">
                  {resource.downloads} downloads
                </span>
                <Button
                  variant="aiergt"
                  size="sm"
                  className="group-hover:translate-x-1 bg-primary text-white hover:bg-primary/90 transform transition-transform duration-300"
                >
                  Download
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#71B045] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Insights</h4>
            <p className="text-sm text-gray-600">From industry-leading professionals</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#71B045] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Latest Research</h4>
            <p className="text-sm text-gray-600">Cutting-edge environmental studies</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#71B045] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Case Studies</h4>
            <p className="text-sm text-gray-600">Real-world project examples</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#71B045] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Free Resources</h4>
            <p className="text-sm text-gray-600">Downloadable guides and toolkits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
