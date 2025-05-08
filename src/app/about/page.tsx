"use client";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Rocket,
  BadgeCheck,
  Target,
  BarChart3,
  Calendar,
  Trophy,
  GraduationCap,
  Heart,
} from "lucide-react";
import { openWhatsapp } from "@/lib/config";

const AboutUsPage = () => {
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);
  const valuesRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const partnershipRef = useRef<HTMLElement | null>(null);

  // Visibility states
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [partnershipVisible, setPartnershipVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    // Observer creation helper
    const createObserver = (
      ref: React.RefObject<HTMLElement | null>,
      setVisibility: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (!ref || !ref.current) return null;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisibility(true);
          observer.unobserve(ref.current!);
        }
      }, observerOptions);

      observer.observe(ref.current);
      return observer;
    };

    // Create all observers
    const observers = [
      createObserver(heroRef, setHeroVisible),
      createObserver(missionRef, setMissionVisible),
      createObserver(timelineRef, setTimelineVisible),
      createObserver(teamRef, setTeamVisible),
      createObserver(valuesRef, setValuesVisible),
      createObserver(storyRef, setStoryVisible),
      createObserver(partnershipRef, setPartnershipVisible),
    ];

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Animation helper class function
  const animateIn = (isVisible: boolean, delay = 0) => {
    return `transition-all duration-1000 ease-out ${
      delay ? `delay-${delay}` : ""
    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-32 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black opacity-80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${animateIn(
                heroVisible
              )}`}
            >
              About <span className="text-cyan-400">Wynbiz</span>
            </h1>
            <div
              className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              } transition-all duration-1000 ease-out delay-200`}
            />
            <p
              className={`text-xl text-gray-300 mb-8 ${animateIn(
                heroVisible,
                300
              )}`}
            >
              Your dedicated growth partner with a passion for transforming
              local businesses into thriving enterprises through strategic
              marketing and authentic brand development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        ref={missionRef}
        className="py-24 bg-gradient-to-b from-black to-[#050505]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                  missionVisible
                )}`}
              >
                Our Mission <span className="text-cyan-400">&</span> Vision
              </h2>
              <div
                className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                  missionVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                } transition-all duration-1000 ease-out delay-200`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
                className={`bg-[#0a0a0a] p-8 rounded-lg border border-gray-800 shadow-lg ${animateIn(
                  missionVisible,
                  300
                )}`}
              >
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  At Wynbiz, {"we're"} on a mission to empower local businesses
                  with cutting-edge marketing strategies that drive measurable
                  growth and lasting success. We believe in transforming
                  visionary entrepreneurs into industry leaders.
                </p>
                <p className="text-gray-300">
                  Through innovation, data-driven decision making, and a deep
                  understanding of both local and digital markets, we create
                  customized solutions that help businesses reach their full
                  potential.
                </p>
              </div>

              <div
                className={`bg-[#0a0a0a] p-8 rounded-lg border border-gray-800 shadow-lg ${animateIn(
                  missionVisible,
                  400
                )}`}
              >
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-10 h-10 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We envision a future where local businesses have the tools,
                  strategies, and support to compete effectively in an
                  increasingly digital marketplace, turning local successes into
                  regional or national franchises.
                </p>
                <p className="text-gray-300">
                  By bridging the gap between traditional business values and
                  modern marketing techniques, we aim to be the catalyst that
                  transforms ambitious entrepreneurs into market leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 bg-[#030303]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                  storyVisible
                )}`}
              >
                Our <span className="text-cyan-400">Story</span>
              </h2>
              <div
                className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                  storyVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                } transition-all duration-1000 ease-out delay-200`}
              />
            </div>

            <div
              className={`bg-[#080808] p-8 md:p-12 rounded-lg border border-gray-800 shadow-lg ${animateIn(
                storyVisible,
                300
              )}`}
            >
              <p className="text-gray-300 mb-6 text-lg">
                Founded in 2022, Wynbiz emerged from a simple yet powerful
                insight: local businesses often possess exceptional products and
                services but lack the marketing expertise to reach their full
                potential.
              </p>

              <p className="text-gray-300 mb-6 text-lg">
                Starting with just a handful of clients including Panchakanya
                and Balaji Rice, we quickly demonstrated the power of strategic
                marketing tailored specifically for growth-oriented businesses.
                Word spread, and our client base expanded as our success stories
                multiplied.
              </p>

              <p className="text-gray-300 text-lg">
                Today, Wynbiz stands as a testament to our own philosophy –
                starting with a clear vision, developing a strategic approach,
                and executing with precision. {"We've"} helped transform dozens
                of local businesses into regional powerhouses, and {"we're"}{" "}
                just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                valuesVisible
              )}`}
            >
              Our Core <span className="text-cyan-400">Values</span>
            </h2>
            <div
              className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                valuesVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              } transition-all duration-1000 ease-out delay-200`}
            />
            <p
              className={`text-lg text-gray-300 max-w-2xl mx-auto ${animateIn(
                valuesVisible,
                300
              )}`}
            >
              These principles guide everything we do at Wynbiz, from how we
              work with clients to how we develop our strategies.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${animateIn(
              valuesVisible,
              400
            )}`}
          >
            {[
              {
                icon: <Rocket className="w-10 h-10 text-cyan-400 mb-4" />,
                title: "Innovation",
                desc: "We constantly explore cutting-edge marketing techniques and technologies to give our clients the competitive edge.",
              },
              {
                icon: <BadgeCheck className="w-10 h-10 text-cyan-400 mb-4" />,
                title: "Integrity",
                desc: "We believe in transparency, honesty, and ethical practices in all our business relationships.",
              },
              {
                icon: <Users className="w-10 h-10 text-cyan-400 mb-4" />,
                title: "Client Partnership",
                desc: "We see ourselves as growth partners, not just service providers. Your success is our success.",
              },
              {
                icon: <Target className="w-10 h-10 text-cyan-400 mb-4" />,
                title: "Results-Driven",
                desc: "We focus on measurable outcomes and tangible growth metrics that matter to your business.",
              },
              {
                icon: (
                  <GraduationCap className="w-10 h-10 text-cyan-400 mb-4" />
                ),
                title: "Continuous Learning",
                desc: "The marketing landscape evolves rapidly, and we're committed to staying ahead of the curve.",
              },
              {
                icon: <Heart className="w-10 h-10 text-cyan-400 mb-4" />,
                title: "Community Impact",
                desc: "We believe thriving local businesses create stronger communities and economies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0a0a0a] rounded-lg p-6 text-center shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2 border border-gray-800"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-[#030303]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                timelineVisible
              )}`}
            >
              Our <span className="text-cyan-400">Journey</span>
            </h2>
            <div
              className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                timelineVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              } transition-all duration-1000 ease-out delay-200`}
            />
            <p
              className={`text-lg text-gray-300 max-w-2xl mx-auto ${animateIn(
                timelineVisible,
                300
              )}`}
            >
              From humble beginnings to industry leadership, our journey
              reflects our commitment to excellence.
            </p>
          </div>

          <div
            className={`max-w-4xl mx-auto ${animateIn(timelineVisible, 400)}`}
          >
            {[
              {
                year: "2022",
                title: "Founded",
                desc: "Wynbiz was established with a vision to bridge the gap between traditional business and digital marketing excellence.",
                icon: <Calendar className="w-6 h-6 text-cyan-400" />,
              },
              {
                year: "2023",
                title: "First Major Clients",
                desc: "Signed partnerships with Panchakanya and Balaji Rice, delivering impressive growth results despite of their challenges.",
                icon: <Trophy className="w-6 h-6 text-cyan-400" />,
              },
              {
                year: "2024",
                title: "Service Diversification",
                desc: "Expanded our service offerings to include comprehensive brand development and franchise scaling strategies.",
                icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
              },
              {
                year: "Present",
                title: "Industry Recognition",
                desc: "Now recognized as a leading marketing partner for ambitious businesses looking to scale regionally and nationally.",
                icon: <BadgeCheck className="w-6 h-6 text-cyan-400" />,
              },
            ].map((item) => (
              <div
                key={item.year}
                className="relative pl-8 pb-10 last:pb-0 border-l border-gray-700 ml-6"
              >
                <div className="absolute left-0 top-0 w-12 h-12 -translate-x-1/2 rounded-full bg-[#0a0a0a] border border-cyan-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-8">
                  <span className="text-cyan-400 font-medium">{item.year}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section ref={teamRef} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                teamVisible
              )}`}
            >
              Our <span className="text-cyan-400">Team</span>
            </h2>
            <div
              className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                teamVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              } transition-all duration-1000 ease-out delay-200`}
            />
            <p
              className={`text-lg text-gray-300 max-w-2xl mx-auto ${animateIn(
                teamVisible,
                300
              )}`}
            >
              Meet the passionate experts behind {"Wynbiz's"} success stories.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${animateIn(
              teamVisible,
              400
            )}`}
          >
            {[
              {
                name: "Alex Johnson",
                position: "Founder & Chief Strategist",
                bio: "With over 15 years in marketing and business development, Alex brings vision and leadership to every client partnership.",
              },
              {
                name: "Sarah Chen",
                position: "Digital Marketing Director",
                bio: "Sarah's expertise in digital advertising and analytics helps businesses maximize their online presence and ROI.",
              },
              {
                name: "Michael Patel",
                position: "Brand Development Lead",
                bio: "Michael transforms business identities with compelling brand strategies that resonate with target audiences.",
              },
              {
                name: "Priya Sharma",
                position: "Client Success Manager",
                bio: "Priya ensures our strategies align perfectly with client goals and exceed expectations at every turn.",
              },
              {
                name: "David Wilson",
                position: "Content Strategy Specialist",
                bio: "David crafts compelling narratives that connect brands with their ideal customers across all platforms.",
              },
              {
                name: "Lisa Rodriguez",
                position: "Growth Analytics Expert",
                bio: "Lisa leverages data to identify opportunities and optimize campaigns for maximum business impact.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#0a0a0a] rounded-lg p-6 text-center shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2 border border-gray-800"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-cyan-400 font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-sm mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partnership Approach Section */}
      <section ref={partnershipRef} className="py-24 bg-[#030303]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 ${animateIn(
                  partnershipVisible
                )}`}
              >
                Our <span className="text-cyan-400">Partnership</span> Approach
              </h2>
              <div
                className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
                  partnershipVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                } transition-all duration-1000 ease-out delay-200`}
              />
              <p
                className={`text-lg text-gray-300 max-w-2xl mx-auto ${animateIn(
                  partnershipVisible,
                  300
                )}`}
              >
                At Wynbiz, we {"don't"} just work for you — we work with you.
                Our collaborative process ensures tailored strategies that align
                perfectly with your business goals.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${animateIn(
                partnershipVisible,
                400
              )}`}
            >
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We start by understanding your business, market position, goals, and challenges.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  desc: "Our team creates a customized growth plan with clear objectives and measurable outcomes.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "We execute with precision, leveraging our expertise across all relevant marketing channels.",
                },
                {
                  step: "04",
                  title: "Analysis & Optimization",
                  desc: "Continuous monitoring and refinement ensure we maximize results and ROI.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-[#0a0a0a] rounded-lg p-6 shadow-lg border border-gray-800 hover:border-cyan-400/30 transition-all"
                >
                  <span className="text-5xl font-bold text-cyan-400/20 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div
              className={`mt-16 text-center ${animateIn(
                partnershipVisible,
                600
              )}`}
            >
              <button
                onClick={openWhatsapp}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-8 rounded-md transition-colors duration-300 cursor-pointer"
              >
                Start Your Growth Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#030303] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="text-cyan-400">Business Growth</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of businesses that have achieved exceptional growth
              with {"Wynbiz's"} strategic marketing partnership. {"Let's"}{" "}
              discuss how we can help you reach your next milestone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={openWhatsapp}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-8 rounded-md transition-colors duration-300 cursor-pointer"
              >
                Contact Us
              </button>
              {/* <Link
                href="/case-studies"
                className="inline-block bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-md transition-colors duration-300"
              >
                View Success Stories
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
