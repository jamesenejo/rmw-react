const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const webpackDevConfig = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "client"),
    port: 8000,
    publicPath: "http://localhost:8000/dist",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

module.exports = webpackDevConfig;
