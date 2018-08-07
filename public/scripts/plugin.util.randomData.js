(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("g6-for-react"));
	else if(typeof define === 'function' && define.amd)
		define(["g6-for-react"], factory);
	else if(typeof exports === 'object')
		exports["plugin.util.randomData"] = factory(require("g6-for-react"));
	else
		root["plugin.util.randomData"] = factory(root["ReactG6"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 402);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview 模拟数据生成的工具
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;
var Util = G6.Util;
var randomData = {
  // 生成链式图数据
  createChainData: function createChainData(num) {
    var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var edges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    for (var index = 0; index < num; index++) {
      nodes.push({
        id: index
      });
    }
    nodes.forEach(function (node, index) {
      var next = nodes[index + 1];
      if (next) {
        edges.push({
          source: node.id,
          target: next.id
        });
      }
    });
    return {
      nodes: nodes,
      edges: edges
    };
  },

  // 生成圆数据
  createCyclicData: function createCyclicData(num) {
    var data = randomData.createChainData(num);
    var nodes = data.nodes,
        edges = data.edges;

    var l = nodes.length;
    edges.push({
      source: data.nodes[l - 1].id,
      target: nodes[0].id
    });
    return data;
  },

  // generate num * num nodes withou edges
  createNodesData: function createNodesData(num) {
    var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var edges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    for (var index = 0; index < num * num; index++) {
      nodes.push({
        id: index
      });
    }
    return {
      nodes: nodes,
      edges: edges
    };
  }
};
Util.mix(Util, randomData);

/***/ })

/******/ });
});