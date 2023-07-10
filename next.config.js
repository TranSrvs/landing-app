/** @type {import('next').NextConfig} */

let basePath = "";

if (process.env.NODE_ENV !== "development") basePath = "/landing-app";

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    basePath: basePath
  }
};

module.exports = nextConfig;
