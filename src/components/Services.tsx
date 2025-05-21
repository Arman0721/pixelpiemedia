import React from 'react';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Code, 
  Database, 
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-purple-500/20 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
        <div className="text-purple-400 group-hover:text-cyan-400 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center text-white">
            <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
            Key Benefits
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center text-white">
            <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
            Features
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <motion.a 
        href="#contact"
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-cyan-400 font-semibold mt-8 hover:text-purple-400 transition-colors duration-300"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that captivate your audience and drive results. Our expert team combines cutting-edge technology with creative design to deliver exceptional web experiences.',
      benefits: [
        'Boost online visibility and engagement',
        'Increase conversion rates by up to 200%',
        'Enhance user experience across all devices',
        'Improve search engine rankings'
      ],
      features: [
        'Responsive design optimization',
        'Advanced SEO implementation',
        'Performance optimization',
        'Custom CMS integration'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Transform your ideas into powerful mobile applications that users love. We create native and cross-platform apps that deliver exceptional experiences and drive business growth.',
      benefits: [
        'Expand your market reach globally',
        'Boost user engagement by 150%',
        'Generate new revenue streams',
        'Build brand loyalty'
      ],
      features: [
        'Native iOS & Android development',
        'Cross-platform solutions',
        'Real-time updates & notifications',
        'Offline functionality'
      ]
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Accelerate your growth with data-driven digital marketing strategies. We help you reach your target audience, generate quality leads, and achieve measurable ROI.',
      benefits: [
        'Increase qualified leads by 300%',
        'Optimize marketing ROI',
        'Build brand authority',
        'Drive data-informed decisions'
      ],
      features: [
        'Advanced SEO strategies',
        'Social media campaigns',
        'PPC optimization',
        'Marketing automation'
      ]
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Create memorable digital experiences that users love. Our design team combines aesthetics with functionality to build interfaces that engage and convert.',
      benefits: [
        'Reduce bounce rates by 40%',
        'Increase user satisfaction',
        'Optimize conversion paths',
        'Strengthen brand identity'
      ],
      features: [
        'User research & testing',
        'Interactive prototyping',
        'Visual design excellence',
        'Conversion optimization'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software',
      description: 'Build powerful, scalable software solutions that transform your business operations. Our development team creates robust applications tailored to your unique needs.',
      benefits: [
        'Streamline business processes',
        'Reduce operational costs',
        'Increase efficiency by 200%',
        'Enable business growth'
      ],
      features: [
        'Enterprise applications',
        'API development',
        'System integration',
        'Cloud deployment'
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Cloud Solutions',
      description: 'Harness the power of cloud technology to scale your business efficiently. We provide comprehensive cloud services that optimize performance and reduce costs.',
      benefits: [
        'Cut infrastructure costs by 50%',
        'Enhance scalability',
        'Improve security',
        'Enable remote operations'
      ],
      features: [
        'Cloud migration expertise',
        'Infrastructure optimization',
        'Security implementation',
        'Performance monitoring'
      ]
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-Commerce',
      description: 'Launch and scale your online store with our comprehensive e-commerce solutions. We build powerful platforms that drive sales and deliver exceptional shopping experiences.',
      benefits: [
        'Increase online sales by 250%',
        'Expand market reach',
        'Optimize conversion rates',
        'Enhance customer experience'
      ],
      features: [
        'Custom shopping experience',
        'Secure payment integration',
        'Inventory management',
        'Analytics dashboard'
      ]
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Social Media Management',
      description: 'Dominate social media with strategic content and engagement. We help you build a strong online presence that connects with your audience and drives business growth.',
      benefits: [
        'Grow audience by 400%',
        'Increase engagement rates',
        'Build brand loyalty',
        'Drive qualified traffic'
      ],
      features: [
        'Content strategy & creation',
        'Community management',
        'Campaign optimization',
        'Performance analytics'
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your business with our comprehensive digital solutions. We combine innovation, expertise, and creativity to deliver results that exceed expectations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
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
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
          >
            Start Your Digital Journey <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;