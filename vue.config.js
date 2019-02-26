module.exports={
    chainWebpack:config=>{
        //这里是对环境的配置，不同的环境对应不同的BASE_URL
        config.plugin('define').tap(args=>{
            args[0]['process.env'].BASE_URL=JSON.stringify(process.env.BASE_URL)
            return args;
        })
    }
}