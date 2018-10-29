import path from 'path';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const PORT = process.env.PORT || 8000;

app.use(express.static(DIST_DIR));

// app.use('/*', expressStaticGzip(path.join(__dirname), {
//   enableBrotli: true
// }));

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.br';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.get('*.css', function(req, res, next) {
  req.url = req.url + '.br';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});


app.listen(PORT, () => {
  console.log(`App listening to ${PORT}...`);
  console.log('Press Ctrl+C to quit.');
});
