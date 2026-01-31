import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  // 1. Updated State: Added 'subject' field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Book a Demo', // Default value
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending data
    console.log("Form Data Submitted:", formData); 

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form including subject
      setFormData({ name: '', email: '', subject: 'Book a Demo', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#050810] relative border-t border-gray-900" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Side: Contact Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Build the <br />
                <span className="text-teal-400">Future of Engineering</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to transform your engineering operations? Reach out to us for a demo, partnership inquiries, or to learn more about our intelligence suite.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg text-teal-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a href="mailto:contact@quleapai.in" className="text-gray-400 hover:text-teal-400 transition-colors">
                    contact@quleapai.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg text-teal-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    93, Sector 44, Pf Office,<br />
                    Gurgaon Sector 45, Gurgaon,<br />
                    Sector -45, Haryana, India, 122003
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0F1C] border border-gray-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#050810] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#050810] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* 2. New Field: Subject Dropdown */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">I am interested in</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#050810] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Book a Demo">Book a Demo</option>
                    <option value="Explore CrewPE">Explore Products</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership / Collaboration</option>
                    <option value="Support">Technical Support</option>
                  </select>
                  {/* Custom Arrow Icon for Dropdown */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#050810] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600 resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSuccess 
                    ? "bg-green-500/10 text-green-400 border border-green-500/50 cursor-default" 
                    : "bg-teal-500 hover:bg-teal-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Sending...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Request Sent</span>
                  </>
                ) : (
                  <>
                    <span>Send Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    Thank you! We have received your request regarding <strong>{formData.subject}</strong>.
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;