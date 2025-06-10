import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, ArrowRight, Globe, Smartphone, TrendingUp, Palette, Code, Database, Shield, Zap, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4 text-purple-600 bg-purple-100 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Users size={40} />,
      title: 'Client-Centric Approach',
      description: 'We prioritize your needs and goals above all else, ensuring solutions that truly serve your business and drive measurable results.',
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence in Delivery',
      description: 'We strive for the highest quality in everything we do, from code architecture to design aesthetics to customer service excellence.',
    },
    {
      icon: <Target size={40} />,
      title: 'Innovation & Technology',
      description: 'We constantly explore cutting-edge technologies and innovative approaches to deliver future-ready digital solutions.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion & Dedication',
      description: 'We genuinely love what we do, bringing enthusiasm, creativity, and unwavering dedication to every project we undertake.',
    },
  ];

  const achievements = [
    { number: '250+', label: 'Projects Completed', icon: <Code size={24} /> },
    { number: '12+', label: 'Years Experience', icon: <Clock size={24} /> },
    { number: '45+', label: 'Team Members', icon: <Users size={24} /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star size={24} /> },
  ];

  const services = [
    { name: 'Web Development & Design', icon: <Globe size={20} /> },
    { name: 'Mobile App Development', icon: <Smartphone size={20} /> },
    { name: 'Digital Marketing & SEO', icon: <TrendingUp size={20} /> },
    { name: 'UI/UX Design', icon: <Palette size={20} /> },
    { name: 'E-commerce Solutions', icon: <Database size={20} /> },
    { name: 'Cloud Services', icon: <Shield size={20} /> },
    { name: 'AI & Machine Learning', icon: <Zap size={20} /> },
    { name: 'Cybersecurity Solutions', icon: <Shield size={20} /> }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Visionary leader with 15+ years in digital transformation'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Technology expert specializing in scalable solutions'
    },
    {
      name: 'Amit Singh',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      description: 'Award-winning designer with a passion for user experience'
    },
    {
      name: 'Neha Gupta',
      role: 'Marketing Head',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      description: 'Digital marketing strategist driving growth for clients'
    }
  ];

  const milestones = [
    { year: '2012', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2015', title: 'First Major Client', description: 'Secured partnership with leading e-commerce platform' },
    { year: '2018', title: 'Team Expansion', description: 'Grew to 25+ talented professionals' },
    { year: '2020', title: 'Digital Transformation', description: 'Pivoted to remote-first, cloud-native solutions' },
    { year: '2022', title: 'AI Integration', description: 'Launched AI-powered development services' },
    { year: '2024', title: 'Global Reach', description: 'Serving clients across 15+ countries' }
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
              About PIXELPIEMEDIA
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through innovative digital solutions since 2012. We're passionate about creating exceptional digital experiences that drive growth, engagement, and lasting success for our clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story & Mission</h2>
              <div className="w-16 h-1 bg-purple-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize digital experiences, PIXELPIEMEDIA has emerged as a leading force in the digital solutions landscape. We combine creativity with technical expertise to deliver innovative solutions that drive business growth and user engagement.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that are not just technically excellent but also aligned with your business objectives and user needs. We believe in building long-term partnerships with our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups to enterprise-level organizations, we've helped businesses across various industries achieve their digital transformation goals through cutting-edge technology and innovative thinking.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="text-purple-600 mr-3">{service.icon}</div>
                    <span className="text-gray-700">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="PIXELPIEMEDIA team collaborating on digital solutions" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-semibold text-gray-800 text-lg mb-2">
                  "Our mission is to empower businesses through innovative digital solutions that drive real, measurable results."
                </p>
                <p className="text-purple-600 font-bold">
                  - Rajesh Kumar, CEO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence, innovation, and client satisfaction over the years.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-purple-600">
                  {achievement.icon}
                </div>
                <p className="text-4xl font-bold text-purple-600 mb-2">{achievement.number}</p>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering exceptional digital experiences and driving innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and evolution as a leading digital solutions provider.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-purple-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide everything we do and shape our company culture, driving us to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
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

export default About;