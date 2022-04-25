export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 5,
      branches: 5,
      functions: 5,
      lines: 5
    }
  }
};
