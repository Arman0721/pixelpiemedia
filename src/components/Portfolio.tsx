import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Palette, TrendingUp, Globe, ShoppingBag, MessageCircle, Database, Shield } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      description: 'Advanced analytics platform with real-time data visualization and AI-driven insights for business intelligence.',
      technologies: ['React', 'TypeScript', 'TensorFlow.js', 'D3.js', 'AWS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Telemedicine Platform',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
      description: 'Cross-platform telemedicine app connecting patients with healthcare providers worldwide.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'HIPAA Compliance'],
      link: '#'
    },
    {
      id: 3,
      title: 'Smart Home Ecosystem',
      category: 'web',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      description: 'IoT-based smart home platform with energy monitoring and automated controls.',
      technologies: ['IoT', 'React', 'Node.js', 'MongoDB', 'MQTT'],
      link: '#'
    },
    {
      id: 4,
      title: 'AI Marketing Suite',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg',
      description: 'Comprehensive marketing platform with AI-driven campaign optimization and analytics.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Google Analytics'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blockchain Trading Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/8370711/pexels-photo-8370711.jpeg',
      description: 'Secure cryptocurrency trading platform with real-time market analysis and portfolio management.',
      technologies: ['React', 'Web3.js', 'Node.js', 'MongoDB', 'WebSocket'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness & Wellness App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg',
      description: 'AI-powered fitness app with personalized workout plans and nutrition tracking.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'HealthKit'],
      link: '#'
    },
    {
      id: 7,
      title: 'E-Learning Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
      description: 'Interactive learning management system with live classes and course creation tools.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      link: '#'
    },
    {
      id: 8,
      title: 'Social Commerce App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description: 'Innovative social commerce platform combining social media with e-commerce.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      id: 9,
      title: 'Cloud Infrastructure Solution',
      category: 'cloud',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      description: 'Enterprise-grade cloud infrastructure with automated scaling and monitoring.',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      link: '#'
    },
    {
      id: 10,
      title: 'Cybersecurity Platform',
      category: 'security',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
      description: 'Advanced threat detection and prevention system using AI and machine learning.',
      technologies: ['Python', 'TensorFlow', 'React', 'Elasticsearch'],
      link: '#'
    },
    {
      id: 11,
      title: 'Digital Asset Management',
      category: 'web',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'Enterprise DAM solution with AI-powered asset organization and search.',
      technologies: ['React', 'Node.js', 'AWS S3', 'Elasticsearch'],
      link: '#'
    },
    {
      id: 12,
      title: 'Supply Chain Management',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
      description: 'Blockchain-based supply chain management system with real-time tracking.',
      technologies: ['React', 'Hyperledger', 'Node.js', 'MongoDB'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'marketing', label: 'Marketing', icon: TrendingUp },
    { key: 'cloud', label: 'Cloud Solutions', icon: Database },
    { key: 'security', label: 'Security', icon: Shield },
    { key: 'enterprise', label: 'Enterprise', icon: ShoppingBag },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Digital Excellence
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of innovative digital solutions that have transformed businesses across industries. From web applications to mobile apps, we deliver excellence in every project.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon size={18} />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-purple-900 p-1"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-semibold bg-purple-500/30 text-purple-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 opacity-0 group-hover:opacity-100 delay-300"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
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
            Start Your Project <ExternalLink className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;