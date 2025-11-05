"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { massages } from "@/store/massages";
import { whatsappLink } from "@/store/contact";
import { motion } from "framer-motion";
import { Clock, DollarSign, Star } from "lucide-react";

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
              Our Massage Services
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Discover the healing power of therapeutic touch. Each massage is
              tailored to your unique needs, helping you achieve optimal
              wellness and relaxation.
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

      {/* Services - Carousel on Mobile/Tablet, Cards on Desktop */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#6B7B5E" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile/Tablet Carousel */}
          <div className="block lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {massages.map((massage, index) => (
                  <CarouselItem key={massage.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="pb-4"
                    >
                      <Card className="p-6 sm:p-8 bg-white/10 border-0 backdrop-blur-sm text-white">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-6">
                          <ImageWithFallback
                            src={massage.image}
                            alt={massage.title}
                            className="w-full h-[280px] sm:h-[350px] object-cover"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span
                              className="text-xs sm:text-sm"
                              style={{ fontFamily: "system-ui, sans-serif" }}
                            >
                              {massage.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full">
                            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span
                              className="text-xs sm:text-sm"
                              style={{ fontFamily: "system-ui, sans-serif" }}
                            >
                              {massage.price}
                            </span>
                          </div>
                        </div>

                        <h3
                          className="text-xl sm:text-2xl mb-3 sm:mb-4"
                          style={{
                            fontWeight: 400,
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          {massage.title}
                        </h3>

                        <p
                          className="mb-4 leading-relaxed opacity-95 text-sm sm:text-base"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          {massage.description}
                        </p>

                        <div className="mb-6">
                          <h4
                            className="mb-2 sm:mb-3 opacity-90 text-sm sm:text-base"
                            style={{
                              fontWeight: 600,
                              fontFamily: "system-ui, sans-serif",
                            }}
                          >
                            Benefits:
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {massage.benefits.map((benefit, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 opacity-95 text-xs sm:text-sm"
                                style={{ fontFamily: "system-ui, sans-serif" }}
                              >
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          onClick={() => window.open(whatsappLink, "_blank")}
                          className="bg-white text-[#6B7B5E] hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full"
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Book Now
                        </Button>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white text-[#6B7B5E] hover:bg-white/90" />
              <CarouselNext className="right-2 bg-white text-[#6B7B5E] hover:bg-white/90" />
            </Carousel>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {massages.map((massage, index) => (
              <motion.div
                key={massage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={massage.image}
                        alt={massage.title}
                        className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    } text-white`}
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span
                          className="text-xs sm:text-sm"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          {massage.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span
                          className="text-xs sm:text-sm"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          {massage.price}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4"
                      style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
                    >
                      {massage.title}
                    </h3>

                    <p
                      className="mb-4 sm:mb-6 leading-relaxed opacity-95 text-sm sm:text-base"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {massage.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h4
                        className="mb-2 sm:mb-3 opacity-90 text-sm sm:text-base"
                        style={{
                          fontWeight: 600,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        Benefits:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {massage.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 opacity-95 text-xs sm:text-sm md:text-base"
                            style={{ fontFamily: "system-ui, sans-serif" }}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => window.open(whatsappLink, "_blank")}
                      className="bg-white text-[#6B7B5E] hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
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

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl md:text-4xl mb-6 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                What to Expect
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 text-center bg-[#FAFAFA] border-2 border-gray-200 h-full">
                  <div className="w-16 h-16 rounded-full bg-[#6B7B5E]/10 flex items-center justify-center mb-4 mx-auto">
                    <span
                      className="text-3xl"
                      style={{
                        fontFamily: "Georgia, serif",
                        color: "#6B7B5E",
                        fontWeight: 600,
                      }}
                    >
                      1
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Consultation
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    We begin with a brief consultation to understand your needs,
                    preferences, and any health concerns.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-8 text-center bg-[#FAFAFA] border-2 border-gray-200 h-full">
                  <div className="w-16 h-16 rounded-full bg-[#6B7B5E]/10 flex items-center justify-center mb-4 mx-auto">
                    <span
                      className="text-3xl"
                      style={{
                        fontFamily: "Georgia, serif",
                        color: "#6B7B5E",
                        fontWeight: 600,
                      }}
                    >
                      2
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Treatment
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Relax in our serene environment as our expert therapists
                    work their magic tailored to you.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-8 text-center bg-[#FAFAFA] border-2 border-gray-200 h-full">
                  <div className="w-16 h-16 rounded-full bg-[#6B7B5E]/10 flex items-center justify-center mb-4 mx-auto">
                    <span
                      className="text-3xl"
                      style={{
                        fontFamily: "Georgia, serif",
                        color: "#6B7B5E",
                        fontWeight: 600,
                      }}
                    >
                      3
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Aftercare
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    We provide personalized aftercare advice to help you
                    maintain the benefits of your massage.
                  </p>
                </Card>
              </motion.div>
            </div>
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
              Ready to experience ultimate relaxation?
            </h2>
            <p
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Book your massage today and let our expert therapists help you
              restore balance and wellness
            </p>
            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-white text-[var(--spa-dark)] hover:bg-white/90 px-10 py-6 rounded-full text-lg"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
            >
              Book Appointment
            </Button>
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
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
