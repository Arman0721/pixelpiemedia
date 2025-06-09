import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-purple-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Users size={40} />,
      title: 'Client-Centric Approach',
      description: 'We prioritize your needs and goals above all else, ensuring solutions that truly serve your business.',
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to design to customer service.',
    },
    {
      icon: <Target size={40} />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'We genuinely love what we do, bringing enthusiasm and dedication to every project.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About PIXELPIEMEDIA</h2>
            <div className="w-16 h-1 bg-purple-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to revolutionize digital experiences, PIXELPIEMEDIA has emerged as a leading force in the digital solutions landscape. We combine creativity with technical expertise to deliver innovative solutions that drive business growth and user engagement.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that are not just technically excellent but also aligned with your business objectives and user needs. We stay ahead of industry trends and leverage cutting-edge technologies to ensure your digital presence remains competitive and impactful.
            </p>
            <p className="text-lg text-gray-600">
              We believe in building long-term partnerships with our clients, serving as a trusted advisor and technical partner throughout their digital journey. Our success is measured by the growth and success of our clients.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
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
                "Our mission is to empower businesses through innovative digital solutions that drive real results."
              </p>
              <p className="text-purple-600 font-bold">
                - CEO, PIXELPIEMEDIA
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
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
      </div>
    </section>
  );
};

export default About;