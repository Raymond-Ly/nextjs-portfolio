import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ]
};

export default config;