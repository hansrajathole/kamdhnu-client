import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F1412] text-white py-12 px-4 border-t border-amber-300" >
          
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-semibold text-green-400">
                Kamdhnu
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium dairy products delivered fresh to your home.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Links */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="/policies/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:hello@kamdhnu.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  hello@kamdhnu.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-gray-400" />
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  @kamdhnu.dairy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-gray-400" />
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  @kamdhnu.cream.gold
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Kamdhnu. All rights reserved.
          </p>
          
          {/* Astronaut Icon */}
         
        </div>
      </div>

  
    </footer>
  );
};

export default Footer;