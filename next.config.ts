import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.stack-auth.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
