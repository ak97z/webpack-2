const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")



module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My con模板1号",
      template: "src/assets/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ "css-loader","style-loader"],
      },
    ],
  },
}
