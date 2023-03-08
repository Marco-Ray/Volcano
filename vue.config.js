module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://zehuan-wang.edinburgh.domains/fatfree/Volcano-Back/',//接口的前缀
        ws:true,//代理 websocked
        changeOrigin:true,//虚拟的站点需要更管origin
        pathRewrite:{
          '/api':''//重写路径
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Volcano-Front/my-app/'
    : '/',
  outputDir: 'my-app',
}
