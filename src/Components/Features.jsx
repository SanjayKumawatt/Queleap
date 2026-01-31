import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Zap, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Whole-Lifecycle Intelligence",
      description: "Our platform is built to understand the engineering lifecycle holistically - from idea to deployment to maintenance - ensuring insights remain accurate, connected, and proactive.",
      icon: Rocket,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Deep Context Awareness",
      description: "Instead of reacting to isolated tasks, our system reasons across repositories, tickets, conversations, CI/CD processes, and historical knowledge to deliver intelligent, situationally relevant guidance.",
      icon: Brain,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "hover:border-teal-500/50"
    },
    {
      title: "Zero Behavioral Disruption",
      description: "Teams don’t need to alter their workflows or adopt new dashboards. Quleap integrates naturally with the most widely used engineering ecosystems.",
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/50"
    },
    {
      title: "Meaningful Improvements, Immediately",
      description: "From reducing onboarding time to improving code quality and predicting delivery friction, Quleap brings measurable performance gains from the moment teams begin using the platform.",
      icon: TrendingUp,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#050810] relative">
      {/* Subtle Background Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Makes Quleap <span className="text-teal-400">Different</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-2xl border border-gray-800 bg-[#0A0F1C] transition-all duration-300 group ${feature.border}`}
            >
              <div className="flex items-start gap-6">
                {/* Icon Container */}
                <div className={`p-4 rounded-xl ${feature.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;