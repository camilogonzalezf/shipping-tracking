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
          "./header": "./components/organisms/Header.tsx",
          "./tracking-info": "./components/organisms/TrackingInformation.tsx",
          "./loader": "./components/organisms/Loader.tsx",
          "./keyboard-form": "./components/molecules/KeyBoardEnterForm.tsx",
          "./tracking-time-line": "./components/molecules/TrackingTimeLine.tsx",
          "./general-menu": "./components/atoms/GeneralMenu.tsx",
          "./custom-button": "./components/atoms/CustomButton.tsx",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
