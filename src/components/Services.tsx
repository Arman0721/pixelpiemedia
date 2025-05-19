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
  CheckCircle
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
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-100"
    >
      <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all duration-300">
        <div className="text-purple-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <span className="w-8 h-0.5 bg-purple-600 mr-3"></span>
            Key Benefits
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <span className="w-8 h-0.5 bg-purple-600 mr-3"></span>
            Features
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <motion.a 
        href="#contact"
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-purple-600 font-semibold mt-8 hover:text-purple-700 transition-colors duration-300"
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
      description: 'Transform your online presence with custom-built, responsive websites that engage visitors and drive conversions. Our expert team delivers modern, scalable solutions tailored to your business needs.',
      benefits: [
        'Increased online visibility and brand awareness',
        'Higher conversion rates through optimized user experience',
        'Mobile-first design for maximum reach',
        'Improved search engine rankings'
      ],
      features: [
        'Custom responsive design',
        'SEO optimization',
        'Performance optimization',
        'Content management system'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Create powerful, user-friendly mobile applications that connect with your audience. We develop native and cross-platform apps that deliver exceptional experiences on iOS and Android.',
      benefits: [
        'Reach users on their preferred devices',
        'Increase customer engagement and retention',
        'Generate new revenue streams',
        'Strengthen brand loyalty'
      ],
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'Push notifications',
        'Offline functionality'
      ]
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven digital marketing strategies that increase brand visibility, generate qualified leads, and create meaningful customer engagement across all channels.',
      benefits: [
        'Targeted audience reach',
        'Measurable ROI on marketing spend',
        'Enhanced brand credibility',
        'Data-driven decision making'
      ],
      features: [
        'SEO and content marketing',
        'Social media management',
        'PPC advertising',
        'Email marketing campaigns'
      ]
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Create intuitive and visually stunning interfaces that enhance user satisfaction and strengthen your brand. Our design process focuses on user research and modern design principles.',
      benefits: [
        'Improved user satisfaction and retention',
        'Reduced development costs',
        'Higher conversion rates',
        'Stronger brand identity'
      ],
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design',
        'Interaction design'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software',
      description: 'Develop tailored software solutions that streamline your operations and solve complex business challenges. Our team creates scalable, secure, and maintainable applications.',
      benefits: [
        'Automated business processes',
        'Increased operational efficiency',
        'Competitive advantage',
        'Scalable solutions'
      ],
      features: [
        'Custom business applications',
        'API development',
        'Legacy system integration',
        'Cloud deployment'
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Cloud Solutions',
      description: 'Leverage cloud technology to optimize performance, reduce costs, and ensure scalability. We provide comprehensive cloud infrastructure and migration services.',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security',
        'Disaster recovery'
      ],
      features: [
        'Cloud migration',
        'Infrastructure management',
        'Security implementation',
        'Performance optimization'
      ]
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-Commerce',
      description: 'Build powerful online stores that drive sales and provide seamless shopping experiences. Our e-commerce solutions include everything you need to succeed in online retail.',
      benefits: [
        'Increased sales and revenue',
        'Expanded market reach',
        'Automated order processing',
        'Enhanced customer experience'
      ],
      features: [
        'Custom shopping cart',
        'Payment gateway integration',
        'Inventory management',
        'Analytics and reporting'
      ]
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Social Media Management',
      description: 'Build and maintain a strong social media presence that engages your audience and drives business growth. We create and execute comprehensive social media strategies.',
      benefits: [
        'Increased brand awareness',
        'Better customer engagement',
        'Higher website traffic',
        'Improved customer service'
      ],
      features: [
        'Content creation and curation',
        'Community management',
        'Analytics and reporting',
        'Campaign management'
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions designed to help your business thrive in today's competitive landscape. Each service is tailored to meet your specific needs and goals.
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
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
          >
            Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;