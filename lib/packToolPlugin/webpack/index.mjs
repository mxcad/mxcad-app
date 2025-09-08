import { Compilation } from "webpack";
import * as fs from "fs";
import * as path from "path";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, b as createGlobalUniversalMiddleware, d as createMxCadAssetsMiddleware, c as copyDir, f as generateRuntimeConfigScript } from "../index-D4wLJTvQ.mjs";
class MxCadAssetsWebpackPlugin {
  options;
  sourceAssetsPath;
  resolvedConfig;
  constructor(options) {
    this.options = resolveOptions(options);
    this.sourceAssetsPath = getSourceAssetsPath();
    if (!fs.existsSync(this.sourceAssetsPath)) {
      throw new Error(`[mxcad-assets] Source assets not found: ${this.sourceAssetsPath}`);
    }
  }
  apply(compiler) {
    const logger = compiler.getInfrastructureLogger("MxCadAssetsPlugin");
    this.configResolved(compiler, logger);
    const isDevServerMode = compiler.options.mode !== "production";
    if (isDevServerMode) {
      this.forceConfigureDevServer(compiler, logger);
    }
    if (!compiler.options.externals) {
      compiler.options.externals = {};
    }
    Object.assign(compiler.options.externals, getExternals(this.options.libraryNames));
    this.closeBundle(compiler, logger);
    this.transformIndexHtml(compiler, logger);
  }
  configResolved(compiler, logger) {
    const { outputDir } = this.options;
    const isProduction = compiler.options.mode === "production";
    const publicPath = this.inferPublicPath(compiler);
    this.resolvedConfig = {
      isProduction,
      publicPath,
      outputDir,
      logger
    };
    logger.info(`[mxcad-assets] 🚀 Resolved: publicPath=${publicPath}`);
  }
  inferPublicPath(compiler) {
    const { outputDir } = this.options;
    const outputOptions = compiler.options.output || {};
    const devServer = compiler.options.devServer;
    if (typeof outputOptions.publicPath === "string") {
      const base = outputOptions.publicPath === "auto" ? "/" : outputOptions.publicPath;
      return ensureLeadingSlash(base) + outputDir + "/";
    }
    if (devServer) {
      if (typeof devServer.publicPath === "string") {
        const base = devServer.publicPath === "auto" ? "/" : devServer.publicPath;
        return ensureLeadingSlash(base) + outputDir + "/";
      }
      if ("static" in devServer) {
        const staticItems = Array.isArray(devServer.static) ? devServer.static : devServer.static ? [devServer.static] : [];
        for (const item of staticItems) {
          const config = typeof item === "object" ? item : {};
          if (typeof config.publicPath === "string") {
            return ensureLeadingSlash(config.publicPath) + outputDir + "/";
          }
        }
      }
    }
    return `${outputDir}/`;
  }
  // 🔥 核心：强制注入 devServer
  forceConfigureDevServer(compiler, logger) {
    const { outputDir } = this.options;
    const basePath = `/${outputDir.replace(/^\/+/, "")}`;
    let devServerConfig = compiler.options.devServer;
    if (!devServerConfig) {
      compiler.options.devServer = devServerConfig = {};
    }
    const hasSetupMiddlewares = "setupMiddlewares" in devServerConfig;
    if (hasSetupMiddlewares) {
      const context = compiler.options.context || process.cwd();
      const defaultPublicDir = path.join(context, "public", this.options.outputDir);
      const original = devServerConfig.setupMiddlewares;
      devServerConfig.setupMiddlewares = (middlewares, server) => {
        logger.info(`[mxcad-assets] 🟢 Injecting middleware via setupMiddlewares`);
        server.app.use(createGlobalUniversalMiddleware(this.options));
        server.app.use(basePath, createMxCadAssetsMiddleware(this.sourceAssetsPath, this.options, defaultPublicDir, logger));
        return (original == null ? void 0 : original(middlewares, server)) || middlewares;
      };
      return;
    }
    return this.injectMiddlewareForWDSv3(compiler, basePath, logger);
  }
  injectMiddlewareForWDSv3(compiler, basePath, logger) {
    const thisOptions = this;
    const context = compiler.options.context || process.cwd();
    const defaultPublicDir = path.join(context, "public", this.options.outputDir);
    const devServer = compiler.devServer;
    if (devServer) {
      if (devServer.server && devServer.server.app) {
        logger.info(`[mxcad-assets] 🟢 Injecting middleware directly into devServer.server.app`);
        devServer.server.app.use(createGlobalUniversalMiddleware(thisOptions.options));
        devServer.server.app.use(basePath, createMxCadAssetsMiddleware(thisOptions.sourceAssetsPath, thisOptions.options, defaultPublicDir, logger));
      }
      const originalListen = devServer.listen;
      devServer.listen = function(...args) {
        const result = originalListen.apply(this, args);
        this.on("listening", () => {
          if (this.app && !this.app._mxcad_injected) {
            logger.info(`[mxcad-assets] 🚀 Injecting middleware via devServer.listen override`);
            this.app.use(createGlobalUniversalMiddleware(thisOptions.options));
            this.app.use(basePath, createMxCadAssetsMiddleware(thisOptions.sourceAssetsPath, thisOptions.options, defaultPublicDir, logger));
            this.app._mxcad_injected = true;
          }
        });
        return result;
      };
      logger.info(`[mxcad-assets] 🛠️ Patched devServer.listen for WDS v3`);
    }
    try {
      const serverPath = "webpack-dev-server/lib/Server";
      const cachedModule = require.cache[require.resolve(serverPath)];
      if (cachedModule) {
        const Server = cachedModule.exports;
        const originalListenSetupMiddlewares = Server.prototype.setupMiddlewares;
        Server.prototype.setupMiddlewares = function(...args) {
          if (!this._mxcad_injected) {
            const originalSetupMiddlewares = this.options.setupMiddlewares;
            this.options.setupMiddlewares = (middlewares, server) => {
              console.log(`[mxcad-assets] 🟢 Injecting middleware via setupMiddlewares`);
              this.app.use(createGlobalUniversalMiddleware(thisOptions.options));
              server.app.use(basePath, createMxCadAssetsMiddleware(thisOptions.sourceAssetsPath, thisOptions.options, defaultPublicDir));
              return (originalSetupMiddlewares == null ? void 0 : originalSetupMiddlewares(middlewares, server)) || middlewares;
            };
            this._mxcad_injected = true;
            return originalListenSetupMiddlewares.apply(this, ...args);
            ;
          }
        };
        const originalListen = Server.prototype.listen;
        Server.prototype.listen = function(...args) {
          logger.info(`[mxcad-assets] 🚀 Server.prototype.listen called (from cache)`);
          if (this.app && !this.app._mxcad_injected) {
            this.app.use(createGlobalUniversalMiddleware(thisOptions.options));
            this.app.use(basePath, createMxCadAssetsMiddleware(thisOptions.sourceAssetsPath, thisOptions.options, defaultPublicDir, logger));
            this.app._mxcad_injected = true;
            logger.info(`[mxcad-assets] ✅ Middleware injected via Server.prototype.listen`);
          }
          return originalListen.apply(this, args);
        };
        logger.info(`[mxcad-assets] 🛠️ Patched Server.prototype.listen via require.cache`);
      } else {
        logger.warn(`[mxcad-assets] ⚠️ Server module not cached yet, patch may fail`);
      }
    } catch (e) {
      logger.info(`[mxcad-assets] 🟡 Could not patch via require.cache: ${e.message}`);
    }
  }
  closeBundle(compiler, logger) {
    compiler.hooks.done.tapAsync("MxCadAssetsPlugin", (stats, callback) => {
      if (compiler.options.mode === "production") {
        this.copyAssetsToOutput(compiler, logger, callback);
      } else {
        callback();
      }
    });
  }
  copyAssetsToOutput(compiler, logger, callback) {
    var _a;
    if (!fs.existsSync(this.sourceAssetsPath)) {
      logger.warn(`[mxcad-assets] ⚠️ Source not found: ${this.sourceAssetsPath}`);
      return callback();
    }
    const outputPath = ((_a = compiler.options.output) == null ? void 0 : _a.path) || "dist";
    const targetAssetsPath = path.join(outputPath, this.options.outputDir);
    const outputFs = compiler.outputFileSystem || fs;
    outputFs.mkdir(targetAssetsPath, { recursive: true }, (err) => {
      if (err) return callback(err);
      const context = compiler.options.context || process.cwd();
      const defaultPublicDir = path.join(context, "public", this.options.outputDir);
      copyDir(this.sourceAssetsPath, targetAssetsPath, defaultPublicDir, this.options, (err2) => {
        if (err2) {
          logger.error(`[mxcad-assets] ❌ Copy failed: ${err2.message}`);
        } else {
          logger.info(`[mxcad-assets] ✅ Copied to ${targetAssetsPath}`);
        }
        callback(err2);
      });
    });
  }
  transformIndexHtml(compiler, logger) {
    const injectScript = (compilation) => {
      var _a;
      const publicPath = ((_a = this.resolvedConfig) == null ? void 0 : _a.publicPath) || `./${this.options.outputDir}/`;
      const script = generateRuntimeConfigScript(publicPath);
      for (const [filename, asset] of Object.entries(compilation.assets)) {
        if (filename.endsWith(".html") && isSource(asset)) {
          const source = asset.source().toString();
          if (source.includes("</head>")) {
            const modified = source.replace("</head>", `${script}</head>`);
            compilation.assets[filename] = {
              source: () => modified,
              size: () => Buffer.byteLength(modified, "utf8")
            };
            logger.info(`[mxcad-assets] ✅ Injected into ${filename}`);
          }
        }
      }
    };
    if ("processAssets" in compiler.hooks) {
      compiler.hooks.compilation.tap("MxCadAssetsPlugin", (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: "MxCadAssetsPlugin",
            stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
            // ✅ 静态属性，直接通过类访问
          },
          injectScript
        );
      });
    } else {
      compiler.hooks.emit.tapAsync("MxCadAssetsPlugin", (compilation, cb) => {
        injectScript(compilation);
        cb();
      });
    }
  }
}
function ensureLeadingSlash(str) {
  return str;
}
function isSource(asset) {
  return asset && typeof asset.source === "function";
}
export {
  MxCadAssetsWebpackPlugin,
  MxCadAssetsWebpackPlugin as default
};
