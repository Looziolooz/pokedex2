import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['raw.githubusercontent.com', 'assets.pokemon.com'],
  },
};

export default nextConfig;
