let path=require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    chainWebpack: config => {
        //这里是对环境的配置，不同的环境对应不同的BASE_URL
        config.plugin('define').tap(args => {
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
            return args;
        });
        //设置别名
        config.resolve.alias
        .set('@',resolve('src'))
    },
    devServer: {
        open:true
        // 设置代理
        // lintOnSave: true,
        // devServer: {
        //     proxy: {
        //         // proxy all requests starting with /api to jsonplaceholder
        //         '/api': {
        //             target: 'http://test.jubao56.com/', //代理接口
        //             changeOrigin: true,
        //             pathRewrite: {
        //                 '^/api': '' //代理的路径
        //             }
        //         }
        //     }
        // }
        // proxy: 'http://test.jubao56.com/'
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