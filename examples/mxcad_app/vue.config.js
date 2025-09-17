const { MxCadAssetsWebpackPlugin } = require("mxcad-app/webpack")
const webpack = require("webpack")
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new MxCadAssetsWebpackPlugin({
        libraryNames: ["mapbox-gl"],

        // 是否单线程加载wasm (默认使用多线程及加载)
        isWasmSt: false,
        transformMxUiConfig(json) {
          //json.headerTitle = "888"
          return json
        },
      })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 8081,
    client: {
      overlay: false
    }
  }
};