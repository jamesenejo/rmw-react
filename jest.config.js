module.exports = {
  setupFiles: ['<rootDir>/tests/setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/client/$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
