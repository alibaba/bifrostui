const NpmImportPlugin = require('less-plugin-npm-import');
const { render } = require('less');

const loader = function (content, a) {
  const outputOpts = {
    ext: '.css',
  };

  const cb = this.async();
  const lessOptions = {
    plugins: [new NpmImportPlugin({ prefix: '~' })],
    filename: this.resource,
  };
  render(content, lessOptions).then(({ css, map }) => {
    this.setOutputOptions(outputOpts);
    cb(null, css);
  }, cb);
};

module.exports = {
  default: loader,
};
