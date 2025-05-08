"use client";
import { openWhatsapp } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function WynbizNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  // Function to generate nav links based on current page
  const getNavLink = (sectionId: string, label: string) => {
    if (isHomePage) {
      // On homepage, smooth scroll to section
      return (
        <Link
          href={sectionId === "about" ? "/about" : `#${sectionId}`}
          className="text-white hover:text-gray-300 transition-colors"
          onClick={handleNavigation}
        >
          {label}
        </Link>
      );
    } else {
      // On other pages, link to homepage with fragment
      return (
        <Link
          href={sectionId === "about" ? "/about" : `#${sectionId}`}
          className="text-white hover:text-gray-300 transition-colors"
          onClick={handleNavigation}
        >
          {label}
        </Link>
      );
    }
  };

  // Navigation links configuration
  const navLinks = [
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
  ];

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
          <Link href="/" className="flex items-center">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="h-24 w-auto"
                src="/logo.png"
                alt="Wynbiz Logo"
              ></img>
            }
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <React.Fragment key={link.id}>
              {getNavLink(link.id, link.label)}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className="px-6 py-2 bg-white hover:bg-gray-200 text-black transition-all"
            onClick={openWhatsapp}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
          {navLinks.map((link) => (
            <div key={link.id} className="block">
              {isHomePage ? (
                <a
                  href={`#${link.id}`}
                  className="block text-white hover:text-gray-300 transition-colors"
                  onClick={handleNavigation}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={`/#${link.id}`}
                  className="block text-white hover:text-gray-300 transition-colors"
                  onClick={handleNavigation}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <button
            className="w-full px-6 py-2 bg-white hover:bg-gray-200 text-black transition-all"
            onClick={openWhatsapp}
          >
            Contact Now
          </button>
        </div>
      </div>
    </nav>
  );
}
