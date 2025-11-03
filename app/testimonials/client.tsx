"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { testimonials, gallery, stats } from "@/store/testimonials";

export default function TestimonialsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGallery =
    selectedCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

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
              Client Testimonials & Gallery
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Hear from our valued clients and explore our beautiful spa
              facilities
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

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-0 hover:shadow-2xl transition-shadow h-full flex flex-col">
                  <Quote className="w-10 h-10 text-[#6B7B5E] mb-4" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-[var(--spa-orange)]"
                      />
                    ))}
                  </div>

                  <p
                    className="text-gray-700 mb-6 leading-relaxed flex-grow italic"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="text-[var(--spa-dark)] mb-1"
                        style={{
                          fontWeight: 600,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className="text-xs text-[#6B7B5E] mt-1"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {testimonial.treatment}
                      </p>
                    </div>
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

      {/* Gallery Section */}
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-[var(--spa-dark)] px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Our Spa Gallery
            </h2>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 flex-wrap px-4">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
                  selectedCategory === "all"
                    ? "bg-[#6B7B5E] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("facilities")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
                  selectedCategory === "facilities"
                    ? "bg-[#6B7B5E] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                Facilities
              </button>
              <button
                onClick={() => setSelectedCategory("treatments")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
                  selectedCategory === "treatments"
                    ? "bg-[#6B7B5E] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                Treatments
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={350}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <h3
                      className="text-white text-base sm:text-lg md:text-xl"
                      style={{
                        fontWeight: 600,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="relative py-24 md:py-32"
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
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="text-5xl md:text-6xl mb-2"
                  style={{ fontWeight: 600, fontFamily: "Georgia, serif" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-lg opacity-90"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
