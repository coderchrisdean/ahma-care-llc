import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = React.useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: 'What types of businesses do you work with?',
      answer: 'We work with businesses of all sizes across various industries. From startups to enterprise corporations, our flexible approach allows us to tailor our services to meet your specific needs and budget constraints.'
    },
    {
      id: 2,
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on scope and complexity. A simple website might take 3-4 weeks, while a custom software solution could take several months. During our initial consultation, we will provide a detailed timeline based on your specific requirements.'
    },
    {
      id: 3,
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages. These range from basic monitoring and security updates to comprehensive support with dedicated response times. We can customize a maintenance plan that suits your needs and budget.'
    },
    {
      id: 4,
      question: 'What technologies do you specialize in?',
      answer: 'Our team is proficient in a wide range of technologies including React, Angular, Node.js, Python, PHP, AWS, Azure, and more. We stay up-to-date with the latest advancements to ensure we are using the most appropriate tools for each project.'
    },
    {
      id: 5,
      question: 'How much does a typical project cost?',
      answer: 'Project costs vary based on requirements, complexity, and timeline. We provide detailed quotes after understanding your specific needs during our initial consultation. We are transparent about pricing and work hard to deliver maximum value within your budget.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center ${
                  openId === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                } transition-colors`}
                onClick={() => toggleFaq(item.id)}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                {openId === item.id ? 
                  <Minus className="h-5 w-5 flex-shrink-0" /> : 
                  <Plus className="h-5 w-5 flex-shrink-0" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-white rounded-b-lg shadow-md border-t border-blue-100">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Still have questions? Contact us directly
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;