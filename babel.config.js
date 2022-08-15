module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', ],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@theme': './src/theme',
          '@routes': './src/routes',
        },
      },
    ],
    // NB: other plugins should come first before reanimated 
    'react-native-reanimated/plugin',
  ],
};
