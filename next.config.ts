import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import withPWAInit from "@ducanh2912/next-pwa";


const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },
  pageExtensions:["ts", "tsx", "js", "jsx", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
});

export default withPWA(withMDX(nextConfig));
