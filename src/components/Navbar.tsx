import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services' },
        { name: 'Mobile Apps', href: '/services' },
        { name: 'Digital Marketing', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
      ],
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed w-full z-30 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link to="/" onClick={closeMenu}>
              <Logo />
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`relative group px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                      isScrolled
                        ? 'text-gray-800 hover:text-purple-600'
                        : 'text-white hover:text-purple-300'
                    } ${location.pathname === link.href ? 'text-purple-600' : ''} flex items-center`}
                    onClick={() => !link.dropdown && closeMenu()}
                  >
                    {link.name}
                    {link.dropdown && (
                      <span className="ml-1 transition-transform duration-300 group-hover:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  
                  {link.dropdown && (
                    <AnimatePresence>
                      <motion.div 
                        variants={dropdownVariants}
                        initial="closed"
                        whileHover="open"
                        className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg py-2 border border-gray-200/20 hidden group-hover:block"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 rounded-lg mx-2"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:text-purple-600 hover:bg-purple-50'
                  : 'text-white hover:text-purple-300 hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200/20">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={!link.dropdown ? link.href : '#'}
                      className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 ${
                        location.pathname === link.href ? 'text-purple-600 bg-purple-50' : ''
                      }`}
                      onClick={() => !link.dropdown && closeMenu()}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <motion.button
                        onClick={() => toggleDropdown(link.name)}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                      >
                        <motion.div
                          animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="pl-4 pb-2 overflow-hidden"
                      >
                        {link.dropdown.map((item, itemIndex) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                          >
                            <Link
                              to={item.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 rounded-lg"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;