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
  Zap,
  Search,
  Share2,
  Mail,
  Target,
  BarChart2,
  Camera,
  Video,
  PenTool,
  Layout,
  Server
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
      icon: <Search size={32} />,
      title: 'SEO & Content Marketing',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO and content marketing strategies. We help you rank higher and attract qualified leads.',
      benefits: [
        'Increase organic traffic by 300%',
        'Improve search engine rankings',
        'Build domain authority',
        'Generate quality backlinks'
      ],
      features: [
        'Keyword research & optimization',
        'Content strategy & creation',
        'Technical SEO audit',
        'Link building campaigns'
      ]
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Media Marketing',
      description: 'Transform your social media presence with our strategic marketing solutions. We create engaging content and manage your social media channels to build strong connections with your audience.',
      benefits: [
        'Increase engagement by 200%',
        'Grow follower base organically',
        'Build brand awareness',
        'Drive social conversions'
      ],
      features: [
        'Content calendar & creation',
        'Community management',
        'Social media advertising',
        'Analytics & reporting'
      ]
    },
    {
      icon: <Mail size={32} />,
      title: 'Email Marketing',
      description: 'Create powerful email campaigns that convert. Our email marketing services help you nurture leads and maintain strong relationships with your customers.',
      benefits: [
        'Increase open rates by 150%',
        'Improve click-through rates',
        'Boost customer retention',
        'Drive repeat sales'
      ],
      features: [
        'Campaign strategy & design',
        'Automated workflows',
        'A/B testing',
        'Performance analytics'
      ]
    },
    {
      icon: <Target size={32} />,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted paid advertising campaigns. We manage your PPC campaigns across multiple platforms to drive qualified traffic and conversions.',
      benefits: [
        'Reduce cost per acquisition',
        'Increase conversion rates',
        'Improve ad relevance',
        'Target specific audiences'
      ],
      features: [
        'Google Ads management',
        'Social media advertising',
        'Display advertising',
        'Remarketing campaigns'
      ]
    },
    {
      icon: <BarChart2 size={32} />,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with our comprehensive analytics and reporting services. We help you understand your digital performance and optimize for better results.',
      benefits: [
        'Track ROI accurately',
        'Identify opportunities',
        'Optimize campaigns',
        'Measure success'
      ],
      features: [
        'Custom dashboard setup',
        'Performance tracking',
        'Conversion optimization',
        'Monthly reporting'
      ]
    },
    {
      icon: <Camera size={32} />,
      title: 'Content Creation',
      description: 'Create engaging visual content that captures attention and drives engagement. Our content creation services help you tell your brand story effectively.',
      benefits: [
        'Increase brand visibility',
        'Improve engagement rates',
        'Build brand identity',
        'Drive social sharing'
      ],
      features: [
        'Professional photography',
        'Graphic design',
        'Social media content',
        'Brand storytelling'
      ]
    },
    {
      icon: <Video size={32} />,
      title: 'Video Marketing',
      description: 'Leverage the power of video to engage your audience and drive conversions. We create compelling video content that tells your brand story.',
      benefits: [
        'Increase engagement by 250%',
        'Improve brand recall',
        'Drive social sharing',
        'Boost conversions'
      ],
      features: [
        'Video production',
        'Animation creation',
        'Social media videos',
        'Video advertising'
      ]
    },
    {
      icon: <PenTool size={32} />,
      title: 'Brand Design',
      description: 'Build a strong brand identity that resonates with your audience. Our branding services help you stand out in a crowded market.',
      benefits: [
        'Build brand recognition',
        'Increase brand value',
        'Improve brand perception',
        'Create brand loyalty'
      ],
      features: [
        'Logo design',
        'Brand guidelines',
        'Visual identity',
        'Brand strategy'
      ]
    },
    {
      icon: <Layout size={32} />,
      title: 'Website Design',
      description: 'Create stunning, conversion-focused websites that drive results. Our web design services combine aesthetics with functionality.',
      benefits: [
        'Improve user experience',
        'Increase conversion rates',
        'Reduce bounce rates',
        'Build credibility'
      ],
      features: [
        'Custom design',
        'Responsive development',
        'UX optimization',
        'Performance tuning'
      ]
    },
    {
      icon: <Server size={32} />,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications that drive your business forward. Our development team creates robust solutions tailored to your needs.',
      benefits: [
        'Improve functionality',
        'Enhance performance',
        'Scale efficiently',
        'Ensure security'
      ],
      features: [
        'Custom development',
        'API integration',
        'Database design',
        'Security implementation'
      ]
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-commerce Solutions',
      description: 'Create powerful online stores that drive sales. We build e-commerce solutions that provide exceptional shopping experiences.',
      benefits: [
        'Increase online sales',
        'Improve conversion rates',
        'Enhance user experience',
        'Streamline operations'
      ],
      features: [
        'Custom store development',
        'Payment integration',
        'Inventory management',
        'Analytics setup'
      ]
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Social Media Management',
      description: 'Manage your social media presence effectively. We help you build and maintain strong connections with your audience.',
      benefits: [
        'Increase engagement',
        'Grow audience',
        'Build community',
        'Drive traffic'
      ],
      features: [
        'Content management',
        'Community engagement',
        'Campaign execution',
        'Performance tracking'
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