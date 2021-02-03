/**
 * vue的配置文件
 */
const path = require('path')

// 路径处理 
const resolve = dir => path.join(__dirname, dir);
// 根据是否未开发环境来选择不同的地址
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';

module.exports = {
  lintOnSave: false,
  // baseUrl: BASE_URL, // 已被废除
  publicPath: BASE_URL,
  /**
   * vue-cli内部的webpack配置是通过chainWebpack的库维护的
   * 可以通过这个进行webpack的高级配置
   */
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 当前路径拼接src，这个设置让@代表src
      .set('_c', resolve('src/components'))

  },
  // 打包时不生成.map文件，加快速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    proxy:'http://localhost:4000' // 告诉开发服务器，让任何未知请求都代理到这个url
  }
}
