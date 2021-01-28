const path = require("path");
const webpack = require("webpack");
// const componentsEntry = require('./components-entry');
const vendor2Entry = require('./vendor2-entry');
// const AssetsPlugin = require('assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    // components: componentsEntry,
    // basic: vendor2Entry
    vendor: ['vue', 'vue-router', 'vuex', 'axios']
  },
  output: {
    path: path.join(__dirname, "public/vendor"),
    filename: "[name].dll.js",
    library: "[name]_[hash]" // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, "public/vendor", "[name]-manifest.json"),
      name: "[name]_[hash]",
      context: process.cwd()
    }),
    // new AssetsPlugin({
    //   filename: 'bundle-conf.json',
    //   path: __dirname
    // }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false,
    //       drop_debugger: true,
    //       drop_console: true,
    //     },
    //     output: {
    //       comments: false,
    //     },
    //   },
    //   sourceMap: true,
    //   parallel: true
    // }),
  ]
};