const path = require('path');
module.exports = {
    publicPath: '/yugioh-vue/',
    configureWebpack: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, 'src/'),
            }
        }
    },
}