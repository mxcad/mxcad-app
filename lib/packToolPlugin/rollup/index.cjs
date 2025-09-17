"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const path = require("path");
const fs = require("fs");
const index = require("../index-BVqb63a_.js");
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
  const resolvedOptions = index.resolveOptions(options);
  const sourceAssetsPath = index.getSourceAssetsPath();
  let outputDir;
  let logger = console;
  const externals = index.getExternals(resolvedOptions.libraryNames);
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
                const filePath = path.resolve(sourceAssetsPath, urlPath);
                const normalizedRoot = path.resolve(sourceAssetsPath);
                const normalizedFile = path.resolve(filePath);
                if (!normalizedFile.startsWith(normalizedRoot)) {
                  res.statusCode = 403;
                  return res.end("Forbidden: Path traversal detected");
                }
                fs__namespace.promises.access(normalizedFile, fs__namespace.constants.F_OK).then(() => fs__namespace.promises.stat(normalizedFile)).then((stats) => {
                  if (!stats.isFile()) {
                    res.statusCode = 404;
                    return res.end("File not found");
                  }
                  return fs__namespace.promises.readFile(normalizedFile);
                }).then((data) => {
                  res.setHeader("Content-Type", index.getContentType(normalizedFile));
                  res.end(data);
                }).catch(() => {
                  res.statusCode = 404;
                  res.end("File not found");
                });
              }
            });
            middlewares.unshift(index.createGlobalUniversalMiddleware(resolvedOptions));
          }
        }
      });
    },
    // 2️⃣ 构建后复制资源到输出目录
    async writeBundle(options2, _bundle) {
      if (!options2.dir) return;
      outputDir = path.resolve(options2.dir, resolvedOptions.outputDir);
      const publicDir = path.resolve("public", resolvedOptions.outputDir);
      try {
        await fs__namespace.promises.mkdir(outputDir, { recursive: true });
        await new Promise((resolve2, reject) => {
          index.copyDir(sourceAssetsPath, outputDir, publicDir, resolvedOptions, (err) => {
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
        const script = index.generateRuntimeConfigScript(resolvedOptions.outputDir);
        return html.replace("</head>", script + "</head>");
      }
    }
    // 临时绕过类型错误，实际使用中需适配
  };
}
exports.default = mxcadAssetsPlugin;
exports.mxcadAssetsPlugin = mxcadAssetsPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrVG9vbFBsdWdpblNyYy9yb2xsdXAvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja1Rvb2xQbHVnaW5TcmMvcm9sbHVwL214Y2FkQXNzZXRzUGx1Z2luLnRzXHJcblxyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiwgUm9sbHVwT3B0aW9ucyB9IGZyb20gJ3JvbGx1cCc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5cclxuaW1wb3J0IHsgY29weURpciwgY3JlYXRlR2xvYmFsVW5pdmVyc2FsTWlkZGxld2FyZSwgZ2V0QXBpTWFwLCBnZXRFeHRlcm5hbHMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgTXhDYWRBc3NldHNQbHVnaW5PcHRpb25zLFxyXG4gICAgcmVzb2x2ZU9wdGlvbnMsXHJcbiAgICBnZXRTb3VyY2VBc3NldHNQYXRoLFxyXG4gICAgZ2VuZXJhdGVSdW50aW1lQ29uZmlnU2NyaXB0LFxyXG4gICAgZ2V0Q29udGVudFR5cGVcclxufSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuLyoqXHJcbiAqIFJvbGx1cCDmj5Lku7bvvJrnrqHnkIYgbXgtY2FkLWFwcCDnmoTpnZnmgIHotYTmupBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBteGNhZEFzc2V0c1BsdWdpbihvcHRpb25zOiBNeENhZEFzc2V0c1BsdWdpbk9wdGlvbnMgPSB7fSk6IFBsdWdpbiB7XHJcbiAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSByZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIGNvbnN0IHNvdXJjZUFzc2V0c1BhdGggPSBnZXRTb3VyY2VBc3NldHNQYXRoKCk7XHJcbiAgICBsZXQgb3V0cHV0RGlyOiBzdHJpbmc7XHJcbiAgICBsZXQgbG9nZ2VyOiB7IGluZm86IChtc2c6IHN0cmluZykgPT4gdm9pZDsgd2FybjogKG1zZzogc3RyaW5nKSA9PiB2b2lkOyBlcnJvcjogKG1zZzogc3RyaW5nKSA9PiB2b2lkIH0gPSBjb25zb2xlO1xyXG4gICAgY29uc3QgZXh0ZXJuYWxzID0gZ2V0RXh0ZXJuYWxzKHJlc29sdmVkT3B0aW9ucy5saWJyYXJ5TmFtZXMpXHJcbiAgICBjb25zdCB2aXJ0dWFsSWRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiAnbXhjYWQtYXNzZXRzJyxcclxuICAgICAgICByZXNvbHZlSWQoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkIGluIGV4dGVybmFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlydHVhbElkID0gYFxcMG14Y2FkLWV4dGVybmFsOiR7aWR9YFxyXG4gICAgICAgICAgICAgICAgdmlydHVhbElkcy5zZXQodmlydHVhbElkLCBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aXJ0dWFsSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxvYWQoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHZpcnR1YWxJZHMuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlSWQgPSB2aXJ0dWFsSWRzLmdldChpZCkhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnbG9iYWxSZWYgPSBleHRlcm5hbHNbbW9kdWxlSWRdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlzID0gZ2V0QXBpTWFwKClbbW9kdWxlSWRdIHx8IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g4pyFIOmdmeaAgeeUn+aIkOaJgOacieWRveWQjeWvvOWHuu+8gVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZWRFeHBvcnRzID0gYXBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAobmFtZSA9PiBgZXhwb3J0IGNvbnN0ICR7bmFtZX0gPSAke2dsb2JhbFJlZn0uJHtuYW1lfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJztcXG4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbmltcG9ydCBcIm14Y2FkLWFwcFwiO1xyXG5leHBvcnQgZGVmYXVsdCAke2dsb2JhbFJlZn07XHJcbiR7bmFtZWRFeHBvcnRzfTtcclxuLy8g5Y+v6YCJ77ya6Ziy5q2i5pyq5a6a5LmJ6K6/6ZeuXHJcbmlmICh0eXBlb2YgJHtnbG9iYWxSZWZ9ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc29sZS53YXJuKCcke2dsb2JhbFJlZn0gaXMgbm90IGF2YWlsYWJsZScpO1xyXG59XHJcbmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFJvbGx1cCDmsqHmnIkgY29uZmlnUmVzb2x2ZWTvvIzkvb/nlKggYnVpbGRTdGFydFxyXG4gICAgICAgIGJ1aWxkU3RhcnQodGhpcykge1xyXG4gICAgICAgICAgICBsb2dnZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhgW214Y2FkLWFzc2V0c10g8J+TpiBTb3VyY2UgYXNzZXRzIHBhdGg6ICR7c291cmNlQXNzZXRzUGF0aH1gKTtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYFtteGNhZC1hc3NldHNdIPCfk6QgT3V0cHV0IHBhdGg6IC8ke3Jlc29sdmVkT3B0aW9ucy5vdXRwdXREaXJ9YCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gMe+4j+KDoyDphY3nva7lvIDlj5HmnI3liqHlmajkuK3pl7Tku7bvvIjphY3lkIggQHJvbGx1cC9wbHVnaW4tc2VydmUg5L2/55So77yJXHJcbiAgICAgICAgLy8g5rOo5oSP77yaUm9sbHVwIOacrOi6q+S4jeW4puacjeWKoeWZqO+8jOmcgOWklumDqOaPkuS7tuaUr+aMgVxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjb25maWd1cmVTZXJ2ZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gYC8ke3Jlc29sdmVkT3B0aW9ucy5vdXRwdXREaXIucmVwbGFjZSgvXlxcLysvLCAnJyl9YDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbWlkZGxld2FyZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseTogKG1pZGRsZXdhcmVzOiBhbnlbXSwgX3NlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZXdhcmVzLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IGJhc2VQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlzV2FzbVN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JywgJ3NhbWUtb3JpZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knLCAncmVxdWlyZS1jb3JwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVxLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoJ0JhZCBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsUGF0aCA9IHJlcS51cmwuc3BsaXQoJz8nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxQYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgnSW52YWxpZCBVUkwgZW5jb2RpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmxQYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFBhdGggPSB1cmxQYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXRoID0gdXJsUGF0aC5yZXBsYWNlKC9eXFwvKy8sICcnKSB8fCAnLic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcmVzb2x2ZShzb3VyY2VBc3NldHNQYXRoLCB1cmxQYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUm9vdCA9IHJlc29sdmUoc291cmNlQXNzZXRzUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZpbGUgPSByZXNvbHZlKGZpbGVQYXRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub3JtYWxpemVkRmlsZS5zdGFydHNXaXRoKG5vcm1hbGl6ZWRSb290KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoJ0ZvcmJpZGRlbjogUGF0aCB0cmF2ZXJzYWwgZGV0ZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLnByb21pc2VzLmFjY2Vzcyhub3JtYWxpemVkRmlsZSwgZnMuY29uc3RhbnRzLkZfT0spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGZzLnByb21pc2VzLnN0YXQobm9ybWFsaXplZEZpbGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihzdGF0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRzLmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoJ0ZpbGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnMucHJvbWlzZXMucmVhZEZpbGUobm9ybWFsaXplZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGdldENvbnRlbnRUeXBlKG5vcm1hbGl6ZWRGaWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZW5kKCdGaWxlIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZXdhcmVzLnVuc2hpZnQoY3JlYXRlR2xvYmFsVW5pdmVyc2FsTWlkZGxld2FyZShyZXNvbHZlZE9wdGlvbnMpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gMu+4j+KDoyDmnoTlu7rlkI7lpI3liLbotYTmupDliLDovpPlh7rnm67lvZVcclxuICAgICAgICBhc3luYyB3cml0ZUJ1bmRsZShvcHRpb25zLCBfYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5kaXIpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG91dHB1dERpciA9IHJlc29sdmUob3B0aW9ucy5kaXIsIHJlc29sdmVkT3B0aW9ucy5vdXRwdXREaXIpO1xyXG4gICAgICAgICAgICBjb25zdCBwdWJsaWNEaXIgPSByZXNvbHZlKCdwdWJsaWMnLCByZXNvbHZlZE9wdGlvbnMub3V0cHV0RGlyKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKG91dHB1dERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weURpcihzb3VyY2VBc3NldHNQYXRoLCBvdXRwdXREaXIsIHB1YmxpY0RpciwgcmVzb2x2ZWRPcHRpb25zLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYFtteGNhZC1hc3NldHNdIOKchSBDb3BpZWQgYXNzZXRzIHRvICR7b3V0cHV0RGlyfWApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBbbXhjYWQtYXNzZXRzXSDinYwgRmFpbGVkIHRvIGNvcHkgYXNzZXRzOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gM++4j+KDoyDkv67mlLkgSFRNTO+8muazqOWFpei/kOihjOaXtuiEmuacrO+8iOmcgOmFjeWQiCBAcm9sbHVwL3BsdWdpbi1odG1s77yJXHJcbiAgICAgICAgLy8g5rOo5oSP77yadHJhbnNmb3JtSW5kZXhIdG1sIOWcqCBSb2xsdXAg5Lit5LiN5a2Y5Zyo77yM6ZyA5ZyoIGh0bWxQbHVnaW4g5Lit5aSE55CGXHJcbiAgICAgICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAncG9zdCcsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChodG1sOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZ2VuZXJhdGVSdW50aW1lQ29uZmlnU2NyaXB0KHJlc29sdmVkT3B0aW9ucy5vdXRwdXREaXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgnPC9oZWFkPicsIHNjcmlwdCArICc8L2hlYWQ+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGFzIGFueSAvLyDkuLTml7bnu5Xov4fnsbvlnovplJnor6/vvIzlrp7pmYXkvb/nlKjkuK3pnIDpgILphY1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG14Y2FkQXNzZXRzUGx1Z2luOyJdLCJuYW1lcyI6WyJyZXNvbHZlT3B0aW9ucyIsImdldFNvdXJjZUFzc2V0c1BhdGgiLCJnZXRFeHRlcm5hbHMiLCJnZXRBcGlNYXAiLCJyZXNvbHZlIiwiZnMiLCJnZXRDb250ZW50VHlwZSIsImNyZWF0ZUdsb2JhbFVuaXZlcnNhbE1pZGRsZXdhcmUiLCJvcHRpb25zIiwiY29weURpciIsImdlbmVyYXRlUnVudGltZUNvbmZpZ1NjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtC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
