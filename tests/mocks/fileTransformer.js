const path = require('node:path');

// https://jestjs.io/docs/code-transformation#transforming-images-to-their-path
module.exports = {
  process(src, filename, config, options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
