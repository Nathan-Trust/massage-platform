'use client'
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span
                className="text-2xl tracking-widest"
                style={{
                  fontWeight: 700,
                  color: "var(--spa-dark)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                SPXEK
              </span>
            </div>
            <p
              className="text-gray-600 mb-6 text-sm leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Experience tranquility and rejuvenation at our luxury spa. We
              offer a complete range of therapeutic massages and wellness
              treatments designed to restore your mind, body, and spirit.
            </p>
            <h4
              className="mb-3 text-[var(--spa-dark)]"
              style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
            >
              Stay Updated
            </h4>
            <form className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-white border-gray-300"
                style={{ fontFamily: "system-ui, sans-serif" }}
              />
              <Button
                type="submit"
                className="bg-[var(--spa-orange)] hover:bg-[var(--spa-orange)]/90 text-white px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-[var(--spa-dark)] transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/massages"
                  className="text-gray-600 hover:text-[var(--spa-dark)] transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-gray-600 hover:text-[var(--spa-dark)] transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Client Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[var(--spa-dark)] transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[var(--spa-dark)] transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Gift Certificates
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[var(--spa-orange)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">📍</span>
                </div>
                <span
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  123 Wellness Boulevard, Spa District
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[var(--spa-orange)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">📧</span>
                </div>
                <span
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  info@spxek.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[var(--spa-orange)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">📞</span>
                </div>
                <span
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  (555) 123-SPXEK
                </span>
              </li>
            </ul>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-[var(--spa-orange)] hover:border-[var(--spa-orange)] hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-[var(--spa-orange)] hover:border-[var(--spa-orange)] hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-[var(--spa-orange)] hover:border-[var(--spa-orange)] hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-[var(--spa-orange)] hover:border-[var(--spa-orange)] hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Copyright © 2025 SPXEK Luxury Spa | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--spa-dark)] text-sm transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--spa-dark)] text-sm transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--spa-dark)] text-sm transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
