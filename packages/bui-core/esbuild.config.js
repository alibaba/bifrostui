/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');
const esBuilder = require('../../esbuild.base.ts');

const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  fs.removeSync(distPath);
}
const esPath = path.join(__dirname, 'es');
if (fs.existsSync(esPath)) {
  fs.removeSync(esPath);
}

glob('**/*.{tsx,jsx}', {
  ignore: ['**/*.test.{tsx,jsx}', '**/node_modules/**/*.{tsx,jsx}'],
})
  .then((file) => {
    esBuilder([...file, './src/**/*.ts', './src/**/*.js', './src/**/*.less']);
  })
  .catch((err) => {
    console.log('构建失败', err);
  });
