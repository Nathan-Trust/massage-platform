import { Metadata } from "next";
import HomeClient from "./client";

export const metadata: Metadata = {
  title: "Bliss Massage Parlor - Wellness & Rejuvenation",
  description:
    "Experience tranquility and rejuvenation at Bliss Massage Parlor. Professional massage therapy, wellness treatments, and holistic healing in a serene environment.",
  keywords:
    "spa, massage, wellness, relaxation, therapy, luxury spa, holistic healing",
  openGraph: {
    title: "Bliss Massage Parlor Massage Parlor - Wellness & Rejuvenation",
    description:
      "Experience tranquility and rejuvenation at Bliss Massage Parlor.",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
