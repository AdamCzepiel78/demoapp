export default {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/"
  ],
};
