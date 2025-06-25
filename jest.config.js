/** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['**/*.(spec|test).ts?(x)'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  fakeTimers: {
    enableGlobally: true, // <<— key line
    legacyFakeTimers: false, // use modern implementation
  },
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@navigators/(.*)$': '<rootDir>/src/navigators/$1',
    '^@config/(.*)$': '<rootDir>/src/utils/config/$1',
    '^@helpers/(.*)$': '<rootDir>/src/utils/helpers/$1',
    '^@constants/(.*)$': '<rootDir>/src/utils/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-redux|@react-native|@react-navigation)|react-native-keyboard-aware-scroll-view/)',
  ],
};
