import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from './webpack.config.dev';
import webpackProdConfig from './webpack.config.prod';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
const env = process.env.NODE_ENV || 'development';
const config = env === 'production' ? webpackProdConfig : webpackDevConfig;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  output: config.output.path
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, "client")));

app.use('/', expressStaticGzip(path.join(__dirname, "client", 'dist'), {
  enableBrotli: true
}));

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')));

app.listen(port, () => console.log(port, ' active'));
