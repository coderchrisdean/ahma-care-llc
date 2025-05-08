import React from 'react';
import { ArrowRight, BarChart, Code, Database } from 'lucide-react';

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

interface ServiceOption {
  id: number;
  title: string;
  description: string;
  pricing: string;
  icon: React.ReactNode;
  linkText: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useScrollNavigation();

  const serviceOptions: ServiceOption[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Responsive and modern websites and web applications tailored to your business needs.',
      pricing: 'Starting at $2,500',
      icon: <Code className="h-12 w-12 text-blue-600" />,
      linkText: 'Get Quote',
      features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Performance Focused']
    },
    {
      id: 2,
      title: 'Custom Software',
      description: 'Bespoke software solutions designed specifically for your unique business processes.',
      pricing: 'Starting at $5,000',
      icon: <Database className="h-12 w-12 text-blue-600" />,
      linkText: 'Get Quote',
      features: ['Tailored Solution', 'Scalable Architecture', 'Ongoing Support', 'User Training']
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Transform your raw data into valuable insights and actionable business intelligence.',
      pricing: 'Custom pricing',
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      linkText: 'Contact Us',
      features: ['Data Visualization', 'Custom Dashboards', 'Predictive Analytics', 'Reporting Tools']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose from our range of professional services to accelerate your digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceOptions.map(option => (
            <div 
              key={option.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="p-8 text-center">
                {option.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="mb-4 text-center">
                  <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm font-bold">
                    {option.pricing}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2 uppercase">
                    Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-y-1">
                    {option.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full transition-colors flex items-center justify-center"
                >
                  {option.linkText}
                  <ArrowRight className="h-5 w-5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;