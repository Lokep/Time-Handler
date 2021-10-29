const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  lintOnSave: false,
  parallel: false,
  configureWebpack: config => {

    if (process.env.NODE_ENV === "production") {
      config.externals = { // 不会被打包的库
       'vue': 'Vue',
       'vue-router': 'VueRouter',
       'element-plus': 'ElementPlus'
      }
     }

    return {
      plugins: [
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      ]
    }
  }
}