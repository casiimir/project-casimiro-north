/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  future: {
    webpack5: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
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
