// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
        // path: path.resolve(__dirname,'dist'),
        filename:'ind.[contenthash].js'
    },
    // plugins: [new HtmlWebpackPlugin()],
}
