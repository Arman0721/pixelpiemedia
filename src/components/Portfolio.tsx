import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Palette, TrendingUp } from 'lucide-react';

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
      title: 'FinTech Revolution',
      category: 'web',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Next-generation financial platform with AI-powered insights and real-time analytics.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      link: '#'
    },
    {
      id: 2,
      title: 'HealthTech Connect',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Revolutionary healthcare platform connecting patients with specialists worldwide.',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      link: '#'
    },
    {
      id: 3,
      title: 'EcoSmart Living',
      category: 'web',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Smart home automation system focused on energy efficiency and sustainability.',
      technologies: ['IoT', 'React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 4,
      title: 'Digital Marketing Hub',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'AI-driven marketing platform that optimizes campaign performance in real-time.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#'
    },
    {
      id: 5,
      title: 'CryptoTrade Pro',
      category: 'web',
      image: 'https://images.pexels.com/photos/8370711/pexels-photo-8370711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Advanced cryptocurrency trading platform with real-time market analysis.',
      technologies: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 6,
      title: 'FitLife Coach',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/8436709/pexels-photo-8436709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Personalized fitness coaching app with AI-powered workout recommendations.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
      link: '#'
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'marketing', label: 'Marketing', icon: TrendingUp },
    { key: 'branding', label: 'Branding', icon: Palette },
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
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of innovative digital solutions that have transformed businesses and delighted users worldwide.
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
      </div>
    </section>
  );
};

export default Portfolio;