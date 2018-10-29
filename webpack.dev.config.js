const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: '#source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    historyApiFallback: true
  }
});
