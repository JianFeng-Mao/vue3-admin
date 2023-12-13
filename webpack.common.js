const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const { DefinePlugin } = require('webpack');

// 0.17.2 版本导出的是default
const AutoImport = require('unplugin-auto-import/webpack').default;

// 0.26.0 版本导出的是default
const Components = require('unplugin-vue-components/webpack').default;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  name: 'vue3-admin',
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/chunk-[chunkhash:8].[contenthash:8].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false
    }),
    new ESLintPlugin({
      fix: true /* 自动帮助修复 */,
      extensions: ['js', 'json', 'vue'],
      exclude: 'node_modules'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
};
