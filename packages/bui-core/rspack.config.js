const fs = require('fs');
const path = require('path');
const { defineConfig } = require('@rspack/cli');
const { DefinePlugin } = require('@rspack/core');
const { execSync } = require('child_process');

const isMainBranch = () => {
  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf-8',
      stdio: 'pipe',
    }).trim();
    return currentBranch === 'feat/benchmark';
  } catch (error) {
    return false;
  }
};

const components = fs.readdirSync(
  path.resolve(__dirname, 'benchmarks/components'),
);
const entryList = components.reduce((acc, component) => {
  const componentName = component.split('.')[0];
  acc[componentName] = path.resolve(
    __dirname,
    'benchmarks/components',
    component,
  );
  return acc;
}, {});

const outputPath = isMainBranch()
  ? path.resolve(__dirname, 'benchmarks/umd-main')
  : path.resolve(__dirname, 'benchmarks/umd');

module.exports = defineConfig({
  entry: entryList,
  output: {
    clean: true,
    path: outputPath,
    filename: '[name].umd.js',
    library: {
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  module: {
    defaultRules: ['...'],
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new DefinePlugin({
      'process.env.TARO_ENV': JSON.stringify('h5'),
    }),
  ],
  mode: 'production',
});
