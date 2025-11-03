"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { massageServices, whatToExpect, packageDeals } from "@/store/massages";

export default function MassagesClient() {
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
              Massage Therapy Services
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Discover our comprehensive range of professional massage
              treatments designed to restore balance, relieve tension, and
              promote overall wellness.
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

      {/* Services Grid */}
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
              Our Massage Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {massageServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white border-0 hover:shadow-2xl transition-shadow h-full flex flex-col">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3
                      className="text-lg sm:text-xl mb-2 text-[var(--spa-dark)]"
                      style={{
                        fontWeight: 600,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span style={{ fontFamily: "system-ui, sans-serif" }}>
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span style={{ fontFamily: "system-ui, sans-serif" }}>
                          {service.price}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-sm text-gray-600 mb-4 leading-relaxed flex-1"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4
                        className="text-sm font-semibold mb-2 text-[var(--spa-dark)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-600"
                            style={{ fontFamily: "system-ui, sans-serif" }}
                          >
                            <Check className="w-3 h-3 text-[#6B7B5E]" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="mt-auto">
                      <Button
                        className="w-full bg-[var(--spa-orange)] hover:bg-[var(--spa-orange)]/90 text-white"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
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

      {/* What to Expect Section */}
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
              What to Expect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whatToExpect.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[var(--spa-orange)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Package Deals Section */}
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
              Package Deals
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Save more with our specially designed wellness packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {packageDeals.map((deal, index) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 text-center bg-white border-2 border-[var(--spa-orange)]/20 hover:border-[var(--spa-orange)] transition-colors h-full flex flex-col">
                  <h3
                    className="text-xl mb-2 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {deal.title}
                  </h3>

                  <div
                    className="text-sm text-gray-600 mb-4"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {deal.sessions}
                  </div>

                  <div className="mb-4">
                    <div
                      className="text-3xl text-[var(--spa-orange)] mb-1"
                      style={{ fontWeight: 700, fontFamily: "Georgia, serif" }}
                    >
                      {deal.price}
                    </div>
                    <div
                      className="text-sm text-[#6B7B5E]"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {deal.savings}
                    </div>
                  </div>

                  <p
                    className="text-sm text-gray-600 mb-6 flex-1"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {deal.description}
                  </p>

                  <Link href="/contact">
                    <Button
                      className="w-full bg-[var(--spa-dark)] hover:bg-[var(--spa-dark)]/90 text-white"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      Choose Package
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 sm:py-20 md:py-24 lg:py-32"
        style={{ backgroundColor: "#6B7B5E" }}
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
              fill="#FAFAFA"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white leading-tight px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Ready to Begin Your Wellness Journey?
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Book your massage therapy session today and experience the healing
              power of professional touch.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--spa-orange)] hover:bg-[var(--spa-orange)]/90 text-white px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg rounded-md"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                Book Your Session
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Wavy bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27-35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
