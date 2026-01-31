import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Building2, Globe, BarChart3, Target } from 'lucide-react';

const WhoWeServe = () => {
  const profiles = [
    {
      text: "High-growth technology startups scaling engineering",
      icon: Rocket,
    },
    {
      text: "Mid-sized product engineering teams",
      icon: Users,
    },
    {
      text: "Enterprise digital transformation initiatives",
      icon: Building2,
    },
    {
      text: "Distributed engineering teams requiring unified intelligence",
      icon: Globe,
    },
    {
      text: "Organizations struggling with velocity, visibility, or onboarding",
      icon: BarChart3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 bg-[#050810] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="text-teal-500 w-5 h-5" />
            <span className="text-teal-500 font-bold tracking-wider text-sm uppercase">Target Audience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who We <span className="text-teal-400">Serve</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ideal Organizations
          </p>
        </div>

        {/* Profiles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                group flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-[#0A0F1C] 
                hover:border-teal-500/30 hover:shadow-lg transition-all duration-300
                ${/* Center the last item if it's odd-numbered */ index === profiles.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
              `}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-colors shrink-0">
                <profile.icon className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </div>
              
              {/* Text */}
              <p className="text-gray-200 font-medium text-lg leading-snug group-hover:text-white transition-colors">
                {profile.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeServe;