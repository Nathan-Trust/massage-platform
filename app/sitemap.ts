import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/content";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/massage-and-wellness", priority: 0.9 },
  { path: "/packages-and-pricing", priority: 0.9 },
  { path: "/mobile-massage", priority: 0.8 },
  { path: "/corporate-wellness", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/book", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl.replace(/\/$/, "");
  return ROUTES.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
