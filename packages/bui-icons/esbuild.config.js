/* eslint-disable @typescript-eslint/no-require-imports */

// eslint-disable-next-line import/no-extraneous-dependencies
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

glob('**/*.{tsx,ts,less}', {
  ignore: ['**/*.test.*', '**/node_modules/**/*.*'],
})
  .then((file) => {
    esBuilder(file);
  })
  .catch((err) => {
    console.log('构建失败', err);
  });
