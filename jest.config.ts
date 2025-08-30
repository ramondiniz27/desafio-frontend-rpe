import { jest } from 'globals';

export {};
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
  coverageDirectory: 'coverage',

  testEnvironment: 'jsdom',
  jest: {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  },
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!msw|@bundled-es-modules/statuses)',
  ],

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
