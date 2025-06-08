import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs: FAQItem[] = [
    {
      question: 'What services does PIXELPIEMEDIA offer?',
      answer: 'We offer comprehensive digital solutions including web development, mobile app development, digital marketing, UI/UX design, cloud services, AI solutions, and e-commerce development.',
      category: 'services'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning.',
      category: 'timeline'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Pricing depends on project scope, complexity, and timeline. Contact us for a custom quote.',
      category: 'pricing'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance optimization, and technical support.',
      category: 'support'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate with your existing team, provide consulting services, or work as an extension of your development team. We adapt to your preferred collaboration style.',
      category: 'collaboration'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern technologies including React, Node.js, Python, React Native, Flutter, AWS, MongoDB, PostgreSQL, and various AI/ML frameworks. We stay updated with the latest tech trends.',
      category: 'technology'
    },
    {
      question: 'Do you sign NDAs and confidentiality agreements?',
      answer: 'Yes, we take confidentiality seriously and are happy to sign NDAs and confidentiality agreements to protect your business information and intellectual property.',
      category: 'legal'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices including code reviews, testing protocols, quality assurance processes, and regular client feedback sessions to ensure high-quality deliverables.',
      category: 'quality'
    },
    {
      question: 'Can you help with digital marketing and SEO?',
      answer: 'Yes, we offer comprehensive digital marketing services including SEO, social media marketing, content marketing, PPC campaigns, and analytics to help grow your online presence.',
      category: 'marketing'
    },
    {
      question: 'What is your refund policy?',
      answer: 'Our refund policy varies by project type and stage. We work closely with clients to ensure satisfaction and will discuss refund options if project expectations are not met.',
      category: 'policy'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'services', label: 'Services' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'support', label: 'Support' },
    { key: 'technology', label: 'Technology' },
    { key: 'marketing', label: 'Marketing' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg p-6 text-center text-white hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Contact Form</h3>
              <p className="text-purple-100">Send us a detailed message</p>
            </motion.a>
            
            <motion.a 
              href="tel:+917500740941"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg p-6 text-center text-white hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-cyan-100">+91 7500740941</p>
            </motion.a>
            
            <motion.a 
              href="mailto:contact@pixelpiemedia.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg p-6 text-center text-white hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-purple-100">contact@pixelpiemedia.com</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;