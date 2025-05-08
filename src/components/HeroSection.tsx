import React from 'react';

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

const HeroSection: React.FC = () => {
  const { scrollToSection } = useScrollNavigation();
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="hero-badge">
          <h2 className="text-xl md:text-2xl font-medium text-green-300">Transform Your Business Today</h2>
        </div>
        <h1 className="hero-title">
          Innovate with <span className="text-green-400">Echo Tech Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Cutting-edge software solutions and IT consulting for modern businesses. Elevate your digital presence.
        </p>
        <div className="hero-cta-container">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="hero-cta btn btn-primary btn-rounded"
          >
            Get Started
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="hero-cta btn btn-secondary btn-rounded"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;