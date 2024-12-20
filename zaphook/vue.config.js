const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://hooks.zapier.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
