"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bot, MessageSquare, Zap, Clock, TrendingUp, Shield } from "lucide-react";
import { openWhatsapp } from "@/lib/config";

const AIChatbotsSection = () => {
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 bg-gradient-to-br from-black  overflow-hidden"
            id="ai-chatbots"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6 transition-all duration-1000 ease-out ${isVisible
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-0 rotate-180"
                            }`}
                    >
                        <Bot className="w-8 h-8 text-white" />
                    </div>

                    <h2
                        className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ease-out ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-10"
                            }`}
                    >
                        AI-Powered Chatbots
                    </h2>

                    <div
                        className={`w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                            }`}
                    />

                    <p
                        className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-400 ease-out ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        Transform your customer service with intelligent AI chatbots that work 24/7.
                        Automate responses, capture leads, and provide instant support while you focus on growing your business.
                    </p>
                </div>

                {/* Main Features Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {[
                        {
                            icon: <MessageSquare className="w-10 h-10 text-cyan-400 mb-4" />,
                            title: "Smart Conversations",
                            desc: "Advanced AI understands context and provides human-like responses to customer queries.",
                            gradient: "from-cyan-400 to-blue-500"
                        },
                        {
                            icon: <Clock className="w-10 h-10 text-purple-400 mb-4" />,
                            title: "24/7 Availability",
                            desc: "Never miss a customer inquiry. Your AI assistant works round the clock, even when you sleep.",
                            gradient: "from-purple-400 to-pink-500"
                        },
                        {
                            icon: <Zap className="w-10 h-10 text-yellow-400 mb-4" />,
                            title: "Instant Responses",
                            desc: "Eliminate wait times with lightning-fast responses that keep customers engaged.",
                            gradient: "from-yellow-400 to-orange-500"
                        },
                        {
                            icon: <TrendingUp className="w-10 h-10 text-green-400 mb-4" />,
                            title: "Lead Generation",
                            desc: "Automatically qualify leads and capture contact information while engaging visitors.",
                            gradient: "from-green-400 to-emerald-500"
                        },
                        {
                            icon: <Shield className="w-10 h-10 text-red-400 mb-4" />,
                            title: "Data Security",
                            desc: "Enterprise-grade security ensures your customer data remains protected and private.",
                            gradient: "from-red-400 to-rose-500"
                        },
                        {
                            icon: <Bot className="w-10 h-10 text-indigo-400 mb-4" />,
                            title: "Easy Integration",
                            desc: "Seamlessly integrate with your existing website, CRM, and business tools.",
                            gradient: "from-indigo-400 to-purple-500"
                        }
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            className={`bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{
                                transitionDelay: `${600 + index * 100}ms`
                            }}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r  rounded-full mb-4 `}>

                                {item.icon}


                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className={`text-center transition-all duration-1000 delay-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-gradient-to-r from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Automate Your Customer Service?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join hundreds of businesses that have transformed their customer experience with our AI chatbots.
                            Get started today and see the difference intelligent automation can make.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-700 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                                onClick={openWhatsapp}
                            >
                                Get Your AI Chatbot
                            </button>
                            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300" onClick={() => {
                                document.getElementById("chat-button")?.click();
                            }}>
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIChatbotsSection;