import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // v1 URLs stay working after the v2 restructure.
  async redirects() {
    return [
      { source: "/contact", destination: "/book", permanent: true },
      { source: "/massages", destination: "/massage-and-wellness", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/testimonials", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
