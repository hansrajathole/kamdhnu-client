import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, FileText, Users, Settings } from 'lucide-react';
import Footer from '../components/Footer';

const Privacy = () => {
  const [expandedSection, setExpandedSection] = useState('How We Use Data');

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? '' : title);
  };

  const privacyData = [
    {
      title: 'Data We Collect',
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Personal Information',
          description: 'Name, email address, phone number, and delivery address when you create an account or place an order.'
        },
        {
          subtitle: 'Payment Information',
          description: 'Credit card details, billing address, and transaction history (processed securely through encrypted payment gateways).'
        },
        {
          subtitle: 'Usage Data',
          description: 'Website interaction data, product preferences, browsing patterns, and device information to improve our services.'
        },
        {
          subtitle: 'Communication Data',
          description: 'Customer service interactions, feedback, reviews, and subscription preferences.'
        }
      ]
    },
    {
      title: 'How We Use Data',
      icon: <Settings className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Service Delivery',
          description: 'To manage subscriptions, deliver products, and improve our services.'
        },
        {
          subtitle: 'Communication',
          description: 'To send order updates, delivery notifications, and important account information.'
        },
        {
          subtitle: 'Personalization',
          description: 'To recommend products based on your preferences and purchase history.'
        },
        {
          subtitle: 'Quality Improvement',
          description: 'To analyze usage patterns and enhance our platform\'s functionality and user experience.'
        }
      ],
      expanded: 'To manage subscriptions, deliver products, and improve our services.'
    },
    {
      title: 'Security',
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Data Encryption',
          description: 'All sensitive data is encrypted using industry-standard SSL/TLS protocols during transmission and storage.'
        },
        {
          subtitle: 'Access Control',
          description: 'Strict access controls ensure only authorized personnel can access your personal information.'
        },
        {
          subtitle: 'Regular Audits',
          description: 'We conduct regular security audits and vulnerability assessments to maintain the highest security standards.'
        },
        {
          subtitle: 'Secure Payment Processing',
          description: 'Payment information is processed through PCI DSS compliant payment processors and never stored on our servers.'
        }
      ]
    },
    {
      title: 'Data Sharing',
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Third-Party Services',
          description: 'We only share data with trusted partners for delivery, payment processing, and essential business operations.'
        },
        {
          subtitle: 'Legal Compliance',
          description: 'We may disclose information when required by law, legal process, or to protect our rights and safety.'
        },
        {
          subtitle: 'No Sale of Data',
          description: 'We never sell, rent, or trade your personal information to third parties for marketing purposes.'
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Access & Review',
          description: 'You can access and review all personal information we have collected about you at any time.'
        },
        {
          subtitle: 'Data Correction',
          description: 'You have the right to correct any inaccurate or incomplete personal information.'
        },
        {
          subtitle: 'Data Deletion',
          description: 'You can request deletion of your personal data, subject to legal and business requirements.'
        },
        {
          subtitle: 'Data Portability',
          description: 'You can request a copy of your data in a portable format for transfer to another service.'
        }
      ]
    },
    {
      title: 'Cookie Policy',
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Essential Cookies',
          description: 'Required for basic website functionality, account authentication, and shopping cart operations.'
        },
        {
          subtitle: 'Analytics Cookies',
          description: 'Help us understand how visitors interact with our website to improve user experience.'
        },
        {
          subtitle: 'Preference Cookies',
          description: 'Remember your settings and preferences to provide a personalized experience.'
        },
        {
          subtitle: 'Cookie Management',
          description: 'You can manage cookie preferences through your browser settings or our cookie management tool.'
        }
      ]
    }
  ];

  return (
    <section className=" py-16 ">
      <div className="max-w-4xl mx-auto pb-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Privacy Policy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-4">
          {privacyData.map((section, index) => (
            <div
              key={index}
              className=" rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-green-400">
                    {section.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {section.title}
                  </h3>
                </div>
                {expandedSection === section.title ? (
                  <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expandedSection === section.title && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-6">
                    {/* Show expanded content for "How We Use Data" */}
                    {section.title === 'How We Use Data' && section.expanded && (
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {section.expanded}
                      </p>
                    )}
                    
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h4 className="text-green-400 font-semibold mb-2">
                            {item.subtitle}
                          </h4>
                          <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 rounded-xl p-6 border border-gray-700">
          <h3 className="text-green-400 font-bold text-xl mb-4">
            Questions About Privacy?
          </h3>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy or how we handle your data, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Contact Privacy Team
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Download Full Policy
            </button>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: January 2025 | Effective Date: January 1, 2025
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Privacy;