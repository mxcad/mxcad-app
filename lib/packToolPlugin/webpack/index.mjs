import { Compilation } from "webpack";
import * as fs from "fs";
import * as path from "path";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, b as createGlobalUniversalMiddleware, d as createMxCadAssetsMiddleware, c as copyDir, f as generateRuntimeConfigScript } from "../index-DnzNzvzx.mjs";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrVG9vbFBsdWdpblNyYy93ZWJwYWNrL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE14Q2FkQXNzZXRzV2VicGFja1BsdWdpbi50c1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IENvbXBpbGVyLCBDb21waWxhdGlvbiB9IGZyb20gJ3dlYnBhY2snO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucyxcclxuICByZXNvbHZlT3B0aW9ucyxcclxuICBnZXRTb3VyY2VBc3NldHNQYXRoLFxyXG4gIGdlbmVyYXRlUnVudGltZUNvbmZpZ1NjcmlwdCxcclxuICBnZXRDb250ZW50VHlwZSxcclxuICBjb3B5RGlyIGFzIHNoYXJlZENvcHlEaXIsXHJcbiAgZ2V0RXh0ZXJuYWxzLFxyXG4gIGhhbmRsZUNvbmZpZ1JlcXVlc3QsXHJcbiAgcmVzb2x2ZVNhZmVQYXRoLFxyXG4gIGNyZWF0ZUdsb2JhbFVuaXZlcnNhbE1pZGRsZXdhcmUsXHJcbiAgY3JlYXRlTXhDYWRBc3NldHNNaWRkbGV3YXJlLFxyXG59IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXhDYWRBc3NldHNXZWJwYWNrUGx1Z2luIHtcclxuICBwcml2YXRlIG9wdGlvbnM6IFJlcXVpcmVkPE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucz47XHJcbiAgcHJpdmF0ZSBzb3VyY2VBc3NldHNQYXRoOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZXNvbHZlZENvbmZpZz86IHtcclxuICAgIGlzUHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICAgIHB1YmxpY1BhdGg6IHN0cmluZztcclxuICAgIG91dHB1dERpcjogc3RyaW5nO1xyXG4gICAgbG9nZ2VyOiBhbnk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gcmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNvdXJjZUFzc2V0c1BhdGggPSBnZXRTb3VyY2VBc3NldHNQYXRoKCk7XHJcblxyXG4gICAgLy8g8J+UpSDlvLrliLbpqozor4Egc291cmNlQXNzZXRzUGF0aCDlrZjlnKhcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyh0aGlzLnNvdXJjZUFzc2V0c1BhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW214Y2FkLWFzc2V0c10gU291cmNlIGFzc2V0cyBub3QgZm91bmQ6ICR7dGhpcy5zb3VyY2VBc3NldHNQYXRofWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2dnZXIgPSBjb21waWxlci5nZXRJbmZyYXN0cnVjdHVyZUxvZ2dlcignTXhDYWRBc3NldHNQbHVnaW4nKTtcclxuICAgIC8vIPCfjLEgMS4gY29uZmlnUmVzb2x2ZWRcclxuICAgIHRoaXMuY29uZmlnUmVzb2x2ZWQoY29tcGlsZXIsIGxvZ2dlcik7XHJcbiAgICBjb25zdCBpc0RldlNlcnZlck1vZGUgPSBjb21waWxlci5vcHRpb25zLm1vZGUgIT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuICAgIC8vIPCflKcgMi4g5by65Yi25rOo5YWlIGRldlNlcnZlcu+8iOaguOW/g++8iVxyXG4gICAgaWYgKGlzRGV2U2VydmVyTW9kZSkge1xyXG4gICAgICB0aGlzLmZvcmNlQ29uZmlndXJlRGV2U2VydmVyKGNvbXBpbGVyLCBsb2dnZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWcqOi/memHjOiuv+mXruWSjOS/ruaUuSB3ZWJwYWNrIOmFjee9rlxyXG4gICAgaWYgKCFjb21waWxlci5vcHRpb25zLmV4dGVybmFscykge1xyXG4gICAgICBjb21waWxlci5vcHRpb25zLmV4dGVybmFscyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLy8g5re75Yqg5oiW6KaG55uWIGV4dGVybmFscyDphY3nva5cclxuICAgIE9iamVjdC5hc3NpZ24oY29tcGlsZXIub3B0aW9ucy5leHRlcm5hbHMsIGdldEV4dGVybmFscyh0aGlzLm9wdGlvbnMubGlicmFyeU5hbWVzKSk7XHJcbiAgICAvLyDwn5OmIDMuIOaehOW7uuaXtuWkjeWItlxyXG4gICAgdGhpcy5jbG9zZUJ1bmRsZShjb21waWxlciwgbG9nZ2VyKTtcclxuXHJcbiAgICAvLyDwn46oIDQuIEhUTUwg5rOo5YWlXHJcbiAgICB0aGlzLnRyYW5zZm9ybUluZGV4SHRtbChjb21waWxlciwgbG9nZ2VyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnUmVzb2x2ZWQoY29tcGlsZXI6IENvbXBpbGVyLCBsb2dnZXI6IGFueSkge1xyXG4gICAgY29uc3QgeyBvdXRwdXREaXIgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGlzUHJvZHVjdGlvbiA9IGNvbXBpbGVyLm9wdGlvbnMubW9kZSA9PT0gJ3Byb2R1Y3Rpb24nO1xyXG4gICAgY29uc3QgcHVibGljUGF0aCA9IHRoaXMuaW5mZXJQdWJsaWNQYXRoKGNvbXBpbGVyKTtcclxuXHJcbiAgICB0aGlzLnJlc29sdmVkQ29uZmlnID0ge1xyXG4gICAgICBpc1Byb2R1Y3Rpb24sXHJcbiAgICAgIHB1YmxpY1BhdGgsXHJcbiAgICAgIG91dHB1dERpcixcclxuICAgICAgbG9nZ2VyLFxyXG4gICAgfTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhgW214Y2FkLWFzc2V0c10g8J+agCBSZXNvbHZlZDogcHVibGljUGF0aD0ke3B1YmxpY1BhdGh9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluZmVyUHVibGljUGF0aChjb21waWxlcjogQ29tcGlsZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBvdXRwdXREaXIgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IG91dHB1dE9wdGlvbnMgPSBjb21waWxlci5vcHRpb25zLm91dHB1dCB8fCB7fTtcclxuICAgIGNvbnN0IGRldlNlcnZlciA9IGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygb3V0cHV0T3B0aW9ucy5wdWJsaWNQYXRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBiYXNlID0gb3V0cHV0T3B0aW9ucy5wdWJsaWNQYXRoID09PSAnYXV0bycgPyAnLycgOiBvdXRwdXRPcHRpb25zLnB1YmxpY1BhdGg7XHJcbiAgICAgIHJldHVybiBlbnN1cmVMZWFkaW5nU2xhc2goYmFzZSkgKyBvdXRwdXREaXIgKyAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRldlNlcnZlcikge1xyXG4gICAgICBpZiAodHlwZW9mIChkZXZTZXJ2ZXIgYXMgYW55KS5wdWJsaWNQYXRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSAoZGV2U2VydmVyIGFzIGFueSkucHVibGljUGF0aCA9PT0gJ2F1dG8nID8gJy8nIDogKGRldlNlcnZlciBhcyBhbnkpLnB1YmxpY1BhdGg7XHJcbiAgICAgICAgcmV0dXJuIGVuc3VyZUxlYWRpbmdTbGFzaChiYXNlKSArIG91dHB1dERpciArICcvJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdzdGF0aWMnIGluIGRldlNlcnZlcikge1xyXG4gICAgICAgIGNvbnN0IHN0YXRpY0l0ZW1zID0gQXJyYXkuaXNBcnJheShkZXZTZXJ2ZXIuc3RhdGljKVxyXG4gICAgICAgICAgPyBkZXZTZXJ2ZXIuc3RhdGljXHJcbiAgICAgICAgICA6IChkZXZTZXJ2ZXIuc3RhdGljID8gW2RldlNlcnZlci5zdGF0aWNdIDogW10pO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RhdGljSXRlbXMpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyA/IGl0ZW0gOiB7IGRpcmVjdG9yeTogaXRlbSB9O1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcucHVibGljUGF0aCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuc3VyZUxlYWRpbmdTbGFzaChjb25maWcucHVibGljUGF0aCkgKyBvdXRwdXREaXIgKyAnLyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke291dHB1dERpcn0vYDtcclxuICB9XHJcblxyXG4gIC8vIPCflKUg5qC45b+D77ya5by65Yi25rOo5YWlIGRldlNlcnZlclxyXG4gIHByaXZhdGUgZm9yY2VDb25maWd1cmVEZXZTZXJ2ZXIoY29tcGlsZXI6IENvbXBpbGVyLCBsb2dnZXI6IGFueSkge1xyXG4gICAgY29uc3QgeyBvdXRwdXREaXIgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGJhc2VQYXRoID0gYC8ke291dHB1dERpci5yZXBsYWNlKC9eXFwvKy8sICcnKX1gO1xyXG4gICAgbGV0IGRldlNlcnZlckNvbmZpZyA9IGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyO1xyXG5cclxuICAgIGlmICghZGV2U2VydmVyQ29uZmlnKSB7XHJcbiAgICAgIChjb21waWxlci5vcHRpb25zIGFzIGFueSkuZGV2U2VydmVyID0gZGV2U2VydmVyQ29uZmlnID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pyFIDEuIOWFiOWkhOeQhiBXRFMgdjTvvIjkv53mjIHkuI3lj5jvvIlcclxuICAgIGNvbnN0IGhhc1NldHVwTWlkZGxld2FyZXMgPSAnc2V0dXBNaWRkbGV3YXJlcycgaW4gZGV2U2VydmVyQ29uZmlnO1xyXG5cclxuICAgIGlmIChoYXNTZXR1cE1pZGRsZXdhcmVzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjb21waWxlci5vcHRpb25zLmNvbnRleHQgfHwgcHJvY2Vzcy5jd2QoKTtcclxuICAgICAgY29uc3QgZGVmYXVsdFB1YmxpY0RpciA9IHBhdGguam9pbihjb250ZXh0LCAncHVibGljJywgdGhpcy5vcHRpb25zLm91dHB1dERpcik7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsID0gZGV2U2VydmVyQ29uZmlnLnNldHVwTWlkZGxld2FyZXM7XHJcbiAgICAgIGRldlNlcnZlckNvbmZpZy5zZXR1cE1pZGRsZXdhcmVzID0gKG1pZGRsZXdhcmVzLCBzZXJ2ZXIpID0+IHtcclxuICAgICAgICBsb2dnZXIuaW5mbyhgW214Y2FkLWFzc2V0c10g8J+foiBJbmplY3RpbmcgbWlkZGxld2FyZSB2aWEgc2V0dXBNaWRkbGV3YXJlc2ApO1xyXG4gICAgICAgIHNlcnZlci5hcHAudXNlKGNyZWF0ZUdsb2JhbFVuaXZlcnNhbE1pZGRsZXdhcmUodGhpcy5vcHRpb25zKSk7XHJcbiAgICAgICAgc2VydmVyLmFwcC51c2UoYmFzZVBhdGgsIGNyZWF0ZU14Q2FkQXNzZXRzTWlkZGxld2FyZSh0aGlzLnNvdXJjZUFzc2V0c1BhdGgsIHRoaXMub3B0aW9ucywgZGVmYXVsdFB1YmxpY0RpciwgbG9nZ2VyKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbD8uKG1pZGRsZXdhcmVzLCBzZXJ2ZXIpIHx8IG1pZGRsZXdhcmVzO1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyDwn5SlIDIuIFdEUyB2M++8muWKq+aMgSBTZXJ2ZXIucHJvdG90eXBlLmxpc3RlblxyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0TWlkZGxld2FyZUZvcldEU3YzKGNvbXBpbGVyLCBiYXNlUGF0aCwgbG9nZ2VyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0TWlkZGxld2FyZUZvcldEU3YzKGNvbXBpbGVyOiBDb21waWxlciwgYmFzZVBhdGg6IHN0cmluZywgbG9nZ2VyOiBhbnkpIHtcclxuICAgIGNvbnN0IHRoaXNPcHRpb25zID0gdGhpcztcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjb21waWxlci5vcHRpb25zLmNvbnRleHQgfHwgcHJvY2Vzcy5jd2QoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRQdWJsaWNEaXIgPSBwYXRoLmpvaW4oY29udGV4dCwgJ3B1YmxpYycsIHRoaXMub3B0aW9ucy5vdXRwdXREaXIpO1xyXG4gICAgLy8gV0RTIHYzIOS8muWcqCBjb21waWxhdGlvbiDml7bmmrTpnLIgZGV2U2VydmVyXHJcbiAgICBjb25zdCBkZXZTZXJ2ZXIgPSBjb21waWxlci5kZXZTZXJ2ZXI7XHJcbiAgICBpZiAoZGV2U2VydmVyKSB7XHJcbiAgICAgIC8vIOKchSDmlrnms5UgMe+8muWmguaenCBkZXZTZXJ2ZXIuc2VydmVyIOWtmOWcqO+8iOW3suWIm+W7uu+8iVxyXG4gICAgICBpZiAoZGV2U2VydmVyLnNlcnZlciAmJiBkZXZTZXJ2ZXIuc2VydmVyLmFwcCkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDwn5+iIEluamVjdGluZyBtaWRkbGV3YXJlIGRpcmVjdGx5IGludG8gZGV2U2VydmVyLnNlcnZlci5hcHBgKTtcclxuICAgICAgICBkZXZTZXJ2ZXIuc2VydmVyLmFwcC51c2UoY3JlYXRlR2xvYmFsVW5pdmVyc2FsTWlkZGxld2FyZSh0aGlzT3B0aW9ucy5vcHRpb25zKSlcclxuICAgICAgICBkZXZTZXJ2ZXIuc2VydmVyLmFwcC51c2UoYmFzZVBhdGgsIGNyZWF0ZU14Q2FkQXNzZXRzTWlkZGxld2FyZSh0aGlzT3B0aW9ucy5zb3VyY2VBc3NldHNQYXRoLCB0aGlzT3B0aW9ucy5vcHRpb25zLCBkZWZhdWx0UHVibGljRGlyLCBsb2dnZXIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g4pyFIOaWueazlSAy77ya55uR5ZCsIHNlcnZlciDnmoQgJ2xpc3RlbmluZycg5LqL5Lu2XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsTGlzdGVuID0gZGV2U2VydmVyLmxpc3RlbjtcclxuICAgICAgZGV2U2VydmVyLmxpc3RlbiA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTGlzdGVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cclxuICAgICAgICAvLyDnrYnlvoUgc2VydmVyIOWQr+WKqFxyXG4gICAgICAgIHRoaXMub24oJ2xpc3RlbmluZycsICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmFwcCAmJiAhdGhpcy5hcHAuX214Y2FkX2luamVjdGVkKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDwn5qAIEluamVjdGluZyBtaWRkbGV3YXJlIHZpYSBkZXZTZXJ2ZXIubGlzdGVuIG92ZXJyaWRlYCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnVzZShjcmVhdGVHbG9iYWxVbml2ZXJzYWxNaWRkbGV3YXJlKHRoaXNPcHRpb25zLm9wdGlvbnMpKVxyXG4gICAgICAgICAgICB0aGlzLmFwcC51c2UoYmFzZVBhdGgsIGNyZWF0ZU14Q2FkQXNzZXRzTWlkZGxld2FyZSh0aGlzT3B0aW9ucy5zb3VyY2VBc3NldHNQYXRoLCB0aGlzT3B0aW9ucy5vcHRpb25zLCBkZWZhdWx0UHVibGljRGlyLCBsb2dnZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5hcHAuX214Y2FkX2luamVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDwn5ug77iPIFBhdGNoZWQgZGV2U2VydmVyLmxpc3RlbiBmb3IgV0RTIHYzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pyFIOaWueazlSAz77ya5aaC5p6c5LiK6Z2i5LiN6KGM77yM5bCd6K+V5Yqr5oyBIFNlcnZlci5wcm90b3R5cGUubGlzdGVu77yI5aSH55So77yJXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDkvb/nlKggcmVxdWlyZS5jYWNoZSDliqjmgIHmn6Xmib4gU2VydmVyIOWunuS+i1xyXG4gICAgICBjb25zdCBzZXJ2ZXJQYXRoID0gJ3dlYnBhY2stZGV2LXNlcnZlci9saWIvU2VydmVyJztcclxuICAgICAgY29uc3QgY2FjaGVkTW9kdWxlID0gcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoc2VydmVyUGF0aCldO1xyXG5cclxuICAgICAgaWYgKGNhY2hlZE1vZHVsZSkge1xyXG4gICAgICAgIGNvbnN0IFNlcnZlciA9IGNhY2hlZE1vZHVsZS5leHBvcnRzO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTGlzdGVuU2V0dXBNaWRkbGV3YXJlcyA9IFNlcnZlci5wcm90b3R5cGUuc2V0dXBNaWRkbGV3YXJlc1xyXG4gICAgICAgIFNlcnZlci5wcm90b3R5cGUuc2V0dXBNaWRkbGV3YXJlcyA9IGZ1bmN0aW9uICh0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuX214Y2FkX2luamVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2V0dXBNaWRkbGV3YXJlcyA9IHRoaXMub3B0aW9ucy5zZXR1cE1pZGRsZXdhcmVzXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cE1pZGRsZXdhcmVzID0gKG1pZGRsZXdhcmVzLCBzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW214Y2FkLWFzc2V0c10g8J+foiBJbmplY3RpbmcgbWlkZGxld2FyZSB2aWEgc2V0dXBNaWRkbGV3YXJlc2ApO1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBwLnVzZShjcmVhdGVHbG9iYWxVbml2ZXJzYWxNaWRkbGV3YXJlKHRoaXNPcHRpb25zLm9wdGlvbnMpKVxyXG4gICAgICAgICAgICAgIHNlcnZlci5hcHAudXNlKGJhc2VQYXRoLCBjcmVhdGVNeENhZEFzc2V0c01pZGRsZXdhcmUodGhpc09wdGlvbnMuc291cmNlQXNzZXRzUGF0aCwgdGhpc09wdGlvbnMub3B0aW9ucywgZGVmYXVsdFB1YmxpY0RpcikpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAob3JpZ2luYWxTZXR1cE1pZGRsZXdhcmVzID09IG51bGwgPyB2b2lkIDAgOiBvcmlnaW5hbFNldHVwTWlkZGxld2FyZXMobWlkZGxld2FyZXMsIHNlcnZlcikpIHx8IG1pZGRsZXdhcmVzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9teGNhZF9pbmplY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTGlzdGVuU2V0dXBNaWRkbGV3YXJlcy5hcHBseSh0aGlzLCAuLi5hcmdzKTs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxMaXN0ZW4gPSBTZXJ2ZXIucHJvdG90eXBlLmxpc3RlbjtcclxuXHJcbiAgICAgICAgU2VydmVyLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgbG9nZ2VyLmluZm8oYFtteGNhZC1hc3NldHNdIPCfmoAgU2VydmVyLnByb3RvdHlwZS5saXN0ZW4gY2FsbGVkIChmcm9tIGNhY2hlKWApO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmFwcCAmJiAhdGhpcy5hcHAuX214Y2FkX2luamVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnVzZShjcmVhdGVHbG9iYWxVbml2ZXJzYWxNaWRkbGV3YXJlKHRoaXNPcHRpb25zLm9wdGlvbnMpKVxyXG4gICAgICAgICAgICB0aGlzLmFwcC51c2UoYmFzZVBhdGgsIGNyZWF0ZU14Q2FkQXNzZXRzTWlkZGxld2FyZSh0aGlzT3B0aW9ucy5zb3VyY2VBc3NldHNQYXRoLCB0aGlzT3B0aW9ucy5vcHRpb25zLCBkZWZhdWx0UHVibGljRGlyLCBsb2dnZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5hcHAuX214Y2FkX2luamVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYFtteGNhZC1hc3NldHNdIOKchSBNaWRkbGV3YXJlIGluamVjdGVkIHZpYSBTZXJ2ZXIucHJvdG90eXBlLmxpc3RlbmApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBvcmlnaW5hbExpc3Rlbi5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2dnZXIuaW5mbyhgW214Y2FkLWFzc2V0c10g8J+boO+4jyBQYXRjaGVkIFNlcnZlci5wcm90b3R5cGUubGlzdGVuIHZpYSByZXF1aXJlLmNhY2hlYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oYFtteGNhZC1hc3NldHNdIOKaoO+4jyBTZXJ2ZXIgbW9kdWxlIG5vdCBjYWNoZWQgeWV0LCBwYXRjaCBtYXkgZmFpbGApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDwn5+hIENvdWxkIG5vdCBwYXRjaCB2aWEgcmVxdWlyZS5jYWNoZTogJHsoZSBhcyBFcnJvcikubWVzc2FnZX1gKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBjbG9zZUJ1bmRsZShjb21waWxlcjogQ29tcGlsZXIsIGxvZ2dlcjogYW55KSB7XHJcbiAgICBjb21waWxlci5ob29rcy5kb25lLnRhcEFzeW5jKCdNeENhZEFzc2V0c1BsdWdpbicsIChzdGF0cywgY2FsbGJhY2spID0+IHtcclxuICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMubW9kZSA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgdGhpcy5jb3B5QXNzZXRzVG9PdXRwdXQoY29tcGlsZXIsIGxvZ2dlciwgY2FsbGJhY2spO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3B5QXNzZXRzVG9PdXRwdXQoXHJcbiAgICBjb21waWxlcjogQ29tcGlsZXIsXHJcbiAgICBsb2dnZXI6IGFueSxcclxuICAgIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IpID0+IHZvaWRcclxuICApIHtcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyh0aGlzLnNvdXJjZUFzc2V0c1BhdGgpKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKGBbbXhjYWQtYXNzZXRzXSDimqDvuI8gU291cmNlIG5vdCBmb3VuZDogJHt0aGlzLnNvdXJjZUFzc2V0c1BhdGh9YCk7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dFBhdGggPSBjb21waWxlci5vcHRpb25zLm91dHB1dD8ucGF0aCB8fCAnZGlzdCc7XHJcbiAgICBjb25zdCB0YXJnZXRBc3NldHNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHRoaXMub3B0aW9ucy5vdXRwdXREaXIpO1xyXG4gICAgY29uc3Qgb3V0cHV0RnMgPSBjb21waWxlci5vdXRwdXRGaWxlU3lzdGVtIHx8IGZzO1xyXG5cclxuICAgIG91dHB1dEZzLm1rZGlyKHRhcmdldEFzc2V0c1BhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0sIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjb21waWxlci5vcHRpb25zLmNvbnRleHQgfHwgcHJvY2Vzcy5jd2QoKTtcclxuICAgICAgY29uc3QgZGVmYXVsdFB1YmxpY0RpciA9IHBhdGguam9pbihjb250ZXh0LCAncHVibGljJywgdGhpcy5vcHRpb25zLm91dHB1dERpcik7XHJcblxyXG4gICAgICBzaGFyZWRDb3B5RGlyKHRoaXMuc291cmNlQXNzZXRzUGF0aCwgdGFyZ2V0QXNzZXRzUGF0aCwgZGVmYXVsdFB1YmxpY0RpciwgdGhpcy5vcHRpb25zLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgbG9nZ2VyLmVycm9yKGBbbXhjYWQtYXNzZXRzXSDinYwgQ29weSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDinIUgQ29waWVkIHRvICR7dGFyZ2V0QXNzZXRzUGF0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtSW5kZXhIdG1sKGNvbXBpbGVyOiBDb21waWxlciwgbG9nZ2VyOiBhbnkpIHtcclxuICAgIGNvbnN0IGluamVjdFNjcmlwdCA9IChjb21waWxhdGlvbjogQ29tcGlsYXRpb24pID0+IHtcclxuICAgICAgY29uc3QgcHVibGljUGF0aCA9IHRoaXMucmVzb2x2ZWRDb25maWc/LnB1YmxpY1BhdGggfHwgYC4vJHt0aGlzLm9wdGlvbnMub3V0cHV0RGlyfS9gO1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBnZW5lcmF0ZVJ1bnRpbWVDb25maWdTY3JpcHQocHVibGljUGF0aCk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IFtmaWxlbmFtZSwgYXNzZXRdIG9mIE9iamVjdC5lbnRyaWVzKGNvbXBpbGF0aW9uLmFzc2V0cykpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoJy5odG1sJykgJiYgaXNTb3VyY2UoYXNzZXQpKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBhc3NldC5zb3VyY2UoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgaWYgKHNvdXJjZS5pbmNsdWRlcygnPC9oZWFkPicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gc291cmNlLnJlcGxhY2UoJzwvaGVhZD4nLCBgJHtzY3JpcHR9PC9oZWFkPmApO1xyXG4gICAgICAgICAgICBjb21waWxhdGlvbi5hc3NldHNbZmlsZW5hbWVdID0ge1xyXG4gICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgc2l6ZTogKCkgPT4gQnVmZmVyLmJ5dGVMZW5ndGgobW9kaWZpZWQsICd1dGY4JyksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDinIUgSW5qZWN0ZWQgaW50byAke2ZpbGVuYW1lfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDmo4Dmn6XmmK/lkKbmlK/mjIEgcHJvY2Vzc0Fzc2V0c++8iFdlYnBhY2sgNSvvvIlcclxuICAgIGlmICgncHJvY2Vzc0Fzc2V0cycgaW4gY29tcGlsZXIuaG9va3MpIHtcclxuICAgICAgY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKCdNeENhZEFzc2V0c1BsdWdpbicsIChjb21waWxhdGlvbjogQ29tcGlsYXRpb24pID0+IHtcclxuICAgICAgICAvLyDinIUg5L2/55So5q2j56Gu55qE6Zi25q615bi46YeP77yaQURESVRJT05BTO+8iOS4jeaYryBBRERJVElPTlPvvIlcclxuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5wcm9jZXNzQXNzZXRzLnRhcChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ014Q2FkQXNzZXRzUGx1Z2luJyxcclxuICAgICAgICAgICAgc3RhZ2U6IENvbXBpbGF0aW9uLlBST0NFU1NfQVNTRVRTX1NUQUdFX0FERElUSU9OQUwsIC8vIOKchSDpnZnmgIHlsZ7mgKfvvIznm7TmjqXpgJrov4fnsbvorr/pl65cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmplY3RTY3JpcHRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyDlj6/pgInvvJrmt7vliqDnsbvlnovkv6Hmga/vvIhXZWJwYWNrIOexu+Wei++8iVxyXG4gICAgICAgIC8vIGNvbXBpbGF0aW9uOiBDb21waWxhdGlvblxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdlYnBhY2sgNCDlhbzlrrnvvJrkvb/nlKggZW1pdCDpkqnlrZBcclxuICAgICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYygnTXhDYWRBc3NldHNQbHVnaW4nLCAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uLCBjYikgPT4ge1xyXG4gICAgICAgIGluamVjdFNjcmlwdChjb21waWxhdGlvbik7XHJcbiAgICAgICAgY2IoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDlt6Xlhbflh73mlbBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGVuc3VyZUxlYWRpbmdTbGFzaChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0clxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NvdXJjZShhc3NldDogYW55KTogYXNzZXQgaXMgeyBzb3VyY2UoKTogc3RyaW5nIHwgQnVmZmVyIH0ge1xyXG4gIHJldHVybiBhc3NldCAmJiB0eXBlb2YgYXNzZXQuc291cmNlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE14Q2FkQXNzZXRzV2VicGFja1BsdWdpbjsiXSwibmFtZXMiOlsic2hhcmVkQ29weURpciIsImVyciJdLCJtYXBwaW5ncyI6Ijs7OztBQW9CTyxNQUFNLHlCQUF5QjtBQUFBLEVBQzVCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQU9SLFlBQVksU0FBb0M7QUFDOUMsU0FBSyxVQUFVLGVBQWUsT0FBTztBQUNyQyxTQUFLLG1CQUFtQixvQkFBQTtBQUd4QixRQUFJLENBQUMsR0FBRyxXQUFXLEtBQUssZ0JBQWdCLEdBQUc7QUFDekMsWUFBTSxJ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
