import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const [expandedAccordion, setExpandedAccordion] = useState('Quality Promise');

  const journeyData = [
    {
      year: '2015',
      title: 'Humble Beginnings',
      description: 'Started with a small herd focused on quality over quantity.',
      color: 'text-green-400'
    },
    {
      year: '2017',
      title: 'Local Recognition',
      description: 'Became a trusted name in our community for pure dairy.',
      color: 'text-green-400'
    },
    {
      year: '2020',
      title: 'Modern Distribution',
      description: 'Launched doorstep delivery and subscription plans.',
      color: 'text-green-400'
    },
    {
      year: '2024',
      title: 'Premium Expansion',
      description: 'Expanded product line with artisanal ghee and paneer.',
      color: 'text-green-400'
    }
  ];

  const accordionData = [
    {
      title: 'Our Values',
      content: 'We believe in transparency, sustainability, and delivering the highest quality dairy products to every family. Our commitment to ethical farming practices ensures that every product meets our strict standards.'
    },
    {
      title: 'Responsible Sourcing',
      content: 'We work directly with local farmers who share our commitment to animal welfare and sustainable farming practices. Every drop of milk comes from happy, healthy cows in pristine environments.'
    },
    {
      title: 'Quality Promise',
      content: 'Rigorous testing and cold-chain delivery for superior taste and safety.'
    }
  ];

  const toggleAccordion = (title) => {
    setExpandedAccordion(expandedAccordion === title ? '' : title);
  };

  return (
    <section className=" py-16 ">
      <div className="max-w-6xl mx-auto pb-20">
        {/* About Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
            About Kamdhnu
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            Kamdhnu is built on a simple promise: purity you can taste and trust you can feel. Our Cream & Gold 
            standard reflects a relentless focus on freshness, ethical sourcing, and delightful customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Our Journey Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-green-400 mb-8">Our Journey</h3>
            <p className="text-gray-300 mb-10 text-lg">
              From humble beginnings to a premium dairy brand, Kamdhnu has always believed in purity and trust.
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-400"></div>

              {journeyData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-16">
                    <div className="text-yellow-500 font-bold text-lg mb-2">{item.year}</div>
                    <h4 className={`text-xl font-semibold mb-3 ${item.color}`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion Section */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.title)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-750 transition-colors duration-200"
                  >
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    {expandedAccordion === item.title ? (
                      <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {expandedAccordion === item.title && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-center">
              <h4 className="text-white font-bold text-xl mb-3">
                Experience Pure Quality
              </h4>
              <p className="text-green-100 mb-4 text-sm">
                Join thousands of families who trust Kamdhnu for their daily dairy needs.
              </p>
              <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Your Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Happy Families' },
            { number: '50+', label: 'Partner Farms' },
            { number: '99.9%', label: 'Quality Score' },
            { number: '24/7', label: 'Fresh Delivery' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <Footer />
    </section>
  );
};

export default About;