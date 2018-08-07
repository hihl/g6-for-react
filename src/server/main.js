import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import assets from './client/assets.json';
import config from './config.json';
import previews from './previews';

const app = express();
const port = process.env.port || 3005; // 默认端口

function renderPreview(group, page) {
  const preview = previews[group][page];
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${preview.title}</title>
    <style>::-webkit-scrollbar{display:none;}html,body{overflow:hidden;margin:0;}</style>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react16.0.0.production.min.js"></script>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react-dom16.0.0.production.min.js"></script>
    <script src="//cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
    <script src="/scripts/ReactG6.min.js"></script>
  </head>
<body>
<div id="mountNode"></div>
<script>/*Fixing iframe window.innerHeight 0 issue in Safari*/document.body.clientHeight;</script>
${preview.code}
</body>
</html>
  `;
}

function renderView(conf, page) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>G6-for-React</title>
      <meta charset="utf-8>
      <meta http-equiv="content-type" content="text/html;charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="${conf[page].css}">
      <script src="/dll/vendor1.js"></script>
      <script src="/dll/vendor2.js"></script>
      <script>
        window.groups = ${JSON.stringify(conf.groups)};
        window.previewCode = "${encodeURIComponent(conf.previewCode)}";
      </script>
    </head>
    <body>
      <div id="app">
      </div>
      <script src="${conf[page].js}"></script>
    </body>
  </html>
  `;
}

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan());

app.get('/', (req, res) => {
  res.send(renderView(Object.assign({}, config, assets), 'home'));
});

app.get('/demo/:group/:page', (req, res) => {
  const { group, page } = req.params;
  res.send(renderView(Object.assign({ previewCode: renderPreview(group, page) }, config, assets), 'demo'));
});

app.listen(port, () => {
  console.log(`The server is running at http://127.0.0.1:${port}/`);
});