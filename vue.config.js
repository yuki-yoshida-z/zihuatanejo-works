const path = require("path");

module.exports = {
  outputDir: 'dist',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('sass').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/settings.sass'
        })
        .end()
    })
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
