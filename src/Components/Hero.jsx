import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  // 1. New: Scroll Handle Function
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Header height adjustment
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='home' className="relative bg-[#050810] min-h-screen flex items-center pt-30 pb-9 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Engineering Intelligence for the{' '}
              <span className="text-teal-400 block mt-2">
                {'{ Next Generation of Software Teams }'}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Quleap Intelligence builds AI-native systems designed to elevate engineering organizations into highly efficient, deeply informed, and intelligence-driven teams. Our platform blends contextual reasoning, lifecycle automation, and cross-system visibility to eliminate unnecessary engineering friction and unlock a new standard of operational clarity.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-base text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-teal-500/30 pl-4"
            >
              We believe engineering teams should spend time creating innovative solutions - not fighting scattered tools, missing documentation, or fragmented workflows. With Quleap, technical organizations gain an intelligence backbone that makes work feel fluid, connected, and remarkably faster.
            </motion.p>

            <motion.ul variants={itemVariants} className="space-y-4 py-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Rocket className="w-5 h-5 text-teal-400" />
                <span>End-to-end lifecycle intelligence</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Brain className="w-5 h-5 text-pink-400" />
                <span>Context-aware AI agents</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Zero behavioral change required</span>
              </li>
            </motion.ul>

            {/* Buttons with Scroll Functionality */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              {/* Button 1: Scrolls to 'contact' or 'solution' section */}
              <button 
                onClick={() => handleScroll('contact')} // Ensure you have <div id="contact"> in App.jsx
                className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all transform hover:scale-105 active:scale-95"
              >
                Book a Demo
              </button>
              
              {/* Button 2: Scrolls to 'crewpe' section */}
              <button 
                onClick={() => handleScroll('products')} // Ensure you have <div id="crewpe"> in App.jsx
                className="bg-transparent border border-teal-500/50 text-white hover:bg-teal-500/10 font-medium px-8 py-3 rounded-full transition-all flex items-center gap-2 group"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10 bg-[#0A0F1C] border border-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl bg-opacity-80 h-full w-full flex flex-col justify-center items-center text-center">
                 <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mb-6">
                    <Brain className="w-10 h-10 text-teal-400" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Intelligence First</h3>
                 <p className="text-gray-400 text-sm max-w-xs">
                   Your engineering data, unified and active.
                 </p>
                 
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute -top-6 -right-6 bg-[#111827] p-4 rounded-xl border border-gray-700 shadow-xl"
                 >
                    <Rocket className="w-6 h-6 text-pink-500" />
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                   className="absolute -bottom-6 -left-6 bg-[#111827] p-4 rounded-xl border border-gray-700 shadow-xl"
                 >
                    <Zap className="w-6 h-6 text-yellow-500" />
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;