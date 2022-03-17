const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const path = require(path)
// const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  outputDir: 'build',
  publicPath: './',
  devServer: {
    port: 1000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://employee-idcard.yz-intelligence.com/', // 服务器api地址
        changeOrigin: true, // 是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          // 重写路径
          '^/api': ''
        }
      }
    }
  },
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
