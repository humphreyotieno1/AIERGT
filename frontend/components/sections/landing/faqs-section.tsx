'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services does AIERGT offer?",
    answer: "We offer comprehensive environmental services including research, training, technology solutions, innovation consulting, and mentorship programs. Our services cover environmental impact assessments, sustainability consulting, digital solutions, and capacity building across various industries.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Simple assessments typically take 2-4 weeks, while comprehensive environmental studies may require 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the process."
  },
  {
    id: 3,
    question: "What industries do you work with?",
    answer: "We work across multiple industries including Agriculture, Water Management, Aviation, Renewable Energy, Construction, Tourism & Conservation, ICT, and Academic Research. Our expertise spans both public and private sectors across Africa."
  },
  {
    id: 4,
    question: "Do you provide training and capacity building?",
    answer: "Yes! We offer comprehensive training programs including skills development, certification courses, workshop sessions, and online learning platforms. Our training covers environmental management, sustainability practices, and technology implementation."
  },
  {
    id: 5,
    question: "How do you ensure project quality?",
    answer: "Quality is our top priority. We follow international standards, use certified professionals, implement rigorous quality control processes, and provide regular progress reports. All our projects undergo multiple review stages before delivery."
  },
  {
    id: 6,
    question: "What technology solutions do you offer?",
    answer: "We provide cutting-edge technology solutions including IoT monitoring systems, data analytics platforms, remote sensing technologies, and digital environmental management tools. Our solutions are tailored to meet specific client needs and local conditions."
  },
  {
    id: 7,
    question: "How do you handle data privacy and security?",
    answer: "We maintain strict data privacy and security protocols in compliance with international standards. All data is encrypted, access is restricted to authorized personnel only, and we follow GDPR and local data protection regulations."
  },
  {
    id: 8,
    question: "Can you work with small businesses or startups?",
    answer: "Absolutely! We work with organizations of all sizes, from startups to large corporations. We offer flexible engagement models and can tailor our services to fit different budgets and requirements while maintaining high quality standards."
  },
  {
    id: 9,
    question: "What makes AIERGT different from other consultancies?",
    answer: "Our unique combination of local African expertise, international standards, cutting-edge technology, and proven track record sets us apart. We understand local challenges while bringing global best practices, ensuring practical and sustainable solutions."
  },
  {
    id: 10,
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we provide comprehensive post-project support including monitoring, maintenance, training, and consultation services. Our 24/7 support ensures your solutions continue to perform optimally and adapt to changing conditions."
  },
  {
    id: 11,
    question: "How do you ensure environmental compliance?",
    answer: "We stay updated with all local and international environmental regulations, conduct thorough compliance assessments, and provide guidance on regulatory requirements. Our team includes certified environmental professionals who ensure full compliance."
  },
];


export default function FAQsSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  const displayedFAQs = showAll ? faqs : faqs.slice(0, 5);
  const remainingCount = faqs.length - 5;

  return (
    <section id="faqs" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help you achieve your environmental goals.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {faq.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-left mb-1">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openItem === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-primary transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="pl-12">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {!showAll && remainingCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Show More FAQs
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">
                {remainingCount} more
              </span>
              <ChevronDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {showAll && remainingCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setShowAll(false);
                setOpenItem(null);
                window.scrollTo({ top: document.getElementById('faqs')?.offsetTop || 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Show Less
              <ChevronUp className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <Link
              href="/contact#schedule-call"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Schedule a Call
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
