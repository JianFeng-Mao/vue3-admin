/*
 * @Author: mjf JianFeng.Mao@aliyun.com
 * @Date: 2023-12-10 21:38:02
 * @LastEditors: mjf JianFeng.Mao@aliyun.com
 * @LastEditTime: 2023-12-16 23:36:39
 * @FilePath: \vue3-admin\webpack.dev.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 11003,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    })
  ],
  stats: 'minimal'
});
