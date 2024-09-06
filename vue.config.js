const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Auto20',
    themeColor: '#00e600',
    msTileColor: '#ff99ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true,
      clientsClaim: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule('riv')
      .test(/\.riv$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash].[ext]',
        outputPath: 'assets/animations',
      })
      .end();
  },
})
