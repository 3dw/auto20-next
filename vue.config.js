const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: '自學2.0',
    themeColor: '#00e600',
    msTileColor: '#ff99ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true 
   }
  },
})
