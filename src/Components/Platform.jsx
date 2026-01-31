import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, Network, Bot, Database, Plug, Layers } from 'lucide-react';

const Platform = () => {
  const components = [
    {
      title: "Semantic Intent Engine",
      description: "Understands engineering semantics, not just text. It recognizes architectural structures, coding principles, decision patterns, and technical relationships.",
      icon: BrainCircuit,
      color: "text-purple-400",
      border: "hover:border-purple-500/50",
      bg: "bg-purple-500/10"
    },
    {
      title: "Unified Context Network",
      description: "Connects all engineering data into a relational model capable of deep reasoning and long-term understanding.",
      icon: Network,
      color: "text-blue-400",
      border: "hover:border-blue-500/50",
      bg: "bg-blue-500/10"
    },
    {
      title: "Agent Execution Framework",
      description: "Allows deployment and scaling of autonomous AI agents specialized in various engineering tasks.",
      icon: Bot,
      color: "text-teal-400",
      border: "hover:border-teal-500/50",
      bg: "bg-teal-500/10"
    },
    {
      title: "Knowledge Fabric",
      description: "Creates an intelligent memory layer that evolves with your organization.",
      icon: Database,
      color: "text-orange-400",
      border: "hover:border-orange-500/50",
      bg: "bg-orange-500/10"
    },
    {
      title: "Flexible Tool Integrations",
      description: "Supports multiple systems through extensible connectors, allowing seamless integration without disruption.",
      icon: Plug,
      color: "text-green-400",
      border: "hover:border-green-500/50",
      bg: "bg-green-500/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='platform' className="py-24 bg-[#050810] relative overflow-hidden">
      
      {/* Tech Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header: The OS Core --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto bg-teal-500/10 rounded-2xl flex items-center justify-center border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.2)] mb-6"
          >
            <Cpu size={40} className="text-teal-400 animate-pulse" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Q-CoreOS <br />
            <span className="text-gray-500 text-2xl md:text-3xl font-medium block mt-2">
              The Operating System for Engineering Intelligence
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Q-CoreOS is the foundation that powers every Quleap product. It provides the infrastructure, intelligence models, and context engines that unify all engineering workflows.
          </motion.p>
        </div>

        {/* --- Components Grid --- */}
        <div className="relative">
          {/* Connecting Line (Visual Decor) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-teal-500/20 via-teal-500/10 to-transparent hidden lg:block" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Title for Grid */}
            <div className="lg:col-span-3 text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 border border-gray-800 px-4 py-2 rounded-full bg-[#0A0F1C]">
                Key Platform Components
              </span>
            </div>

            {components.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                // Centering logic: If it's the last item (index 4) and we are on large screen, center it? 
                // Alternatively, just let it flow. The grid looks good 3-2 split or fluid.
                className={`
                  bg-[#0A0F1C] border border-gray-800 p-8 rounded-xl relative group 
                  transition-all duration-300 hover:shadow-2xl ${item.border}
                  ${index === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : ''} 
                  ${index === 4 ? 'lg:col-start-2 lg:translate-x-1/2' : ''}
                  ${/* Override grid placement for cleaner look: First 3 top, last 2 centered bottom */ ''}
                `}
                style={ index > 2 ? { gridColumn: "auto" } : {} } // Reset inline styles if using simple grid
              >
                {/* Tech Corner Marker */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-2 h-2 ${item.bg.replace('bg-', 'bg-')} rounded-bl-full`} />
                </div>

                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Platform;