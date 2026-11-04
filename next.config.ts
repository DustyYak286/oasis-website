import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old placeholder pages now live as sections on the home page.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
