import React from 'react';
import { Hero } from './components/Hero';
import { BenefitsGrid } from './components/BenefitsGrid';
import { WhatsInBox } from './components/WhatsInBox';
import { Testimonials } from './components/Testimonials';
import { CheckoutSection } from './components/CheckoutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-['Cairo',sans-serif] selection:bg-[#79E000] selection:text-[#050505] relative overflow-x-hidden">
      <main>
        <Hero />
        <BenefitsGrid />
        <WhatsInBox />
        <Testimonials />
        <CheckoutSection />
      </main>
      <Footer />
    </div>
  );
}
