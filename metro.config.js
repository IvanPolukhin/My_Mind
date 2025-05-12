const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    blockList: exclusionList([
      /.*\/node_modules\/react-native\/.*/,
    ]),
  },
});

module.exports = withNativeWind(config, {input: './global.css'});
