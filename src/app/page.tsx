import React from "react";
import WynbizHeroSection from "./components/Hero";
import Gallery3D from "./components/Gallery";
import ServicesSection from "./components/Services";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import AboutUsSection from "./components/AboutUs";

export default function Page() {
  return (
    <>
      <WynbizHeroSection />
      <ServicesSection />
      <Gallery3D />
      <AboutUsSection />
      <WhyWorkWithUs />
    </>
  );
}
