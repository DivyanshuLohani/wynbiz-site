"use client";
import React from "react";
import { Zap, Briefcase, TrendingUp, BarChart, Bot } from "lucide-react";
import { Timeline } from "./ui/Timeline";

// Timeline component
export default function ServicesTimeline() {
  // Sample timeline data
  const timelineData = [
    {
      title: "Public Relations",
      year: "2020",
      icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
      description:
        "We help your business build a credible and lasting brand image by crafting strategic PR campaigns that resonate with your audience. From press releases to influencer outreach and media coverage, our team ensures your story is heard by the right people at the right time, establishing trust and authority in your industry.",
    },
    {
      title: "Paid Promotion",
      year: "2021",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      description:
        "We supercharge your business growth with hyper-targeted paid promotions on platforms like Google, Meta, LinkedIn, and more. Our team creates and manages performance-driven campaigns that are optimized continuously to ensure maximum return on ad spend (ROAS), helping you reach potential customers exactly when they’re looking for what you offer.",
    },
    {
      title: "Advertisement",
      year: "2022",
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      description:
        "We craft high-impact ad campaigns that capture attention and drive conversions. From concept to execution, our creative team works closely with you to develop tailored advertisements—whether digital, print, or video—that amplify your brand message and persuade your audience to take action.",
    },
    {
      title: "Social Media Marketing",
      year: "2023",
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      description:
        "We grow your digital community and boost engagement through tailored social media strategies. By analyzing audience behavior and trends, we create content calendars, manage posting schedules, and run targeted campaigns that not only increase your reach but also foster strong connections with your audience on platforms like Instagram, Facebook, Twitter, and LinkedIn.",
    },
    {
      title: "Personalized Chat Bots",
      year: "2025",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      description:
        "We develop custom AI-powered chatbots that provide instant, personalized support to your customers 24/7. These bots can handle inquiries, guide users through processes, and even assist with sales, freeing up your team and enhancing customer satisfaction with efficient, intelligent interactions.",

    },
  ];

  return (
    <section className="w-full bg-black text-white font-sans" id="services">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-4 text-white max-w-4xl font-bold">
          Our Service
        </h2>
        <div className="w-24 h-1 bg-gray-200 mb-6" />
        <p className="text-gray-300 text-sm md:text-base max-w-lg">
          At <span className="text-white font-bold">Wynbiz</span>, {"we've"}{" "}
          evolved our services to meet the changing needs of businesses.{" "}
          {"Here's"} how we help you grow:
        </p>
      </div>

      <Timeline data={timelineData} />

    </section>
  );
}
