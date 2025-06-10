import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const serviceLinks = [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile App Development', href: '/services' },
    { name: 'Digital Marketing', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
    { name: 'SEO Services', href: '/services' },
    { name: 'Content Marketing', href: '/services' },
    { name: 'Social Media Management', href: '/services' },
    { name: 'E-Commerce Solutions', href: '/services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/pixelpiemedia', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com/pixelpiemedia', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com/pixelpiemedia', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/pixelpiemedia', icon: 'linkedin' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400">
              We deliver innovative digital solutions that help businesses thrive in today's competitive landscape. Our expert team crafts exceptional experiences that drive growth and success.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(platform => (
                <a 
                  key={platform.name} 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform.name}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="sr-only">{platform.name}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <address className="text-gray-400 not-italic">
                <p>PIXELPIEMEDIA</p>
                <p>C A AJAY GOYAL OFFICE</p>
                <p>BARFKHANA CHAURAH</p>
                <p>FIROZABAD 283203</p>
                <p className="mt-2">
                  <a href="tel:+917500740941" className="hover:text-purple-400 transition-colors duration-300">
                    +91 7500740941
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@pixelpiemedia.com" className="hover:text-purple-400 transition-colors duration-300">
                    contact@pixelpiemedia.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        <hr className="mt-12 mb-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PIXELPIEMEDIA. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 text-purple-400">
            Designed with ❤️ by PIXELPIEMEDIA
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;