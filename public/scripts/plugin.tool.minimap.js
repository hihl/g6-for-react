(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("g6-for-react"));
	else if(typeof define === 'function' && define.amd)
		define(["g6-for-react"], factory);
	else if(typeof exports === 'object')
		exports["plugin.tool.minimap"] = factory(require("g6-for-react"));
	else
		root["plugin.tool.minimap"] = factory(root["ReactG6"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 399);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(5);
var ctx = __webpack_require__(26);
var hide = __webpack_require__(23);
var has = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(64);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(38);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(51);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview 缩略图
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Minimap = __webpack_require__(400);

var Plugin = function () {
  function Plugin(options) {
    (0, _classCallCheck3.default)(this, Plugin);

    this.options = options;
  }

  (0, _createClass3.default)(Plugin, [{
    key: 'init',
    value: function init() {
      var graph = this.graph;
      var minimap = new Minimap((0, _extends3.default)({
        getGraph: function getGraph() {
          return graph;
        }
      }, this.options));
      graph.on('afterchange', function () {
        minimap.renderBackground();
        minimap.renderViewPort();
      });
      graph.on('afterlayout', function () {
        minimap.renderBackground();
        minimap.renderViewPort();
      });
      graph.on('afterviewportchange', function () {
        minimap.renderViewPort();
      });
      this.renderBackground = function () {
        minimap.renderBackground();
      };
      this.renderViewPort = function () {
        minimap.renderViewPort();
      };
      this.minimap = minimap;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.minimap.destroy();
    }
  }]);
  return Plugin;
}();

G6.Plugins['tool.minimap'] = Plugin;

module.exports = Plugin;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(31);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(20);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview minimap
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util,
    G = G6.G;

var Canvas = G.canvas.Canvas;

var Minimap = function () {
  function Minimap(options) {
    (0, _classCallCheck3.default)(this, Minimap);

    Util.mix(this, {
      /**
       * 类型
       * @type {string}
       */
      type: 'minimap',

      /**
       * dom 容器
       * @type {dom}
       */
      container: null,

      /**
       * 是否是缩略图
       * @type {boolean}
       */
      isMinimap: true,

      /**
       * 背景样式
       * @type {CSS}
       */
      backgroundCSS: {
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        'z-index': 0
      },

      /**
       * 容器样式
       * @type {CSS}
       */
      minimapContainerCSS: {
        background: '#fff',
        position: 'relative',
        overflow: 'hidden'
      },

      /**
       * 缩略图视口框
       * @type {CSS}
       */
      viewportCSS: {
        height: '100%',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        'z-index': 1
      },

      /**
       * 控制图层
       * @type {CSS}
       */
      controlLayerCSS: {
        width: '100%',
        height: '100%',
        cursor: 'move',
        position: 'absolute',
        'z-index': 2
      },

      /**
       * 缩略图可视区域视窗样式
       * @type {G.Rect.ATTRS}
       */
      viewportWindowStyle: {
        stroke: '#91D5FF'
      },

      /**
       * 缩略图背景样式
       * @type {G.Rect.ATTRS}
       */
      viewportBackStyle: {
        fill: '#EBEEF2',
        fillOpacity: 0.65
      },

      /**
       * 获取 G6 图
       * @type {funtion}
       */
      getGraph: function getGraph() {}
    }, options);
    this._initContainer();
    this._initMiniMap();
    this._bindEvent();
  }

  (0, _createClass3.default)(Minimap, [{
    key: '_bindEvent',
    value: function _bindEvent() {
      var _this = this;

      var controlLayer = this.controlLayer;
      var miniMapViewPortActived = false;
      var startMatrix = void 0;
      var miniMapScale = void 0;
      var graphScale = void 0;
      var startPoint = void 0;
      var graph = void 0;
      controlLayer.on('mousedown', function (ev) {
        if (!_this.miniMapMatrix) {
          return;
        }
        graph = _this.getGraph();
        miniMapViewPortActived = true;
        startMatrix = Util.cloneDeep(graph.getMatrix());
        miniMapScale = _this.miniMapMatrix[0];
        graphScale = startMatrix[0];
        startPoint = {
          clientX: ev.clientX,
          clientY: ev.clientY
        };
      });
      controlLayer.on('mouseup', function () {
        resetStatus();
      });
      controlLayer.on('mouseleave', function () {
        resetStatus();
      });
      controlLayer.on('mousemove', function (ev) {
        if (miniMapViewPortActived && graph) {
          var dx = startPoint.clientX - ev.clientX;
          var dy = startPoint.clientY - ev.clientY;
          var matrix = Util.cloneDeep(startMatrix);
          Util.mat3.translate(matrix, matrix, [graphScale * dx / miniMapScale, graphScale * dy / miniMapScale]);
          graph.updateMatrix(matrix);
        }
      });
      function resetStatus() {
        miniMapViewPortActived = false;
        miniMapScale = undefined;
        startPoint = undefined;
        startMatrix = undefined;
        graphScale = undefined;
        graph = undefined;
      }
    }
  }, {
    key: '_initMiniMap',
    value: function _initMiniMap() {
      var background = this.background;
      var viewport = this.viewPort;
      var width = this.width;
      var height = this.height;
      var viewportWindowStyle = this.viewportWindowStyle;
      var viewportBackStyle = this.viewportBackStyle;
      var miniMapCanvas = new Canvas({
        containerDOM: background,
        width: width,
        height: height
      });
      var viewportCanvas = new Canvas({
        containerDOM: viewport,
        width: width,
        height: height
      });
      var viewportWindow = viewportCanvas.addShape('rect', {
        attrs: (0, _extends3.default)({
          x: 0,
          y: 0,
          width: width,
          height: height
        }, viewportWindowStyle)
      });
      var viewportBack = viewportCanvas.addShape('path', {
        attrs: (0, _extends3.default)({
          path: 'M0,0 L1,1'
        }, viewportBackStyle)
      });

      background.css({
        width: width + 'px',
        height: height + 'px'
      });
      viewport.css({
        position: 'absolute'
      });
      this.miniMapCanvas = miniMapCanvas;
      this.viewportCanvas = viewportCanvas;
      this.viewportWindow = viewportWindow;
      this.viewportBack = viewportBack;
    }
  }, {
    key: '_initContainer',
    value: function _initContainer() {
      var container = this.container;
      var width = this.width;
      var height = this.height;
      if (container) {
        if (Util.isString(container)) {
          container = document.getElementById(container);
        }
      } else {
        throw new Error('please set the container for the minimap !');
      }
      if (!width) {
        width = Util.getWidth(container);
      }
      if (!height) {
        height = Util.getHeight(container);
      }
      var minimapContainerCSS = this.minimapContainerCSS;
      minimapContainerCSS.width = width + 'px';
      minimapContainerCSS.height = height + 'px';
      var backgroundCSS = this.backgroundCSS;
      var viewportCSS = this.viewportCSS;
      var controlLayerCSS = this.controlLayerCSS;
      var minimapContainer = Util.createDOM('<div class="g6-editor-minimap-container"></div>', minimapContainerCSS);
      var background = Util.createDOM('<div class="g6-editor-minimap-background"></div>', backgroundCSS);
      var viewPort = Util.createDOM('<div class="g6-editor-minimap-viewport">', viewportCSS);
      var controlLayer = Util.createDOM('<div class="g6-editor-minimap-control-layer">', controlLayerCSS);
      container.appendChild(minimapContainer);
      minimapContainer.appendChild(controlLayer);
      minimapContainer.appendChild(viewPort);
      minimapContainer.appendChild(background);
      this.minimapContainer = minimapContainer;
      this.background = background;
      this.viewPort = viewPort;
      this.controlLayer = controlLayer;
    }
    // 1. 为了防止画面闪烁 2. 为了缩略图中元素最小尺寸可控；所以这里采取了一种比较 hack 的方式绘制缩略图
    // 大体思路是将 graph canvas 的 context 篡改为 minimap canvas 的 context，然后用 graph 的 canvas 去画

  }, {
    key: 'renderBackground',
    value: function renderBackground(graph) {
      if (!graph) {
        graph = this.getGraph();
      }
      var miniMapCanvas = this.miniMapCanvas;
      var width = this.width;
      var height = this.height;
      Util.graph2Canvas({
        graph: graph,
        width: width,
        height: height,
        canvas: miniMapCanvas
      });
      this.miniMapMatrix = miniMapCanvas.matrix;
    }
  }, {
    key: 'renderViewPort',
    value: function renderViewPort(graph) {
      if (!graph) {
        graph = this.getGraph();
      }
      if (graph.getItems().length === 0) {
        return;
      }
      var viewportWindow = this.viewportWindow;
      var viewportCanvas = this.viewportCanvas;
      var viewportBack = this.viewportBack;
      var miniMapMatrix = this.miniMapMatrix;
      var graphWidth = graph.getWidth();
      var graphHeight = graph.getHeight();
      var width = this.width;
      var height = this.height;
      var graphMatrix = graph.getMatrix();
      if (!miniMapMatrix) {
        return;
      }
      var graphTL = Util.invertMatrix({
        x: 0,
        y: 0
      }, graphMatrix);
      var graphBR = Util.invertMatrix({
        x: graphWidth,
        y: graphHeight
      }, graphMatrix);
      var viewPortTL = Util.applyMatrix(graphTL, miniMapMatrix);
      var viewPortBR = Util.applyMatrix(graphBR, miniMapMatrix);
      var windowWidth = viewPortBR.x - viewPortTL.x;
      var windowHeight = viewPortBR.y - viewPortTL.y;
      viewportBack.attr({
        path: [['M', 0, 0], ['L', width, 0], ['L', width, height], ['L', 0, height], ['L', 0, 0], ['M', viewPortTL.x, viewPortTL.y], ['L', viewPortTL.x, viewPortBR.y], ['L', viewPortBR.x, viewPortBR.y], ['L', viewPortBR.x, viewPortTL.y], ['L', viewPortTL.x, viewPortTL.y]]
      });
      viewportWindow.attr({
        x: viewPortTL.x,
        y: viewPortTL.y,
        width: windowWidth,
        height: windowHeight
      });
      viewportCanvas.draw();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.minimapContainer.destroy();
    }
  }]);
  return Minimap;
}();

module.exports = Minimap;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(59);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(50);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(48) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(66)(false);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(37);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(60);
var toAbsoluteIndex = __webpack_require__(68);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(44);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(49);
var toObject = __webpack_require__(45);
var IObject = __webpack_require__(38);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(67) });


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ })

/******/ });
});