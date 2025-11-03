import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactInfo = {
  phone: "(555) 123-SPXEK",
  email: "info@spxek.com",
  whatsapp: "5551234567",
  address: "123 Wellness Boulevard, Spa District",
  hours: {
    weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
    weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
  },
};

export const socialMedia = [
  {
    name: "Facebook",
    url: "https://facebook.com/spxek",
    icon: "facebook",
    description: "Follow us for wellness tips and special offers",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/spxek",
    icon: "instagram",
    description: "See our latest treatments and client stories",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/spxek",
    icon: "twitter",
    description: "Stay updated with spa news and events",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/spxek",
    icon: "linkedin",
    description: "Connect with us professionally",
  },
];

export const locations = [
  {
    icon: MapPin,
    title: "Main Spa Location",
    address: "123 Wellness Boulevard",
    city: "Spa District, SD 12345",
    details: "Our flagship location with full service amenities",
  },
  {
    icon: Phone,
    title: "Book by Phone",
    address: "(555) 123-SPXEK",
    city: "Available 7 days a week",
    details: "Call to schedule or ask questions",
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    address: "info@spxek.com",
    city: "Response within 24 hours",
    details: "Send us your questions anytime",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    address: "Mon-Fri: 9AM-8PM",
    city: "Sat-Sun: 10AM-6PM",
    details: "Extended hours for your convenience",
  },
];

export const bookingSteps = [
  {
    step: "1",
    title: "Choose Your Service",
    description:
      "Browse our massage and wellness treatments to find what's right for you",
  },
  {
    step: "2",
    title: "Select Date & Time",
    description: "Pick a convenient appointment slot that fits your schedule",
  },
  {
    step: "3",
    title: "Provide Details",
    description: "Share any preferences or special requests for your treatment",
  },
  {
    step: "4",
    title: "Confirm Booking",
    description: "Review your appointment details and confirm your reservation",
  },
];
