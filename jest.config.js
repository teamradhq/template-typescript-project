module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.(spec|test).[jt]s?(x)',
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/ts/src/$1",
    "#/(.*)$": "<rootDir>/test/$1",
  },
};
