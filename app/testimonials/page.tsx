import { Metadata } from "next";
import TestimonialsClient from "./client";

export const metadata: Metadata = {
  title: "Client Testimonials & Gallery - SPXEK Luxury Spa",
  description:
    "Read testimonials from our satisfied clients and explore our beautiful spa facilities through our photo gallery.",
  keywords:
    "client testimonials, spa reviews, spa gallery, spa photos, client experiences, spa facilities",
  openGraph: {
    title: "Client Testimonials & Gallery - SPXEK Luxury Spa",
    description:
      "See what our clients say and explore our beautiful facilities.",
    type: "website",
  },
};

export default function Testimonials() {
  return <TestimonialsClient />;
}
