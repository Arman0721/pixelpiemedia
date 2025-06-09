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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits, features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-200 border border-purple-500/20 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-200">
        <div className="text-purple-400 group-hover:text-cyan-400 transition-all duration-200">
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
        transition={{ duration: 0.2 }}
        className="inline-flex items-center text-cyan-400 font-semibold mt-8 hover:text-purple-400 transition-colors duration-200"
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      icon: <Newspaper size={32} />,
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to attract and retain customers.',
      benefits: [
        'Thought leadership',
        'Organic traffic growth',
        'Lead nurturing',
        'Brand authority'
      ],
      features: [
        'Content strategy',
        'Blog management',
        'SEO optimization',
        'Social distribution'
      ]
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Training & Support',
      description: 'Comprehensive training and support services for digital transformation.',
      benefits: [
        'Skill development',
        'Team enablement',
        'Knowledge transfer',
        'Ongoing support'
      ],
      features: [
        'Custom training',
        'Documentation',
        'Technical support',
        'Maintenance'
      ]
    },
    {
      icon: <Rocket size={32} />,
      title: 'Digital Strategy',
      description: 'Strategic digital transformation consulting for business growth.',
      benefits: [
        'Clear roadmap',
        'Competitive advantage',
        'Innovation focus',
        'Risk management'
      ],
      features: [
        'Market analysis',
        'Technology assessment',
        'Implementation planning',
        'ROI tracking'
      ]
    },
    {
      icon: <Award size={32} />,
      title: 'Brand Development',
      description: 'Comprehensive brand development and management services.',
      benefits: [
        'Brand recognition',
        'Market positioning',
        'Customer loyalty',
        'Brand consistency'
      ],
      features: [
        'Brand strategy',
        'Visual identity',
        'Guidelines development',
        'Brand monitoring'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
          >
            Start Your Digital Journey <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;