import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              We deliver innovative digital solutions that help businesses thrive in today's competitive landscape. Our expert team crafts exceptional experiences that drive growth and success.
            </p>
            <div className="mt-6 flex space-x-4">
              {[
                { name: 'facebook', url: 'https://facebook.com/pixelpiemedia' },
                { name: 'twitter', url: 'https://twitter.com/pixelpiemedia' },
                { name: 'instagram', url: 'https://instagram.com/pixelpiemedia' },
                { name: 'linkedin', url: 'https://linkedin.com/company/pixelpiemedia' }
              ].map(platform => (
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
              {[
                'Web Development',
                'Mobile App Development',
                'Digital Marketing',
                'UI/UX Design',
                'Custom Software',
                'Cloud Solutions',
                'E-Commerce Solutions',
                'Digital Strategy',
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy Policy', href: '#privacy' },
                { name: 'Terms of Service', href: '#terms' },
                { name: 'Sitemap', href: '#sitemap' },
                { name: 'Blog', href: '#blog' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, industry insights, and digital transformation tips.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="mt-12 mb-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PIXELPIEMEDIA. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 text-purple-400">
            Designed by Sachin
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;