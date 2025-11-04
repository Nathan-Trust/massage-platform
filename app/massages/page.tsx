import { Metadata } from "next";
import MassagesClient from "./client";

export const metadata: Metadata = {
  title: "Massage Services - Bliss Massage Parlor",
  description:
    "Explore our comprehensive range of massage therapies including Swedish, deep tissue, hot stone, aromatherapy, and sports massage treatments.",
  keywords:
    "massage services, Swedish massage, deep tissue, hot stone massage, aromatherapy, sports massage, therapeutic massage",
  openGraph: {
    title: "Massage Services - Bliss Massage Parlor",
    description: "Comprehensive range of professional massage therapies.",
    type: "website",
  },
};

export default function Massages() {
  return <MassagesClient />;
}
