const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'],
    extraNodeModules: {
      src: './src',
      components: './src/components',
      assets: './src/assets',
      utils: './src/utils',
    },
  },
});

module.exports = config;
