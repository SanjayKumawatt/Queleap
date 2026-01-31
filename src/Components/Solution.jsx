import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Network, Workflow, CheckCircle2 } from 'lucide-react';

const Solution = () => {
  const principles = [
    {
      number: "01",
      title: "AI-Native from Day One",
      icon: Cpu,
      description: "Our platform isn’t an add-on, plugin, or optional enhancement. It is built as an AI-first infrastructure, enabling each product to leverage organizational context, engineering semantics, and cross-system intelligence inherently.",
      list: []
    },
    {
      number: "02",
      title: "Unified Cross-System Reasoning",
      icon: Network,
      description: "We connect code, tickets, architecture decisions, CI/CD signals, conversations, and historical patterns into a single contextual network. This context allows Quleap to:",
      list: [
        "Identify hidden risks",
        "Detect design inconsistencies",
        "Highlight delivery pressure",
        "Surface early warnings",
        "Recommend enterprise improvements"
      ]
    },
    {
      number: "03",
      title: "Zero Disruption to Workflows",
      icon: Workflow,
      description: "You don’t have to replace your tools or force new behavioral patterns. Quleap integrates into your ecosystem and works silently in the background until needed.",
      list: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-[#050810] relative overflow-hidden" id='solution'>
      {/* Background Glow to distinguish from Problem section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-teal-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
            <Lightbulb size={16} />
            <span>THE SOLUTION</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quleap Intelligence: <br />
            <span className="text-teal-400">The Intelligence Backbone for Engineering</span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Quleap introduces a unified engineering intelligence layer that deeply understands your systems, processes, and workflows - enabling smoother collaboration, enhanced predictability, and faster delivery.
          </p>
        </motion.div>

        {/* --- Principles Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {principles.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#0A0F1C] border border-gray-800 p-8 rounded-2xl relative group hover:border-teal-500/30 transition-all duration-300"
            >
              {/* Large Background Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-800/20 select-none group-hover:text-teal-500/10 transition-colors">
                {item.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-teal-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                {item.description}
              </p>

              {/* Feature List (Specifically for Point 2) */}
              {item.list.length > 0 && (
                <ul className="space-y-3 relative z-10">
                  {item.list.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Solution;