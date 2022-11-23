// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })

const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";
// const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "./";
module.exports = {
  publicPath: BASE_URL,
  outputDir: "dist", // 打包生成的生产环境构建文件的目录
  //assetsDir: "", // 放置生成的静态资源路径，默认在outputDir
  indexPath: "index.html", // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  lintOnSave: false,
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end();
    config.externals = {
      'AMap': 'AMap' // 高德地图配置
    }
  },
  // css: {
  //   modules: false, // 启用 CSS modules
  //   extract: true, // 是否使用css分离插件
  //   sourceMap: false, // 开启 CSS source maps?
  //   loaderOptions: {} // css预设器配置项
  // },

  devServer: {
    port: 9090, // 端口
    proxy: {
      // 设置代理
      "/api": {
        target: "http://xnatural.cn:9090", // 你请求的第三方接口
        changeOrigin: true,
        pathRewrite: {
          // 路径重写，
          "^/api": "" // 替换target中的请求地址，也就是说以后你在请求http://elderlyweixin.shfusion.com/XXXXX这个地址的时候直接写成/api/XXXXX即可。
        }
      }
    }
  }

};
