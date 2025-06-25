module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@config': './src/utils/config',
          '@constants': './src/utils/constants',
          '@helpers': './src/utils/helpers',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          test: './test',
          underscores: 'lodash',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
