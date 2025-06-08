import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
        { name: 'Web Development', href: '/services#web-development' },
        { name: 'Mobile Apps', href: '/services#mobile-apps' },
        { name: 'Digital Marketing', href: '/services#digital-marketing' },
        { name: 'UI/UX Design', href: '/services#ui-ux-design' },
      ],
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu}>
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`relative group px-3 py-2 rounded-md text-sm font-medium ${
                      isScrolled
                        ? 'text-gray-800 hover:text-purple-600'
                        : 'text-white hover:text-purple-300'
                    } ${location.pathname === link.href ? 'text-purple-600' : ''} flex items-center`}
                    onClick={() => !link.dropdown && closeMenu()}
                  >
                    {link.name}
                    {link.dropdown && (
                      <span className="ml-1">
                        <ChevronDown size={16} />
                      </span>
                    )}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block transition-all duration-200 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? 'text-gray-800 hover:text-purple-600'
                  : 'text-white hover:text-purple-300'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center">
                <Link
                  to={!link.dropdown ? link.href : '#'}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-600 ${
                    location.pathname === link.href ? 'text-purple-600' : ''
                  }`}
                  onClick={() => !link.dropdown && closeMenu()}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="px-3 py-2 text-gray-800"
                  >
                    {activeDropdown === link.name ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                )}
              </div>
              
              {link.dropdown && activeDropdown === link.name && (
                <div className="pl-4 pb-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;