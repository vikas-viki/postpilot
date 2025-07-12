'use client';

import { Grid2X2, Infinity, WandSparkles } from 'lucide-react';
import Navbar from '../ui/Navbar';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navbar />



      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl h-full mx-auto">
          <div className="text-center w-full flex flex-col items-center justify-center h-full">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Let Your LinkedIn Posts Speak for You
                </h1>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-6 sm:mt-8 leading-relaxed max-w-2xl mx-auto">
              PostPilot is your minimalist AI assistant for professional content.
            </p>

            <div className="flex justify-center mt-8 sm:mt-12">
              <button className="rounded-full px-6 py-3 bg-sky-500 text-white hover:bg-sky-600 transition-all duration-300 font-medium shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floating-updown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-floating-updown {
          animation: floating-updown 3s ease-in-out infinite;
        }
        @keyframes floating-updown2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(16px); }
        }
        .animate-floating-updown2 {
          animation: floating-updown2 3.5s ease-in-out infinite;
        }
        @keyframes floating-updown3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-floating-updown3 {
          animation: floating-updown3 2.7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 