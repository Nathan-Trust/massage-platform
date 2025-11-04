"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { InstagramIcon, Send } from "lucide-react";
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
                Bliss Massage Parlor
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
              className="mb-3 text-spa-dark"
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
                className="bg-spa-orange hover:bg-spa-orange/90 text-white px-6"
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
              className="mb-4 text-spa-dark"
              style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-spa-dark transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/massages"
                  className="text-gray-600 hover:text-spa-dark transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-spa-dark transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Client Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-spa-dark transition-colors text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Book Appointment
                </Link>
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
              className="mb-4 text-spa-dark"
              style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-spa-orange flex items-center justify-center shrink-0">
                  <span className="text-white text-xs">📞</span>
                </div>
                <span
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  +2348117896388
                </span>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/blissmassageparlor_official?igsh=MTFtY3Z2dWVieDBw"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-spa-orange hover:border-spa-orange hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/blissmassageparlor_official?igsh=MTFtY3Z2dWVieDBw"
                className="text-gray-600 hover:text-spa-dark transition-colors text-sm"
                style={{ fontFamily: "system-ui, sans-serif" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                blissmassageparlor_official
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
              Copyright © {new Date().getFullYear()} Bliss Massage Parlor | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
