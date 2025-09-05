import { MxQuickCommand } from './types/mxQuickCommand.d';
import { MxServerConfig } from './types/mxServerConfig.d';
import { MxSketchesAndNotesUiConfig } from './types/mxSketchesAndNotesUiConfig.d';
import { MxUiConfig } from './types/mxUiConfig.d';
import { VuetifyThemeConfig } from './types/vuetifyThemeConfig.d';
export declare const getApiMap: () => {
    mxcad: string[];
    mxdraw: string[];
    "mapbox-gl": string[];
    axios: string[];
    vue: string[];
    vuetify: string[];
    "vuetify/components": string[];
    pinia: string[];
};
export interface MxPluginConfig {
    plugins: (string | {
        name?: string;
        isAfterLoad?: boolean;
        dir?: boolean;
        version?: string;
    })[];
}
export declare const CONFIG_FILENAMES: readonly ["mxQuickCommand.json", "mxServerConfig.json", "mxSketchesAndNotesUiConfig.json", "mxUiConfig.json", "vuetifyThemeConfig.json"];
/**
 * 配置文件处理器
 * 可选：对特定配置文件进行运行时修改
 * 函数接收原始 JSON 数据，返回修改后的 JSON 数据（可异步）
 */
export interface TransformFunctions {
    transformMxQuickCommand(data: MxQuickCommand): Promise<MxQuickCommand> | MxQuickCommand;
    transformMxServerConfig(data: MxServerConfig): Promise<MxServerConfig> | MxServerConfig;
    transformMxSketchesAndNotesUiConfig(data: MxSketchesAndNotesUiConfig): Promise<MxSketchesAndNotesUiConfig> | MxSketchesAndNotesUiConfig;
    transformMxUiConfig(data: MxUiConfig): Promise<MxUiConfig> | MxUiConfig;
    transformVuetifyThemeConfig(data: VuetifyThemeConfig): Promise<VuetifyThemeConfig> | VuetifyThemeConfig;
}
export interface MxCadAssetsPluginOptions extends Partial<TransformFunctions> {
    /**
     * 构建后，mxcadAppAssets 资源存放的子目录名。
     * @default 'mxcadAppAssets'
     */
    outputDir?: string;
    /** 第三方依赖*/
    libraryNames?: (keyof typeof externals)[];
    /** 是否单线程加载wasm (默认使用多线程及加载) */
    isWasmSt?: boolean;
}
export declare function resolveOptions(options?: MxCadAssetsPluginOptions): Required<MxCadAssetsPluginOptions>;
export interface ParsedPathResult {
    success: boolean;
    filePath?: string;
    urlPath?: string;
    fileName?: string;
    statusCode?: number;
    message?: string;
}
/**
 * 安全解析并验证请求路径
 * @param reqUrl 请求的 URL（如 '/assets/mxServerConfig.json?v=1'）
 * @param root 本地根目录（如 'D:/project/dist/mxcad'）
 * @param basePath 可选的基础路径前缀（如 '/mxcad/'，用于 Vite）
 * @returns 解析结果或错误
 */
export declare function resolveSafePath(reqUrl: string, root: string, basePath?: string): ParsedPathResult;
/**
 * 对指定目录中的配置文件进行“读取 → 转换 → 写入”操作
 * @param dirPath 配置文件所在目录路径
 * @param transforms 包含转换函数的对象
 * @param logger 可选日志记录器
 */
export declare function processConfigFiles(dirPath: string, transforms: TransformFunctions, logger?: {
    info?: (msg: string) => void;
    error?: (msg: string) => void;
}): Promise<void>;
/**
 * 处理配置文件请求：读取 → 转换 → 返回响应
 * 用于 Vite/Webpack dev server 中间件
 */
export declare function handleConfigRequest(filePath: string, // 已经验证过的安全路径
fileName: string, // 文件名，如 'mxServerConfig.json'
transforms: TransformFunctions, res: any, logger?: {
    info?: (msg: string) => void;
    error?: (msg: string) => void;
}): Promise<boolean>;
/** 创建通用全局中间件 */
export declare function createGlobalUniversalMiddleware(options: Required<MxCadAssetsPluginOptions>): (req: any, res: any, next: any) => Promise<void>;
export declare function pascalCase(str: string): string;
export declare const externals: {
    vue: string;
    axios: string;
    vuetify: string;
    'vuetify/components': string;
    'mapbox-gl': string;
    pinia: string;
};
/**
 * 预定义库名到全局变量的映射
 */
export declare const DEFAULT_LIBRARY_MAP: Record<string, string>;
export declare function getExternals(libraryNames: Required<MxCadAssetsPluginOptions>['libraryNames']): {
    [key: string]: string;
};
export declare function getSourceAssetsPath(): string;
export declare function checkSourceAssetsExist(): boolean;
export declare function generateRuntimeConfigScript(publicPath: string): string;
export declare function copyDir(src: string, dest: string, transforms: TransformFunctions, callback: (err?: Error) => void): void;
export declare function getContentType(filePath: string): string;
//# sourceMappingURL=index.d.ts.map