import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050810] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Back to Home Button --- */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back To Home
          </Link>
        </div>

        {/* --- Header --- */}
        <div className="border-b border-gray-800 pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-teal-500/10 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy (Detailed)</h1>
          </div>
          <p className="text-gray-500">Last Updated: January 2026</p>
        </div>

        {/* --- Content --- */}
        <div className="space-y-12 leading-relaxed text-lg">
          
          {/* Intro */}
          <p className="text-gray-400">
            Quleap Intelligence Private Limited (“Company”, “we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and protect the personal information of visitors, customers, and platform users.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            
            <div className="space-y-6">
              <div className="bg-[#0A0F1C] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">1.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                  <li>Name, email, phone number</li>
                  <li>Company details</li>
                  <li>Communication messages</li>
                  <li>Demo/Contact form submissions</li>
                  <li>Billing information (for paid users)</li>
                </ul>
              </div>

              <div className="bg-[#0A0F1C] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">1.2 Information Collected Automatically</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device details</li>
                  <li>Interaction patterns on our website</li>
                  <li>Log data, timestamps, and clickstream information</li>
                </ul>
              </div>

              <div className="bg-[#0A0F1C] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">1.3 Platform/Integration Data</h3>
                <p className="mb-3">When connecting with platforms like Jira, GitHub, GitLab, Slack, or others (optional), we may process:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
                  <li>Repository metadata</li>
                  <li>Issue metadata</li>
                  <li>CI/CD signal data</li>
                  <li>Chat meta-information</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500 italic">We do not collect private user data unless explicitly authorized.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>To provide and improve our services</li>
              <li>To respond to inquiries and support requests</li>
              <li>To personalize platform experiences</li>
              <li>For analytics and product development</li>
              <li>To ensure security and integrity</li>
              <li>For legal compliance</li>
            </ul>
            <p className="mt-4 text-teal-400 font-medium">We do not sell your personal information.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
            <p className="mb-4">We may share information with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Trusted service providers</li>
              <li>Infrastructure providers</li>
              <li>Legal authorities (only when required)</li>
            </ul>
            <p className="mt-4 text-gray-500 italic">We do not share data for advertising or resale.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
            <p className="mb-4">We implement:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Encryption at rest and in transit</li>
              <li>Access controls</li>
              <li>Audit logs</li>
              <li>Secure infrastructure practices</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="mb-4">You may request:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Restriction</li>
              <li>Export</li>
            </ul>
            <p className="mt-4">
              Contact <a href="mailto:privacy@quleap.in" className="text-teal-400 hover:underline">privacy@quleap.in</a> for requests.
            </p>
          </section>

          {/* Section 6, 7, 8 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-gray-400">We retain user data only for as long as required to deliver services and meet legal obligations.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p className="text-gray-400">Our website may contain external links. We are not responsible for their privacy practices.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Updates to Policy</h2>
              <p className="text-gray-400">We may update this policy periodically. Updates will be posted on this page.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;