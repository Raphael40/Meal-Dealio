// const config = {
//   transform: {},
//   setupFiles: ['<rootDir>/jest.setup.js'],
//   preset: 'react-native',
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|react-native-safe-area-view|@react-navigation|@react-native-community)/)',
//   ],
// };

// module.exports = config;

module.exports = {
  preset: 'ts-jest',
  //setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};