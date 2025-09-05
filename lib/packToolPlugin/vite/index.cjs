"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const path = require("path");
const fs = require("fs");
const index = require("../index-BNpS0juA.js");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const fs__namespace = /* @__PURE__ */ _interopNamespaceDefault(fs);
function mxcadAssetsPlugin(options = {}) {
  let config;
  const resolvedOptions = index.resolveOptions(options);
  const sourceAssetsPath = index.getSourceAssetsPath();
  const externals = index.getExternals(resolvedOptions.libraryNames);
  const virtualIds = /* @__PURE__ */ new Map();
  return {
    name: "mxcad-assets",
    enforce: "pre",
    resolveId(id) {
      if (id in externals) {
        const virtualId = `\0mxcad-external:${id}`;
        virtualIds.set(virtualId, id);
        return virtualId;
      }
      return null;
    },
    load(id) {
      if (virtualIds.has(id)) {
        const moduleId = virtualIds.get(id);
        const globalRef = externals[moduleId];
        const apis = index.getApiMap()[moduleId] || [];
        const namedExports = apis.map((name) => `export const ${name} = ${globalRef}.${name}`).join(";\n");
        return `
import "mxcad-app";
export default ${globalRef};
${namedExports};
// 可选：防止未定义访问
if (typeof ${globalRef} === 'undefined') {
    console.warn('${globalRef} is not available');
}
`;
      }
      return null;
    },
    // ✅ 构建时配置 Rollup 的 external 和 globals
    config(config2, { command }) {
      if (command === "serve") {
        config2.optimizeDeps = config2.optimizeDeps || {};
        config2.optimizeDeps.exclude = config2.optimizeDeps.exclude || [];
        config2.optimizeDeps.exclude = [
          ...config2.optimizeDeps.exclude || [],
          ...Object.keys(externals)
        ];
      }
    },
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      config.logger.info(`[mxcad-assets] 📦 Source assets path: ${sourceAssetsPath}`);
      config.logger.info(`[mxcad-assets] 📤 Output path: /${resolvedOptions.outputDir}`);
      if (config.command === "serve") {
        if (!fs__namespace.existsSync(sourceAssetsPath)) {
          config.logger.warn(`[mxcad-assets] ⚠️ Source assets directory not found: ${sourceAssetsPath}`);
        } else {
          const stats = fs__namespace.lstatSync(sourceAssetsPath);
          if (!stats.isDirectory()) {
            config.logger.warn(`[mxcad-assets] ⚠️ Source path is not a directory: ${sourceAssetsPath}`);
          }
        }
      }
    },
    configureServer(server) {
      const basePath = `/${resolvedOptions.outputDir.replace(/^\/+/, "")}`;
      server.middlewares.use(index.createGlobalUniversalMiddleware(resolvedOptions));
      server.middlewares.use(basePath, async (req, res, next) => {
        if (!options.isWasmSt) {
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        }
        if (!req.url) {
          res.statusCode = 400;
          return res.end("Bad Request");
        }
        const result = index.resolveSafePath(req.url, sourceAssetsPath, basePath);
        if (!result.success) {
          res.statusCode = (result == null ? void 0 : result.statusCode) || 400;
          return res.end(result.message);
        }
        const { filePath = "", fileName = "" } = result;
        const handled = await index.handleConfigRequest(filePath, fileName, resolvedOptions, res, server.config.logger);
        if (handled) return;
        fs__namespace.promises.access(filePath, fs__namespace.constants.F_OK).then(() => fs__namespace.promises.stat(filePath)).then((stats) => {
          if (!stats.isFile()) {
            res.statusCode = 404;
            return res.end("File not found");
          }
          return fs__namespace.promises.readFile(filePath);
        }).then((data) => {
          res.setHeader("Content-Type", index.getContentType(filePath));
          res.end(data);
        }).catch(() => {
          res.statusCode = 404;
          res.end("File not found");
        });
      });
    },
    // ✅ 使用 buildEnd 替代 buildStart，确保构建不提前结束
    async closeBundle() {
      if (config.command !== "build") return;
      const targetAssetsPath = path.resolve(config.build.outDir, resolvedOptions.outputDir);
      try {
        await fs__namespace.promises.mkdir(targetAssetsPath, { recursive: true });
        await new Promise((resolve2, reject) => {
          index.copyDir(sourceAssetsPath, targetAssetsPath, resolvedOptions, (err) => {
            if (err) reject(err);
            else resolve2();
          });
        });
        config.logger.info(`[mxcad-assets] ✅ Copied assets to ${targetAssetsPath}`);
      } catch (err) {
        config.logger.error(`[mxcad-assets] ❌ Failed to copy assets: ${err.message}`);
      }
    },
    transformIndexHtml(html) {
      const script = index.generateRuntimeConfigScript(resolvedOptions.outputDir);
      return html.replace("</head>", script + "</head>");
    }
  };
}
exports.default = mxcadAssetsPlugin;
exports.mxcadAssetsPlugin = mxcadAssetsPlugin;
