'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: 0,
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5 AI-generated posts per month",
        "Basic tone matching",
        "LinkedIn best practices",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro Plan",
      price: isAnnual ? 90 : 9,
      period: isAnnual ? "year" : "month",
      description: "For professionals who post regularly",
      features: [
        "Unlimited AI-generated posts",
        "Advanced tone matching",
        "Priority support",
        "Post scheduling",
        "Analytics dashboard",
        "Custom templates"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team Plan",
      price: isAnnual ? 290 : 29,
      period: isAnnual ? "year" : "month",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Multi-profile support",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Simple <span className="text-sky-500">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your LinkedIn content needs
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-black' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-sky-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-black' : 'text-gray-500'}`}>
              Annual <span className="text-sky-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-sky-300 shadow-sky-100' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-sky-600">${plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
                      : 'border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
} 