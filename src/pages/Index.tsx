
import React from "react";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import FeatureSection from "@/components/ui/feature-section";
import PricingSection from "@/components/ui/pricing-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
