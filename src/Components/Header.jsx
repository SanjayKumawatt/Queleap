import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_SRC = "/path-to-your-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Problem', targetId: 'problem' },
    { name: 'Solution', targetId: 'solution' },
    { name: 'Products', targetId: 'products' },
    { name: 'Platform', targetId: 'platform' },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setIsOpen(false);
  };

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 w-full overflow-x-hidden z-50 bg-[#050810] border-b border-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, 'home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="h-8 w-8 bg-white rounded flex items-center justify-center overflow-hidden">
              <img
                src={LOGO_SRC}
                alt="Logo"
                className="h-full w-full object-contain p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '🌱';
                }}
              />
            </div>
            <div className="leading-tight">
              <h3 className="text-white font-bold text-sm sm:text-lg">
                QULEAP INTELLIGENCE
              </h3>
              <p className="text-[10px] text-gray-500 italic">
                PRIVATE LIMITED
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <motion.button
              onClick={(e) => handleScroll(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-6 py-2 rounded-full"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full max-w-full overflow-x-hidden bg-[#050810] border-b border-gray-800"
          >
            <div className="w-full px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className="w-full text-center px-3 py-2 text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-900 rounded-md"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={(e) => handleScroll(e, 'contact')}
                className="mt-4 w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
