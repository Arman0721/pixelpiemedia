import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Jislabs Solution transformed our outdated website into a modern, user-friendly platform that has significantly increased our online leads. Their team was professional, responsive, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "The mobile app developed by Jislabs Solution has revolutionized how we engage with our customers. Their attention to detail and commitment to quality resulted in an app that our users love and that has boosted our conversion rates.",
      author: "Michael Chen",
      position: "CEO",
      company: "Bright Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "Working with Jislabs Solution on our digital marketing campaign was a game-changer for our brand. Their strategic approach and creativity helped us reach new audiences and achieve a 200% increase in engagement.",
      author: "Emily Rodriguez",
      position: "Brand Manager",
      company: "Luxe Retail",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-16 h-1 bg-purple-300 mx-auto mb-6"></div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Read what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -top-8 left-0 text-purple-200 opacity-40">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-purple-100"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-gray-700 italic mb-6 text-lg">
                  "{testimonials[currentIndex].content}"
                </p>
                <h4 className="font-bold text-xl text-gray-900">{testimonials[currentIndex].author}</h4>
                <p className="text-purple-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <span 
                  key={index}
                  className={`block w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-purple-300'
                  }`}
                ></span>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;