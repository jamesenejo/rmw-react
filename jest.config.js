module.exports = {
  setupFiles: ['<rootDir>/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^Actions(.*)$': '<rootDir>/src/store/actions$1',
    '^Commons(.*)$': '<rootDir>/src/components/commons$1',
    '^Helpers(.*)$': '<rootDir>/src/helpers$1',
    '^Styles(.*)$': '<rootDir>/src/styles$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ["**/src/**"]
};
