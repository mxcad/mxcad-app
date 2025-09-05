import { DefaultTheme, defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";
import { enConfig } from './en';
import { zhConfig } from './zh';
import { fileURLToPath } from 'url';

enum EnToZhDict {
 
}

enum apiZhDict {
    "modules" = "模块",
    "README" = "API文档首页",
    "interfaces" = "接口",
    "enums" = "枚举",
    "classes" = "类",
}

const getZhMap = (sidebarItem: DefaultTheme.SidebarItem) => {
    if (sidebarItem.text && EnToZhDict[sidebarItem.text]) sidebarItem.text = EnToZhDict[sidebarItem.text]
    if (sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getZhMap)
    }
    return sidebarItem
}
const getZhApi = (sidebarItem: DefaultTheme.SidebarItem) => {
    if (sidebarItem.text && apiZhDict[sidebarItem.text]) sidebarItem.text = apiZhDict[sidebarItem.text]
    if (sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getZhApi)
    }
    return sidebarItem
}
const getEnMap = (sidebarItem: DefaultTheme.SidebarItem) => {
    if (sidebarItem.text) sidebarItem.text = sidebarItem.text.replace(/([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g, '$1$3 $2$4');
    if (sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getEnMap)
    }
    return sidebarItem
}

const getNewData = (data: DefaultTheme.SidebarItem[], string: string) => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.forEach(SidebarItem => {
        SidebarItem.items = SidebarItem.items?.filter(item => item.text === string)
    })
    return newData
}
const autoSidebar: any = AutoSidebar({
    deletePrefix: /^(\d+\.|index)/, // 删除文件名前缀如数字或 "index"
    ignoreList: ["assets", "public"], // 忽略某些目录
    sideBarResolved(data) {
        // 假设我们需要从 /zh/ 中提取与 /zh/docs/ 相关的部分
        if (data['/zh/']) {
            data["/zh/"] = data["/zh/"].map((items) => {
                return getZhMap(items)
            })
            data["/zh/"] = data["/zh/"].map((items) => {
                return getZhApi(items)
            })
            const zhDocsSidebar = getNewData(data['/zh/'], 'docs')
            const zhApiSidebar = getNewData(data['/zh/'], 'api')
            // 将重组后的侧边栏数据放入 data 对象中
            data['/zh/docs/'] = zhDocsSidebar;
            data['/zh/api/'] = zhApiSidebar;
        }
        if (data['/en/']) {
            const zhDocsSidebar = getNewData(data['/en/'], 'docs');
            const zhApiSidebar = getNewData(data['/en/'], 'api')
            // 将重组后的侧边栏数据放入 data 对象中
            data['/en/docs/'] = zhDocsSidebar;
            data['/en/api/'] = zhApiSidebar;
            data["/en/docs/"] = data["/en/docs/"].map((items) => {
                return getEnMap(items)
            })
        }
        return data; // 返回最终的侧边栏数据
    }
});

export default defineConfig({
    title: 'mxcad-app',
    base: '/mxcadApp/',
    ignoreDeadLinks: true,
    vite: {
        build: {
            modulePreload: {
                polyfill: false,
                resolveDependencies: () => [] // 返回空数组，不预加载任何依赖
            }
        },
        define: {
            "process.env.BABEL_TYPES_8_BREAKING": "false",
            "process.platform": '"darwin"',
            "process.env": {},
            "Buffer.isBuffer": "undefined"
        },
        resolve: {
            alias: {
                assert: "browser-assert",
                path: "path-browserify",
                '@': fileURLToPath(new URL('../../../src/', import.meta.url)),
            },
        },
        plugins: [
            // 全文离线搜索
            // pagefindPlugin({
            //     customSearchQuery: chineseSearchOptimize,
            //     excludeSelector: ['img', 'a.header-anchor'],
            //     locales: {
            //         root: {
            //             btnPlaceholder: 'Search',
            //             placeholder: 'Search Docs...',
            //             emptyText: 'No results',
            //             heading: 'Total: {{searchResult}} search results.',
            //         },
            //         zh: {
            //             btnPlaceholder: '搜索',
            //             placeholder: '搜索文档',
            //             emptyText: '空空如也',
            //             heading: '共: {{searchResult}} 条结果',
            //             // 搜索结果不展示最后修改日期日期
            //             showDate: false
            //         }
            //     }
            // }),

            // 自动生成侧边栏
            autoSidebar,
            // Cross origin isolation是必需的。SharedArrayBuffer 使用此插件，在本地开发服务器中，可以启用和测试依赖于 SAB 的功能。
            // 由于通过vite.config.headers配置无效  https://github.com/vuejs/vitepress/issues/2195 临时的解决方案
            {
                configureServer(server) {
                    server.middlewares.use((_req, res, next) => {
                        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                        next();
                    });
                }
            }
        ],
        server: {
            port: 4001,
        }
    },
    locales: {
        root: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
        en: { label: 'English', lang: 'en-US', link: '/en/', ...enConfig },
    },
    markdown: {
        config: (md) => {
            md.use(markdownPlugin as any);
        },
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                disableDetailedView: true
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mxcad/mxcadApp' },
        ],
        footer: {
            copyright: 'Copyright @ 2025 成都梦想凯德科技有限公司 Rights Reserved'
        },
    }
})