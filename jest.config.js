module.exports = {
  setupFiles: ['<rootDir>/setup.js'],
  automock: false,
  timers: "fake",
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^Thunks(.*)$': '<rootDir>/src/store/thunks$1',
    '^Commons(.*)$': '<rootDir>/src/components/commons$1',
    '^Helpers(.*)$': '<rootDir>/src/helpers$1',
    '^Styles(.*)$': '<rootDir>/src/styles$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: [
    "**/src/**",
    '!**/src/index.js',
    '!**/src/App.jsx'
  ]
};
