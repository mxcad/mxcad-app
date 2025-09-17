import { resolve } from "path";
import * as fs from "fs";
import { r as resolveOptions, g as getSourceAssetsPath, a as getExternals, c as copyDir, b as createGlobalUniversalMiddleware, d as createMxCadAssetsMiddleware, e as getApiMap, f as generateRuntimeConfigScript } from "../index-DnzNzvzx.mjs";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrVG9vbFBsdWdpblNyYy92aXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2tUb29sUGx1Z2luU3JjL3ZpdGUvaW5kZXgudHNcclxuXHJcbmltcG9ydCB7IFBsdWdpbiwgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG4vLyDku47lhazlhbHmqKHlnZflr7zlhaVcclxuaW1wb3J0IHtcclxuICAgIE14Q2FkQXNzZXRzUGx1Z2luT3B0aW9ucyxcclxuICAgIHJlc29sdmVPcHRpb25zLFxyXG4gICAgZ2V0U291cmNlQXNzZXRzUGF0aCxcclxuICAgIGdlbmVyYXRlUnVudGltZUNvbmZpZ1NjcmlwdCxcclxuICAgIGdldENvbnRlbnRUeXBlLFxyXG4gICAgY29weURpcixcclxuICAgIGdldEV4dGVybmFscyxcclxuICAgIGhhbmRsZUNvbmZpZ1JlcXVlc3QsXHJcbiAgICByZXNvbHZlU2FmZVBhdGgsXHJcbiAgICBjcmVhdGVHbG9iYWxVbml2ZXJzYWxNaWRkbGV3YXJlLFxyXG4gICAgZ2V0QXBpTWFwLFxyXG4gICAgY3JlYXRlTXhDYWRBc3NldHNNaWRkbGV3YXJlLFxyXG59IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFZpdGUg5o+S5Lu277ya566h55CGIG14LWNhZC1hcHAg55qE6Z2Z5oCB6LWE5rqQXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXhjYWRBc3NldHNQbHVnaW4ob3B0aW9uczogTXhDYWRBc3NldHNQbHVnaW5PcHRpb25zID0ge30pOiBQbHVnaW4ge1xyXG4gICAgbGV0IGNvbmZpZzogUmVzb2x2ZWRDb25maWc7XHJcblxyXG4gICAgLy8g5L2/55So5YWs5YWx6YC76L6R6Kej5p6Q6YCJ6aG5XHJcbiAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSByZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIC8vIOS9v+eUqOWFrOWFsemAu+i+keiOt+WPlua6kOi1hOa6kOi3r+W+hFxyXG4gICAgY29uc3Qgc291cmNlQXNzZXRzUGF0aCA9IGdldFNvdXJjZUFzc2V0c1BhdGgoKTtcclxuICAgIGNvbnN0IGV4dGVybmFscyA9IGdldEV4dGVybmFscyhyZXNvbHZlZE9wdGlvbnMubGlicmFyeU5hbWVzKVxyXG4gICAgY29uc3QgdmlydHVhbElkcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ214Y2FkLWFzc2V0cycsXHJcbiAgICAgICAgZW5mb3JjZTogJ3ByZScsXHJcbiAgICAgICAgcmVzb2x2ZUlkKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCBpbiBleHRlcm5hbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxJZCA9IGBcXDBteGNhZC1leHRlcm5hbDoke2lkfWBcclxuICAgICAgICAgICAgICAgIHZpcnR1YWxJZHMuc2V0KHZpcnR1YWxJZCwgaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlydHVhbElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWQoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHZpcnR1YWxJZHMuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlSWQgPSB2aXJ0dWFsSWRzLmdldChpZCkhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnbG9iYWxSZWYgPSBleHRlcm5hbHNbbW9kdWxlSWRdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlzID0gZ2V0QXBpTWFwKClbbW9kdWxlSWRdIHx8IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g4pyFIOmdmeaAgeeUn+aIkOaJgOacieWRveWQjeWvvOWHuu+8gVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZWRFeHBvcnRzID0gYXBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAobmFtZSA9PiBgZXhwb3J0IGNvbnN0ICR7bmFtZX0gPSAke2dsb2JhbFJlZn0uJHtuYW1lfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJztcXG4nKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbmltcG9ydCBcIm14Y2FkLWFwcFwiO1xyXG5leHBvcnQgZGVmYXVsdCAke2dsb2JhbFJlZn07XHJcbiR7bmFtZWRFeHBvcnRzfTtcclxuLy8g5Y+v6YCJ77ya6Ziy5q2i5pyq5a6a5LmJ6K6/6ZeuXHJcbmlmICh0eXBlb2YgJHtnbG9iYWxSZWZ9ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc29sZS53YXJuKCcke2dsb2JhbFJlZn0gaXMgbm90IGF2YWlsYWJsZScpO1xyXG59XHJcbmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOKchSDmnoTlu7rml7bphY3nva4gUm9sbHVwIOeahCBleHRlcm5hbCDlkowgZ2xvYmFsc1xyXG4gICAgICAgIGNvbmZpZyhjb25maWcsIHsgY29tbWFuZCB9KSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kID09PSAnc2VydmUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub3B0aW1pemVEZXBzID0gY29uZmlnLm9wdGltaXplRGVwcyB8fCB7fVxyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9wdGltaXplRGVwcy5leGNsdWRlID0gY29uZmlnLm9wdGltaXplRGVwcy5leGNsdWRlIHx8IFtdXHJcbiAgICAgICAgICAgICAgICBjb25maWcub3B0aW1pemVEZXBzLmV4Y2x1ZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGNvbmZpZy5vcHRpbWl6ZURlcHMuZXhjbHVkZSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoZXh0ZXJuYWxzKVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlnUmVzb2x2ZWQocmVzb2x2ZWRDb25maWcpIHtcclxuICAgICAgICAgICAgY29uZmlnID0gcmVzb2x2ZWRDb25maWc7XHJcblxyXG4gICAgICAgICAgICAvLyDosIPor5Xml6Xlv5dcclxuICAgICAgICAgICAgY29uZmlnLmxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDwn5OmIFNvdXJjZSBhc3NldHMgcGF0aDogJHtzb3VyY2VBc3NldHNQYXRofWApO1xyXG4gICAgICAgICAgICBjb25maWcubG9nZ2VyLmluZm8oYFtteGNhZC1hc3NldHNdIPCfk6QgT3V0cHV0IHBhdGg6IC8ke3Jlc29sdmVkT3B0aW9ucy5vdXRwdXREaXJ9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyDlvIDlj5HmqKHlvI/kuIvmo4Dmn6XmupDnm67lvZXmmK/lkKblrZjlnKhcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb21tYW5kID09PSAnc2VydmUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc291cmNlQXNzZXRzUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcubG9nZ2VyLndhcm4oYFtteGNhZC1hc3NldHNdIOKaoO+4jyBTb3VyY2UgYXNzZXRzIGRpcmVjdG9yeSBub3QgZm91bmQ6ICR7c291cmNlQXNzZXRzUGF0aH1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBmcy5sc3RhdFN5bmMoc291cmNlQXNzZXRzUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5sb2dnZXIud2FybihgW214Y2FkLWFzc2V0c10g4pqg77iPIFNvdXJjZSBwYXRoIGlzIG5vdCBhIGRpcmVjdG9yeTogJHtzb3VyY2VBc3NldHNQYXRofWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVBhdGggPSBgLyR7cmVzb2x2ZWRPcHRpb25zLm91dHB1dERpci5yZXBsYWNlKC9eXFwvKy8sICcnKX1gOyAvLyAnL214Y2FkQXBwQXNzZXRzJ1xyXG4gICAgICAgICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGNyZWF0ZUdsb2JhbFVuaXZlcnNhbE1pZGRsZXdhcmUocmVzb2x2ZWRPcHRpb25zKSlcclxuICAgICAgICAgICAgY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShjb25maWcucm9vdCwgY29uZmlnLnB1YmxpY0RpciwgcmVzb2x2ZWRPcHRpb25zLm91dHB1dERpcik7XHJcbiAgICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYmFzZVBhdGgsIGNyZWF0ZU14Q2FkQXNzZXRzTWlkZGxld2FyZShnZXRTb3VyY2VBc3NldHNQYXRoKCksIHJlc29sdmVkT3B0aW9ucywgcHVibGljRGlyLCBjb25maWcubG9nZ2VyICkpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g4pyFIOS9v+eUqCBidWlsZEVuZCDmm7/ku6MgYnVpbGRTdGFydO+8jOehruS/neaehOW7uuS4jeaPkOWJjee7k+adn1xyXG4gICAgICAgIGFzeW5jIGNsb3NlQnVuZGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1hbmQgIT09ICdidWlsZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFzc2V0c1BhdGggPSByZXNvbHZlKGNvbmZpZy5idWlsZC5vdXREaXIsIHJlc29sdmVkT3B0aW9ucy5vdXRwdXREaXIpO1xyXG4gICAgICAgICAgICBjb25zdCBwdWJsaWNEaXIgPSByZXNvbHZlKGNvbmZpZy5yb290LCBjb25maWcucHVibGljRGlyLCByZXNvbHZlZE9wdGlvbnMub3V0cHV0RGlyKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIOKchSDkvb/nlKggZnMuY3BTeW5j77yI5o6o6I2Q77yJ5oiWIGNvcHlEaXJcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenCBOb2RlLmpzID49IDE2LjcuMO+8jOebtOaOpeS9v+eUqOWGhee9ruWQjOatpeaLt+i0nVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgZnMucHJvbWlzZXMubWtkaXIodGFyZ2V0QXNzZXRzUGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyDkvb/nlKjkvaDoh6rlt7HnmoQgY29weURpcu+8iOehruS/neWug+aYr+WQjOatpeaIliBhd2FpdGFibGXvvIlcclxuICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5RGlyKHNvdXJjZUFzc2V0c1BhdGgsIHRhcmdldEFzc2V0c1BhdGgsIHB1YmxpY0RpciwgcmVzb2x2ZWRPcHRpb25zLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvZ2dlci5pbmZvKGBbbXhjYWQtYXNzZXRzXSDinIUgQ29waWVkIGFzc2V0cyB0byAke3RhcmdldEFzc2V0c1BhdGh9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcubG9nZ2VyLmVycm9yKGBbbXhjYWQtYXNzZXRzXSDinYwgRmFpbGVkIHRvIGNvcHkgYXNzZXRzOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtSW5kZXhIdG1sKGh0bWwpIHtcclxuICAgICAgICAgICAgLy8g5rOo5YWl6L+Q6KGM5pe26YWN572u6ISa5pysXHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGdlbmVyYXRlUnVudGltZUNvbmZpZ1NjcmlwdChyZXNvbHZlZE9wdGlvbnMub3V0cHV0RGlyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgnPC9oZWFkPicsIHNjcmlwdCArICc8L2hlYWQ+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXhjYWRBc3NldHNQbHVnaW47Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7OztBQTBCTyxTQUFTLGtCQUFrQixVQUFvQyxJQUFZO0FBQzlFLE1BQUk7QUFHSixRQUFNLGtCQUFrQixlQUFlLE9BQU87QUFFOUMsUUFBTSxtQkFBbUIsb0JBQUE7QUFDekIsUUFBTSxZQUFZLGFBQWEsZ0JBQWdCLFlBQVk7QUFDM0QsUUFBTSxpQ0FBaUIsSUFBQTtBQUN2QixTQUFPO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxVQUFVLElBQUk7QUFDVixVQUFJLE1BQU0sV0FBVztBQUNqQixjQUFNLFlBQVksb0JBQW9CLEVBQUU7QUFDeEMsbUJBQVcsSUFBSSxXQUFXLEVBQUU7QUFDNUIsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0EsS0FBSyxJQUFJO0FBQ0wsVUFBSSxXQUFXLElBQUksRUFB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
