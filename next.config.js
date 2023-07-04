/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const basePath = process.env.NODE_ENV === "development" ? "" : "/landing-app";
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  publicRuntimeConfig: { basePath: basePath },
  i18n: i18n
};

module.exports = nextConfig;
