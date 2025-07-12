'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this approved by LinkedIn?",
      answer: "Yes! PostPilot is fully compliant with LinkedIn's terms of service. We help you create original content that follows LinkedIn's community guidelines. Our AI generates unique posts based on your input, ensuring authenticity and compliance."
    },
    {
      question: "Can I edit posts after generation?",
      answer: "Absolutely! All AI-generated posts are fully editable. You can modify the content, tone, length, or any other aspect before publishing. PostPilot is designed to be a starting point that you can customize to perfectly match your voice and message."
    },
    {
      question: "How accurate is the tone-matching?",
      answer: "Our tone-matching technology is highly sophisticated, analyzing your existing LinkedIn posts, writing style, and professional background to create content that sounds authentically like you. Users report 95% satisfaction with how well the AI captures their unique voice and style."
    },
    {
      question: "What if I don't like the generated content?",
      answer: "You can regenerate content as many times as you want until you're satisfied. Our AI learns from your feedback and preferences, so the more you use PostPilot, the better it gets at matching your style and creating content you love."
    },
    {
      question: "Is my data secure?",
      answer: "Your privacy and data security are our top priorities. We use enterprise-grade encryption and never share your personal information or content with third parties. Your LinkedIn credentials are never stored, and all data is processed securely."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about PostPilot and AI-powered LinkedIn content creation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-sky-50 to-sky-100 border border-sky-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sky-200/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-sky-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-sky-600 transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-sky-800 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your LinkedIn Presence?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of professionals who are already using PostPilot to create engaging content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-sky-600 font-medium rounded-full hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-sky-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 