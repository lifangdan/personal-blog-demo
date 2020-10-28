const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',// 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist',// 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    // assetsDir: '',//放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    // indexPath: 'index.html',//指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。

    lintOnSave: true,// 是否在保存的时候检查
    // productionSourceMap: true,// 生产环境是否生成 sourceMap 文件
    // css: {
    //     extract: true,// 是否使用css分离插件 ExtractTextPlugin
    //     sourceMap: false,// 开启 CSS source maps
    //     loaderOptions: {},// css预设器配置项
    //     modules: false// 启用 CSS modules for all css / pre-processor files.
    // },
    devServer: {// 环境配置
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            '/api': {
                target: '/',
                ws: true,
                changeOrigin: true
            },

        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", path.join(__dirname, "src"))
            .set("views", resolve("src/views"))
            .set("components", resolve("src/components"))
            .set("styles", resolve("src/styles"));
    }
};
