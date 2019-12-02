const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        index: './index.html',
        port: 9000
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }, {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader', // translates CSS into CommonJS
              'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
          }
        ]
      },
      plugins: [new HtmlWebPackPlugin({
          template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
      ]
}