import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // NavLink hata diya kyunki hum scroll use kar rahe hain
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_SRC = "/path-to-your-logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 1. Change: Paths ki jagah hum 'targetId' use karenge jo section ki ID hogi
    const navLinks = [
        { name: 'Home', targetId: 'home' },
        { name: 'Problem', targetId: 'problem' },
        { name: 'Solution', targetId: 'solution' },
        { name: 'Products', targetId: 'products' },
        { name: 'Platform', targetId: 'platform' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // 2. New Function: Ye smooth scroll handle karega with Offset
    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Default jump rokne ke liye

        const element = document.getElementById(targetId);
        if (element) {
            // Header height (80px) + thoda buffer (20px) = 100px minus karenge
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        // Mobile menu band kar do click ke baad
        setIsOpen(false);
    };

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#050810] border-b border-gray-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* --- Left Side: Logo (Clicking logo scrolls to top) --- */}
                    <a
                        href="#home"
                        onClick={(e) => handleScroll(e, 'home')}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="flex items-center gap-2">

                            <div className="h-8 w-8 bg-white rounded flex items-center justify-center overflow-hidden">
                                <img
                                    src={LOGO_SRC}
                                    alt="Logo"
                                    className="object-contain h-full w-full p-1"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '🌱' }}
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-wide">QULEAP INTELLIGENCE</h3>
                                <p className="text-[10px] text-gray-500 italic">PRIVATE LIMITED</p>
                            </div>

                        </div>

                    </a>

                    {/* --- Desktop Navigation --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`#${link.targetId}`}
                                    onClick={(e) => handleScroll(e, link.targetId)}
                                    className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <motion.button
                            onClick={(e) => handleScroll(e, "contact")}

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* --- Mobile Menu Button --- */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Navigation Dropdown --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#050810] border-b border-gray-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`#${link.targetId}`}
                                    onClick={(e) => handleScroll(e, link.targetId)}
                                    className="block w-full text-center px-3 py-2 text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-900 rounded-md cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 w-full px-3">
                                <button
                                    onClick={() => handleScroll("contact")}

                                    className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;