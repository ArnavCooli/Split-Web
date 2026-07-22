import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the higher quality we request on the iPhone screenshots, and
    // prefer modern formats so the sharp sources stay small on the wire.
    qualities: [75, 92],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
