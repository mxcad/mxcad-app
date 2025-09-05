import { resolve } from "path";
import * as fs from "fs";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, c as copyDir, b as createGlobalUniversalMiddleware, d as resolveSafePath, h as handleConfigRequest, e as getContentType, f as getApiMap, i as generateRuntimeConfigScript } from "../index-B_FwBmgt.mjs";
function mxcadAssetsPlugin(options = {}) {
  let config;
  const resolvedOptions = resolveOptions(options);
  const sourceAssetsPath = getSourceAssetsPath();
  const externals = getExternals(resolvedOptions.libraryNames);
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
        const apis = getApiMap()[moduleId] || [];
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
        if (!fs.existsSync(sourceAssetsPath)) {
          config.logger.warn(`[mxcad-assets] ⚠️ Source assets directory not found: ${sourceAssetsPath}`);
        } else {
          const stats = fs.lstatSync(sourceAssetsPath);
          if (!stats.isDirectory()) {
            config.logger.warn(`[mxcad-assets] ⚠️ Source path is not a directory: ${sourceAssetsPath}`);
          }
        }
      }
    },
    configureServer(server) {
      const basePath = `/${resolvedOptions.outputDir.replace(/^\/+/, "")}`;
      server.middlewares.use(createGlobalUniversalMiddleware(resolvedOptions));
      server.middlewares.use(basePath, async (req, res, next) => {
        if (!options.isWasmSt) {
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        }
        if (!req.url) {
          res.statusCode = 400;
          return res.end("Bad Request");
        }
        const result = resolveSafePath(req.url, sourceAssetsPath, basePath);
        if (!result.success) {
          res.statusCode = (result == null ? void 0 : result.statusCode) || 400;
          return res.end(result.message);
        }
        const { filePath = "", fileName = "" } = result;
        const handled = await handleConfigRequest(filePath, fileName, resolvedOptions, res, server.config.logger);
        if (handled) return;
        fs.promises.access(filePath, fs.constants.F_OK).then(() => fs.promises.stat(filePath)).then((stats) => {
          if (!stats.isFile()) {
            res.statusCode = 404;
            return res.end("File not found");
          }
          return fs.promises.readFile(filePath);
        }).then((data) => {
          res.setHeader("Content-Type", getContentType(filePath));
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
      const targetAssetsPath = resolve(config.build.outDir, resolvedOptions.outputDir);
      try {
        await fs.promises.mkdir(targetAssetsPath, { recursive: true });
        await new Promise((resolve2, reject) => {
          copyDir(sourceAssetsPath, targetAssetsPath, resolvedOptions, (err) => {
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
      const script = generateRuntimeConfigScript(resolvedOptions.outputDir);
      return html.replace("</head>", script + "</head>");
    }
  };
}
export {
  mxcadAssetsPlugin as default,
  mxcadAssetsPlugin
};
