export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  }
};
