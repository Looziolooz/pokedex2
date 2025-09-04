/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'], // utile per immagini Pokémon
  },
  experimental: {
    appDir: true, // se stai usando la nuova struttura /app
  },
}

module.exports = nextConfig
// module.exports = nextConfig --- IGNORE ---