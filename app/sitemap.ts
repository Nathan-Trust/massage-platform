import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this with your actual domain when deployed
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.blissmassageparlor.com/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/massages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/logo.png`],
    },
  ];
}
