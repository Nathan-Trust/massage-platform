"use client";

import { motion } from "framer-motion";
import {  MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { features, studios, team } from "@/store/about";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Overlapping Circles */}
      <section className="relative bg-white pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[var(--spa-dark)] leading-tight"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Studio massage & healthy spine therapy
              </h1>
              <p
                className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <Link href="/contact">
                <Button
                  className="bg-[#6B7B5E] hover:bg-[#6B7B5E]/90 text-white px-8 py-6 rounded-full"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Book Now
                </Button>
              </Link>
            </motion.div>

            {/* Right Images with Overlapping Circles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              {/* Main large image */}
              <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Massage therapy"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top right smaller circle */}
              <div className="absolute top-[10%] right-[5%] w-[35%] h-[35%] rounded-full overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1617952986600-802f965dcdbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Massage hands"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom right smaller circle */}
              <div className="absolute bottom-[5%] right-[15%] w-[35%] h-[35%] rounded-full overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1688441647034-8eef5655cb0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Spa stones"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-32"
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

      {/* About Section with Wavy Background */}
      <section
        className="relative py-16 md:py-24"
        style={{ backgroundColor: "#B89B7F" }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1537673156864-5d2c72de7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Massage therapy"
                  width={500}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Therapeutic manual and health therapy
              </h2>
              <p
                className="mb-6 leading-relaxed opacity-95"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p
                className="leading-relaxed opacity-95"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
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

      {/* Our Strengths Section */}
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
              Our Strengths
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 rounded-full bg-[#F5F1ED] flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-[#6B7B5E]" />
                  </div>
                  <h3
                    className="mb-3 text-[var(--spa-dark)]"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
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
              Masters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3
                      className="mb-1 text-[var(--spa-dark)]"
                      style={{
                        fontWeight: 600,
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "1.25rem",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-gray-600 mb-4 text-sm"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {member.role}
                    </p>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-[#6B7B5E] hover:bg-[#6B7B5E]/90 text-white rounded-full"
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
      </section>

      {/* Service Section 1 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606738157849-bf12a05454f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Deep tissue massage"
                  width={500}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Therapeutic manual therapy
              </h3>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <Button
                className="bg-[#6B7B5E] hover:bg-[#6B7B5E]/90 text-white px-8 py-6 rounded-full"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Section 2 - Reversed */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586264332797-cab9a662a896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Cupping therapy"
                  width={500}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1"
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Cupping and vacuum therapy
              </h3>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <Button
                className="bg-[#6B7B5E] hover:bg-[#6B7B5E]/90 text-white px-8 py-6 rounded-full"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Section 3 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Facial therapy"
                  width={500}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[var(--spa-dark)]"
                style={{ fontWeight: 400, fontFamily: "Georgia, serif" }}
              >
                Facial and cosmetic therapy
              </h3>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <Button
                className="bg-[#6B7B5E] hover:bg-[#6B7B5E]/90 text-white px-8 py-6 rounded-full"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA with Wavy Background */}
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
              Get a free consultation and choose the best procedure
            </h2>
            <Link href="/contact">
              <Button
                className="bg-white text-[var(--spa-dark)] hover:bg-white/90 px-10 py-6 rounded-full text-lg"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
              >
                Book Now
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
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Studios Section */}
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
              Studios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {studios.map((studio, index) => (
              <motion.div
                key={studio.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-8 text-center border-0 hover:shadow-xl transition-shadow h-full"
                  style={{ backgroundColor: studio.bg }}
                >
                  <h3
                    className="mb-4 text-white"
                    style={{
                      fontWeight: 600,
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    {studio.title}
                  </h3>
                  <p
                    className="text-white/90 leading-relaxed"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {studio.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
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
              How to find us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7B5E] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--spa-dark)] mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Spa Street, Wellness District, City 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7B5E] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--spa-dark)] mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7B5E] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--spa-dark)] mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">info@massagetherapy.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Map placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
