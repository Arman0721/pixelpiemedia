import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/6956914/pexels-photo-6956914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully responsive e-commerce platform with integrated payment gateway and inventory management.',
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Patient management app with appointment scheduling and health records management.',
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6956968/pexels-photo-6956968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity design including logo, color scheme, and marketing materials.',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Multi-platform social media campaign that increased engagement by 150%.',
    },
    {
      id: 5,
      title: 'Financial Services App',
      category: 'web',
      image: 'https://images.pexels.com/photos/7163895/pexels-photo-7163895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Secure banking platform with real-time transaction monitoring and investment tracking.',
    },
    {
      id: 6,
      title: 'Investment Portfolio App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Advanced investment portfolio management with real-time market data and AI-powered insights.',
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'branding', label: 'Branding' },
    { key: 'marketing', label: 'Marketing' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                <span className="inline-block px-3 py-1 bg-purple-500 text-xs font-semibold text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  {filters.find(f => f.key === project.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;