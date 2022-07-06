const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'build',
  // publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    const plugins = []
    plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    )
    plugins.push(
      AutoImport({
        /* options */
      })
    )
    plugins.push(
      Components({
        resolvers: [ElementPlusResolver()]
      })
    )
    plugins.push(
      new CompressionPlugin({
        test: /\.(js|css|html|json)$/,
        //对于10K以上的数据进行压缩
        threshold: 10240 // 处理资源阈值, 以字节为单位
      })
    )
    // plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: '8000'
    //   })
    // )
    config.plugins = [...config.plugins, ...plugins]
    config['performance'] = {
      //打包文件大小配置
      maxEntrypointSize: 10000000,
      maxAssetSize: 30000000
    }
  },
  chainWebpack: (config) => {
    // config.externals = externals
    config.resolve.alias.set('@', resolve('src')).set('@c', resolve('src/components'))
    // config.plugin('html').tap((args) => {
    //   if (IS_PROD) {
    //     args[0].cdn = cdn.build
    //   } else {
    //     args[0].cdn = cdn.dev
    //   }
    //   return args
    // })
    if (IS_PROD) {
      // 开启分离 js
      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            //commons 一般是是个人定义的
            name: 'chunk-common', // 打包后的文件名
            chunks: 'initial',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true
          },
          // 提取element-Plus
          element: {
            chunks: 'initial',
            name: `chunk-element`,
            test: /[\\/]element-plus[\\/]/,
            priority: 3
          },
          vendors: {
            //vendor 是导入的 npm 包
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            maxSize: 600000,
            maxInitialRequests: 20,
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      })
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/css/variable.less')]
    }
  }
}
