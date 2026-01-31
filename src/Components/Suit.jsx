import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Radio, Compass, Cpu, ShieldCheck, Layers } from 'lucide-react';

const Suite = () => {
  const products = [
    {
      name: "FlowPilot",
      tagline: "AI engineering companion",
      description: "An intelligent assistant that pairs with developers to automate routine tasks and suggest optimizations.",
      icon: Bot,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50"
    },
    {
      name: "SignalGrid",
      tagline: "Engineering signal intelligence",
      description: "Real-time visibility into engineering health, unifying signals from code commits to deployment metrics.",
      icon: Radio,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/50"
    },
    {
      name: "PathGuide",
      tagline: "Predictive risk & delivery engine",
      description: "Foresee delivery bottlenecks and project risks before they impact your release schedule.",
      icon: Compass,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50"
    },
    {
      name: "MemoryCore",
      tagline: "Engineering knowledge intelligence",
      description: "A centralized brain that retains context, documentation, and historical decisions forever.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
    {
      name: "ControlSentinel",
      tagline: "Governance & compliance intelligence",
      description: "Automated guardrails ensuring code quality, security standards, and compliance without slowing down.",
      icon: ShieldCheck,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500/50"
    },
    {
      name: "Q-CoreOS",
      tagline: "The underlying intelligence platform",
      description: "The foundational operating system that powers the entire Quleap intelligence ecosystem.",
      icon: Layers,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "group-hover:border-teal-500/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 bg-[#050810] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-teal-400">Intelligence Suite</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We offer an ecosystem of engineering intelligence tools built on a unified platform.
            Designed to work together, or stand alone.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-6 rounded-2xl bg-[#0A0F1C] border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${product.border}`}
            >
              {/* Icon & Title Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${product.bg}`}>
                  <product.icon className={`w-6 h-6 ${product.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <div className="mb-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${product.color} bg-opacity-10 py-1 px-2 rounded`}>
                  {product.tagline.split(' – ')[0]} {/* Simple extraction just in case */}
                </span>
              </div>
              
              {/* Divider */}
              <div className="h-px w-full bg-gray-800 my-4 group-hover:bg-gray-700 transition-colors" />

              {/* Tagline/Desc Text */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.tagline}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Suite;