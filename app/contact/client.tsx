"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsappNumber, whatsappLink, socialMedia } from "@/store/contact";

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-[var(--spa-dark)] leading-tight px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Get in Touch
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Connect with us through WhatsApp or follow us on social media.
              We're here to answer your questions and help you book your next
              appointment.
            </p>
          </motion.div>
        </div>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20 sm:h-24 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#6B7B5E"
            ></path>
          </svg>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#6B7B5E" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Book via WhatsApp
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              The fastest way to book your appointment or ask questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white border-0 text-center shadow-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>

              <h3
                className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[var(--spa-dark)]"
                style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
              >
                Chat with us on WhatsApp
              </h3>

              <p
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Message us anytime for instant responses, booking appointments,
                or inquiries about our services.
              </p>

              <div
                className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[var(--spa-dark)]"
                style={{ fontWeight: 600, fontFamily: "system-ui, sans-serif" }}
              >
                {whatsappNumber}
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-[#25D366] hover:bg-[#20BA55] text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-full text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Chat on WhatsApp
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>

        {/* Wavy divider bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Follow Us
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Stay connected and up to date with our latest offers, wellness
              tips, and spa updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socialMedia.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center bg-white border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer h-full">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${social.color}15` }}
                  >
                    <social.icon
                      className="w-10 h-10"
                      style={{ color: social.color }}
                    />
                  </div>

                  <h3
                    className="mb-2 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    {social.name}
                  </h3>

                  <p
                    className="text-gray-600 mb-4"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {social.handle}
                  </p>

                  <span
                    className="inline-block px-6 py-2 rounded-full text-white text-sm"
                    style={{
                      backgroundColor: social.color,
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Follow
                  </span>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section
        className="relative py-24 md:py-32"
        style={{ backgroundColor: "#B89B7F" }}
      >
        {/* Wavy top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white leading-tight"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Ready to relax and rejuvenate?
            </h2>
            <p
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Message us on WhatsApp now to book your appointment
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-[#25D366] hover:bg-[#20BA55] text-white px-10 py-6 rounded-full text-lg"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
