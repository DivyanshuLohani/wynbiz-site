"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Briefcase, TrendingUp, BarChart } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Services data based on the provided information
  const services = [
    {
      title: "Public Relations",
      icon: <Briefcase className="w-12 h-12 text-cyan-400" />,
      description:
        "Build your brand reputation through strategic PR campaigns and media relationships",
    },
    {
      title: "Paid Promotion",
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      description:
        "Accelerate growth with targeted paid campaigns across multiple platforms",
    },
    {
      title: "Advertisement",
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      description:
        "Create compelling ad content that converts viewers into loyal customers",
    },
    {
      title: "Social Media Marketing",
      icon: <BarChart className="w-12 h-12 text-cyan-400" />,
      description:
        "Engage your audience and build community with expert social media strategies",
    },
  ];

  // Setup Intersection Observer to detect when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black opacity-70" />

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Services We Offer
          </h2>
          <div
            className={`w-24 h-1 bg-cyan-400 mx-auto mb-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <p
            className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-cyan-400 font-bold">Wynbiz</span>: Your Growth
            Partner with 5+ years of expertise helping local businesses scale to
            franchise models
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-[#0a0a0a] rounded-lg p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex items-center text-cyan-400 font-medium cursor-pointer group">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`bg-[#0a0a0a] rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl transition-all duration-1000 delay-800 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Take Your Business to the Next Level?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Start with our 7-day free trial, get a personalized meeting to
            discuss your brand, and receive customized marketing solutions
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all">
              Schedule Meeting
            </button>
          </div>
        </div>

        {/* Clients highlight */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 mb-2">Trusted by businesses like</p>
          <p className="text-xl text-white font-medium">
            Panchakanya, Balaji Rice{" "}
            <span className="text-cyan-400">and many more</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
