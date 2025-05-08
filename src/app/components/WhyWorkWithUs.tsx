"use client";
import { useEffect, useRef, useState } from "react";
import {
  Newspaper,
  DollarSign,
  MonitorSmartphone,
  Megaphone,
} from "lucide-react";
import { openWhatsapp } from "@/lib/config";

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
            Why Work With Us
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
            With <span className="text-cyan-400 font-bold">5+ years</span> of
            marketing expertise, Wynbiz has helped businesses like{" "}
            <span className="font-bold text-white">
              Panchakanya, Balaji Rice
            </span>{" "}
            scale to successful franchises.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              title: "Public Relations",
              icon: <Newspaper className="w-12 h-12 text-cyan-400 mb-4" />,
            },
            {
              title: "Paid Promotion",
              icon: <DollarSign className="w-12 h-12 text-cyan-400 mb-4" />,
            },
            {
              title: "Advertisement",
              icon: <Megaphone className="w-12 h-12 text-cyan-400 mb-4" />,
            },
            {
              title: "Social Media Marketing",
              icon: (
                <MonitorSmartphone className="w-12 h-12 text-cyan-400 mb-4" />
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0a0a0a] rounded-lg p-6 shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                Boost your brand visibility and customer engagement through{" "}
                {item.title.toLowerCase()} strategies tailored to your goals.
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-[#0a0a0a] rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto 
            transition-all duration-1000 delay-800  ease-out shadow-cyan-500 ${
              isVisible
                ? "opacity-100 scale-100 shadow-[0px_0px_42px_3px_rgba(46,126,255,1)] "
                : "opacity-0 scale-95 glow-blue"
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let’s Take Your Business to the Next Level 🚀
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Meet us to discuss your brand and get
            <span className="text-cyan-400 font-semibold"> customized </span>
            marketing solutions to grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg cursor-pointer"
              onClick={openWhatsapp}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
