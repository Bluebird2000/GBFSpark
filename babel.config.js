module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': '.',
          '@src': './src',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@template': './src/components/template',
          test: './test',
          underscores: 'lodash',
        },
      },
    ],
  ],
};