const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              autoprefixer({
                browsers: ['>1%', 'last 2 versions']
              })
            ]
          }
        },
        {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Actions: path.resolve(__dirname, 'src/store/actions'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Images: path.resolve(__dirname, 'src/assets/img/'),
      Commons: path.resolve(__dirname, 'src/components/commons/'),
      Dashboard: path.resolve(__dirname, 'src/components/dashboard/'),
      Home: path.resolve(__dirname, 'src/components/home/'),
      Login: path.resolve(__dirname, 'src/components/login/'),
      Signup: path.resolve(__dirname, 'src/components/signup/')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      excludeChunks: ['server']
    })
  ]
};
