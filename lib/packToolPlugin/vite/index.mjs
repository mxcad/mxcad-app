import { resolve } from "path";
import * as fs from "fs";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, c as copyDir, b as createGlobalUniversalMiddleware, d as createMxCadAssetsMiddleware, e as getApiMap, f as generateRuntimeConfigScript } from "../index-D4wLJTvQ.mjs";
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
      const publicDir = resolve(config.root, config.publicDir, resolvedOptions.outputDir);
      server.middlewares.use(basePath, createMxCadAssetsMiddleware(getSourceAssetsPath(), resolvedOptions, publicDir, config.logger));
    },
    // ✅ 使用 buildEnd 替代 buildStart，确保构建不提前结束
    async closeBundle() {
      if (config.command !== "build") return;
      const targetAssetsPath = resolve(config.build.outDir, resolvedOptions.outputDir);
      const publicDir = resolve(config.root, config.publicDir, resolvedOptions.outputDir);
      try {
        await fs.promises.mkdir(targetAssetsPath, { recursive: true });
        await new Promise((resolve2, reject) => {
          copyDir(sourceAssetsPath, targetAssetsPath, publicDir, resolvedOptions, (err) => {
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
