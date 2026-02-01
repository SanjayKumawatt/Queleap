import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ChevronRight } from 'lucide-react';

import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.jpeg";

// Replace with your actual logo path
const LOGO_SRC = "/path-to-your-logo.png";

const Footer = () => {
  // Navigation Links provided by you
  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Problem', targetId: 'problem' },
    { name: 'Solution', targetId: 'solution' },
    { name: 'Products', targetId: 'products' }, // Ensure <div id="products"> exists in App.jsx
    { name: 'Platform', targetId: 'platform' }, // Ensure <div id="platform"> exists in App.jsx
  ];

  // Scroll Handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] border-t border-gray-900 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* --- Column 1: Company Info --- */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <img src={logo2} className='h-12' alt="" />
              <img src={logo} className='h-13 ' alt="" />

            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Building the intelligence backbone for the next generation of software engineering teams.
            </p>

            {/* Address & Email */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  93, Sector 44, Pf Office,<br />
                  Gurgaon Sector 45, Gurgaon,<br />
                  Sector -45, Haryana, India, 122003
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="mailto:contact@quleapai.in" className="hover:text-white transition-colors">
                  contact@quleapai.in
                </a>
              </div>
            </div>
          </div>

          {/* --- Column 2: Quick Links (Scroll) --- */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => handleScroll(e, link.targetId)}
                    className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-teal-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Legal (Pages) --- */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group">
                  <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-teal-500 transition-colors" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group">
                  <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-teal-500 transition-colors" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Quleap Intelligence Private Limited. All rights reserved.
          </p>


        </div>

      </div>
    </footer>
  );
};

export default Footer;