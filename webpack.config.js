const path = require('path');


const webpackCommonConfig = {
  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "client", "dist"),
    publicPath: "/",
    filename: '[id].js'
  },
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      Helpers: path.resolve(__dirname, 'client/helpers/'),
      Actions: path.resolve(__dirname, 'client/store/actions'),
      Pages: path.resolve(__dirname, 'client/pages/'),
      Styles: path.resolve(__dirname, 'client/styles/'),
      Images: path.resolve(__dirname, 'client/assets/img/'),
      Commons: path.resolve(__dirname, 'client/components/commons/'),
      Dashboard: path.resolve(__dirname, 'client/components/dashboard/'),
      Home: path.resolve(__dirname, 'client/components/home/'),
      Login: path.resolve(__dirname, 'client/components/login/'),
      Signup: path.resolve(__dirname, 'client/components/signup/')
    }
  }
};

module.exports = webpackCommonConfig;
