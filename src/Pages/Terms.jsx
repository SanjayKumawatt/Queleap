import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsConditions = () => {
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
              <FileText className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms & Conditions (Detailed)</h1>
          </div>
          <p className="text-gray-500">Last Updated: January 2026</p>
        </div>

        {/* --- Content --- */}
        <div className="space-y-10 leading-relaxed text-lg">
          
          <p className="text-gray-400">
            Welcome to Quleap Intelligence Private Limited. By accessing or using our website or services, you agree to the following Terms & Conditions.
          </p>

          {/* Section 1 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
            <p className="text-gray-400">
              Using our website signifies your agreement to comply with these Terms. If you do not agree, please discontinue using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">2. Use of Services</h3>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Use the platform ethically</li>
              <li>Avoid misuse, reverse engineering, or unauthorized access</li>
              <li>Respect intellectual property rights</li>
              <li>Provide accurate information when registering</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h3>
            <p className="text-gray-400">
              All content, trademarks, product names (FlowPilot, SignalGrid, PathGuide, MemoryCore, ControlSentinel, Q-CoreOS), logos, and designs belong to Quleap Intelligence Private Limited. <br />
              <span className="text-teal-400 mt-2 block">You may not replicate, redistribute, or modify any material without written permission.</span>
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">4. Service Availability</h3>
            <p className="mb-3">We aim for continuous availability but do not guarantee:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>uninterrupted access</li>
              <li>error-free operation</li>
              <li>data recovery in case of external failures</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h3>
            <p className="mb-3">Quleap Intelligence is not liable for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>indirect or consequential damages</li>
              <li>lost profits or lost data</li>
              <li>third-party service failures</li>
              <li>integration-related issues</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">6. External Integrations</h3>
            <p className="mb-3 text-gray-400">
              Users connecting to external tools (e.g., Jira, GitHub...) assume responsibility for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Permissions granted</li>
              <li>Data shared</li>
              <li>Access tokens / API keys</li>
            </ul>
            <p className="mt-3 text-gray-500 italic">We are not responsible for any third-party outages or changes.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">7. Termination</h3>
            <p className="mb-3">We may suspend or terminate services if:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
              <li>Terms are violated</li>
              <li>User activity threatens system security</li>
              <li>Fraudulent or malicious use is detected</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-3">8. Governing Law</h3>
            <p className="text-gray-400">
              These terms are governed by Indian law. Any disputes shall be handled by courts in Haryana, India.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-[#0A0F1C] border border-gray-800 p-6 rounded-xl mt-8">
            <h3 className="text-xl font-bold text-white mb-3">9. Contact Information</h3>
            <p className="text-gray-400 mb-2">For legal or compliance inquiries:</p>
            <a href="mailto:legal@quleap.in" className="flex items-center gap-2 text-teal-400 font-medium hover:underline text-lg">
              📧 legal@quleap.in
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;