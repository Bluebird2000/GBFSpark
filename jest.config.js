/** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',               // RN-specific transforms
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['**/*.(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^@assets/(.*)$':   '<rootDir>/src/assets/$1',
    '^@components/(.*)$':'<rootDir>/src/components/$1',
    '^@navigators/(.*)$':'<rootDir>/src/navigators/$1',
    '^@config/(.*)$':   '<rootDir>/src/utils/config/$1',
    '^@helpers/(.*)$':  '<rootDir>/src/utils/helpers/$1',
    '^@constants/(.*)$':'<rootDir>/src/utils/constants/$1',
    '^@hooks/(.*)$':    '<rootDir>/src/hooks/$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|' +
      '@react-native|' +
      '@react-navigation/.*)'
  ]
};
