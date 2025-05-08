import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

// Hook implementation directly in component to avoid import issues
const useScrollNavigation = ({ offset = 80 } = {}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScrollNavigation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navigationItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' }
  ];
  
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

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <span className="font-bold text-2xl">
                <span className="text-blue-600">Echo</span>
                <span className={isScrolled ? 'text-gray-800' : 'text-white'}>Tech</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 items-center">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={`#${item.href}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`nav-link hover:text-green-400 transition-colors ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#login" 
                  onClick={(e) => e.preventDefault()}
                  className="bg-green-400 text-blue-800 font-semibold py-3 px-6 hover:bg-green-500 transition-all shadow-sm whitespace-nowrap"
                  style={{ borderRadius: '24px 24px 24px 0' }}
                >
                  Client Portal
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center" 
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`bg-blue-800 w-full absolute left-0 shadow-md transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={`#${item.href}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block py-2 hover:text-green-400 transition-colors text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#login" 
                  onClick={(e) => e.preventDefault()}
                  className="block bg-green-400 text-blue-800 font-semibold py-2 px-4 hover:bg-green-500 transition-all text-center mt-2 whitespace-nowrap"
                  style={{ borderRadius: '24px 24px 24px 0' }}
                >
                  Client Portal
                </a>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-blue-700 text-sm text-white">
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span>(555) 123-4567</span>
              </div>
              <p>123 Innovation Dr, Tech City, CA 95123</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;