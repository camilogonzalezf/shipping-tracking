const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^sharedComponents/(.*)$":
      "<rootDir>/__tests__/__mocks__/sharedComponents.tsx",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/__mocks__/"],
};

module.exports = createJestConfig(customJestConfig);
