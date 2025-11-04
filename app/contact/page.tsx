import { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Contact & Book Appointment - Bliss Massage Parlor",
  description:
    "Contact Bliss Massage Parlor to book your appointment. Find our location, hours, and get in touch via phone, WhatsApp, or our online booking system.",
  keywords:
    "contact spa, book appointment, spa booking, spa location, spa hours, WhatsApp booking",
  openGraph: {
    title: "Contact & Book Appointment - Bliss Massage Parlor",
    description: "Contact us to book your appointment at Bliss Massage Parlor.",
    type: "website",
  },
};

export default function Contact() {
  return <ContactClient />;
}
