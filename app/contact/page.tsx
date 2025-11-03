import { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Contact & Book Appointment - SPXEK Luxury Spa",
  description:
    "Contact SPXEK luxury spa to book your appointment. Find our location, hours, and get in touch via phone, WhatsApp, or our online booking system.",
  keywords:
    "contact spa, book appointment, spa booking, spa location, spa hours, WhatsApp booking",
  openGraph: {
    title: "Contact & Book Appointment - SPXEK Luxury Spa",
    description: "Contact us to book your appointment at SPXEK luxury spa.",
    type: "website",
  },
};

export default function Contact() {
  return <ContactClient />;
}
