import React from 'react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-gradient"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss your project and create something amazing together. Get in touch with our team today.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              icon: <Phone className="w-8 h-8 text-purple-400" />,
              title: "Call Us",
              description: "Speak directly with our experts",
              contact: "+91 7500740941",
              href: "tel:+917500740941"
            },
            {
              icon: <Mail className="w-8 h-8 text-purple-400" />,
              title: "Email Us",
              description: "Send us your project details",
              contact: "contact@pixelpiemedia.com",
              href: "mailto:contact@pixelpiemedia.com"
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
              title: "WhatsApp",
              description: "Quick chat with our team",
              contact: "Start Chat",
              href: "https://wa.me/917500740941"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 transition-all duration-300 hover-lift group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <span className="text-cyan-400 hover:text-purple-400 transition-colors duration-300 font-semibold">
                {item.contact}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="/contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Free Consultation 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="/portfolio"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(147, 51, 234, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-purple-400 transition-all duration-300 inline-flex items-center justify-center group"
            >
              View Our Work 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;