const nextJest = require('next/jest');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(process.cwd(), './env/.env.test'),
});

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  testTimeout: 20000,
  collectCoverageFrom: ['**/*.(t|j)s', '**/*.tsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/cypress',
    'node_modules',
    'public',
    'coverage',
    '<rootDir>/jest.config.js',
    '<rootDir>/jest.setup.js',
    '<rootDir>/next.config.js',
    '<rootDir>/.next',
    '<rootDir>/.swc',
    '<rootDir>/__mocks__',
  ],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'json-summary'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
