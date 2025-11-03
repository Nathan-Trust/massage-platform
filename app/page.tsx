import { Metadata } from "next";
import HomeClient from "./client";

export const metadata: Metadata = {
  title: "SPXEK - Luxury Spa & Wellness Center",
  description:
    "Experience tranquility and rejuvenation at SPXEK luxury spa. Professional massage therapy, wellness treatments, and holistic healing in a serene environment.",
  keywords:
    "spa, massage, wellness, relaxation, therapy, luxury spa, holistic healing",
  openGraph: {
    title: "SPXEK - Luxury Spa & Wellness Center",
    description: "Experience tranquility and rejuvenation at SPXEK luxury spa.",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
