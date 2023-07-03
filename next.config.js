/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/landing-app",
  publicRuntimeConfig: { basePath: "/landing-app" },
  darkMode: false,
  daisyui: {
    themes: ["light"]
  }
};

module.exports = nextConfig;
