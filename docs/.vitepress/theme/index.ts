import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'
import type { Theme } from 'vitepress'
import { vuePlugin, addImportMap } from "vitepress-demo-editor";
import "vitepress-demo-editor/dist/style.css";
//  @ts-ignore
import mxdrawType from "../../../lib/dist/mxdraw.d.ts?raw"
//  @ts-ignore
import mxcadType from "../../../lib/dist/mxcad.d.ts?raw"
//  @ts-ignore
import mxcadAppType from "../../../lib/dist/index.d.ts?raw"

import "./style/index.css"
import ContactWidget from './components/ContactWidget.vue'

let first = true;

export default {
  ...DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ContactWidget)
    })
  },
  enhanceApp(ctx) {
    const { app, siteData } = ctx
    siteData.value.router.prefetchLinks = false
    app.component('ContactWidget', ContactWidget)
    DefaultTheme.enhanceApp(ctx)
    // app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.
    app.mixin({
      async mounted() {
        if (!first) return;
        first = false;
        // ../../../dist/mxcad.es.js
        //  @ts-ignore
        await import("../../../src/lib.ts").then((mxcadapp) => {
          addImportMap("mxcad-app", mxcadapp.default || mxcadapp);
          addImportMap("mxcad", globalThis.MxCAD);
          addImportMap("mxdraw", globalThis.Mx);
        });
      },
    });
    app.use(vuePlugin, {
      defaultDirection: "column", // 默认显示方向
      ms: 300, // 编辑器防抖时间
      handleError(errs) { }, // 错误信息
      onMonacoCreated(monaco) {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `
          ${mxdrawType} 
          `,
          "mxdraw"
        );

        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `
          ${mxcadType} 
          `,
          "mxcad"
        );
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `
          declare module 'mxcad-app' { 
            ${mxcadAppType} 
          }
          `,
          "mxcad-app"
        );
      }, // monaco 创建成功时触发
    });

  }
} satisfies Theme