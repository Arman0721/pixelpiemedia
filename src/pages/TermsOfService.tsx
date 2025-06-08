import React from 'react';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8 text-gray-600">
              <p><strong>Last updated:</strong> January 2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {[
                { icon: <FileText className="w-8 h-8" />, title: 'Agreement', desc: 'Legal agreement between you and PIXELPIEMEDIA' },
                { icon: <Scale className="w-8 h-8" />, title: 'Fair Terms', desc: 'Balanced terms that protect both parties' },
                { icon: <Shield className="w-8 h-8" />, title: 'Protection', desc: 'Your rights and our responsibilities' },
                { icon: <AlertCircle className="w-8 h-8" />, title: 'Important', desc: 'Please read carefully before using our services' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using PIXELPIEMEDIA's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                <p className="text-gray-600 mb-4">
                  PIXELPIEMEDIA provides digital solutions including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Web development and design services</li>
                  <li>Mobile application development</li>
                  <li>Digital marketing and SEO services</li>
                  <li>UI/UX design services</li>
                  <li>Cloud solutions and consulting</li>
                  <li>AI and machine learning solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Provide necessary access and resources for project completion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Payment schedules will be outlined in individual project agreements</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                  <li>Taxes are additional and will be charged as applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  Intellectual property rights are handled as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Client retains ownership of their content and data</li>
                  <li>PIXELPIEMEDIA retains rights to general methodologies and know-how</li>
                  <li>Custom code and designs become client property upon full payment</li>
                  <li>Third-party components remain subject to their respective licenses</li>
                  <li>PIXELPIEMEDIA may showcase completed work in portfolios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                <p className="text-gray-600 mb-4">
                  We respect the confidentiality of your business information and agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Keep all client information confidential</li>
                  <li>Use information only for project purposes</li>
                  <li>Implement appropriate security measures</li>
                  <li>Not disclose information to third parties without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  PIXELPIEMEDIA's liability is limited as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Total liability shall not exceed the project value</li>
                  <li>We are not liable for indirect or consequential damages</li>
                  <li>Client is responsible for data backup and security</li>
                  <li>We provide services "as is" without warranties beyond those stated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Project Timelines</h2>
                <p className="text-gray-600 mb-4">
                  Project timelines are estimates and may be affected by:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Client feedback and approval delays</li>
                  <li>Scope changes or additional requirements</li>
                  <li>Third-party dependencies</li>
                  <li>Force majeure events</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-600 mb-4">
                  Either party may terminate the agreement under certain conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Material breach of contract terms</li>
                  <li>Non-payment of fees</li>
                  <li>Mutual agreement</li>
                  <li>With appropriate notice period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms are governed by the laws of India. Any disputes will be resolved 
                  through arbitration in Firozabad, Uttar Pradesh.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> legal@pixelpiemedia.com<br />
                    <strong>Phone:</strong> +91 7500740941<br />
                    <strong>Address:</strong> C A AJAY GOYAL OFFICE, BARFKHANA CHAURAH, FIROZABAD 283203
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;