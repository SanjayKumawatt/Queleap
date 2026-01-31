import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shuffle, FileWarning, EyeOff, Flame, AlertCircle } from 'lucide-react';

const Problem = () => {
  const challenges = [
    {
      title: "Too Many Disconnected Tools",
      icon: Wrench,
      color: "text-blue-400",
      content: "Engineering workflows today involve numerous tools - each optimized for a specific purpose but rarely designed to work together. Developers jump between project management software, version control, CI/CD dashboards, documentation platforms, and system monitors.",
      points: [
        "Repetitive manual work",
        "Loss of continuity",
        "High cognitive overhead",
        "Disjointed decision-making"
      ]
    },
    {
      title: "Constant Context Switching",
      icon: Shuffle,
      color: "text-orange-400",
      content: "Every switch from a code editor to a ticket or chat disrupts deep work. Over time, these micro-interruptions accumulate into hours of lost productivity, decreased focus, and increased error rates.",
      points: [] // No specific list provided for this one in prompt, but handled gracefully
    },
    {
      title: "Documentation & Knowledge Decay",
      icon: FileWarning,
      color: "text-yellow-400",
      content: "Critical knowledge often exists only in people’s minds or buried in chat threads. Engineering organizations struggle with:",
      points: [
        "Outdated documentation",
        "Missing architectural reasoning",
        "Lost technical decisions",
        "Hard-to-follow onboarding processes"
      ]
    },
    {
      title: "Lack of Unified Visibility",
      icon: EyeOff,
      color: "text-purple-400",
      content: "Managers and leaders often miss essential signals, resulting in leadership reacting late instead of proactively steering teams. Common blind spots include:",
      points: [
        "Upcoming delivery risks",
        "Dependency blocks",
        "Quality degradations",
        "CI/CD reliability issues"
      ]
    },
    {
      title: "Burnout, Slowdowns & Operational Drag",
      icon: Flame,
      color: "text-red-500", // Stronger color for burnout
      content: "When engineers spend more time coordinating work than actually building software, the organization suffers:",
      points: [
        "Longer release cycles",
        "Higher defect rates",
        "Declining morale",
        "Increased churn"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#050810] relative" id='problem'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={20} className="text-teal-500" />
            <span className="text-teal-500 font-bold tracking-wider text-sm uppercase">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Modern Engineering Is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              More Complex Than Ever
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed border-l-4 border-gray-800 pl-6">
            As software organizations scale, engineering teams face a growing set of challenges that directly impact speed, quality, and innovation. Many of these challenges arise not from lack of talent or effort, but from systemic issues that fragment context and complicate the engineering process.
          </p>
        </motion.div>

        {/* --- Challenges Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Conditional spanning: Make the last item span 2 cols on tablet, or full width if needed
              className={`bg-[#0A0F1C] border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-300 group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {item.content}
              </p>

              {item.points.length > 0 && (
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')} opacity-70`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* --- Closing Statement --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-light text-white">
            Engineering teams deserve better systems - <span className="text-teal-400 font-normal">systems that think with them, not against them.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Problem;