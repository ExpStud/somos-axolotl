/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["images.somosaxolotl.com"],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.somosaxolotl.com",
  },
};

module.exports = nextConfig;
