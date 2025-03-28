module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3003',
                changeOrigin: true
            }
        }
    }
}