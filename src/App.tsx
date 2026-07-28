/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeatureSpotlight } from './components/FeatureSpotlight';
import { BenefitsGrid } from './components/BenefitsGrid';
import { UseCasesSection } from './components/UseCasesSection';
import { GallerySection } from './components/GallerySection';
import { PortsOverview } from './components/PortsOverview';
import { WhatsInTheBox } from './components/WhatsInTheBox';
import { ComparisonSection } from './components/ComparisonSection';
import { TechSpecs } from './components/TechSpecs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CheckoutSection } from './components/CheckoutSection';
import { StickyMobileCta } from './components/StickyMobileCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030508] text-[#FFFFFF] font-['Cairo',sans-serif] selection:bg-[#33FF55] selection:text-[#030508] relative overflow-x-hidden">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* Main Page Body */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Problem Section (Emotional Storytelling & Before/After) */}
        <ProblemSection />

        {/* 5. Solution Section */}
        <SolutionSection />

        {/* 6. Feature Spotlight (Deep Dive Feature Highlights) */}
        <FeatureSpotlight />

        {/* 7. Benefits Grid (Verified Features) */}
        <BenefitsGrid />

        {/* 8. Use Cases (Visual Scenarios) */}
        <UseCasesSection />

        {/* 9. Product Gallery */}
        <GallerySection />

        {/* 10. Ports Inspector Overview */}
        <PortsOverview />

        {/* 11. What's Inside The Box */}
        <WhatsInTheBox />

        {/* 12. Comparison Section */}
        <ComparisonSection />

        {/* 13. Technical Specifications */}
        <TechSpecs />

        {/* 14. Moroccan Customer Stories & Testimonials */}
        <Testimonials />

        {/* 15. FAQ Section */}
        <FaqSection />

        {/* 16. One-Page Embedded Native Mobile Checkout */}
        <CheckoutSection />
      </main>

      {/* Sticky Mobile Floating CTA */}
      <StickyMobileCta />

      {/* Footer */}
      <Footer />
    </div>
  );
}
