const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { MxCadAssetsWebpackPlugin } = require("mxcad-app/webpack")
// webpack.config.js
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development', // 
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/i,           // ✅ 匹配 .js, .jsx, .ts, .tsx
                exclude: /node_modules/,        // ✅ 排除 node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 可选：直接在这里写 preset，优先级高于 babel.config.json
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ],
                        // debug: true // ✅ 打开后，如果 loader 运行，会输出调试信息
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',  // 2. 把 CSS 插入到 <style> 标签
                    'css-loader'     // 1. 解析 CSS 文件
                ],
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/mxcad-app')], // 可选：只处理 src 下的 css
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /mxcad-app/, // 匹配包含 mxcad-app 的模块路径
            path.resolve(__dirname, 'src') // 限制上下文查找范围
        ),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MxCadAssetsWebpackPlugin({
            outputDir: 'mxcad',
            libraryNames: ['vuetify', 'mapbox-gl', 'pinia', 'axios', 'vuetify/components'],
            transformMxUiConfig(json) {
                json.headerTitle = "666"
                return json
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // 支持导入时省略扩展名
    },
};