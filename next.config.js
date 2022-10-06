/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    // domains: ['images.musement.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.musement.com',
      }
    ],
  },
  webpack: function (config, options) {
    config.experiments = {
      'topLevelAwait': true,
      layers: true,
    };
    return config;
  },
}

module.exports = nextConfig
