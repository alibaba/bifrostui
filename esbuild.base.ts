const esbuild = require('esbuild');
const fs = require('fs');
const ts = require('typescript');
const { lessLoader } = require('esbuild-plugin-less');
const {
  getCompilerOptions,
} = require('./scripts/esbuild/getCompilerOptions.js');
const { resolveTSConfig } = require('./scripts/esbuild/resolveTSConfig.js');

const build = async (type, entryPoints, outbase, outdir) => {
  esbuild
    .build({
      entryPoints, // 你的入口文件
      outdir,
      bundle: false, // 是否打包
      minify: false, // 是否压缩
      outbase,
      plugins: [
        lessLoader(),
        {
          name: 'dts-plugin',
          async setup(build) {
            const { config } = resolveTSConfig({});
            const willBundleDeclarations = false;
            const compilerOptions = getCompilerOptions({
              tsconfig: config,
              pluginOptions: { tsconfig: { outdir } },
              esbuildOptions: build.initialOptions,
              willBundleDeclarations,
            });
            const compilerHost = compilerOptions.incremental
              ? ts.createIncrementalCompilerHost(compilerOptions)
              : ts.createCompilerHost(compilerOptions);

            const inputFiles = [];

            build.onLoad({ filter: /(\.tsx|\.ts)$/ }, async (args) => {
              inputFiles.push(args.path);
              compilerHost.getSourceFile(
                args.path,
                compilerOptions.target ?? ts.ScriptTarget.Latest,
                true,
              );
            });
            build.onEnd(() => {
              let compilerProgram;

              if (compilerOptions.incremental) {
                compilerProgram = ts.createIncrementalProgram({
                  options: compilerOptions,
                  host: compilerHost,
                  rootNames: inputFiles,
                });
              } else {
                compilerProgram = ts.createProgram(
                  inputFiles,
                  compilerOptions,
                  compilerHost,
                );
              }
              compilerProgram.emit();
            });
          },
        },
        {
          name: 'transform-import-less-to-css',
          async setup(build) {
            const distFile = [];
            const esFile = [];
            build.onLoad({ filter: /(\.tsx)$/ }, async (args) => {
              const distPath = args.path
                ?.replace('src', 'dist')
                .replace('tsx', 'js');
              const esPath = args.path
                ?.replace('src', 'dist')
                .replace('tsx', 'js');
              distFile.push(distPath);
              esFile.push(esPath);
            });
            build.onEnd(() => {
              distFile.forEach((item) => {
                fs.readFile(item, 'utf8', function (err, data) {
                  if (err) console.error(`构建失败: ${err}`);
                  const result = data?.replace('.less', '.css');
                  fs.writeFile(item, result, (err) => {
                    if (err) console.error(`构建失败: ${err}`);
                  });
                });
              });
              esFile.forEach((item) => {
                fs.readFile(item, 'utf8', function (err, data) {
                  if (err) console.error(`构建失败: ${err}`);
                  const result = data?.replace('.less', '.css');
                  fs.writeFile(item, result, (err) => {
                    if (err) console.error(`构建失败: ${err}`);
                  });
                });
              });
            });
          },
        },
      ],
      format: type,
      platform: 'node', // 目标平台: 'node' 或 'browser'
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
