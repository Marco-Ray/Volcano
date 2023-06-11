// the purpose of this file is to setup the proxy of vercel server
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // target server
  if (req.url.startsWith('/api')) {
    target = ''
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite the request url
      '^/api/': '/'
    }
  })(req, res)
}

