/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  devIndicators: false,
  images: {
    domains: ["picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/id/**/**/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
