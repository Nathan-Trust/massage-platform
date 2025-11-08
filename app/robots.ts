import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Update this with your actual domain when deployed
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.blissmassageparlor.com/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
