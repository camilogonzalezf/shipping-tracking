/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_APP_BACKEND_API_URL_REFERRALS:
      process.env.NEXT_APP_BACKEND_API_URL_REFERRALS,
    NEXT_APP_BACKEND_API_URL_GETS: process.env.NEXT_APP_BACKEND_API_URL_GETS,
    NEXT_APP_GET_INFO_TRACKING: process.env.NEXT_APP_GET_INFO_TRACKING,
    NEXT_APP_GET_TERMINALS_LIST: process.env.NEXT_APP_GET_TERMINALS_LIST,
    NEXT_APP_POST_TRACKING_STATE: process.env.NEXT_APP_POST_TRACKING_STATE,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "appTracking",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          sharedComponents:
            "sharedComponents@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
