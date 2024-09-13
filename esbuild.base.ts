const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const readPkgJson = require('read-pkg');
const { dtsPlugin } = require('@ali/esbuild-plugin-d.ts');

const build = async (type, entryPoints, outbase, outdir) => {
  const packageJson = await readPkgJson();
  const externalPacks = Object.keys(packageJson.dependencies);

  esbuild
    .build({
      entryPoints, // 你的入口文件
      outdir,
      bundle: true, // 是否打包
      minify: false, // 是否压缩
      outbase,
      plugins: [
        dtsPlugin({}),
        {
          name: 'buiPlugin',
          setup: (builder) => {
            builder.onLoad({ filter: /\.less$/ }, async (args) => {
              const source = await fs.promises.readFile(args.path, 'utf8');
              return {
                contents: source,
                loader: 'copy',
              };
            });
            builder.onResolve({ filter: /.*/ }, (args) => {
              if (args.kind === 'entry-point') {
                // skip entry point
                return { path: path.join(args.resolveDir, args.path) };
              }
              if (args.path.startsWith('.')) {
                // skip relative module
                return { path: args.path, external: true };
              }

              return {
                path: args.path,
                external: true,
              };
            });
          },
        },
      ],
      format: type,
      platform: 'browser', // 目标平台: 'node' 或 'browser'
      external: externalPacks,
      target: 'es2015',
    })
    .catch(() => process.exit(1));
};

const esBuilder = (entryPoints) => {
  const outbase = 'src';
  const esmOutdir = 'es';
  const cjsOutdir = 'dist';
  build('esm', entryPoints, outbase, esmOutdir);
  build('cjs', entryPoints, outbase, cjsOutdir);
};
module.exports = esBuilder;
