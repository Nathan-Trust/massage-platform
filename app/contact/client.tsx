"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  contactInfo,
  socialMedia,
  locations,
  bookingSteps,
} from "@/store/contact";

export default function ContactClient() {
  const formatWhatsAppNumber = (number: string) => {
    return number.replace(/\D/g, "");
  };

  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to book a massage appointment at SPXEK. Could you please help me with scheduling?"
  );

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
              Contact & Book Appointment
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Ready to experience ultimate relaxation? Get in touch with us to
              schedule your personalized spa treatment today.
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
              fill="#B89B7F"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Book Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#B89B7F" }}
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
              Book Your Appointment
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Experience our world-class spa treatments. Book instantly via
              WhatsApp or fill out our contact form below.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <a
                href={`https://wa.me/${formatWhatsAppNumber(
                  contactInfo.whatsapp
                )}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-4 rounded-full text-lg transition-colors"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 sm:p-8 md:p-12 bg-white/95 backdrop-blur border-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 text-[var(--spa-dark)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Full Name
                      </label>
                      <Input
                        placeholder="Your full name"
                        className="bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 text-[var(--spa-dark)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Phone Number
                      </label>
                      <Input
                        placeholder="Your phone number"
                        className="bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 text-[var(--spa-dark)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 text-[var(--spa-dark)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Preferred Service
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="swedish">
                            Swedish Massage
                          </SelectItem>
                          <SelectItem value="deep-tissue">
                            Deep Tissue Massage
                          </SelectItem>
                          <SelectItem value="hot-stone">
                            Hot Stone Massage
                          </SelectItem>
                          <SelectItem value="aromatherapy">
                            Aromatherapy Massage
                          </SelectItem>
                          <SelectItem value="sports">Sports Massage</SelectItem>
                          <SelectItem value="prenatal">
                            Prenatal Massage
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2 text-[var(--spa-dark)]"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your preferences, any specific needs, or questions you may have..."
                      className="bg-white border-gray-300 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--spa-dark)] hover:bg-[var(--spa-dark)]/90 text-white py-6 text-lg"
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
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

      {/* Contact Information */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Get In Touch
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[var(--spa-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <location.icon className="w-8 h-8 text-[var(--spa-orange)]" />
                  </div>
                  <h3
                    className="text-lg mb-2 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {location.title}
                  </h3>
                  <p
                    className="text-sm text-gray-800 mb-1"
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {location.address}
                  </p>
                  <p
                    className="text-sm text-gray-600 mb-2"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {location.city}
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {location.details}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              How to Book
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[var(--spa-dark)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3
                  className="text-lg mb-2 text-[var(--spa-dark)]"
                  style={{
                    fontWeight: 600,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Connect With Us
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Follow us on social media for wellness tips, special offers, and
              behind-the-scenes content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialMedia.map((social, index) => {
              const IconComponent =
                social.icon === "facebook"
                  ? Facebook
                  : social.icon === "instagram"
                  ? Instagram
                  : social.icon === "twitter"
                  ? Twitter
                  : Linkedin;

              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="w-16 h-16 bg-[var(--spa-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[var(--spa-orange)]/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-[var(--spa-orange)]" />
                      </div>
                      <h3
                        className="text-lg mb-2 text-[var(--spa-dark)]"
                        style={{
                          fontWeight: 600,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {social.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {social.description}
                      </p>
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[var(--spa-dark)]"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Find Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Placeholder for map - replace with actual map integration */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--spa-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <p
                  className="text-lg text-gray-700 mb-2"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Interactive Map Coming Soon
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
