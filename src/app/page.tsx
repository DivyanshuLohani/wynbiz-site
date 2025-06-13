import React from "react";
import WynbizHeroSection from "./components/Hero";
import Gallery3D from "./components/Gallery";
import ServicesSection from "./components/Services";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import AboutUsSection from "./components/AboutUs";
import AIChatbotsSection from "./components/ChatBotsSection";

export default function Page() {
  return (
    <>
      <WynbizHeroSection />
      <ServicesSection />
      <AIChatbotsSection />
      <Gallery3D />
      <AboutUsSection />
      <WhyWorkWithUs />
    </>
  );
}
