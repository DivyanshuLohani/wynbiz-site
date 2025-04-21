"use client";
import React, { useEffect, useRef, useState } from "react";
import { Users, Rocket, BadgeCheck } from "lucide-react";

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black opacity-70" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            About Wynbiz
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
            Wynbiz is your dedicated growth partner with a passion for helping
            local businesses scale and thrive. With our tailored marketing
            strategies, we turn local dreams into franchise realities.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              icon: <Rocket className="w-10 h-10 text-cyan-400 mb-4" />,
              title: "Mission-Driven",
              desc: "We focus on driving measurable business growth with purpose-led marketing campaigns.",
            },
            {
              icon: <BadgeCheck className="w-10 h-10 text-cyan-400 mb-4" />,
              title: "Proven Track Record",
              desc: "5+ years of experience with clients like Panchakanya and Balaji Rice.",
            },
            {
              icon: <Users className="w-10 h-10 text-cyan-400 mb-4" />,
              title: "Client-Centric",
              desc: "Every business is unique—we craft personalized strategies to suit your goals.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0a0a0a] rounded-lg p-6 text-center shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
