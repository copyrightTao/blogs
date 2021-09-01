const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin; // 打包分析
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin"); // 缓存加速二次构建速度
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
// const CommonsPkg = require('./bundle-conf.json')
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
      .set("@public", resolve("public"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@common", resolve("src/utils/common"))
      .set("@views", resolve("src/views"))
      .set("@store", resolve("src/store"))
      .set(
        "api",
        (function() {
          if (process.env.NODE_ENV === "uat") {
            return resolve("src/api-uat.js");
          } else if (process.env.NODE_ENV === "production") {
            return resolve("src/api-prod.js");
          } else {
            return resolve("src/api-uat.js");
          }
        })()
      );
    if (!IS_DEV) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
  },
  configureWebpack: config => {
    // 开启 gzip 压缩
    // 需要 npm i -D compression-webpack-plugin
    const plugins = [];
    if (IS_PROD) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    // if (IS_DEV) {
    //   plugins.push([
    //     /**
    //      * 缓存加速二次构建速度
    //      */
    //     new HardSourceWebpackPlugin(),
    //     new HardSourceWebpackPlugin.ExcludeModulePlugin([
    //       {
    //         test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
    //       }
    //     ])
    //   ])
    // }
    config.plugins = [
      ...config.plugins,
      ...plugins,
      // new webpack.DllReferencePlugin({
      //   context: process.cwd(),
      //   manifest: require("./public/vendor/vendor-manifest.json")
      // }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: resolve("./public/vendor/*.js"),
        // dll 引用路径
        publicPath: "./vendor",
        // dll最终输出的目录
        outputPath: "./vendor"
      })
    ];
  },
  devServer: {
    hotOnly: true, // 热更新
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 你要请求的后端接口ip+port
        changeOrigin: true, // 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true, // 开启webSocket
        pathRewrite: {
          "^/api": "" // 替换成target中的地址
        }
      }
    }
  }
};
