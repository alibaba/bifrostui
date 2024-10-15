const esbuild = require('esbuild');
const fs = require('fs');
const ts = require('typescript');
const { lessLoader } = require('esbuild-plugin-less');
const {
  getCompilerOptions,
} = require('./scripts/esbuild/getCompilerOptions.js');
const { resolveTSConfig } = require('./scripts/esbuild/resolveTSConfig.js');

const builder = async (type, entryPoints, outbase, outdir) => {
  esbuild
    .build({
      entryPoints, // 你的入口文件
      outdir,
      bundle: false, // 是否打包
      minify: false, // 是否压缩
      outbase,
      format: type,
      platform: 'node', // 目标平台: 'node' 或 'browser'
      target: 'es2015',
      metafile: true,
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
                ?.replace('src', 'es')
                .replace('tsx', 'js');
              distFile.push(distPath);
              esFile.push(esPath);
            });
            build.onEnd(async (buildResult) => {
              if (buildResult.errors?.length) {
                return null;
              }
              const { outputs } = buildResult?.metafile || {};

              const assets = Object.keys(outputs);
              assets.forEach((asset) => {
                if (asset.endsWith('.js')) {
                  const assetPath = `${process.cwd()}/${asset}`;
                  fs.readFile(assetPath, 'utf8', (readErr, data) => {
                    if (readErr) console.error(`构建失败: ${readErr}`);
                    if (!data) return;
                    if (
                      data.match(
                        /(import_react\.default\.memo|import_react\.default\.forwardRef|React\.forwardRef|React\.memo|\.less)/gm,
                      )
                    ) {
                      /**
                       * 1、将js中less改css引入
                       * 2、处理esbuild构建在forwardRef、memo场景不会注入PURE
                       * https://github.com/evanw/esbuild/issues/3492
                       */
                      const result = data
                        .replace('.less', '.css')
                        .replace(
                          /(import_react\.default\.memo|import_react\.default\.forwardRef|React\.forwardRef|React\.memo)/gm,
                          `/* @__PURE__ */ $1`,
                        );
                      fs.writeFile(assetPath, result, (writeErr) => {
                        if (writeErr) console.error(`构建失败: ${writeErr}`);
                      });
                    }
                  });

                  if (
                    asset.endsWith('.types.js') &&
                    assetPath.includes('es/')
                  ) {
                    fs.writeFile(assetPath, 'export {};', (writeErr) => {
                      if (writeErr) console.error(`构建失败: ${writeErr}`);
                    });
                  }
                }
              });
            });
          },
        },
      ],
    })
    .catch(() => process.exit(1));
};

const esBuilder = (entryPoints) => {
  const outbase = 'src';
  const esmOutdir = 'es';
  const cjsOutdir = 'dist';
  builder('esm', entryPoints, outbase, esmOutdir);
  builder('cjs', entryPoints, outbase, cjsOutdir);
};
module.exports = esBuilder;
