import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Echo Tech</h3>
            <p className="text-blue-200 mb-4">
              Innovative software solutions and IT consulting for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-green-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-green-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-green-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-green-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-green-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-green-400 transition-colors flex items-center">
                  Web Development
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-green-400 transition-colors flex items-center">
                  Custom Software
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-green-400 transition-colors flex items-center">
                  Data Analytics
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-green-400 transition-colors flex items-center">
                  IT Consulting
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-green-400 transition-colors flex items-center">
                  Cloud Solutions
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-blue-800 font-bold rounded-r-lg px-4"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-6 text-center text-blue-300 text-sm">
          <p>© {currentYear} Echo Tech Solutions. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;