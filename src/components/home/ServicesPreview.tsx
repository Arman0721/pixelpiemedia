import React from 'react';
import { Globe, Smartphone, TrendingUp, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
        <div className="text-purple-600 group-hover:text-cyan-600 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.a 
        href="/services"
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-purple-600 font-semibold hover:text-cyan-600 transition-colors duration-300"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure & Scalable']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support']
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics & Reporting']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a 
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
          >
            View All Services <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;