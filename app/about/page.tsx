import { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Us - Bliss Massage Parlor",
  description:
    "Learn about Bliss Massage Parlor, our experienced team of therapists, and our commitment to providing exceptional wellness experiences in a tranquil environment.",
  keywords:
    "about spa, spa team, professional therapists, wellness experts, luxury spa experience",
  openGraph: {
    title: "About Us - Bliss Massage Parlor",
    description: "Learn about our experienced team and commitment to wellness.",
    type: "website",
  },
};

export default function About() {
  return <AboutClient />;
}
