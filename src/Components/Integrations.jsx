import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Integrations = () => {
  const brands = [
    { name: 'Jira', color: 'hover:text-blue-500', border: 'hover:border-blue-500/50', bg: 'hover:bg-blue-500/10' },
    { name: 'GitHub', color: 'hover:text-gray-200', border: 'hover:border-gray-200/50', bg: 'hover:bg-gray-500/10' },
    { name: 'GitLab', color: 'hover:text-orange-500', border: 'hover:border-orange-500/50', bg: 'hover:bg-orange-500/10' },
    { name: 'Azure DevOps', color: 'hover:text-sky-500', border: 'hover:border-sky-500/50', bg: 'hover:bg-sky-500/10' },
    { name: 'Slack', color: 'hover:text-fuchsia-500', border: 'hover:border-fuchsia-500/50', bg: 'hover:bg-fuchsia-500/10' },
    { name: 'Teams', color: 'hover:text-indigo-500', border: 'hover:border-indigo-500/50', bg: 'hover:bg-indigo-500/10' },
  ];

  return (
    <section className="py-20 bg-[#050810] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-12"
        >
          Integrates Seamlessly <span className="text-teal-400">With</span>
        </motion.h3>

        {/* Integration Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                px-8 py-4 rounded-xl border border-gray-800 bg-[#0A0F1C] 
                text-gray-400 font-semibold text-lg cursor-default transition-all duration-300
                ${brand.color} ${brand.border} ${brand.bg} hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]
              `}
            >
              {brand.name}
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm font-medium"
        >
          <div className="p-1 rounded-full bg-gray-800/50">
            <Plus size={14} className="text-teal-500" />
          </div>
          <span>and many more via extensible integrations</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Integrations;