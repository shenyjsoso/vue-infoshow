// vue.config.js
module.exports = {
    publicPath: '/',
    lintOnSave:true,
    devServer: {
        overlay: {
            warning: false,
            errors: true,
        },
        // 设置代理
        port: 8080,
        proxy: {
            '/api': {
                //target: 'http://localhost:8888/',
                target: 'http://192.168.1.57:8084/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/portal',
                },
            },
            
            '/ssoApi': {
                target: 'http://192.168.2.223:8099/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/ssoApi': '/',
                },
            },
        },
    },
}