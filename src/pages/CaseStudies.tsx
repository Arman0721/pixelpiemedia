import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  image: string;
  technologies: string[];
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Outdated platform with poor user experience leading to high cart abandonment rates and low conversion.',
      solution: 'Complete platform redesign with modern UI/UX, mobile optimization, and streamlined checkout process.',
      results: [
        { metric: 'Conversion Rate', value: '+150%', icon: <TrendingUp className="w-6 h-6" /> },
        { metric: 'User Engagement', value: '+200%', icon: <Users className="w-6 h-6" /> },
        { metric: 'Revenue Growth', value: '+300%', icon: <DollarSign className="w-6 h-6" /> },
        { metric: 'Load Time', value: '-60%', icon: <Clock className="w-6 h-6" /> }
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
    },
    {
      id: 2,
      title: 'Healthcare App Development',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Need for a comprehensive telemedicine platform to connect patients with healthcare providers remotely.',
      solution: 'Developed a secure, HIPAA-compliant mobile app with video consultations, appointment scheduling, and prescription management.',
      results: [
        { metric: 'Patient Satisfaction', value: '98%', icon: <Users className="w-6 h-6" /> },
        { metric: 'Consultation Time', value: '-40%', icon: <Clock className="w-6 h-6" /> },
        { metric: 'Provider Efficiency', value: '+180%', icon: <TrendingUp className="w-6 h-6" /> },
        { metric: 'Cost Reduction', value: '-50%', icon: <DollarSign className="w-6 h-6" /> }
      ],
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign',
      client: 'TechStartup Inc.',
      industry: 'Technology',
      challenge: 'Low brand awareness and limited online presence in a competitive market.',
      solution: 'Comprehensive digital marketing strategy including SEO, social media marketing, content creation, and PPC campaigns.',
      results: [
        { metric: 'Brand Awareness', value: '+400%', icon: <TrendingUp className="w-6 h-6" /> },
        { metric: 'Website Traffic', value: '+350%', icon: <Users className="w-6 h-6" /> },
        { metric: 'Lead Generation', value: '+250%', icon: <DollarSign className="w-6 h-6" /> },
        { metric: 'ROI', value: '+500%', icon: <TrendingUp className="w-6 h-6" /> }
      ],
      image: 'https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg',
      technologies: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Analytics', 'Content Management']
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
              Case Studies
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-2">
                        {study.industry}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h2>
                      <p className="text-lg text-purple-600 font-semibold">Client: {study.client}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="flex justify-center mb-2 text-purple-600">
                              {result.icon}
                            </div>
                            <p className="text-2xl font-bold text-purple-600">{result.value}</p>
                            <p className="text-sm text-gray-600">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;