module.exports = {
  devServer: {
    https: false,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
