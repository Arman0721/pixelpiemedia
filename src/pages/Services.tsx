import React from 'react';
import { 
  Globe, Smartphone, TrendingUp, Palette, Code, Database, 
  ShoppingBag, MessageCircle, ArrowRight, CheckCircle, Zap,
  Search, Share2, Mail, Target, BarChart2, Camera, Video,
  PenTool, Layout, Server, CloudCog, Shield, Cpu, Bot,
  Lightbulb, LineChart, Users, Megaphone, Newspaper,
  BookOpen, Rocket, Award
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, features, price }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
        <div className="text-purple-600 group-hover:text-cyan-600 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        
        {price && (
          <div className="mb-4">
            <span className="text-3xl font-bold text-purple-600">₹{price}</span>
            <span className="text-gray-600">/month</span>
          </div>
        )}
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
              Key Benefits
            </h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
              Features
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <motion.a 
        href="/contact"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="inline-flex items-center text-purple-600 font-semibold mt-8 hover:text-cyan-600 transition-colors duration-300"
      >
        Get Started <ArrowRight className="ml-2 w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'Custom web solutions built with modern technologies and best practices for optimal performance and user experience.',
      benefits: [
        'Responsive design for all devices',
        'Fast loading speeds',
        'SEO optimization',
        'Secure implementation'
      ],
      features: [
        'Custom development',
        'CMS integration',
        'E-commerce functionality',
        'Performance optimization'
      ],
      price: '15,000'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      benefits: [
        'Cross-platform compatibility',
        'Offline functionality',
        'Push notifications',
        'Fast performance'
      ],
      features: [
        'Native development',
        'React Native apps',
        'App Store optimization',
        'Analytics integration'
      ],
      price: '25,000'
    },
    {
      icon: <Search size={32} />,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
      benefits: [
        'Higher search rankings',
        'Increased organic traffic',
        'Better ROI',
        'Local SEO optimization'
      ],
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO',
        'Content strategy'
      ],
      price: '8,000'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Media Marketing',
      description: 'Strategic social media management to build brand awareness and engage your audience.',
      benefits: [
        'Increased engagement',
        'Brand awareness',
        'Lead generation',
        'Community building'
      ],
      features: [
        'Content creation',
        'Campaign management',
        'Analytics tracking',
        'Audience targeting'
      ],
      price: '5,999'
    },
    {
      icon: <PenTool size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
      benefits: [
        'Improved user experience',
        'Higher conversion rates',
        'Reduced bounce rates',
        'Brand consistency'
      ],
      features: [
        'User research',
        'Wireframing',
        'Prototyping',
        'Visual design'
      ],
      price: '12,000'
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Solutions',
      description: 'Innovative AI-powered solutions to automate processes and enhance decision-making.',
      benefits: [
        'Process automation',
        'Data-driven insights',
        'Improved efficiency',
        'Cost reduction'
      ],
      features: [
        'Machine learning',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI models'
      ],
      price: '35,000'
    },
    {
      icon: <CloudCog size={32} />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for improved performance, security, and reliability.',
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Disaster recovery'
      ],
      features: [
        'Cloud migration',
        'Infrastructure setup',
        'Monitoring',
        'Security implementation'
      ],
      price: '20,000'
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      benefits: [
        'Increased visibility',
        'Lead generation',
        'Brand awareness',
        'Higher conversions'
      ],
      features: [
        'PPC campaigns',
        'Email marketing',
        'Content strategy',
        'Analytics tracking'
      ],
      price: '10,000'
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      benefits: [
        'Online sales growth',
        'Secure payments',
        'Inventory management',
        'Customer analytics'
      ],
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Order management',
        'Mobile optimization'
      ],
      price: '30,000'
    }
  ];

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
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to elevate your business and drive growth in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive project roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution with cutting-edge technologies' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for maximum impact' }
            ].map((process, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center group"
              >
                View Our Work <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;