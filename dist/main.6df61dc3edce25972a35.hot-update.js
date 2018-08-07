require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/server/main.js":
/*!****************************!*\
  !*** ./src/server/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_assets_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/assets.json */ "./client/assets.json");
/* harmony import */ var _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client_assets_json__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.json */ "./src/server/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/server/config.json", 1);
/* harmony import */ var _previews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./previews */ "./src/server/previews.js");









const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.port || 3005; // 默认端口

function renderPreview(group, page) {
  const preview = _previews__WEBPACK_IMPORTED_MODULE_7__["default"][group][page];
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${preview.title}</title>
    <style>::-webkit-scrollbar{display:none;}html,body{overflow:hidden;margin:0;}</style>
    <script>/*Fixing iframe window.innerHeight 0 issue in Safari*/document.body.clientHeight;</script>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react16.0.0.production.min.js"></script>
    <script src="//g.alicdn.com/bizcharts/io-asserts/3.1.2/react-dom16.0.0.production.min.js"></script>
    <script src="//cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
    <script src="/scripts/g6-for-react.min.js"></script>
  </head>
<body>
<div id="mountNode"></div>
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

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'client')));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '..', 'public')));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({ extended: true }));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()());

app.get('/', (req, res) => {
  res.send(renderView(Object.assign({}, _config_json__WEBPACK_IMPORTED_MODULE_6__, _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default.a), 'home'));
});

app.get('/demo/:group/:page', (req, res) => {
  const { group, page } = req.params;
  res.send(renderView(Object.assign({ previewCode: renderPreview(group, page) }, _config_json__WEBPACK_IMPORTED_MODULE_6__, _client_assets_json__WEBPACK_IMPORTED_MODULE_5___default.a), 'demo'));
});

app.listen(port, () => {
  console.log(`The server is running at http://127.0.0.1:${port}/`);
});

/***/ })

};
//# sourceMappingURL=main.6df61dc3edce25972a35.hot-update.js.map