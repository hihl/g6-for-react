(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("g6-for-react"));
	else if(typeof define === 'function' && define.amd)
		define(["g6-for-react"], factory);
	else if(typeof exports === 'object')
		exports["plugin.edge.quadraticCurve"] = factory(require("g6-for-react"));
	else
		root["plugin.edge.quadraticCurve"] = factory(root["ReactG6"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 384);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview extend quadraticCurve
 * model configurable:
 * cpd control point distance detail {number} could be 0 ~ 1
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;

G6.registerEdge('quadraticCurve', {
  getPath: function getPath(item) {
    var points = item.getPoints();
    var model = item.getModel();
    var start = points[0];
    var source = item.getSource();
    var target = item.getTarget();
    var end = points[points.length - 1];
    var cpd = !Util.isNil(model.cpd) ? model.cpd : 0.5; // 向量方向长度系数
    var v1 = [(end.x + start.x) * 0.5 - start.x, (end.y + start.y) * 0.5 - start.y];
    var v2 = [-v1[1] * cpd, v1[0] * cpd];

    // 控制点
    var cp = {
      x: v1[0] + v2[0] + start.x,
      y: v1[1] + v2[1] + start.y
    };
    var sp = source.getLinkPoints(cp)[0];
    var tp = target.getLinkPoints(cp)[0];
    return [['M', sp.x, sp.y], ['Q', cp.x, cp.y, tp.x, tp.y]];
  }
});

/***/ })

/******/ });
});