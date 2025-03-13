import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.enjoyperu.org",
      },
    ],
  },
};

export default nextConfig;
