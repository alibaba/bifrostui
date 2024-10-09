const { readFileSync } = require("fs");
const merge = require("lodash.merge");
const { dirname, resolve } = require("path");
const ts = require("typescript");

function resolveModulePath(path) {
  try {
    return require.resolve(path);
  } catch (e) {
    return undefined;
  }
}
function resolveTSConfig(opts) {
  let configPath =
    opts.configPath ??
    ts.findConfigFile(
      opts.searchPath ?? process.cwd(),
      ts.sys.fileExists,
      opts.configName,
    );
  if (!configPath) {
    throw new Error("No config file found");
  }
  if (configPath.startsWith(".")) {
    configPath = require.resolve(configPath);
  }

  const config = ts.readConfigFile(configPath, (path) =>
    readFileSync(path, "utf-8"),
  );

  if (config.config.extends) {
    const parentConfig = resolveTSConfig({
      ...opts,
      configPath:
        resolveModulePath(config.config.extends) ??
        resolve(dirname(configPath), config.config.extends),
    }).config;

    config.config = merge(parentConfig, config.config);
  }

  if (config.error) {
    throw config.error;
  } else {
    return {
      config: config.config,
      configPath,
    };
  }
}

module.exports = { resolveTSConfig };
