/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "sharedComponents",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./button": "./components/ButtonFinal.tsx",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
