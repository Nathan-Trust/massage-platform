import { Instagram, Facebook, Twitter } from "lucide-react";

  export const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  export const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  export const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@serenespastudio",
      link: "https://instagram.com/serenespastudio",
      color: "#E4405F",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "Serene Spa Studio",
      link: "https://facebook.com/serenespastudio",
      color: "#1877F2",
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@serenespastudio",
      link: "https://twitter.com/serenespastudio",
      color: "#1DA1F2",
    },
  ];

  export const locations = [
    {
      name: "Downtown Location",
      address: "123 Wellness Street, Suite 100",
      city: "Spa City, SC 12345",
      hours: "Mon-Fri: 9:00 AM - 9:00 PM\nSat-Sun: 10:00 AM - 8:00 PM",
    },
    {
      name: "Uptown Branch",
      address: "456 Relaxation Avenue, Floor 2",
      city: "Spa City, SC 12346",
      hours: "Mon-Fri: 10:00 AM - 8:00 PM\nSat-Sun: 11:00 AM - 7:00 PM",
    },
  ];