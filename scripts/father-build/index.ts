import { addLoader } from 'father/dist/builder/bundless/loaders';

const transformImportLess2Css = () => {
  return {
    name: 'transform-import-less-to-css',
    visitor: {
      ImportDeclaration(path) {
        const re = /\.less$/;
        if (re.test(path.node.source.value)) {
          path.node.source.value = path.node.source.value.replace(re, '.css');
        }
      },
    },
  };
};

export default async (api) => {
  api.modifyConfig((memo) => {
    const config = memo;
    const supportMode = ['esm', 'cjs'];
    supportMode.forEach((mode) => {
      if (config[mode]) {
        const { extraBabelPlugins = [] } = config[mode];
        config[mode].extraBabelPlugins = [
          ...extraBabelPlugins,
          // transform ts file less import source
          transformImportLess2Css,
        ];
      }
    });

    return config;
  });

  const loaders = await api.applyPlugins({
    key: 'addLessLoader',
    initialValue: [
      {
        key: 'less-loader',
        test: /\.less$/,
        loader: require.resolve('./loader.js'),
      },
    ],
  });

  loaders.forEach((loader) => addLoader(loader));
};
