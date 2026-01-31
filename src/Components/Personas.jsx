import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, LineChart, Users, Code2, CheckCircle2 } from 'lucide-react';

const Personas = () => {
  const personas = [
    {
      role: "CTOs & Heads of Engineering",
      icon: Briefcase,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50",
      needs: [
        "Need strategic clarity",
        "Require cross-team visibility",
        "Seek predictability in delivery"
      ]
    },
    {
      role: "Engineering Directors & VPs",
      icon: LineChart,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50",
      needs: [
        "Focused on team performance",
        "Want early warnings",
        "Manage dependencies and release pressures"
      ]
    },
    {
      role: "Engineering Managers",
      icon: Users,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/50",
      needs: [
        "Need insights into team workload, blockers, and risks",
        "Require smooth onboarding of new engineers"
      ]
    },
    {
      role: "Developers",
      icon: Code2,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/50",
      needs: [
        "Want less manual overhead",
        "Need clarity and context",
        "Benefit from intelligent assistance across tasks"
      ]
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[#050810] relative">
      {/* Background Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Primary <span className="text-teal-400">User Personas</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tailored intelligence for every level of the engineering organization.
          </p>
        </div>

        {/* Personas Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                group flex flex-col p-6 rounded-2xl border border-gray-800 bg-[#0A0F1C] 
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${persona.border}
              `}
            >
              {/* Header: Icon & Role */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`p-4 rounded-full ${persona.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <persona.icon className={`w-8 h-8 ${persona.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {persona.role}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-800 mb-6 group-hover:bg-gray-700 transition-colors" />

              {/* Needs List */}
              <ul className="space-y-3 flex-grow">
                {persona.needs.map((need, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <CheckCircle2 className={`w-4 h-4 ${persona.color} mt-0.5 shrink-0 opacity-70`} />
                    <span className="leading-snug">{need}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Personas;