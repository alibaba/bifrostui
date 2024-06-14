const path = require('path');

const config = {
  projectName: 'bui-miniapp',
  date: '2023-3-31',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    '@bifrostui/react': path.resolve(
      __dirname,
      '../../../packages/bui-core/src/index.ts',
    ),
    '@bifrostui/icons': path.resolve(
      __dirname,
      '../../../packages/bui-icons/src/index.ts',
    ),
    '@bifrostui/utils': path.resolve(
      __dirname,
      '../../../packages/bui-utils/src/index.ts',
    ),
    '@bifrostui/types': path.resolve(
      __dirname,
      '../../../packages/bui-types/src/index.ts',
    ),
    '@bifrostui/styles': path.resolve(
      __dirname,
      '../../../packages/bui-styles',
    ),
    '@': path.resolve(__dirname, '../src'),
  },
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        pxtransformBlackList: [/am-/, /demo-/, /^body/],
      },
    ],
  ],
  mini: {
    webpackChain: (chain, webpack) => {
      chain.resolve.extensions.prepend('.miniapp.tsx');
      chain.resolve.extensions.prepend('.miniapp.ts');
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              taro: {
                name: 'taro',
                test: (module) => {
                  return /taro-(components|runtime|react)/.test(module.request);
                },
                priority: 100,
              },
            },
          },
        },
      });
    },
    postcss: {
      autoprefixer: {
        enable: false,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
