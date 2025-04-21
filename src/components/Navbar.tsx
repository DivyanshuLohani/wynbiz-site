"use client";
import React, { useState, useEffect } from "react";

export default function WynbizNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Wynbiz
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black transition-all">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block text-white hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-white hover:text-gray-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block text-white hover:text-gray-300 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="block text-white hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
          <button className="w-full px-6 py-2 bg-white hover:bg-gray-200 text-black transition-all">
            Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
