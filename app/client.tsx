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
import { testimonials, features } from "@/store/home";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="bg-[#E8E8E8] py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-[var(--spa-dark)]"
                style={{
                  fontWeight: 400,
                  lineHeight: 1.2,
                  fontFamily: "Georgia, serif",
                }}
              >
                Rejuvenate Your Body & Soul With Our Expert Care
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Experience the ultimate relaxation and healing at SPXEK Luxury
                Spa. Our certified therapists combine traditional techniques
                with modern wellness practices to restore your mind, body, and
                spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  onClick={() => router.push("massages")}
                  className="bg-[var(--spa-orange)] hover:bg-[var(--spa-orange)]/90 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md w-full sm:w-auto"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Our Service
                </Button>
                <Button
                  onClick={() => router.push("contact")}
                  variant="outline"
                  className="border-2 border-[var(--spa-orange)] text-[var(--spa-orange)] hover:bg-[var(--spa-orange)] hover:text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md w-full sm:w-auto"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 border-t border-gray-300">
                <div>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl mb-1"
                    style={{ fontWeight: 600, color: "var(--spa-dark)" }}
                  >
                    15+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    YEARS
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl mb-1"
                    style={{ fontWeight: 600, color: "var(--spa-dark)" }}
                  >
                    350+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Happy Customer
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl mb-1"
                    style={{ fontWeight: 600, color: "var(--spa-dark)" }}
                  >
                    125+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-600"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Outlet
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722351255255-93850590d5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGN1Y3VtYmVyJTIwZmFjZSUyMG1hc2slMjBzcGF8ZW58MXx8fHwxNzYyMTE1NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spa treatment"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Massage Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwdGhlcmFweSUyMGJlZHxlbnwxfHx8fDE3NjIxMTU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Massage therapy"
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Professional Massage Therapy for Complete Wellness
              </h2>
              <p
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Our expert massage therapists are dedicated to providing
                personalized treatments that address your specific needs.
                Whether you're seeking relief from muscle tension, stress
                reduction, or simply want to indulge in pure relaxation, we have
                the perfect treatment for you.
              </p>
              <p
                className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                From Swedish massage to deep tissue therapy, hot stone
                treatments to aromatherapy sessions, each service is carefully
                designed to promote healing, improve circulation, and enhance
                your overall well-being.
              </p>
              <Button
                onClick={() => router.push("about")}
                className="bg-[var(--spa-dark)] hover:bg-[var(--spa-dark)]/90 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md w-full sm:w-auto"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Read More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secret of Beliatrix Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-[var(--spa-dark)] px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Secret of Beliatrix
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Discover our comprehensive range of therapeutic services designed
              to promote wellness and relaxation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Features - Carousel on Mobile, Grid on Desktop */}
            <div className="order-2 lg:order-1">
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
                    {features.map((feature, index) => (
                      <CarouselItem
                        key={feature.title}
                        className="md:basis-1/2"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="p-5 sm:p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                            <div
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                              style={{ backgroundColor: `${feature.color}20` }}
                            >
                              <feature.icon
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                style={{ color: feature.color }}
                              />
                            </div>
                            <h3
                              className="mb-2 text-[var(--spa-dark)]"
                              style={{
                                fontWeight: 600,
                                fontFamily: "system-ui, sans-serif",
                              }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-xs sm:text-sm text-gray-600"
                              style={{ fontFamily: "system-ui, sans-serif" }}
                            >
                              {feature.description}
                            </p>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>

              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-5 sm:p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <feature.icon
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <h3
                        className="mb-2 text-[var(--spa-dark)]"
                        style={{
                          fontWeight: 600,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-gray-600"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {feature.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606619353146-a7732c58345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBvaWwlMjB0cmVhdG1lbnQlMjBoYW5kc3xlbnwxfHx8fDE3NjIxMTU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spa treatment"
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two Images Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1537673156864-5d2c72de7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwaGFuZHMlMjBiYWNrfGVufDF8fHx8MTc2MjExNTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Massage"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#2C2C2C] flex items-center justify-center p-6 sm:p-8 md:p-12"
          >
            <div className="text-white max-w-md">
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Our holistic approach combines traditional massage techniques
                with modern wellness practices to provide comprehensive health
                benefits that go beyond simple relaxation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Natural Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                A natural approach to better health
              </h2>
              <p
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                We believe that wellness is achieved through the harmony of
                mind, body, and spirit. Our treatments are carefully designed to
                address not just physical tension, but also to promote mental
                clarity and emotional balance.
              </p>
              <p
                className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Each session is customized to your unique needs, using premium
                oils, heated stones, and specialized techniques that have been
                proven to enhance circulation, reduce stress, and promote
                overall well-being.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNwYSUyMHRvd2VsJTIwYmVhdXR5fGVufDF8fHx8MTc2MjExNTYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Natural beauty"
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-[var(--spa-dark)] px-4"
              style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
            >
              Clients Feedback
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => {
                const position =
                  (index - currentTestimonial + testimonials.length) %
                  testimonials.length;
                const isVisible = position < 4;

                return (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className={isVisible ? "block" : "hidden md:block"}
                  >
                    <Card className="p-6 bg-white border border-gray-200 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4
                          className="mb-2 text-[var(--spa-dark)]"
                          style={{
                            fontWeight: 600,
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-[var(--spa-orange)] fill-current"
                            />
                          ))}
                        </div>
                        <p
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          {testimonial.text}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[var(--spa-orange)] text-white flex items-center justify-center hover:bg-[var(--spa-orange)]/90 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[var(--spa-orange)] text-white flex items-center justify-center hover:bg-[var(--spa-orange)]/90 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
