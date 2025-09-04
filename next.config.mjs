const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'assets.pokemon.com'],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
