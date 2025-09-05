const { MxCadAssetsWebpackPlugin } = require("mxcad-app/webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      // 处理 CSS 文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/mxcad-app')], // 可选：只处理 src 下的 css 
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /node_modules\/mxcad-app/, // 👈 只对 mxcad-app 处理
        options: {
          presets: ['@babel/preset-env'],
        }
      },
       {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pat)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于8KB的文件会被转换成base64编码
            }
          }
        ]
      }
    ],

  },

  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // ✅ 使用模板
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MxCadAssetsWebpackPlugin({
      libraryNames: ['axios'],
      outputDir: 'mxcad',
      transformMxUiConfig(json) {
        json.headerTitle = "888"
        return json
      }
    })
  ]
};