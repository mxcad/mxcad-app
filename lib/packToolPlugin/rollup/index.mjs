import { resolve } from "path";
import * as fs from "fs";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, f as generateRuntimeConfigScript, c as copyDir, h as getContentType, b as createGlobalUniversalMiddleware, e as getApiMap } from "../index-D4wLJTvQ.mjs";
function mxcadAssetsPlugin(options = {}) {
  const resolvedOptions = resolveOptions(options);
  const sourceAssetsPath = getSourceAssetsPath();
  let outputDir;
  let logger = console;
  const externals = getExternals(resolvedOptions.libraryNames);
  const virtualIds = /* @__PURE__ */ new Map();
  return {
    name: "mxcad-assets",
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
    // Rollup 没有 configResolved，使用 buildStart
    buildStart() {
      logger = this;
      logger.info(`[mxcad-assets] 📦 Source assets path: ${sourceAssetsPath}`);
      logger.info(`[mxcad-assets] 📤 Output path: /${resolvedOptions.outputDir}`);
    },
    // 1️⃣ 配置开发服务器中间件（配合 @rollup/plugin-serve 使用）
    // 注意：Rollup 本身不带服务器，需外部插件支持
    // @ts-ignore
    configureServer() {
      const basePath = `/${resolvedOptions.outputDir.replace(/^\/+/, "")}`;
      return () => ({
        middlewares: {
          apply: (middlewares, _server) => {
            middlewares.unshift({
              route: basePath,
              handle: (req, res, next) => {
                if (!options.isWasmSt) {
                  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                }
                if (!req.url) {
                  res.statusCode = 400;
                  return res.end("Bad Request");
                }
                let urlPath = req.url.split("?")[0];
                try {
                  urlPath = decodeURIComponent(urlPath);
                } catch (e) {
                  res.statusCode = 400;
                  return res.end("Invalid URL encoding");
                }
                if (urlPath.startsWith(basePath)) {
                  urlPath = urlPath.slice(basePath.length);
                }
                urlPath = urlPath.replace(/^\/+/, "") || ".";
                const filePath = resolve(sourceAssetsPath, urlPath);
                const normalizedRoot = resolve(sourceAssetsPath);
                const normalizedFile = resolve(filePath);
                if (!normalizedFile.startsWith(normalizedRoot)) {
                  res.statusCode = 403;
                  return res.end("Forbidden: Path traversal detected");
                }
                fs.promises.access(normalizedFile, fs.constants.F_OK).then(() => fs.promises.stat(normalizedFile)).then((stats) => {
                  if (!stats.isFile()) {
                    res.statusCode = 404;
                    return res.end("File not found");
                  }
                  return fs.promises.readFile(normalizedFile);
                }).then((data) => {
                  res.setHeader("Content-Type", getContentType(normalizedFile));
                  res.end(data);
                }).catch(() => {
                  res.statusCode = 404;
                  res.end("File not found");
                });
              }
            });
            middlewares.unshift(createGlobalUniversalMiddleware(resolvedOptions));
          }
        }
      });
    },
    // 2️⃣ 构建后复制资源到输出目录
    async writeBundle(options2, _bundle) {
      if (!options2.dir) return;
      outputDir = resolve(options2.dir, resolvedOptions.outputDir);
      const publicDir = resolve("public", resolvedOptions.outputDir);
      try {
        await fs.promises.mkdir(outputDir, { recursive: true });
        await new Promise((resolve2, reject) => {
          copyDir(sourceAssetsPath, outputDir, publicDir, resolvedOptions, (err) => {
            if (err) reject(err);
            else resolve2();
          });
        });
        logger.info(`[mxcad-assets] ✅ Copied assets to ${outputDir}`);
      } catch (err) {
        logger.error(`[mxcad-assets] ❌ Failed to copy assets: ${err.message}`);
      }
    },
    // 3️⃣ 修改 HTML：注入运行时脚本（需配合 @rollup/plugin-html）
    // 注意：transformIndexHtml 在 Rollup 中不存在，需在 htmlPlugin 中处理
    transformIndexHtml: {
      order: "post",
      handler: (html) => {
        const script = generateRuntimeConfigScript(resolvedOptions.outputDir);
        return html.replace("</head>", script + "</head>");
      }
    }
    // 临时绕过类型错误，实际使用中需适配
  };
}
export {
  mxcadAssetsPlugin as default,
  mxcadAssetsPlugin
};
