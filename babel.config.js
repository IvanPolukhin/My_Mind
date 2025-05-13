module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'nativewind/babel',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './src',
          components: './src/components',
          assets: './src/assets',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
