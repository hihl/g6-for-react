(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("g6-for-react"));
	else if(typeof define === 'function' && define.amd)
		define(["g6-for-react"], factory);
	else if(typeof exports === 'object')
		exports["plugin.template.maxSpanningForest"] = factory(require("g6-for-react"));
	else
		root["plugin.template.maxSpanningForest"] = factory(root["ReactG6"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 394);
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hypot = __webpack_require__(87);

var _hypot2 = _interopRequireDefault(_hypot);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview force atlas 2
 * @author shiwu.wyy@antfin.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;
var Body = __webpack_require__(208);
var Quad = __webpack_require__(209);
var QuadTree = __webpack_require__(210);

var Layout = function () {
  function Layout(options) {
    (0, _classCallCheck3.default)(this, Layout);

    Util.mix(this, {
      /**
       * 宽
       * @type  {number}
       */
      width: null,

      /**
       * 高
       * @type  {number}
       */
      height: null,

      /**
       * the center of the layout
       * @type  {object}
       */
      center: null,

      /**
       * the parameter for repulsive forces,
       * it will scale the layout but won't change the layout
       * larger the kr, looser the layout
       * @type  {number}
       */
      kr: 10,

      /**
       * the parameter for gravity forces
       * @type  {number}
       */
      kg: 1.0,

      /**
       * modes:
       * 'normal' for normal using
       * 'linlog' for closer clusters.
       * @type  {string}
       */
      mode: 'normal',

      /**
       * whether preventing the node overlapping
       * @type  {boolean}
       */
      prev_overlapping: false,

      /**
       * whether active the dissuade hub mode
       * true: grant authorities (nodes with a high indegree)
       * a more central position than hubs (nodes with a high outdegree)
       * @type  {boolean}
       */
      dissuade_hubs: false,

      /**
       * whether active the barnes hut optimization on computing repulsive forces
       * @type  {boolean}
       */
      barnes_hut: false,

      /**
       * the max iteration number
       * @type  {number}
       */
      max_iteration: 1500,

      /**
       * control the global velocity
       * defualt: 0.1(gephi)
       * @type  {number}
       */
      ks: 0.1,

      /**
       * the max global velocity
       * @type  {number}
       */
      ksmax: 10,

      /**
       * the tolerance for the global swinging
       * @type  {number}
       */
      tao: 0.1
    }, options);
  }
  // 执行布局


  (0, _createClass3.default)(Layout, [{
    key: 'execute',
    value: function execute() {
      var graph = this.graph,
          nodes = this.nodes,
          edges = this.edges,
          kr = this.kr,
          kg = this.kg,
          mode = this.mode,
          prev_overlapping = this.prev_overlapping,
          dissuade_hubs = this.dissuade_hubs,
          barnes_hut = this.barnes_hut,
          max_iteration = this.max_iteration,
          ks = this.ks,
          ksmax = this.ksmax,
          tao = this.tao;


      var width = this.width ? this.width : graph.getWidth();
      var height = this.height ? this.height : graph.getHeight();
      var center = this.center ? this.center : {
        x: width / 2,
        y: height / 2
      };

      var size = nodes.length;
      var esize = edges.length;

      var SG = 0;
      var bodies = [];
      for (var i = 0; i < size; i += 1) {
        nodes[i].index = i;
        nodes[i].degree = 0;
        nodes[i].x = Math.random() * 1000;
        nodes[i].y = Math.random() * 1000;
      }
      for (var _i = 0; _i < esize; _i += 1) {
        var node1 = graph.find(edges[_i].source).getModel();
        var node2 = graph.find(edges[_i].target).getModel();
        nodes[node1.index].degree += 1;
        nodes[node2.index].degree += 1;
      }

      var kr_prime = 100;
      var iter = max_iteration;
      var prevo_iter = 50;
      var Forces = [];
      var pre_Forces = [];
      for (var _i2 = 0; _i2 < size; _i2 += 1) {
        Forces[2 * _i2] = 0;
        Forces[2 * _i2 + 1] = 0;

        if (barnes_hut) {
          var params = { id: _i2, rx: nodes[_i2].x, ry: nodes[_i2].y, mass: 1, G: kr, degree: nodes[_i2].degree };
          bodies[_i2] = new Body(params);
          params = null;
        }
      }

      do {
        for (var _i3 = 0; _i3 < size; _i3 += 1) {
          pre_Forces[2 * _i3] = Forces[2 * _i3];
          pre_Forces[2 * _i3 + 1] = Forces[2 * _i3 + 1];
          Forces[2 * _i3] = 0;
          Forces[2 * _i3 + 1] = 0;
        }
        // attractive forces, existing on every actual edge
        Forces = this.getAttrForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces);

        // repulsive forces and Gravity, existing on every node pair
        // if prev_overlapping, using the no-optimized method in the last prevo_iter instead.
        if (barnes_hut && (prev_overlapping && iter > prevo_iter || !prev_overlapping)) {
          Forces = this.getOptRepGraForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces, kr, kr_prime, kg, center, bodies);
        } else {
          Forces = this.getRepGraForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces, kr, kr_prime, kg, center);
        }

        // update the positions
        var res = this.updatePos(size, nodes, Forces, pre_Forces, SG, ks, ksmax, tao);
        nodes = res[0];
        SG = res[1];

        iter -= 1;
      } while (iter > 0);
      // record the layout positions, in order to restore the positions after fisheye zooming
      for (var _i4 = 0; _i4 < size; _i4++) {
        nodes[_i4].ori_x = nodes[_i4].x;
        nodes[_i4].ori_y = nodes[_i4].y;
      }
    }
  }, {
    key: 'getAttrForces',
    value: function getAttrForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces) {
      for (var i = 0; i < esize; i += 1) {
        var source_node = graph.find(edges[i].source).getModel();
        var target_node = graph.find(edges[i].target).getModel();
        var dir = [target_node.x - source_node.x, target_node.y - source_node.y];
        var eucli_dis = (0, _hypot2.default)(dir[0], dir[1]);
        eucli_dis = eucli_dis < 0.0001 ? 0.0001 : eucli_dis;
        dir[0] = dir[0] / eucli_dis;
        dir[1] = dir[1] / eucli_dis;
        // the force
        if (prev_overlapping && iter < prevo_iter) eucli_dis = eucli_dis - graph.find(edges[i].source).getBBox().maxX - graph.find(edges[i].target).getBBox().maxX;
        var Fa1 = eucli_dis;
        var Fa2 = Fa1;
        if (mode === 'linlog') {
          Fa1 = Math.log(1 + eucli_dis);
          Fa2 = Fa1;
        }
        if (dissuade_hubs) {
          Fa1 = eucli_dis / source_node.degree;
          Fa2 = eucli_dis / target_node.degree;
        }
        if (prev_overlapping && iter < prevo_iter && eucli_dis <= 0) {
          Fa1 = 0;
          Fa2 = 0;
        } else if (prev_overlapping && iter < prevo_iter && eucli_dis > 0) {
          Fa1 = eucli_dis;
          Fa2 = eucli_dis;
        }
        Forces[2 * source_node.index] += Fa1 * dir[0];
        Forces[2 * target_node.index] -= Fa2 * dir[0];
        Forces[2 * source_node.index + 1] += Fa1 * dir[1];
        Forces[2 * target_node.index + 1] -= Fa2 * dir[1];
        dir = null;
      }
      return Forces;
    }
  }, {
    key: 'getRepGraForces',
    value: function getRepGraForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces, kr, kr_prime, kg, center) {
      for (var i = 0; i < size; i += 1) {
        for (var j = i + 1; j < size; j += 1) {
          var _dir = [nodes[j].x - nodes[i].x, nodes[j].y - nodes[i].y];
          var _eucli_dis = (0, _hypot2.default)(_dir[0], _dir[1]);
          _eucli_dis = _eucli_dis < 0.0001 ? 0.0001 : _eucli_dis;
          _dir[0] = _dir[0] / _eucli_dis;
          _dir[1] = _dir[1] / _eucli_dis;

          if (prev_overlapping && iter < prevo_iter) _eucli_dis = _eucli_dis - graph.find(nodes[i].id).getBBox().maxX - graph.find(nodes[j].id).getBBox().maxX;

          var Fr = kr * (nodes[i].degree + 1) * (nodes[j].degree + 1) / _eucli_dis;

          if (prev_overlapping && iter < prevo_iter && _eucli_dis < 0) {
            Fr = kr_prime * (nodes[i].degree + 1) * (nodes[j].degree + 1);
          } else if (prev_overlapping && iter < prevo_iter && _eucli_dis === 0) {
            Fr = 0;
          } else if (prev_overlapping && iter < prevo_iter && _eucli_dis > 0) {
            Fr = kr * (nodes[i].degree + 1) * (nodes[j].degree + 1) / _eucli_dis;
          }
          Forces[2 * i] -= Fr * _dir[0];
          Forces[2 * j] += Fr * _dir[0];
          Forces[2 * i + 1] -= Fr * _dir[1];
          Forces[2 * j + 1] += Fr * _dir[1];
          _dir = null;
        }

        // gravity
        var dir = [nodes[i].x - center.x, nodes[i].y - center.y];
        var eucli_dis = (0, _hypot2.default)(dir[0], dir[1]);
        dir[0] = dir[0] / eucli_dis;
        dir[1] = dir[1] / eucli_dis;
        var Fg = kg * (nodes[i].degree + 1);
        Forces[2 * i] -= Fg * dir[0];
        Forces[2 * i + 1] -= Fg * dir[1];
        dir = null;
      }
      return Forces;
    }
  }, {
    key: 'getOptRepGraForces',
    value: function getOptRepGraForces(graph, nodes, edges, size, esize, prev_overlapping, dissuade_hubs, mode, iter, prevo_iter, Forces, kr, kr_prime, kg, ct, bodies) {
      var minx = 9e10,
          maxx = -9e10,
          miny = 9e10,
          maxy = -9e10;
      for (var i = 0; i < size; i += 1) {
        bodies[i].setPos(nodes[i].x, nodes[i].y);
        if (nodes[i].x >= maxx) maxx = nodes[i].x;
        if (nodes[i].x <= minx) minx = nodes[i].x;
        if (nodes[i].y >= maxy) maxy = nodes[i].y;
        if (nodes[i].y <= miny) miny = nodes[i].y;
      }

      var width = Math.max(maxx - minx, maxy - miny);

      var quad_params = { xmid: (maxx + minx) / 2, ymid: (maxy + miny) / 2, length: width, mass_center: ct, mass: size };
      var quad = new Quad(quad_params);
      var quad_tree = new QuadTree(quad);

      // build the tree, insert the nodes(quads) into the tree
      for (var _i5 = 0; _i5 < size; _i5 += 1) {
        if (bodies[_i5].in(quad)) quad_tree.insert(bodies[_i5]);
      }
      // update the repulsive forces and the gravity.
      for (var _i6 = 0; _i6 < size; _i6 += 1) {
        bodies[_i6].resetForce();
        quad_tree.updateForce(bodies[_i6]);
        Forces[2 * _i6] -= bodies[_i6].fx;
        Forces[2 * _i6 + 1] -= bodies[_i6].fy;

        // gravity
        var dir = [nodes[_i6].x - ct.x, nodes[_i6].y - ct.y];
        var eucli_dis = (0, _hypot2.default)(dir[0], dir[1]);
        eucli_dis = eucli_dis < 0.0001 ? 0.0001 : eucli_dis;
        dir[0] = dir[0] / eucli_dis;
        dir[1] = dir[1] / eucli_dis;
        var Fg = kg * (nodes[_i6].degree + 1);
        Forces[2 * _i6] -= Fg * dir[0];
        Forces[2 * _i6 + 1] -= Fg * dir[1];

        eucli_dis = null;
        Fg = null;
        dir = null;
      }
      quad_params = null;
      quad = null;
      quad_tree = null;
      width = null;
      return Forces;
    }
  }, {
    key: 'updatePos',
    value: function updatePos(size, nodes, Forces, pre_Forces, SG, ks, ksmax, tao) {
      var swgns = [];
      var trans = [];
      // swg(G) and tra(G)
      var swgG = 0;
      var traG = 0;
      for (var i = 0; i < size; i += 1) {
        var minus = [Forces[2 * i] - pre_Forces[2 * i], Forces[2 * i + 1] - pre_Forces[2 * i + 1]];
        var minus_norm = (0, _hypot2.default)(minus[0], minus[1]);
        var add = [Forces[2 * i] + pre_Forces[2 * i], Forces[2 * i + 1] + pre_Forces[2 * i + 1]];
        var add_norm = (0, _hypot2.default)(add[0], add[1]);

        swgns[i] = minus_norm;
        trans[i] = add_norm / 2;

        swgG += (nodes[i].degree + 1) * swgns[i];
        traG += (nodes[i].degree + 1) * trans[i];
      }

      var pre_SG = SG;
      SG = tao * traG / swgG;
      SG > 0.5 * pre_SG ? 0.5 * pre_SG : SG;
      // update the node positions
      for (var _i7 = 0; _i7 < size; _i7 += 1) {
        var Sn = ks * SG / (1 + SG * Math.sqrt(swgns[_i7]));
        var absForce = (0, _hypot2.default)(Forces[2 * _i7], Forces[2 * _i7 + 1]);
        absForce = absForce < 0.0001 ? 0.0001 : absForce;
        var max = ksmax / absForce;
        Sn = Sn > max ? max : Sn;
        var Dn_x = Sn * Forces[2 * _i7];
        var Dn_y = Sn * Forces[2 * _i7 + 1];
        nodes[_i7].x += Dn_x;
        nodes[_i7].y += Dn_y;
      }
      swgns = null;
      trans = null;
      pre_SG = null;
      return [nodes, SG];
    }
  }]);
  return Layout;
}();

module.exports = Layout;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(5).Math.hypot;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(14);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hypot = __webpack_require__(87);

var _hypot2 = _interopRequireDefault(_hypot);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview body
 * @author shiwu.wyy@antfin.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;

// represents a body(a point mass) and its position

var Body = function () {
  function Body(options) {
    (0, _classCallCheck3.default)(this, Body);

    Util.mix(this, {
      /**
       * the id of this body, the same with the node id
       * @type  {number}
       */
      id: -1,
      /**
       * the position of this body
       * @type  {number}
       */
      rx: null,
      /**
       * the position of this body
       * @type  {number}
       */
      ry: null,
      /**
       * the force acting on this body
       * @type  {number}
       */
      fx: 0,
      /**
       * the force acting on this body
       * @type  {number}
       */
      fy: 0,
      /**
       * the mass of this body, =1 for a node
       * @type  {number}
       */
      mass: 1,
      /**
       * the degree of the node represented by this body
       * @type  {number}
       */
      degree: 1,
      /**
       * the parameter for repulsive force, = kr
       * @type  {number}
       */
      G: 1
    }, options);
  }
  // returns the euclidean distance


  (0, _createClass3.default)(Body, [{
    key: 'distanceTo',
    value: function distanceTo(bo) {
      var dx = this.rx - bo.rx;
      var dy = this.ry - bo.ry;
      return (0, _hypot2.default)(dx, dy);
    }
  }, {
    key: 'setPos',
    value: function setPos(x, y) {
      this.rx = x;
      this.ry = y;
    }
    // resets the forces

  }, {
    key: 'resetForce',
    value: function resetForce() {
      this.fx = 0;
      this.fy = 0;
    }
  }, {
    key: 'addForce',
    value: function addForce(b) {
      var dx = b.rx - this.rx;
      var dy = b.ry - this.ry;
      var dist = (0, _hypot2.default)(dx, dy);
      dist = dist < 0.0001 ? 0.0001 : dist;
      // the repulsive defined by force atlas 2
      var F = this.G * (this.degree + 1) * (b.degree + 1) / dist;
      this.fx += F * dx / dist;
      this.fy += F * dy / dist;
    }
    // if quad contains this body

  }, {
    key: 'in',
    value: function _in(quad) {
      return quad.contains(this.rx, this.ry);
    }
    // returns a new body

  }, {
    key: 'add',
    value: function add(bo) {
      var nenw_mass = this.mass + bo.mass;
      var x = (this.rx * this.mass + bo.rx * bo.mass) / nenw_mass;
      var y = (this.ry * this.mass + bo.ry * bo.mass) / nenw_mass;
      var dg = this.degree + bo.degree;
      var params = { rx: x, ry: y, mass: nenw_mass, degree: dg };
      return new Body(params);
    }
  }]);
  return Body;
}();

module.exports = Body;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview quad
 * @author shiwu.wyy@antfin.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;

var Quad = function () {
  function Quad(options) {
    (0, _classCallCheck3.default)(this, Quad);

    Util.mix(this, {
      /**
       * the center position of this quad
       * @type  {number}
       */
      xmid: null,
      /**
       * the center position of this quad
       * @type  {number}
       */
      ymid: null,
      /**
       * the length of this quad
       * @type  {number}
       */
      length: 0,
      /**
       * the mass center of this quad
       * @type  {number}
       */
      mass_center: [0, 0],
      /**
       * the mass of this quad
       * @type  {number}
       */
      mass: 0
    }, options);
  }

  (0, _createClass3.default)(Quad, [{
    key: 'getLength',
    value: function getLength() {
      return this.length;
    }
  }, {
    key: 'contains',
    value: function contains(x, y) {
      var halfLen = this.length / 2;
      return x <= this.xmid + halfLen && x >= this.xmid - halfLen && y <= this.ymid + halfLen && y >= this.ymid - halfLen;
    }
    // northwest quadrant

  }, {
    key: 'NW',
    value: function NW() {
      var x = this.xmid - this.length / 4;
      var y = this.ymid + this.length / 4;
      var len = this.length / 2;
      var params = { xmid: x, ymid: y, length: len };
      var NW = new Quad(params);
      return NW;
    }
    // northeast

  }, {
    key: 'NE',
    value: function NE() {
      var x = this.xmid + this.length / 4;
      var y = this.ymid + this.length / 4;
      var len = this.length / 2;
      var params = { xmid: x, ymid: y, length: len };
      var NE = new Quad(params);
      return NE;
    }
    // southwest

  }, {
    key: 'SW',
    value: function SW() {
      var x = this.xmid - this.length / 4;
      var y = this.ymid - this.length / 4;
      var len = this.length / 2;
      var params = { xmid: x, ymid: y, length: len };
      var SW = new Quad(params);
      return SW;
    }
    // southeast

  }, {
    key: 'SE',
    value: function SE() {
      var x = this.xmid + this.length / 4;
      var y = this.ymid - this.length / 4;
      var len = this.length / 2;
      var params = { xmid: x, ymid: y, length: len };
      var SE = new Quad(params);
      return SE;
    }
  }]);
  return Quad;
}();

module.exports = Quad;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview quadTree
 * @author shiwu.wyy@antfin.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;

var QuadTree = function () {
  // each quadtree represents a quadrant and an aggregate body
  // that represents all bodies inside the quadrant
  function QuadTree(options) {
    (0, _classCallCheck3.default)(this, QuadTree);

    Util.mix(this, {
      /**
       * (aggregated) body in this quad
       * @type  {object}
       */
      body: null,
      /**
       * tree representing the northwest quadrant
       * @type  {object}
       */
      quad: null,
      NW: null,
      NE: null,
      SW: null,
      SE: null,
      /**
      * threshold
      * @type  {number}
      */
      theta: 0.5
    }, options);
    if (options != null) this.quad = options;
  }
  // insert a body(node) into the tree


  (0, _createClass3.default)(QuadTree, [{
    key: 'insert',
    value: function insert(bo) {
      // if this node does not contain a body, put the new body bo here
      if (this.body == null) {
        this.body = bo;
        return;
      }
      // internal node
      if (!this._isExternal()) {
        // update mass info
        this.body = this.body.add(bo);
        // insert body into quadrant
        this._putBody(bo);
      } else {
        // external node
        // divide this region into four children
        this.NW = new QuadTree(this.quad.NW());
        this.NE = new QuadTree(this.quad.NE());
        this.SW = new QuadTree(this.quad.SW());
        this.SE = new QuadTree(this.quad.SE());

        // insert this body and bo
        this._putBody(this.body);
        this._putBody(bo);
        // update the mass info
        this.body = this.body.add(bo);
      }
    }
    // inserts bo into a quad

  }, {
    key: '_putBody',
    value: function _putBody(bo) {
      if (bo.in(this.quad.NW())) this.NW.insert(bo);else if (bo.in(this.quad.NE())) this.NE.insert(bo);else if (bo.in(this.quad.SW())) this.SW.insert(bo);else if (bo.in(this.quad.SE())) this.SE.insert(bo);
    }
  }, {
    key: '_isExternal',
    value: function _isExternal() {
      // four children are null
      return this.NW == null && this.NE == null && this.SW == null && this.SE == null;
    }
    // update the forces

  }, {
    key: 'updateForce',
    value: function updateForce(bo) {
      if (this.body == null || bo === this.body) {
        return;
      }
      // if the current node is external
      if (this._isExternal()) bo.addForce(this.body);
      // internal nodes
      else {
          var s = this.quad.getLength();
          var d = this.body.distanceTo(bo);
          // b is far enough
          if (s / d < this.theta) bo.addForce(this.body);else {
            this.NW.updateForce(bo);
            this.NE.updateForce(bo);
            this.SW.updateForce(bo);
            this.SE.updateForce(bo);
          }
        }
    }
  }]);
  return QuadTree;
}();

module.exports = QuadTree;

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

/***/ 394:
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
 * @fileOverview 图分析模版
 * @author huangtonger@aliyun.com
 * 保留字段:
 * node.vx, node.vy, node.x, node.y
 * node.to, node.from
 * node.visited, node.edges, node.links
 * edge.isTreeEdge、edge.lineWidth
 * 可配置字段:
 * node.rank  分层权重
 * node.label 节点标签
 */
var G6 = __webpack_require__(0).G6;
var maxSpanningForest = __webpack_require__(395);
var Layout = __webpack_require__(135);
var Util = G6.Util;

var Plugin = function () {
  function Plugin(options) {
    (0, _classCallCheck3.default)(this, Plugin);

    Util.mix(this, (0, _extends3.default)({
      layout: new Layout({
        kr: 50,
        kg: 1.0,
        mode: 'common',
        prev_overlapping: true,
        dissuade_hubs: false,
        max_iteration: 500,
        barnes_hut: false,
        ks: 0.1,
        ksmax: 10,
        tao: 0.1
      })
    }, options));
  }

  (0, _createClass3.default)(Plugin, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var graph = this.graph;
      graph.on('beforeinit', function () {
        var layout = graph.get('layout');
        if (!layout) {
          graph.set('layout', _this.layout);
        }
      });
      graph.on('beforerender', function () {
        var data = graph.getSource();
        var nodes = data.nodes,
            edges = data.edges;

        var forest = maxSpanningForest(nodes, edges);
        forest.edges.forEach(function (edge) {
          edge.isTreeEdge = true;
        });
        graph.addFilter(function (item) {
          return !item.isEdge || item.getModel().isTreeEdge;
        });
      });
    }
  }]);
  return Plugin;
}();

G6.Plugins['template.maxSpanningForest'] = Plugin;

module.exports = Plugin;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview 最大生成森林
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;

var maxSpanningTree = __webpack_require__(417);

function maxSpanningForest(nodes, edges) {
  var connectedSubsets = [];
  var forest = {
    nodes: [],
    edges: [],
    maxRankNode: null
  };
  var nodeMap = {};
  var maxRank = -Infinity;
  Util.each(nodes, function (node) {
    node.links = [];
    node.edges = [];
    nodeMap[node.id] = node;
    if (Util.isNil(node.weight)) {
      node.weight = 1;
    }
    if (Util.isNil(node.rank)) {
      if (node.weight) {
        node.rank = node.weight;
      } else {
        node.rank = 1;
      }
    }
  });
  Util.each(edges, function (edge, i) {
    var source = nodeMap[edge.source];
    var target = nodeMap[edge.target];
    source.links.push(nodes.indexOf(target));
    target.links.push(nodes.indexOf(source));
    source.edges.push(i);
    target.edges.push(i);
    if (Util.isNil(edge.weight)) {
      edge.weight = 1;
    }
  });
  Util.each(nodes, function (node, i) {
    if (!node.visited) {
      connectedSubsets.push(getConnectedSubset(i, nodes, edges));
    }
  });
  Util.each(nodes, function (node) {
    delete node.links;
    delete node.edges;
    delete node.visited;
  });
  Util.each(connectedSubsets, function (connectedSubset) {
    var tree = maxSpanningTree(connectedSubset);
    var root = connectedSubset.root;
    forest.nodes = forest.nodes.concat(tree.nodes);
    forest.edges = forest.edges.concat(tree.edges);
    if (root.rank > maxRank) {
      maxRank = root.rank;
      forest.maxRankNode = root;
    }
  });
  return forest;
}
// 获取连通子集
function getConnectedSubset(start, nodes, edges) {
  var connectedSubset = {
    nodes: [],
    edges: [],
    root: null
  };
  var edgeMap = {};
  var subEdges = [];
  var maxRank = -Infinity;
  dfs(start, nodes, function (index) {
    var node = nodes[index];
    if (node.rank > maxRank) {
      maxRank = node.rank;
      connectedSubset.root = node;
    }
    connectedSubset.nodes.push(node);
    connectedSubset.edges = connectedSubset.edges.concat(node.edges);
  });
  // 边索引去重
  Util.each(connectedSubset.edges, function (edgeIndex) {
    if (!edgeMap[edgeIndex]) {
      subEdges.push(edges[edgeIndex]);
      edgeMap[edgeIndex] = true;
    }
  });
  connectedSubset.edges = subEdges;
  return connectedSubset;
}

// 深度优先遍历算法
function dfs(start, nodes, callback) {
  var listToExplore = [start];
  nodes[start].visited = true;
  callback(start);
  while (listToExplore.length > 0) {
    var nodeIndex = listToExplore.pop();
    nodes[nodeIndex].links.forEach(function (childIndex) {
      if (!nodes[childIndex].visited) {
        nodes[childIndex].visited = true;
        callback(childIndex);
        listToExplore.push(childIndex);
      }
    });
  }
}
module.exports = maxSpanningForest;

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

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview 基于 prim 获取有向图最大生成树 算法
 * https://zh.wikipedia.org/wiki/%E6%99%AE%E6%9E%97%E5%A7%86%E7%AE%97%E6%B3%95
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;


var treeNodes = [];
var treeEdges = [];

function maxSpanningTree(connectedSubset) {
  var nodes = connectedSubset.nodes;
  var edges = connectedSubset.edges;
  var root = connectedSubset.root;
  var nodeMap = {};
  Util.each(nodes, function (node) {
    node.to = [];
    node.from = [];
    nodeMap[node.id] = node;
  });
  Util.each(edges, function (edge) {
    var source = nodeMap[edge.source];
    var target = nodeMap[edge.target];
    source.to.push(edge);
    target.from.push(edge);
  });
  treeNodes = [root];
  treeEdges = [];

  var _loop = function _loop() {
    var maxWeight = -Infinity;
    var maxEdge = void 0;
    var direct = 'target';
    Util.each(treeNodes, function (treeNode) {
      Util.each(treeNode.to, function (edge) {
        if (treeNodes.indexOf(nodeMap[edge[direct]]) === -1) {
          if (edge.weight > maxWeight) {
            maxWeight = edge.weight;
            maxEdge = edge;
          }
        }
      });
    });
    if (!maxEdge) {
      direct = 'source';
      Util.each(treeNodes, function (treeNode) {
        Util.each(treeNode.from, function (edge) {
          if (treeNodes.indexOf(nodeMap[edge[direct]]) === -1) {
            if (edge.weight > maxWeight) {
              maxWeight = edge.weight;
              maxEdge = edge;
            }
          }
        });
      });
    }
    treeNodes.push(nodeMap[maxEdge[direct]]);
    treeEdges.push(maxEdge);
  };

  while (treeNodes.length !== nodes.length) {
    _loop();
  }
  // 清除标记
  Util.each(nodes, function (node) {
    delete node.to;
    delete node.from;
  });
  return {
    nodes: treeNodes,
    edges: treeEdges
  };
}

module.exports = maxSpanningTree;

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


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ })

/******/ });
});