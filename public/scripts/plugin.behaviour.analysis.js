(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("g6-for-react"));
	else if(typeof define === 'function' && define.amd)
		define(["g6-for-react"], factory);
	else if(typeof exports === 'object')
		exports["plugin.behaviour.analysis"] = factory(require("g6-for-react"));
	else
		root["plugin.behaviour.analysis"] = factory(root["ReactG6"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 383);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview 拓展分析交互
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(0).G6;

function panCanvas(graph) {
  var button = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';

  var lastPoint = void 0;
  if (button === 'right') {
    graph.behaviourOn('contextmenu', function (ev) {
      ev.domEvent.preventDefault();
    });
  }
  graph.behaviourOn('mousedown', function (ev) {
    if (button === 'left' && ev.domEvent.button === 0 || button === 'right' && ev.domEvent.button === 2) {
      lastPoint = {
        x: ev.domX,
        y: ev.domY
      };
    }
  });
  graph.behaviourOn('canvas:mouseenter', function () {
    graph.css({
      cursor: '-webkit-grab'
    });
  });
  graph.behaviourOn('dragstart', function (ev) {
    graph.css({
      cursor: '-webkit-grabbing'
    });
    if (ev.domEvent.button === button) {
      lastPoint = {
        x: ev.domX,
        y: ev.domY
      };
    }
  });
  graph.behaviourOn('drag', function (ev) {
    if (lastPoint) {
      graph.translate(ev.domX - lastPoint.x, ev.domY - lastPoint.y);
      lastPoint = {
        x: ev.domX,
        y: ev.domY
      };
    }
  });
  graph.behaviourOn('dragend', function () {
    lastPoint = undefined;
    graph.css({
      cursor: '-webkit-grab'
    });
  });
  graph.behaviourOn('canvas:mouseleave', function () {
    lastPoint = undefined;
  });
}

// 鼠标拖拽平移画布交互
G6.registerBehaviour('panCanvas', panCanvas);

// 鼠标右键平移画布交互
G6.registerBehaviour('rightPanCanvas', function (graph) {
  panCanvas(graph, 'right');
});

// 鼠标拖拽平移节点交互
G6.registerBehaviour('panNode', function (graph) {
  var node = void 0;
  var dx = void 0;
  var dy = void 0;
  graph.on('node:dragstart', function (ev) {
    var item = ev.item;

    var model = item.getModel();
    node = item;
    dx = model.x - ev.x;
    dy = model.y - ev.y;
    graph.forcePreventAnimate(true);
  });
  graph.on('node:drag', function (ev) {
    graph.update(node, {
      x: ev.x + dx,
      y: ev.y + dy
    });
  });
  graph.on('node:dragend', function () {
    node = undefined;
    graph.forcePreventAnimate(false);
  });
  graph.on('canvas:mouseleave', function () {
    node = undefined;
    graph.forcePreventAnimate(false);
  });
});

/***/ })

/******/ });
});