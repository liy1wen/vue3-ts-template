const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const path = require(path)
// const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  outputDir: 'build',
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '@': resolve('/src'),
    //     '@/com': resolve('/src/components')
    //   }
    // },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
