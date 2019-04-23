let path = require('path');
//去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
//对一些不经常改动的库，可以通过cdn引入，webpack不对他们打包  
let externals = {
  'vue': 'Vue',
  'axios': 'axios',
  'element-ui': 'ELEMENT',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex'
}
const cdn={
  css:[
    //element-ui css
    'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
  ],
  js:[
    //vue
    'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
    //axios
    'http://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
    //vuex
    'https://unpkg.com/vuex@3.1.0/dist/vuex.min.js',
    //vue-router
    'https://unpkg.com/vue-router@3.0.6/dist/vue-router.min.js',
    //element
    'https://unpkg.com/element-ui@2.7.2/lib/index.js'
  ]
}
module.exports = {
  //基本路径
  publicPath: './',
  //输出文件目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //生产环境不需要生产map文件
  productionSourceMap:false,
  chainWebpack: config => {
    //这里是对环境的配置，不同的环境对应不同的BASE_URL
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args;
    });
    //代码分割
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
    //只在生产环境生效
    if(process.env.NODE_ENV==='production'){
      config.externals(externals)
      config.plugin('html')
      .tap(args=>{
        args[0].cdn=cdn;
        return args
      })
    }
      //设置别名
      config.resolve.alias
      .set('@', resolve('src'))
  },
  //  webpack插件配置
  configureWebpack: config => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$',
        ),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  devServer: {
    open: true
  },
  //定义scss全局变量
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/global.scss";`
      }
    }
  }
}