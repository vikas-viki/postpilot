import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import FooterSection from './components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <FooterSection />
    </main>
  );
}
