module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@app': './app',
            '@assets': './app/shared/assets',
          },
        },
      ],
    ],
  };
};
