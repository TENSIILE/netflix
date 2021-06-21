const path = require('path');

module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(
      __dirname,
      './__mocks__/fileMock.js'
    ),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@/(.*)': './src/$1',
  },
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
};
