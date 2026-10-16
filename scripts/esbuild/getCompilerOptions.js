const { createHash } = require('node:crypto');
const { resolve } = require('node:path');
const ts = require('typescript');

function getCompilerOptions(opts) {
  const compilerOptions = ts.convertCompilerOptionsFromJson(
    opts.tsconfig.compilerOptions,
    process.cwd(),
  ).options;
  compilerOptions.declaration = true;
  compilerOptions.emitDeclarationOnly = true;
  compilerOptions.declarationDir = resolve(
    process.cwd(),
    opts.esbuildOptions.outdir,
  );
  compilerOptions.rootDir = resolve(process.cwd(), 'src');
  if (opts.willBundleDeclarations) {
    compilerOptions.declarationDir = resolve(
      compilerOptions.declarationDir,
      'dts-prebundle',
    );
  }

  if (compilerOptions.incremental && !compilerOptions.tsBuildInfoFile) {
    const configHash = createHash('sha256')
      .update(
        JSON.stringify({
          compilerOptions,
          __buildContext: opts.pluginOptions?.__buildContext,
        }),
      )
      .digest('hex');

    const cacheDir = resolve(
      require.resolve('esbuild/package.json'),
      '../../.cache/esbuild-plugin-d.ts',
    );

    compilerOptions.tsBuildInfoFile = resolve(
      opts.pluginOptions.buildInfoDir ?? cacheDir,
      `esbuild-plugin-dts-${configHash}.tsbuildinfo`,
    );
  }

  compilerOptions.listEmittedFiles = true;

  return compilerOptions;
}

module.exports = { getCompilerOptions };
