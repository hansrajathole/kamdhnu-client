import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useNavigate , useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate()
  const location = useLocation()


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@kamdhnu.com',
      href: 'mailto:hello@kamdhnu.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: '123 Cream & Gold Lane, Pune, Maharashtra',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <section className=" py-16 ">
      <div className="max-w-6xl mx-auto pb-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Have a question about products or subscriptions? Send us a message and we'll get back shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className=" rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-8">
              Write to us
            </h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-400 font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors duration-200"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full  border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors duration-200"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full  border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors duration-200 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-600 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-8">
              Contact info
            </h3>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-green-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{info.label}:</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white text-lg hover:text-green-400 transition-colors duration-200"
                        target={info.label === 'Address' ? '_blank' : undefined}
                        rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-12  rounded-xl p-6 border border-gray-700">
              <h4 className="text-green-400 font-bold text-lg mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="text-white">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="tel:+919876543210"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
     {
        location.pathname === "/contact" && <Footer/>
     }
    </section>
  );
};

export default ContactUs;