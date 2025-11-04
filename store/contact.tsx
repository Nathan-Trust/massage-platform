import { Instagram, Facebook, Twitter } from "lucide-react";

export const whatsappNumber = "+2348117896388"; // Updated with actual WhatsApp number
export const whatsappLink = `https://wa.me/${whatsappNumber.replace(
  /\+/g,
  ""
)}`;

export const socialMedia = [
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@blissmassageparlor_official",
    link: "https://www.instagram.com/blissmassageparlor_official?igsh=MTFtY3Z2dWVieDBw",
    color: "#E4405F",
  },
];

// export const locations = [
//   {
//     name: "Downtown Location",
//     address: "123 Wellness Street, Suite 100",
//     city: "Spa City, SC 12345",
//     hours: "Mon-Fri: 9:00 AM - 9:00 PM\nSat-Sun: 10:00 AM - 8:00 PM",
//   },
//   {
//     name: "Uptown Branch",
//     address: "456 Relaxation Avenue, Floor 2",
//     city: "Spa City, SC 12346",
//     hours: "Mon-Fri: 10:00 AM - 8:00 PM\nSat-Sun: 11:00 AM - 7:00 PM",
//   },
// ];
