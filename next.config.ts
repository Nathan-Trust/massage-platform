import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
