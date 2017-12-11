module.exports = {
  modulePaths: ['front/src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  setupTestFrameworkScriptFile: '<rootDir>enzyme.config.js',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    'raf/polyfill',
  ],
};
