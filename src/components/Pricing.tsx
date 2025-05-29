import React from 'react';
import { Check, Star, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, price, features, isPopular, buttonText, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative bg-white rounded-2xl shadow-xl p-8 ${
      isPopular ? 'border-2 border-purple-500' : 'border border-gray-200'
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 right-4 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold">₹{price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
        isPopular
          ? 'bg-purple-600 text-white hover:bg-purple-700'
          : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
      }`}
    >
      {buttonText}
    </button>
  </motion.div>
);

const OfferCard: React.FC<{
  title: string;
  discount: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, discount, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h4 className="text-xl font-semibold ml-3">{title}</h4>
    </div>
    <p className="text-3xl font-bold mb-2">{discount}</p>
    <p className="text-purple-100">{description}</p>
  </motion.div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Starter",
      price: "2999",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "4 Posts (Static)",
        "2 Reels",
        "Basic Highlights & Stories",
        "Instagram Page Setup",
        "Basic Caption Writing",
        "Monthly Analytics Report",
        "Email Support"
      ],
      icon: <Star className="w-8 h-8 text-purple-600" />,
      buttonText: "Get Started"
    },
    {
      title: "Basic",
      price: "5999",
      description: "Comprehensive social media management for growing businesses",
      features: [
        "8 Posts (1 Carousel, 2 Motion Posts)",
        "4 Reels",
        "Highlights & Stories",
        "Awareness & Reach Ads",
        "Instagram & Facebook Page Optimization",
        "Festival Creative Posts",
        "Caption Progress Report",
        "Brand-Themed Designs"
      ],
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      buttonText: "Most Popular",
      isPopular: true
    },
    {
      title: "Advanced",
      price: "9999",
      description: "Complete digital marketing solution with web development",
      features: [
        "12 Posts (2 Carousels, 4 Motion Posts)",
        "6 Reels",
        "Lead Generation Ads",
        "Awareness & Reach Ads",
        "Instagram & Facebook Page Optimization",
        "Festival Creative Posts",
        "Monthly Progress Report",
        "Web Development",
        "Brand-Themed Designs"
      ],
      icon: <Award className="w-8 h-8 text-purple-600" />,
      buttonText: "Go Advanced"
    }
  ];

  const offers = [
    {
      title: "Annual Discount",
      discount: "20% OFF",
      description: "Save big with yearly subscription",
      icon: <Star className="w-6 h-6 text-white" />
    },
    {
      title: "First Month",
      discount: "50% OFF",
      description: "Special discount for new clients",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Bundle Deal",
      discount: "Website + 3 months social media",
      description: "Complete digital presence package",
      icon: <Award className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Pricing Plans
          </motion.h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business growth and digital marketing needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Special Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-purple-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Plan?</h3>
            <p className="text-gray-600 mb-6">
              Contact us for tailored solutions that match your specific requirements
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;