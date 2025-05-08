import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    { id: 1, text: 'Expert Team' },
    { id: 2, text: 'Cutting-Edge Tech' },
    { id: 3, text: 'Custom Solutions' },
    { id: 4, text: 'Fast Support' },
    { id: 5, text: 'Scalable Systems' },
    { id: 6, text: 'Affordable Pricing' },
  ];
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why leading businesses choose Echo Tech Solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At <span className="font-semibold text-blue-600">Echo Tech Solutions</span>, we build innovative digital solutions that empower businesses to achieve their goals. Since 2015, we've been delivering high-quality software and IT consulting services to clients across multiple industries.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our team of experienced developers, designers, and consultants works tirelessly to create customized solutions that address your unique business challenges. We're committed to using the latest technologies and best practices to ensure robust, scalable, and future-proof implementations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {benefits.map(benefit => (
              <div key={benefit.id} className="flex items-center bg-blue-50 p-3 rounded-lg shadow-sm">
                <span className="text-green-400 mr-2 bg-white p-1 rounded-full">
                  <CheckCircle className="h-5 w-5" />
                </span>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="#services" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-md"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;