const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: "./client/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "client", "public/"),
    port: 8000,
    publicPath: "http://localhost:8000/dist",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = webpackConfig;
