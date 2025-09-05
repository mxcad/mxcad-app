import { Compiler } from 'webpack';
import { MxCadAssetsPluginOptions } from '../shared';
export declare class MxCadAssetsWebpackPlugin {
    private options;
    private sourceAssetsPath;
    private resolvedConfig?;
    constructor(options?: MxCadAssetsPluginOptions);
    apply(compiler: Compiler): void;
    private configResolved;
    private inferPublicPath;
    private forceConfigureDevServer;
    private injectMiddlewareForWDSv3;
    private closeBundle;
    private copyAssetsToOutput;
    private transformIndexHtml;
}
export default MxCadAssetsWebpackPlugin;
//# sourceMappingURL=index.d.ts.map