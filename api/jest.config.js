/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  //collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\", "<rootDir>/tests"],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["lcov", "clover", "text-summary"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js"],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/tests",
    "<rootDir>/src", // for sake of coverage
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["<rootDir>/tests/**/*.test.ts"],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  transformIgnorePatterns: ["<rootDir>/node_modules/(?!mikro-orm)"],

  resetMocks: false,
};
