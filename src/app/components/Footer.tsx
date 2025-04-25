"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { config } from "../../lib/config";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 z-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          {
            /* here should be an image */

            <img src="/logo.png" alt="Logo" className="h-24 mb-4" />
          }

          <p className="text-sm mb-4">{config.site.description}</p>
          <div className="flex space-x-4 mt-6">
            <a
              href={config.contact.socials.facebook}
              className="hover:text-cyan-400 transition"
            >
              <Facebook />
            </a>{" "}
            <a
              href={config.contact.socials.instagram}
              className="hover:text-cyan-400 transition"
            >
              <Instagram />
            </a>
            <a
              href={config.contact.socials.linkedin}
              className="hover:text-cyan-400 transition"
            >
              <Linkedin />
            </a>
            <a
              href={config.contact.socials.twitter}
              className="hover:text-cyan-400 transition"
            >
              <Twitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Public Relations</li>
            <li>Paid Promotion</li>
            <li>Advertisement</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 text-cyan-400" />
              <span>{config.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              <a
                href={`tel:${config.contact.phone}`}
                className="hover:text-cyan-400 transition"
              >
                {config.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              <a
                href={`mailto:${config.contact.email}`}
                className="hover:text-cyan-400 transition"
              >
                {config.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {config.site.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
