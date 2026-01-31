import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Radio, Compass, Cpu, ShieldCheck, Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: "flowpilot",
      title: "FlowPilot",
      subtitle: "AI Engineering Companion",
      description: "FlowPilot assists engineers throughout the entire lifecycle. It is not a simple assistant - it is a deep engineering collaborator.",
      icon: Bot,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      gradient: "from-blue-500/20 to-transparent",
      features: [
        "Intelligent requirement generation",
        "Architecture validation and improvement recommendations",
        "Automated test case creation",
        "PR reviews with contextual reasoning",
        "Code insights based on system patterns",
        "Design suggestions based on historical decisions"
      ]
    },
    {
      id: "signalgrid",
      title: "SignalGrid",
      subtitle: "Unified Engineering Signal Intelligence",
      description: "SignalGrid consolidates signals from multiple systems into a single, coherent intelligence layer. It turns fragmented data streams into meaningful engineering intelligence.",
      icon: Radio,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      gradient: "from-green-500/20 to-transparent",
      features: [
        "Real-time activity mapping across teams and tools",
        "CI/CD analysis and correlation",
        "Repo-level insights with contextual linking",
        "Noise filtering to surface only actionable data",
        "Detection of emerging trends in engineering activity"
      ]
    },
    {
      id: "pathguide",
      title: "PathGuide",
      subtitle: "Predictive Risk & Delivery Intelligence",
      description: "PathGuide looks ahead, giving teams visibility into risks long before they occur. Teams no longer react to problems - they anticipate them.",
      icon: Compass,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      gradient: "from-orange-500/20 to-transparent",
      features: [
        "Delivery risk projection",
        "Bottleneck and dependency prediction",
        "Flow distribution modeling",
        "Workload imbalance detection",
        "Release confidence scoring"
      ]
    },
    {
      id: "memorycore",
      title: "MemoryCore",
      subtitle: "Engineering Knowledge Intelligence",
      description: "MemoryCore builds an evolving engineering knowledge graph. This ensures organizational memory never fades, even as teams grow or members transition.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      gradient: "from-purple-500/20 to-transparent",
      features: [
        "Architectural decisions storage",
        "System evolution tracking",
        "Team patterns analysis",
        "Technical discussions archiving",
        "Reasoning behind critical changes"
      ]
    },
    {
      id: "controlsentinel",
      title: "ControlSentinel",
      subtitle: "Governance & Engineering Compliance",
      description: "ControlSentinel ensures engineering remains safe, compliant, and consistent without slowing teams down.",
      icon: ShieldCheck,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      gradient: "from-red-500/20 to-transparent",
      features: [
        "Usage monitoring",
        "Change audit trails",
        "Policy adherence signals",
        "Workflow compliance scoring",
        "Transparency for leadership"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#050810] relative" id='products'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Products <span className="text-gray-600 mx-2">|</span> <span className="text-teal-400">Quleap Intelligence Suite</span>
          </h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Products Stack */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* --- Text Content --- */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${product.bg}`}>
                    <product.icon className={`w-8 h-8 ${product.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{product.title}</h3>
                </div>
                
                <h4 className={`text-xl font-medium ${product.color}`}>
                  {product.subtitle}
                </h4>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="bg-[#0A0F1C] border border-gray-800 rounded-2xl p-6 mt-6">
                  <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Capabilities & Features</h5>
                  <ul className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${product.color} shrink-0 mt-0.5`} />
                        <span className="text-gray-400 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* --- Visual / Abstract UI --- */}
              <div className="flex-1 w-full">
                <div className={`relative w-full aspect-[4/3] rounded-3xl border border-gray-800 bg-gradient-to-br ${product.gradient} bg-opacity-5 backdrop-blur-sm overflow-hidden group`}>
                  
                  {/* Decorative Glow */}
                  <div className={`absolute -top-20 -right-20 w-60 h-60 ${product.bg} blur-[80px] rounded-full opacity-40`} />
                  
                  {/* Abstract Card Interface */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full border border-gray-700/50 bg-[#050810]/80 rounded-xl p-6 shadow-2xl flex flex-col relative z-10">
                      
                      {/* Fake Header UI */}
                      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                         <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/20" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                           <div className="w-3 h-3 rounded-full bg-green-500/20" />
                         </div>
                         <div className={`text-xs font-mono ${product.color} opacity-70`}>
                           sys_id: {product.id}_v1.0
                         </div>
                      </div>

                      {/* Fake Content UI */}
                      <div className="space-y-4 animate-pulse">
                         <div className="h-4 w-3/4 bg-gray-800 rounded" />
                         <div className="h-4 w-1/2 bg-gray-800 rounded" />
                         <div className="h-32 w-full bg-gray-800/50 rounded mt-4 border border-gray-700/30 dashed" />
                      </div>

                      {/* Centered Icon Overlay */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={`p-6 rounded-full bg-[#050810] border ${product.border} shadow-2xl`}>
                          <product.icon className={`w-12 h-12 ${product.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;