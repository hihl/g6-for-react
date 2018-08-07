(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["g6-for-react"] = factory(require("react"));
	else
		root["g6-for-react"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(41);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(29),
    baseAssignValue = __webpack_require__(30);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _g = __webpack_require__(7);

var _g2 = _interopRequireDefault(_g);

var _util = __webpack_require__(25);

var _util2 = _interopRequireDefault(_util);

var _components = __webpack_require__(56);

var components = _interopRequireWildcard(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactG6 = _util2.default.mix(components, {
  G6: _g2.default,
  Util: _util2.default,
  Shape: _g.Shape,
  track: function track() {
    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _g2.default.Global.track(enable);
  }
});

exports.default = ReactG6;
module.exports = ReactG6;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.G6=e():t.G6=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=511)}([,,,,,,,,,,,,,function(t,e,n){var r={},i=n(182),o=n(209),a=n(32),s=n(150),u=n(208),c=n(207),h=n(203);a.mix(r,a,u,c,s,o,i,h),t.exports=r},,,function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(180),o="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=i||o||Function("return this")();t.exports=a},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var n,r,i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a,s){"object"===o(e)&&"object"===o(t)?t.exports=s():(r=[],void 0===(i="function"==typeof(n=s)?n.apply(e,r):n)||(t.exports=i))}(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=65)}([function(t,e,n){var r=n(7),i=n(26),o={};r.merge(o,r,i,{mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};o.each(e,function(e){o.augment(t,e);var i=e[n];i&&o.merge(r,i)}),t[n]=o.merge(r,t[n])}}}),t.exports=o},function(t,e,n){var r=n(0),i=n(52),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={},r.extend(a,i),r.augment(a,{isShape:!0,createPath:function(){},afterPath:function(){},drawInner:function(t){var e=this.__attrs;this.createPath(t);var n=t.globalAlpha;if(this.hasFill()){var i=e.fillOpacity;r.isNil(i)||1===i?t.fill():(t.globalAlpha=i,t.fill(),t.globalAlpha=n)}if(this.hasStroke()&&this.__attrs.lineWidth>0){var o=e.strokeOpacity;r.isNil(o)||1===o||(t.globalAlpha=o),t.stroke()}this.afterPath(t)},isPointInPath:function(){return!1},isHitBox:function(){return!0},isHit:function(t,e){var n=[t,e,1];if(this.invert(n),this.isHitBox()){var r=this.getBBox();if(r&&!o.box(r.minX,r.maxX,r.minY,r.maxY,n[0],n[1]))return!1}var i=this.__attrs.clip;return i?!!i.inside(t,e)&&this.isPointInPath(n[0],n[1]):this.isPointInPath(n[0],n[1])},calculateBox:function(){return null},getHitLineWidth:function(){var t=this.__attrs,e=t.lineAppendWidth||0;return(t.lineWidth||0)+e},clearTotalMatrix:function(){this.__cfg.totalMatrix=null,this.__cfg.region=null},clearBBox:function(){this.__cfg.box=null,this.__cfg.region=null},getBBox:function(){var t=this.__cfg.box;return t||((t=this.calculateBox())&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this.__cfg.box=t),t}}),t.exports=a},function(t,e,n){var r=n(7),i=n(72),o=n(73),a=n(74);a.angle=function(t,e){var n=a.dot(t,e)/(a.length(t)*a.length(e));return Math.acos(r.clamp(n,-1,1))},a.direction=function(t,e){return t[0]*e[1]-e[0]*t[1]},a.angleTo=function(t,e,n){var r=a.angle(t,e),i=a.direction(t,e)>=0;return n?i?2*Math.PI-r:r:i?r:2*Math.PI-r},a.vertical=function(t,e,n){return n?(t[0]=e[1],t[1]=-1*e[0]):(t[0]=-1*e[1],t[1]=e[0]),t},i.translate=function(t,e,n){var r=new Array(9);return i.fromTranslation(r,n),i.multiply(t,r,e)},i.rotate=function(t,e,n){var r=new Array(9);return i.fromRotation(r,n),i.multiply(t,r,e)},i.scale=function(t,e,n){var r=new Array(9);return i.fromScaling(r,n),i.multiply(t,r,e)},t.exports={mat3:i,vec2:a,vec3:o,transform:function(t,e){return t=r.clone(t),r.each(e,function(e){switch(e[0]){case"t":i.translate(t,t,[e[1],e[2]]);break;case"s":i.scale(t,t,[e[1],e[2]]);break;case"r":i.rotate(t,t,e[1]);break;case"m":i.multiply(t,t,e[1]);break;default:return!1}}),t}}},function(t,e,n){var r=n(20),i=n(21),o=n(10),a=n(22);t.exports={line:function(t,e,n,i,o,a,s){var u=r.box(t,e,n,i,o);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,a,s))return!1;var c=r.pointDistance(t,e,n,i,a,s);return!isNaN(c)&&c<=o/2},polyline:function(t,e,n,r){var i=t.length-1;if(i<1)return!1;for(var o=0;o<i;o++){var a=t[o][0],s=t[o][1],u=t[o+1][0],c=t[o+1][1];if(this.line(a,s,u,c,e,n,r))return!0}return!1},cubicline:function(t,e,n,r,i,a,s,u,c,h,f){return o.pointDistance(t,e,n,r,i,a,s,u,h,f)<=c/2},quadraticline:function(t,e,n,r,o,a,s,u,c){return i.pointDistance(t,e,n,r,o,a,u,c)<=s/2},arcline:function(t,e,n,r,i,o,s,u,c){return a.pointDistance(t,e,n,r,i,o,u,c)<=s/2},rect:function(t,e,n,r,i,o){return t<=i&&i<=t+n&&e<=o&&o<=e+r},circle:function(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2)},box:function(t,e,n,r,i,o){return t<=i&&i<=e&&n<=o&&o<=r}}},function(t,e,n){var r=n(0),i=n(11),o={rect:"rect",circle:"circle",line:"line",path:"path",marker:"marker",text:"text",polygon:"polygon",image:"image",ellipse:"ellipse",dom:"foreignObject",fan:"path"},a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={},r.extend(a,i),r.augment(a,{isShape:!0,createPath:function(){},init:function(t){a.superclass.init.call(this);var e=o[this.type];if(e){var n=document.createElementNS("http://www.w3.org/2000/svg",e);t=t||r.uniqueId(this.type+"_"),n.setAttribute("id",t),this.setSilent("el",n),this.setSilent("id",t)}},isPointInPath:function(){return!1},isHitBox:function(){return!0},isHit:function(){return!1},calculateBox:function(){return null},getHitLineWidth:function(){var t=this.__attrs,e=t.lineAppendWidth||0;return(t.lineWidth||0)+e},clearTotalMatrix:function(){this.__cfg.totalMatrix=null,this.__cfg.region=null},clearBBox:function(){this.__cfg.box=null,this.__cfg.region=null}}),t.exports=a},function(t,e,n){"use strict";var r=n(16);n.d(e,"a",function(){return r.e}),n.d(e,"f",function(){return r.g}),n.d(e,"d",function(){return r.f});var i=n(90);n.d(e,"e",function(){return i.a}),n.d(e,"c",function(){return i.b});var o=n(91);n.d(e,"b",function(){return o.a})},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},i=n(25),a=n(0),s=Math.PI,u=Math.sin,c=Math.cos,h=Math.atan2,f=10,l=s/3;function p(t,e,n,r,i,o){var a=void 0,p=void 0,d=void 0,g=void 0,v=void 0,m=void 0,y=void 0;if(!e.fill){var x=e.arrowLength||f,b=e.arrowAngle?e.arrowAngle*s/180:l;y=h(o-r,i-n),y-=s,v=e.lineWidth*c(y),m=e.lineWidth*u(y),a=i+x*c(y+b/2),p=o+x*u(y+b/2),d=i+x*c(y-b/2),g=o+x*u(y-b/2),t.beginPath(),t.moveTo(a-v,p-m),t.lineTo(i-v,o-m),t.lineTo(d-v,g-m),t.moveTo(i-v,o-m),t.lineTo(i+v,o+m),t.moveTo(i,o),t.stroke()}}function d(t,e,n,r,o,s,u){var c=u.__attrs,h=c.symbol,f=c.x||o,l=c.y||s,p=c.r||e.lineWidth;a.isFunction(h)||(h=i.Symbols[h||"triangle"]);var d=0,g=n-o,v=r-s;0===v?d=g<0?Math.PI/2:270*Math.PI/180:g>=0&&v>0?d=-Math.atan(g/v):g<=0&&v<0?d=Math.PI-Math.atan(g/v):g>0&&v<0?d=Math.PI+Math.atan(-g/v):g<0&&v>0&&(d=Math.atan(g/-v)),t.save(),t.beginPath(),t.translate(f,l),t.rotate(d),t.translate(-f,-l),h(f,l,p,t,u),t.setTransform(1,0,0,1,0,0),t.fillStyle=u.attr("fill")||t.strokeStyle,t.fill(),t.restore()}t.exports={addStartArrow:function(t,e,n,i,o,a){"object"===r(e.startArrow)?d(t,e,n,i,o,a,e.startArrow):e.startArrow&&p(t,e,n,i,o,a)},addEndArrow:function(t,e,n,i,o,a){"object"===r(e.endArrow)?d(t,e,n,i,o,a,e.endArrow):e.endArrow&&p(t,e,n,i,o,a)}}},function(t,e,n){var r=n(68);t.exports={isFunction:r.isFunction,isObject:r.isObject,isBoolean:r.isBoolean,isNil:r.isNil,isString:r.isString,isArray:r.isArray,isNumber:r.isNumber,isEmpty:r.isEmpty,uniqueId:r.uniqueId,clone:r.clone,assign:r.mix,merge:r.deepMix,upperFirst:r.upperFirst,each:r.each,isEqual:r.isEqual,toArray:r.toArray,extend:r.extend,augment:r.augment,remove:r.arrayUtil.pull,isNumberEqual:r.isNumberEqual,toRadian:r.toRadian,toDegree:r.toDegree,mod:r.mod,clamp:r.clamp}},function(t,e,n){"use strict";e.c=function(t,e){var n=e-t;return n?i(t,n>180||n<-180?n-360*Math.round(n/360):n):Object(r.a)(isNaN(t)?e:t)},e.b=function(t){return 1==(t=+t)?o:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):Object(r.a)(isNaN(e)?n:e)}},e.a=o;var r=n(33);function i(t,e){return function(n){return t+n*e}}function o(t,e){var n=e-t;return n?i(t,n):Object(r.a)(isNaN(t)?e:t)}},function(t,e,n){"use strict";e.a=function(t,e){return e-=t=+t,function(n){return t+e*n}}},function(t,e,n){var r=n(0),i=n(2).vec2;function o(t,e,n,r,i){var o=1-i;return o*o*(o*r+3*i*n)+i*i*(i*t+3*o*e)}function a(t,e,n,r,a,s,u,c,h,f,l){var p=void 0,d=.005,g=1/0,v=void 0,m=void 0,y=void 0,x=void 0,b=void 0,_=void 0,w=void 0,M=[h,f];for(v=0;v<1;v+=.05)m=[o(t,n,a,u,v),o(e,r,s,c,v)],(y=i.squaredDistance(M,m))<g&&(p=v,g=y);g=1/0;for(var S=0;S<32&&!(d<1e-4);S++)w=p+d,m=[o(t,n,a,u,_=p-d),o(e,r,s,c,_)],y=i.squaredDistance(M,m),_>=0&&y<g?(p=_,g=y):(b=[o(t,n,a,u,w),o(e,r,s,c,w)],x=i.squaredDistance(M,b),w<=1&&x<g?(p=w,g=x):d*=.5);return l&&(l.x=o(t,n,a,u,p),l.y=o(e,r,s,c,p)),Math.sqrt(g)}function s(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n}t.exports={at:o,derivativeAt:function(t,e,n,r,i){var o=1-i;return 3*(((e-t)*o+2*(n-e)*i)*o+(r-n)*i*i)},projectPoint:function(t,e,n,r,i,o,s,u,c,h){var f={};return a(t,e,n,r,i,o,s,u,c,h,f),f},pointDistance:a,extrema:function(t,e,n,i){var o=3*t-9*e+9*n-3*i,a=6*e-12*n+6*i,s=3*n-3*i,u=[],c=void 0,h=void 0,f=void 0;if(r.isNumberEqual(o,0))r.isNumberEqual(a,0)||(c=-s/a)>=0&&c<=1&&u.push(c);else{var l=a*a-4*o*s;r.isNumberEqual(l,0)?u.push(-a/(2*o)):l>0&&(h=(-a-(f=Math.sqrt(l)))/(2*o),(c=(-a+f)/(2*o))>=0&&c<=1&&u.push(c),h>=0&&h<=1&&u.push(h))}return u},len:function(t,e,n,i,o,a,u,c,h){r.isNil(h)&&(h=1);for(var f=(h=h>1?1:h<0?0:h)/2,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<12;g++){var v=f*l[g]+f,m=s(v,t,n,o,u),y=s(v,e,i,a,c),x=m*m+y*y;d+=p[g]*Math.sqrt(x)}return f*d}}},function(t,e,n){var r=n(0),i=n(70),o=n(71),a=n(29),s=n(38),u=function(t){this.__cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this.__cfg,this.getDefaultCfg(),t),this.init(t?t.id:null),this.initAttrs(this.__cfg.attrs),this.initTransform()};u.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(u,i,o,s,a,{init:function(){this.setSilent("animable",!0),this.setSilent("animating",!1)},getParent:function(){return this.get("parent")},getDefaultCfg:function(){return{}},set:function(t,e){return"zIndex"===t&&this._beforeSetZIndex(e),this.__cfg[t]=e,this},setSilent:function(t,e){this.__cfg[t]=e},get:function(t){return this.__cfg[t]},draw:function(){},drawInner:function(){},show:function(){this.set("visible",!0);var t=this.get("el");return t&&t.setAttribute("visibility","visible"),this},hide:function(){this.set("visible",!1);var t=this.get("el");return t&&t.setAttribute("visibility","hidden"),this},remove:function(t){var e=this.get("el");if(void 0===t&&(t=!0),this.get("parent")){var n=this.get("parent").get("children");r.remove(n,this),e.parentNode.removeChild(e)}return t&&this.destroy(),this},destroy:function(){if(!this.get("destroyed")){if(this.get("animating")){var t=this.get("animateTimer");t&&t.stop()}this.__cfg={},this.__attrs=null,this.removeEvent(),this.set("destroyed",!0)}},_beforeSetZIndex:function(t){return this.__cfg.zIndex=t,r.isNil(this.get("parent"))||this.get("parent").sort(),t},_setAttrs:function(t){return this.attr(t),t},setZIndex:function(t){return this.__cfg.zIndex=t,t},clone:function(){return r.clone(this)},getBBox:function(){var t=this.get("el");if(!t)return{minX:0,minY:0,maxX:0,maxY:0,width:0,height:0,x:0,y:0};var e=t.getBBox();if(!t.parentNode||0===e.width&&0===e.height){var n=t.cloneNode();n.innerHTML=t.innerHTML,n.setAttribute("visible","hidden");var r=document.getElementsByTagName("svg")[0];r.appendChild(n),e=n.getBBox(),r.removeChild(n)}return e.minX=e.x,e.minY=e.y,e.maxX=e.x+e.width,e.maxY=e.y+e.height,{minX:e.x,minY:e.y,maxX:e.x+e.width,maxY:e.y+e.height,width:e.width,height:e.height,x:e.x,y:e.y}}}),t.exports=u},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o});var r=1e-6,i="undefined"!=typeof Float32Array?Float32Array:Array,o=Math.random;Math.PI},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},i=n(7),a="\t\n\v\f\r   ᠎             　\u2028\u2029",s=new RegExp("([a-z])["+a+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+a+"]*,?["+a+"]*)+)","ig"),u=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+a+"]*,?["+a+"]*","ig"),c=function(t){if(!t)return null;if((void 0===t?"undefined":r(t))===r([]))return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(s,function(t,r,i){var o=[],a=r.toLowerCase();if(i.replace(u,function(t,e){e&&o.push(+e)}),"m"===a&&o.length>2&&(n.push([r].concat(o.splice(0,2))),a="l",r="m"===r?"l":"L"),"o"===a&&1===o.length&&n.push([r,o[0]]),"r"===a)n.push([r].concat(o));else for(;o.length>=e[a]&&(n.push([r].concat(o.splice(0,e[a]))),e[a]););}),n},h=function(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var o=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?o[3]={x:+t[0],y:+t[1]}:i-2===r&&(o[2]={x:+t[0],y:+t[1]},o[3]={x:+t[2],y:+t[3]}):o[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?o[3]=o[2]:r||(o[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-o[0].x+6*o[1].x+o[2].x)/6,(-o[0].y+6*o[1].y+o[2].y)/6,(o[1].x+6*o[2].x-o[3].x)/6,(o[1].y+6*o[2].y-o[3].y)/6,o[2].x,o[2].y])}return n},f=function(t,e,n,r,i){var o=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var a=Math.PI/180,s=t+n*Math.cos(-r*a),u=t+n*Math.cos(-i*a);o=[["M",s,e+n*Math.sin(-r*a)],["A",n,n,0,+(i-r>180),0,u,e+n*Math.sin(-i*a)]]}else o=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return o},l=function(t){if(!(t=c(t))||!t.length)return[["M",0,0]];var e=[],n=0,r=0,i=0,o=0,a=0,s=void 0,u=void 0;"M"===t[0][0]&&(i=n=+t[0][1],o=r=+t[0][2],a++,e[0]=["M",n,r]);for(var l,p,d=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=a,v=t.length;g<v;g++){if(e.push(l=[]),(s=(p=t[g])[0])!==s.toUpperCase())switch(l[0]=s.toUpperCase(),l[0]){case"A":l[1]=p[1],l[2]=p[2],l[3]=p[3],l[4]=p[4],l[5]=p[5],l[6]=+p[6]+n,l[7]=+p[7]+r;break;case"V":l[1]=+p[1]+r;break;case"H":l[1]=+p[1]+n;break;case"R":for(var m=2,y=(u=[n,r].concat(p.slice(1))).length;m<y;m++)u[m]=+u[m]+n,u[++m]=+u[m]+r;e.pop(),e=e.concat(h(u,d));break;case"O":e.pop(),(u=f(n,r,p[1],p[2])).push(u[0]),e=e.concat(u);break;case"U":e.pop(),e=e.concat(f(n,r,p[1],p[2],p[3])),l=["U"].concat(e[e.length-1].slice(-2));break;case"M":i=+p[1]+n,o=+p[2]+r;break;default:for(var x=1,b=p.length;x<b;x++)l[x]=+p[x]+(x%2?n:r)}else if("R"===s)u=[n,r].concat(p.slice(1)),e.pop(),e=e.concat(h(u,d)),l=["R"].concat(p.slice(-2));else if("O"===s)e.pop(),(u=f(n,r,p[1],p[2])).push(u[0]),e=e.concat(u);else if("U"===s)e.pop(),e=e.concat(f(n,r,p[1],p[2],p[3])),l=["U"].concat(e[e.length-1].slice(-2));else for(var _=0,w=p.length;_<w;_++)l[_]=p[_];if("O"!==(s=s.toUpperCase()))switch(l[0]){case"Z":n=+i,r=+o;break;case"H":n=l[1];break;case"V":r=l[1];break;case"M":i=l[l.length-2],o=l[l.length-1];break;default:n=l[l.length-2],r=l[l.length-1]}}return e},p=function(t,e,n,r){return[t,e,n,r,n,r]},d=function(t,e,n,r,i,o){return[1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*o+2/3*r,i,o]},g=function(t,e){var n=l(t),r=e&&l(e),i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a=[],s=[],u="",c="",h=void 0,f=function(t,e,n){var r=void 0,i=void 0;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,o,a,s,u,c,h){r===i&&(r+=1);var f=120*Math.PI/180,l=Math.PI/180*(+o||0),p=[],d=void 0,g=void 0,v=void 0,m=void 0,y=void 0,x=function(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}};if(h)g=h[0],v=h[1],m=h[2],y=h[3];else{e=(d=x(e,n,-l)).x,n=d.y,u=(d=x(u,c,-l)).x,c=d.y,e===u&&n===c&&(u+=1,c+=1);var b=(e-u)/2,_=(n-c)/2,w=b*b/(r*r)+_*_/(i*i);w>1&&(r*=w=Math.sqrt(w),i*=w);var M=r*r,S=i*i,A=(a===s?-1:1)*Math.sqrt(Math.abs((M*S-M*_*_-S*b*b)/(M*_*_+S*b*b)));m=A*r*_/i+(e+u)/2,y=A*-i*b/r+(n+c)/2,g=Math.asin(((n-y)/i).toFixed(9)),v=Math.asin(((c-y)/i).toFixed(9)),g=e<m?Math.PI-g:g,v=u<m?Math.PI-v:v,g<0&&(g=2*Math.PI+g),v<0&&(v=2*Math.PI+v),s&&g>v&&(g-=2*Math.PI),!s&&v>g&&(v-=2*Math.PI)}var E=v-g;if(Math.abs(E)>f){var P=v,O=u,j=c;v=g+f*(s&&v>g?1:-1),p=t(u=m+r*Math.cos(v),c=y+i*Math.sin(v),r,i,o,0,s,O,j,[v,P,m,y])}E=v-g;var I=Math.cos(g),C=Math.sin(g),k=Math.cos(v),T=Math.sin(v),F=Math.tan(E/4),B=4/3*r*F,N=4/3*i*F,L=[e,n],D=[e+B*C,n-N*I],R=[u+B*T,c-N*k],Y=[u,c];if(D[0]=2*L[0]-D[0],D[1]=2*L[1]-D[1],h)return[D,R,Y].concat(p);for(var X=[],G=0,H=(p=[D,R,Y].concat(p).join().split(",")).length;G<H;G++)X[G]=G%2?x(p[G-1],p[G],l).y:x(p[G],p[G+1],l).x;return X}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(d(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(d(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(p(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(p(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(p(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(p(e.x,e.y,e.X,e.Y))}return t},g=function(t,e){if(t[e].length>7){t[e].shift();for(var i=t[e];i.length;)a[e]="A",r&&(s[e]="A"),t.splice(e++,0,["C"].concat(i.splice(0,6)));t.splice(e,1),h=Math.max(n.length,r&&r.length||0)}},v=function(t,e,i,o,a){t&&e&&"M"===t[a][0]&&"M"!==e[a][0]&&(e.splice(a,0,["M",o.x,o.y]),i.bx=0,i.by=0,i.x=t[a][1],i.y=t[a][2],h=Math.max(n.length,r&&r.length||0))};h=Math.max(n.length,r&&r.length||0);for(var m=0;m<h;m++){n[m]&&(u=n[m][0]),"C"!==u&&(a[m]=u,m&&(c=a[m-1])),n[m]=f(n[m],i,c),"A"!==a[m]&&"C"===u&&(a[m]="C"),g(n,m),r&&(r[m]&&(u=r[m][0]),"C"!==u&&(s[m]=u,m&&(c=s[m-1])),r[m]=f(r[m],o,c),"A"!==s[m]&&"C"===u&&(s[m]="C"),g(r,m)),v(n,r,i,o,m),v(r,n,o,i,m);var y=n[m],x=r&&r[m],b=y.length,_=r&&x.length;i.x=y[b-2],i.y=y[b-1],i.bx=parseFloat(y[b-4])||i.x,i.by=parseFloat(y[b-3])||i.y,o.bx=r&&(parseFloat(x[_-4])||o.x),o.by=r&&(parseFloat(x[_-3])||o.y),o.x=r&&x[_-2],o.y=r&&x[_-1]}return r?[n,r]:n},v=/,?([a-z]),?/gi,m=function(t){return t.join(",").replace(v,"$1")},y=function(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n},x=function(t,e,n,r,i,o,a,s,u){null===u&&(u=1);for(var c=(u=u>1?1:u<0?0:u)/2,h=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],f=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],l=0,p=0;p<12;p++){var d=c*h[p]+c,g=y(d,t,n,i,a),v=y(d,e,r,o,s),m=g*g+v*v;l+=f[p]*Math.sqrt(m)}return c*l},b=function(t,e,n,r,i,o,a,s){if(!(Math.max(t,n)<Math.min(i,a)||Math.min(t,n)>Math.max(i,a)||Math.max(e,r)<Math.min(o,s)||Math.min(e,r)>Math.max(o,s))){var u=(t-n)*(o-s)-(e-r)*(i-a);if(u){var c=((t*r-e*n)*(i-a)-(t-n)*(i*s-o*a))/u,h=((t*r-e*n)*(o-s)-(e-r)*(i*s-o*a))/u,f=+c.toFixed(2),l=+h.toFixed(2);if(!(f<+Math.min(t,n).toFixed(2)||f>+Math.max(t,n).toFixed(2)||f<+Math.min(i,a).toFixed(2)||f>+Math.max(i,a).toFixed(2)||l<+Math.min(e,r).toFixed(2)||l>+Math.max(e,r).toFixed(2)||l<+Math.min(o,s).toFixed(2)||l>+Math.max(o,s).toFixed(2)))return{x:c,y:h}}}},_=function(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height},w=function(t,e,n,r,i){if(i)return[["M",+t+ +i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]];var o=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return o.parsePathArray=m,o},M=function(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:w(t,e,n,r),vb:[t,e,n,r].join(" ")}},S=function(t,e,n,r,o,a,s,u){i.isArray(t)||(t=[t,e,n,r,o,a,s,u]);var c=function(t,e,n,r,i,o,a,s){for(var u=[],c=[[],[]],h=void 0,f=void 0,l=void 0,p=void 0,d=0;d<2;++d)if(0===d?(f=6*t-12*n+6*i,h=-3*t+9*n-9*i+3*a,l=3*n-3*t):(f=6*e-12*r+6*o,h=-3*e+9*r-9*o+3*s,l=3*r-3*e),Math.abs(h)<1e-12){if(Math.abs(f)<1e-12)continue;(p=-l/f)>0&&p<1&&u.push(p)}else{var g=f*f-4*l*h,v=Math.sqrt(g);if(!(g<0)){var m=(-f+v)/(2*h);m>0&&m<1&&u.push(m);var y=(-f-v)/(2*h);y>0&&y<1&&u.push(y)}}for(var x=u.length,b=x,_=void 0;x--;)_=1-(p=u[x]),c[0][x]=_*_*_*t+3*_*_*p*n+3*_*p*p*i+p*p*p*a,c[1][x]=_*_*_*e+3*_*_*p*r+3*_*p*p*o+p*p*p*s;return c[0][b]=t,c[1][b]=e,c[0][b+1]=a,c[1][b+1]=s,c[0].length=c[1].length=b+2,{min:{x:Math.min.apply(0,c[0]),y:Math.min.apply(0,c[1])},max:{x:Math.max.apply(0,c[0]),y:Math.max.apply(0,c[1])}}}.apply(null,t);return M(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y)},A=function(t,e,n,r,i,o,a,s,u){var c=1-u,h=Math.pow(c,3),f=Math.pow(c,2),l=u*u,p=l*u,d=t+2*u*(n-t)+l*(i-2*n+t),g=e+2*u*(r-e)+l*(o-2*r+e),v=n+2*u*(i-n)+l*(a-2*i+n),m=r+2*u*(o-r)+l*(s-2*o+r);return{x:h*t+3*f*u*n+3*c*u*u*i+p*a,y:h*e+3*f*u*r+3*c*u*u*o+p*s,m:{x:d,y:g},n:{x:v,y:m},start:{x:c*t+u*n,y:c*e+u*r},end:{x:c*i+u*a,y:c*o+u*s},alpha:90-180*Math.atan2(d-v,g-m)/Math.PI}},E=function(t,e,n){if(!function(t,e){return t=M(t),e=M(e),_(e,t.x,t.y)||_(e,t.x2,t.y)||_(e,t.x,t.y2)||_(e,t.x2,t.y2)||_(t,e.x,e.y)||_(t,e.x2,e.y)||_(t,e.x,e.y2)||_(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)}(S(t),S(e)))return n?0:[];for(var r=~~(x.apply(0,t)/8),i=~~(x.apply(0,e)/8),o=[],a=[],s={},u=n?0:[],c=0;c<r+1;c++){var h=A.apply(0,t.concat(c/r));o.push({x:h.x,y:h.y,t:c/r})}for(var f=0;f<i+1;f++){var l=A.apply(0,e.concat(f/i));a.push({x:l.x,y:l.y,t:f/i})}for(var p=0;p<r;p++)for(var d=0;d<i;d++){var g=o[p],v=o[p+1],m=a[d],y=a[d+1],w=Math.abs(v.x-g.x)<.001?"y":"x",E=Math.abs(y.x-m.x)<.001?"y":"x",P=b(g.x,g.y,v.x,v.y,m.x,m.y,y.x,y.y);if(P){if(s[P.x.toFixed(4)]===P.y.toFixed(4))continue;s[P.x.toFixed(4)]=P.y.toFixed(4);var O=g.t+Math.abs((P[w]-g[w])/(v[w]-g[w]))*(v.t-g.t),j=m.t+Math.abs((P[E]-m[E])/(y[E]-m[E]))*(y.t-m.t);O>=0&&O<=1&&j>=0&&j<=1&&(n?u++:u.push({x:P.x,y:P.y,t1:O,t2:j}))}}return u};t.exports={parsePathString:c,parsePathArray:m,pathTocurve:g,pathToAbsolute:l,catmullRomToBezier:h,rectPath:w,intersection:function(t,e){return function(t,e,n){t=g(t),e=g(e);for(var r=void 0,i=void 0,o=void 0,a=void 0,s=void 0,u=void 0,c=void 0,h=void 0,f=void 0,l=void 0,p=n?0:[],d=0,v=t.length;d<v;d++){var m=t[d];if("M"===m[0])r=s=m[1],i=u=m[2];else{"C"===m[0]?(r=(f=[r,i].concat(m.slice(1)))[6],i=f[7]):(f=[r,i,r,i,s,u,s,u],r=s,i=u);for(var y=0,x=e.length;y<x;y++){var b=e[y];if("M"===b[0])o=c=b[1],a=h=b[2];else{"C"===b[0]?(o=(l=[o,a].concat(b.slice(1)))[6],a=l[7]):(l=[o,a,o,a,c,h,c,h],o=c,a=h);var _=E(f,l,n);if(n)p+=_;else{for(var w=0,M=_.length;w<M;w++)_[w].segment1=d,_[w].segment2=y,_[w].bez1=f,_[w].bez2=l;p=p.concat(_)}}}}}return p}(t,e)}}},function(t,e,n){"use strict";e.b=v,e.a=y,e.c=x,e.d=b;var r,i,a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},s=0,u=0,c=0,h=1e3,f=0,l=0,p=0,d="object"===("undefined"==typeof performance?"undefined":a(performance))&&performance.now?performance:Date,g="object"===("undefined"==typeof window?"undefined":a(window))&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function v(){return l||(g(m),l=d.now()+p)}function m(){l=0}function y(){this._call=this._time=this._next=null}function x(t,e,n){var r=new y;return r.restart(t,e,n),r}function b(){v(),++s;for(var t,e=r;e;)(t=l-e._time)>=0&&e._call.call(null,t),e=e._next;--s}function _(){l=(f=d.now())+p,s=u=0;try{b()}finally{s=0,function(){var t,e,n=r,o=1/0;for(;n;)n._call?(o>n._time&&(o=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:r=e);i=t,M(o)}(),l=0}}function w(){var t=d.now(),e=t-f;e>h&&(p-=e,f=t)}function M(t){s||(u&&(u=clearTimeout(u)),t-l>24?(t<1/0&&(u=setTimeout(_,t-d.now()-p)),c&&(c=clearInterval(c))):(c||(f=d.now(),c=setInterval(w,h)),s=1,g(_)))}y.prototype=x.prototype={constructor:y,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?v():+n)+(null==e?0:+e),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=n,M()},stop:function(){this._call&&(this._call=null,this._time=1/0,M())}}},function(t,e,n){"use strict";var r=n(5),i=n(31),a=n(34),s=n(35),u=n(9),c=n(36),h=n(37),f=n(33),l="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)};e.a=function(t,e){var n,o=void 0===e?"undefined":l(e);return null==e||"boolean"===o?Object(f.a)(e):("number"===o?u.a:"string"===o?(n=Object(r.a)(e))?(e=n,i.a):h.a:e instanceof r.a?i.a:e instanceof Date?s.a:Array.isArray(e)?a.a:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?c.a:u.a)(t,e)}},function(t,e,n){"use strict";e.a=i,n.d(e,"d",function(){return o}),n.d(e,"c",function(){return a}),e.e=x,e.h=w,e.g=M,e.b=S,e.f=E;var r=n(17);function i(){}var o=.7,a=1/o,s="\\s*([+-]?\\d+)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",h=/^#([0-9a-f]{3})$/,f=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),p=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),d=new RegExp("^rgba\\("+[s,s,s,u]+"\\)$"),g=new RegExp("^rgba\\("+[c,c,c,u]+"\\)$"),v=new RegExp("^hsl\\("+[u,c,c]+"\\)$"),m=new RegExp("^hsla\\("+[u,c,c,u]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function x(t){var e;return t=(t+"").trim().toLowerCase(),(e=h.exec(t))?new S((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=f.exec(t))?b(parseInt(e[1],16)):(e=l.exec(t))?new S(e[1],e[2],e[3],1):(e=p.exec(t))?new S(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=d.exec(t))?_(e[1],e[2],e[3],e[4]):(e=g.exec(t))?_(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=v.exec(t))?A(e[1],e[2]/100,e[3]/100,1):(e=m.exec(t))?A(e[1],e[2]/100,e[3]/100,e[4]):y.hasOwnProperty(t)?b(y[t]):"transparent"===t?new S(NaN,NaN,NaN,0):null}function b(t){return new S(t>>16&255,t>>8&255,255&t,1)}function _(t,e,n,r){return r<=0&&(t=e=n=NaN),new S(t,e,n,r)}function w(t){return t instanceof i||(t=x(t)),t?new S((t=t.rgb()).r,t.g,t.b,t.opacity):new S}function M(t,e,n,r){return 1===arguments.length?w(t):new S(t,e,n,null==r?1:r)}function S(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function A(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new P(t,e,n,r)}function E(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof P)return new P(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=x(t)),!t)return new P;if(t instanceof P)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),a=Math.max(e,n,r),s=NaN,u=a-o,c=(a+o)/2;return u?(s=e===a?(n-r)/u+6*(n<r):n===a?(r-e)/u+2:(e-n)/u+4,u/=c<.5?a+o:2-a-o,s*=60):u=c>0&&c<1?0:s,new P(s,u,c,t.opacity)}(t):new P(t,e,n,null==r?1:r)}function P(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function O(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}Object(r.a)(i,x,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Object(r.a)(S,M,Object(r.b)(i,{brighter:function(t){return t=null==t?a:Math.pow(a,t),new S(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?o:Math.pow(o,t),new S(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Object(r.a)(P,E,Object(r.b)(i,{brighter:function(t){return t=null==t?a:Math.pow(a,t),new P(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?o:Math.pow(o,t),new P(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new S(O(t>=240?t-240:t+120,i,r),O(t,i,r),O(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}))},function(t,e,n){"use strict";e.b=function(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n},e.a=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t}},function(t,e,n){"use strict";function r(t,e,n,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6}e.a=r,e.b=function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),o=t[i],a=t[i+1],s=i>0?t[i-1]:2*o-a,u=i<e-1?t[i+2]:2*a-o;return r((n-i/e)*e,s,o,a,u)}}},function(t,e,n){var r=n(0),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,o=/[^\s\,]+/gi,a=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,s=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,u=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,c=/[\d.]+:(#[^\s]+|[^\)]+\))/gi,h={};function f(t,e){var n=t.match(c);r.each(n,function(t){t=t.split(":"),e.addColorStop(t[0],t[1])})}t.exports={parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(o))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i}r.each(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0},parseStyle:function(t,e){if(r.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return function(t,e){var n=a.exec(t),i=r.mod(r.toRadian(parseFloat(n[1])),2*Math.PI),o=n[2],s=e.getBBox(),u=void 0,c=void 0;i>=0&&i<.5*Math.PI?(u={x:s.minX,y:s.minY},c={x:s.maxX,y:s.maxY}):.5*Math.PI<=i&&i<Math.PI?(u={x:s.maxX,y:s.minY},c={x:s.minX,y:s.maxY}):Math.PI<=i&&i<1.5*Math.PI?(u={x:s.maxX,y:s.maxY},c={x:s.minX,y:s.minY}):(u={x:s.minX,y:s.maxY},c={x:s.maxX,y:s.minY});var h=Math.tan(i),l=h*h,p=(c.x-u.x+h*(c.y-u.y))/(l+1)+u.x,d=h*(c.x-u.x+h*(c.y-u.y))/(l+1)+u.y,g=e.get("context").createLinearGradient(u.x,u.y,p,d);return f(o,g),g}(t,e);if("r"===t[0])return function(t,e){var n=s.exec(t),r=parseFloat(n[1]),i=parseFloat(n[2]),o=parseFloat(n[3]),a=n[4];if(0===o){var u=a.match(c);return u[u.length-1].split(":")[1]}var h=e.getBBox(),l=e.get("context"),p=h.maxX-h.minX,d=h.maxY-h.minY,g=Math.sqrt(p*p+d*d)/2,v=l.createRadialGradient(h.minX+p*r,h.minY+d*i,o*g,h.minX+p/2,h.minY+d/2,g);return f(a,v),v}(t,e);if("p"===t[0])return function(t,e){if(e.get("patternSource")&&e.get("patternSource")===t)return e.get("pattern");var n=void 0,r=void 0,i=u.exec(t),o=i[1],a=i[2];function s(){var i=e.get("context");n=i.createPattern(r,o),e.setSilent("pattern",n),e.setSilent("patternSource",t)}switch(o){case"a":o="repeat";break;case"x":o="repeat-x";break;case"y":o="repeat-y";break;case"n":o="no-repeat";break;default:o="no-repeat"}return r=new Image,a.match(/^data:/i)||(r.crossOrigin="Anonymous"),r.src=a,r.complete?s():(r.onload=s,r.src=r.src),n}(t,e)}return t}},numberToColor:function(t){var e=h[t];if(!e){for(var n=t.toString(16),r=n.length;r<6;r++)n="0"+n;e="#"+n,h[t]=e}return e}}},function(t,e,n){var r=n(2).vec2;t.exports={at:function(t,e,n){return(e-t)*n+t},pointDistance:function(t,e,n,i,o,a){var s=[n-t,i-e];if(r.exactEquals(s,[0,0]))return NaN;var u=[-s[1],s[0]];r.normalize(u,u);var c=[o-t,a-e];return Math.abs(r.dot(c,u))},box:function(t,e,n,r,i){var o=i/2,a=Math.min(t,n),s=Math.max(t,n);return{minX:a-o,minY:Math.min(e,r)-o,maxX:s+o,maxY:Math.max(e,r)+o}},len:function(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e))}}},function(t,e,n){var r=n(0),i=n(2).vec2;function o(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n}function a(t,e,n,r,a,s,u,c,h){var f=void 0,l=.005,p=1/0,d=void 0,g=void 0,v=void 0,m=void 0,y=void 0,x=void 0,b=[u,c];for(m=0;m<1;m+=.05)g=[o(t,n,a,m),o(e,r,s,m)],(d=i.squaredDistance(b,g))<p&&(f=m,p=d);for(p=1/0,x=0;x<32&&!(l<1e-4);x++){var _=f-l,w=f+l;g=[o(t,n,a,_),o(e,r,s,_)],d=i.squaredDistance(b,g),_>=0&&d<p?(f=_,p=d):(v=[o(t,n,a,w),o(e,r,s,w)],y=i.squaredDistance(b,v),w<=1&&y<p?(f=w,p=y):l*=.5)}return h&&(h.x=o(t,n,a,f),h.y=o(e,r,s,f)),Math.sqrt(p)}t.exports={at:o,projectPoint:function(t,e,n,r,i,o,s,u){var c={};return a(t,e,n,r,i,o,s,u,c),c},pointDistance:a,extrema:function(t,e,n){var i=t+n-2*e;if(r.isNumberEqual(i,0))return[.5];var o=(t-e)/i;return o<=1&&o>=0?[o]:[]}}},function(t,e,n){var r=n(0),i=n(2).vec2;function o(t,e,n,r){return{x:Math.cos(r)*n+t,y:Math.sin(r)*n+e}}function a(t,e,n,r){var i=void 0,o=void 0;return r?t<e?(i=e-t,o=2*Math.PI-n+t):t>n&&(i=2*Math.PI-t+e,o=t-n):(i=t-e,o=n-t),i>o?n:e}function s(t,e,n,i){var o=0;return n-e>=2*Math.PI&&(o=2*Math.PI),e=r.mod(e,2*Math.PI),n=r.mod(n,2*Math.PI)+o,t=r.mod(t,2*Math.PI),i?e>=n?t>n&&t<e?t:a(t,n,e,!0):t<e||t>n?t:a(t,e,n):e<=n?e<t&&t<n?t:a(t,e,n,!0):t>e||t<n?t:a(t,n,e)}function u(t,e,n,r,o,a,u,c,h){var f=[u,c],l=[t,e],p=i.subtract([],f,l),d=i.angleTo([1,0],p);d=s(d,r,o,a);var g=[n*Math.cos(d)+t,n*Math.sin(d)+e];return h&&(h.x=g[0],h.y=g[1]),i.distance(g,f)}t.exports={nearAngle:s,projectPoint:function(t,e,n,r,i,o,a,s){var c={};return u(t,e,n,r,i,o,a,s,c),c},pointDistance:u,box:function(t,e,n,i,a,u){var c=Math.PI/2,h=Math.PI,f=3*Math.PI/2,l=[],p=s(0,i,a,u);0===p&&l.push(o(t,e,n,0)),(p=s(c,i,a,u))===c&&l.push(o(t,e,n,c)),(p=s(h,i,a,u))===h&&l.push(o(t,e,n,h)),(p=s(f,i,a,u))===f&&l.push(o(t,e,n,f)),l.push(o(t,e,n,i)),l.push(o(t,e,n,a));var d=1/0,g=-1/0,v=1/0,m=-1/0;return r.each(l,function(t){d>t.x&&(d=t.x),g<t.x&&(g=t.x),v>t.y&&(v=t.y),m<t.y&&(m=t.y)}),{minX:d,minY:v,maxX:g,maxY:m}}}},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return{lineWidth:1,radius:0}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.width,i=t.height,o=this.getHitLineWidth()/2;return{minX:e-o,minY:n-o,maxX:e+r+o,maxY:n+i+o}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.get("context");return!!n&&(this.createPath(),n.isPointInPath(t,e))},_isPointInStroke:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.width,s=n.height,u=n.radius,c=this.getHitLineWidth();if(0===u){var h=c/2;return o.line(r-h,i,r+a+h,i,c,t,e)||o.line(r+a,i-h,r+a,i+s+h,c,t,e)||o.line(r+a+h,i+s,r-h,i+s,c,t,e)||o.line(r,i+s+h,r,i-h,c,t,e)}return o.line(r+u,i,r+a-u,i,c,t,e)||o.line(r+a,i+u,r+a,i+s-u,c,t,e)||o.line(r+a-u,i+s,r+u,i+s,c,t,e)||o.line(r,i+s-u,r,i+u,c,t,e)||o.arcline(r+a-u,i+u,u,1.5*Math.PI,2*Math.PI,!1,c,t,e)||o.arcline(r+a-u,i+s-u,u,0,.5*Math.PI,!1,c,t,e)||o.arcline(r+u,i+s-u,u,.5*Math.PI,Math.PI,!1,c,t,e)||o.arcline(r+u,i+u,u,Math.PI,1.5*Math.PI,!1,c,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.width,o=e.height,a=e.radius;(t=t||this.get("context")).beginPath(),0===a?t.rect(n,r,i,o):(t.moveTo(n+a,r),t.lineTo(n+i-a,r),t.arc(n+i-a,r+a,a,-Math.PI/2,0,!1),t.lineTo(n+i,r+o-a),t.arc(n+i-a,r+o-a,a,0,Math.PI/2,!1),t.lineTo(n+a,r+o),t.arc(n+a,r+o-a,a,Math.PI/2,Math.PI,!1),t.lineTo(n,r+a),t.arc(n+a,r+a,a,Math.PI,3*Math.PI/2,!1),t.closePath())}}),t.exports=a},function(t,e,n){var r=n(0),i=n(3),o=n(10),a=n(21),s=n(113),u=n(2).vec3,c=n(2).mat3,h=["m","l","c","a","q","h","v","t","s","z"];function f(t,e,n){return{x:n.x+t,y:n.y+e}}function l(t,e){return{x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)}}function p(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function d(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(function(t,e){return(t[0]*e[0]+t[1]*e[1])/(p(t)*p(e))}(t,e))}var g=function(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e)};r.augment(g,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var i=h.indexOf(n)>=0,o=i?n.toUpperCase():n,a=t,s=void 0,u=void 0,c=void 0,p=void 0,g=e.endPoint,v=a[1],m=a[2];switch(o){default:break;case"M":p=i?f(v,m,g):{x:v,y:m},this.command="M",this.params=[g,p],this.subStart=p,this.endPoint=p;break;case"L":p=i?f(v,m,g):{x:v,y:m},this.command="L",this.params=[g,p],this.subStart=e.subStart,this.endPoint=p,this.endTangent=function(){return[p.x-g.x,p.y-g.y]},this.startTangent=function(){return[g.x-p.x,g.y-p.y]};break;case"H":p=i?f(v,0,g):{x:v,y:g.y},this.command="L",this.params=[g,p],this.subStart=e.subStart,this.endPoint=p,this.endTangent=function(){return[p.x-g.x,p.y-g.y]},this.startTangent=function(){return[g.x-p.x,g.y-p.y]};break;case"V":p=i?f(0,v,g):{x:g.x,y:v},this.command="L",this.params=[g,p],this.subStart=e.subStart,this.endPoint=p,this.endTangent=function(){return[p.x-g.x,p.y-g.y]},this.startTangent=function(){return[g.x-p.x,g.y-p.y]};break;case"Q":i?(s=f(v,m,g),u=f(a[3],a[4],g)):(s={x:v,y:m},u={x:a[3],y:a[4]}),this.command="Q",this.params=[g,s,u],this.subStart=e.subStart,this.endPoint=u,this.endTangent=function(){return[u.x-s.x,u.y-s.y]},this.startTangent=function(){return[g.x-s.x,g.y-s.y]};break;case"T":u=i?f(v,m,g):{x:v,y:m},"Q"===e.command?(s=l(e.params[1],g),this.command="Q",this.params=[g,s,u],this.subStart=e.subStart,this.endPoint=u,this.endTangent=function(){return[u.x-s.x,u.y-s.y]},this.startTangent=function(){return[g.x-s.x,g.y-s.y]}):(this.command="TL",this.params=[g,u],this.subStart=e.subStart,this.endPoint=u,this.endTangent=function(){return[u.x-g.x,u.y-g.y]},this.startTangent=function(){return[g.x-u.x,g.y-u.y]});break;case"C":i?(s=f(v,m,g),u=f(a[3],a[4],g),c=f(a[5],a[6],g)):(s={x:v,y:m},u={x:a[3],y:a[4]},c={x:a[5],y:a[6]}),this.command="C",this.params=[g,s,u,c],this.subStart=e.subStart,this.endPoint=c,this.endTangent=function(){return[c.x-u.x,c.y-u.y]},this.startTangent=function(){return[g.x-s.x,g.y-s.y]};break;case"S":i?(u=f(v,m,g),c=f(a[3],a[4],g)):(u={x:v,y:m},c={x:a[3],y:a[4]}),"C"===e.command?(s=l(e.params[2],g),this.command="C",this.params=[g,s,u,c],this.subStart=e.subStart,this.endPoint=c,this.endTangent=function(){return[c.x-u.x,c.y-u.y]},this.startTangent=function(){return[g.x-s.x,g.y-s.y]}):(this.command="SQ",this.params=[g,u,c],this.subStart=e.subStart,this.endPoint=c,this.endTangent=function(){return[c.x-u.x,c.y-u.y]},this.startTangent=function(){return[g.x-u.x,g.y-u.y]});break;case"A":var y=v,x=m,b=a[3],_=a[4],w=a[5];p=i?f(a[6],a[7],g):{x:a[6],y:a[7]},this.command="A";var M=function(t,e,n,i,o,a,s){var u=r.mod(r.toRadian(s),2*Math.PI),c=t.x,h=t.y,f=e.x,l=e.y,p=Math.cos(u)*(c-f)/2+Math.sin(u)*(h-l)/2,g=-1*Math.sin(u)*(c-f)/2+Math.cos(u)*(h-l)/2,v=p*p/(o*o)+g*g/(a*a);v>1&&(o*=Math.sqrt(v),a*=Math.sqrt(v));var m=o*o*(g*g)+a*a*(p*p),y=Math.sqrt((o*o*(a*a)-m)/m);n===i&&(y*=-1),isNaN(y)&&(y=0);var x=y*o*g/a,b=y*-a*p/o,_=(c+f)/2+Math.cos(u)*x-Math.sin(u)*b,w=(h+l)/2+Math.sin(u)*x+Math.cos(u)*b,M=d([1,0],[(p-x)/o,(g-b)/a]),S=d([(p-x)/o,(g-b)/a],[(-1*p-x)/o,(-1*g-b)/a]);return 0===i&&S>0&&(S-=2*Math.PI),1===i&&S<0&&(S+=2*Math.PI),[t,_,w,o,a,M,S,u,i]}(g,p,_,w,y,x,b);this.params=M;var S=e.subStart;this.subStart=S,this.endPoint=p;var A=M[5]%(2*Math.PI);r.isNumberEqual(A,2*Math.PI)&&(A=0);var E=M[6]%(2*Math.PI);r.isNumberEqual(E,2*Math.PI)&&(E=0);var P=.001;this.startTangent=function(){0===w&&(P*=-1);var t=M[3]*Math.cos(A-P)+M[1],e=M[4]*Math.sin(A-P)+M[2];return[t-S.x,e-S.y]},this.endTangent=function(){var t=M[6];t-2*Math.PI<1e-4&&(t=0);var e=M[3]*Math.cos(A+t+P)+M[1],n=M[4]*Math.sin(A+t-P)+M[2];return[g.x-e,g.y-n]};break;case"Z":this.command="Z",this.params=[g,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart}},isInside:function(t,e,n){var r=this.command,o=this.params,a=this.box;if(a&&!i.box(a.minX,a.maxX,a.minY,a.maxY,t,e))return!1;switch(r){default:break;case"M":return!1;case"TL":case"L":case"Z":return i.line(o[0].x,o[0].y,o[1].x,o[1].y,n,t,e);case"SQ":case"Q":return i.quadraticline(o[0].x,o[0].y,o[1].x,o[1].y,o[2].x,o[2].y,n,t,e);case"C":return i.cubicline(o[0].x,o[0].y,o[1].x,o[1].y,o[2].x,o[2].y,o[3].x,o[3].y,n,t,e);case"A":var s=o,h=s[1],f=s[2],l=s[3],p=s[4],d=s[5],g=s[6],v=s[7],m=s[8],y=l>p?l:p,x=l>p?1:l/p,b=l>p?p/l:1;s=[t,e,1];var _=[1,0,0,0,1,0,0,0,1];return c.translate(_,_,[-h,-f]),c.rotate(_,_,-v),c.scale(_,_,[1/x,1/b]),u.transformMat3(s,s,_),i.arcline(0,0,y,d,d+g,1-m,n,s[0],s[1])}return!1},draw:function(t){var e=this.command,n=this.params,r=void 0,i=void 0,o=void 0;switch(e){default:break;case"M":t.moveTo(n[1].x,n[1].y);break;case"TL":case"L":t.lineTo(n[1].x,n[1].y);break;case"SQ":case"Q":r=n[1],i=n[2],t.quadraticCurveTo(r.x,r.y,i.x,i.y);break;case"C":r=n[1],i=n[2],o=n[3],t.bezierCurveTo(r.x,r.y,i.x,i.y,o.x,o.y);break;case"A":var a=n,s=a[1],u=a[2],c=a[3],h=a[4],f=a[5],l=a[6],p=a[7],d=a[8],g=c>h?c:h,v=c>h?1:c/h,m=c>h?h/c:1;t.translate(s,u),t.rotate(p),t.scale(v,m),t.arc(0,0,g,f,f+l,1-d),t.scale(1/v,1/m),t.rotate(-p),t.translate(-s,-u);break;case"Z":t.closePath()}},getBBox:function(t){var e=t/2,n=this.params,r=void 0,i=void 0,u=void 0,c=void 0;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(n[0].x,n[1].x)-e,maxX:Math.max(n[0].x,n[1].x)+e,minY:Math.min(n[0].y,n[1].y)-e,maxY:Math.max(n[0].y,n[1].y)+e};break;case"SQ":case"Q":for(u=0,c=(i=a.extrema(n[0].x,n[1].x,n[2].x)).length;u<c;u++)i[u]=a.at(n[0].x,n[1].x,n[2].x,i[u]);for(i.push(n[0].x,n[2].x),u=0,c=(r=a.extrema(n[0].y,n[1].y,n[2].y)).length;u<c;u++)r[u]=a.at(n[0].y,n[1].y,n[2].y,r);r.push(n[0].y,n[2].y),this.box={minX:Math.min.apply(Math,i)-e,maxX:Math.max.apply(Math,i)+e,minY:Math.min.apply(Math,r)-e,maxY:Math.max.apply(Math,r)+e};break;case"C":for(u=0,c=(i=o.extrema(n[0].x,n[1].x,n[2].x,n[3].x)).length;u<c;u++)i[u]=o.at(n[0].x,n[1].x,n[2].x,n[3].x,i[u]);for(u=0,c=(r=o.extrema(n[0].y,n[1].y,n[2].y,n[3].y)).length;u<c;u++)r[u]=o.at(n[0].y,n[1].y,n[2].y,n[3].y,r[u]);i.push(n[0].x,n[3].x),r.push(n[0].y,n[3].y),this.box={minX:Math.min.apply(Math,i)-e,maxX:Math.max.apply(Math,i)+e,minY:Math.min.apply(Math,r)-e,maxY:Math.max.apply(Math,r)+e};break;case"A":var h=n,f=h[1],l=h[2],p=h[3],d=h[4],g=h[5],v=h[6],m=h[7],y=h[8],x=g,b=g+v,_=s.xExtrema(m,p,d),w=1/0,M=-1/0,S=[x,b];for(u=2*-Math.PI;u<=2*Math.PI;u+=Math.PI){var A=_+u;1===y?x<A&&A<b&&S.push(A):b<A&&A<x&&S.push(A)}for(u=0,c=S.length;u<c;u++){var E=s.xAt(m,p,d,f,S[u]);E<w&&(w=E),E>M&&(M=E)}var P=s.yExtrema(m,p,d),O=1/0,j=-1/0,I=[x,b];for(u=2*-Math.PI;u<=2*Math.PI;u+=Math.PI){var C=P+u;1===y?x<C&&C<b&&I.push(C):b<C&&C<x&&I.push(C)}for(u=0,c=I.length;u<c;u++){var k=s.yAt(m,p,d,l,I[u]);k<O&&(O=k),k>j&&(j=k)}this.box={minX:w-e,maxX:M+e,minY:O-e,maxY:j+e}}}}),t.exports=g},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(19),s=n(24),u=function t(e){t.superclass.constructor.call(this,e)};u.Symbols={circle:function(t,e,n){return[["M",t,e],["m",-n,0],["a",n,n,0,1,0,2*n,0],["a",n,n,0,1,0,2*-n,0]]},square:function(t,e,n){return[["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["Z"]]},diamond:function(t,e,n){return[["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["Z"]]},triangle:function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e+r],["L",t,e-r],["L",t+n,e+r],["z"]]},"triangle-down":function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e-r],["L",t+n,e-r],["L",t,e+r],["Z"]]}},u.ATTRS={path:null,lineWidth:1},r.extend(u,i),r.augment(u,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function(){return{x:0,y:0,lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.radius,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i}},isPointInPath:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.radius||n.r,s=this.getHitLineWidth();return o.circle(r,i,a+s/2,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,i=e.y,o=e.radius||e.r,c=e.symbol||"circle",h=(r.isFunction(c)?c:u.Symbols[c])(n,i,o);h=a.parsePath(h),t.beginPath();for(var f=void 0,l=0;l<h.length;l++){var p=h[l];(f=new s(p,f,l===h.length-1)).draw(t)}}}),t.exports=u},function(t,e,n){var r=n(7),i=document.createElement("table"),o=document.createElement("tr"),a=/^\s*<(\w+|!)[^>]*>/,s={tr:document.createElement("tbody"),tbody:i,thead:i,tfoot:i,td:o,th:o,"*":document.createElement("div")};t.exports={getBoundingClientRect:function(t,e){if(t&&t.getBoundingClientRect){var n=t.getBoundingClientRect(),r=document.documentElement.clientTop,i=document.documentElement.clientLeft;return{top:n.top-r,bottom:n.bottom-r,left:n.left-i,right:n.right-i}}return e||null},getStyle:function(t,e,n){try{return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]}catch(t){return r.isNil(n)?null:n}},modifyCSS:function(t,e){if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t},createDom:function(t){var e=a.test(t)&&RegExp.$1;e in s||(e="*");var n=s[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var r=n.childNodes[0];return n.removeChild(r),r},getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2},getWidth:function(t,e){var n=this.getStyle(t,"width",e);return"auto"===n&&(n=t.offsetWidth),parseFloat(n)},getHeight:function(t,e){var n=this.getStyle(t,"height",e);return"auto"===n&&(n=t.offsetHeight),parseFloat(n)},getOuterHeight:function(t,e){var n=this.getHeight(t,e),r=parseFloat(this.getStyle(t,"borderTopWidth"))||0,i=parseFloat(this.getStyle(t,"paddingTop"))||0,o=parseFloat(this.getStyle(t,"paddingBottom"))||0;return n+r+(parseFloat(this.getStyle(t,"borderBottomWidth"))||0)+i+o},getOuterWidth:function(t,e){var n=this.getWidth(t,e),r=parseFloat(this.getStyle(t,"borderLeftWidth"))||0,i=parseFloat(this.getStyle(t,"paddingLeft"))||0,o=parseFloat(this.getStyle(t,"paddingRight"))||0;return n+r+(parseFloat(this.getStyle(t,"borderRightWidth"))||0)+i+o},addEventListener:function(t,e,n){if(t){if(t.addEventListener)return t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}};if(t.attachEvent)return t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}}},requestAnimationFrame:function(t){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)})(t)}}},function(t,e,n){var r=n(0),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return r.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=i},function(t,e,n){var r=n(0),i=n(11),o=n(102),a={},s="_INDEX";var u=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI()};r.extend(u,i),r.augment(u,{isGroup:!0,canFill:!0,canStroke:!0,init:function(t){u.superclass.init.call(this);var e=document.createElementNS("http://www.w3.org/2000/svg","g");t=t||r.uniqueId("g_"),e.setAttribute("id",t),this.setSilent("el",e),this.setSilent("id",t)},getDefaultCfg:function(){return function t(e){if(!e.__cfg&&e!==u){var n=e.superclass.constructor;n&&!n.__cfg&&t(n),e.__cfg={},r.merge(e.__cfg,n.__cfg),r.merge(e.__cfg,e.CFG)}}(this.constructor),r.merge({},this.constructor.__cfg)},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n=this.get("canvas");e=e||{};var i=a[t];if(i||(i=r.upperFirst(t),a[t]=i),e.attrs){var s=e.attrs;if("text"===t){var u=n.get("fontFamily");u&&(s.fontFamily=s.fontFamily||u)}}e.canvas=n,e.defs=this.get("defs"),e.type=t;var c=o[i];if(!c)throw new TypeError("the shape "+i+" is not supported by svg version, use canvas instead");var h=new c(e);return this.add(h),h},addGroup:function(t,e){var n=this.get("canvas"),i=void 0;if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=n,e.parent=this,i=new t(e)):i=new t({canvas:n,parent:this}),this.add(i);else if(r.isObject(t))t.canvas=n,i=new u(t),this.add(i);else{if(void 0!==t)return!1;i=new u,this.add(i)}return i},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t}0===arguments.length&&(e=!0),u.superclass.remove.call(this,e)}return this},add:function(t){var e=this,n=e.get("children"),i=e.get("el");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),t.get("dependencies")&&e._addDependency(t),e._setEvn(t),i.appendChild(t.get("el"))}),n.push.apply(n,t);else{var o=t,a=o.get("parent");a&&a.removeChild(o,!1),e._setEvn(o),o.get("dependencies")&&e._addDependency(o),i.appendChild(o.get("el")),n.push(o)}return e},contain:function(t){return this.get("children").indexOf(t)>-1},getChildByIndex:function(t){return this.get("children")[t]},getFirst:function(){return this.getChildByIndex(0)},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t)},_addDependency:function(t){var e=t.get("dependencies");t.attr(e),t.__cfg.dependencies={}},_setEvn:function(t){t.__cfg.parent=this,t.__cfg.parent=this,t.__cfg.canvas=this.__cfg.canvas,t.__cfg.defs=this.__cfg.defs;var e=t.__attrs.clip;e&&(e.setSilent("parent",this),e.setSilent("context",this.get("context")));var n=t.__cfg.children;n&&r.each(n,function(e){t._setEvn(e)})},getCount:function(){return this.get("children").length},sort:function(){var t=this.get("children");return r.each(t,function(t,e){return t[s]=e,t}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r}}(function(t,e){return t.get("zIndex")-e.get("zIndex")})),this},findById:function(t){return this.find(function(e){return e.get("id")===t})},find:function(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return!1}),n},findAll:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},findBy:function(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1}),n},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},getShape:function(){return null},findShape:function(t){if(this.__cfg.visible&&this.__cfg.capture&&this.get("el")===t)return this;for(var e=this.__cfg.children,n=null,r=e.length-1;r>=0;r--){var i=e[r];if(i.isGroup?(n=i.findShape(t),n=i.findShape(t)):i.get("visible")&&i.get("el")===t&&(n=i),n)break}return n},clearTotalMatrix:function(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this.__cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix()}}},clear:function(){for(var t=this.get("children");0!==t.length;)t[t.length-1].remove();return this},destroy:function(){this.get("destroyed")||(this.clear(),u.superclass.destroy.call(this))}}),t.exports=u},function(t,e,n){var r=n(2),i=n(13),o=n(0),a=n(75),s=n(86),u=n(89),c=u.interpolate,h=u.interpolateArray,f={delay:"delay"};t.exports={stopAnimate:function(){var t=this.get("canvas");if(!this.get("destroyed")&&this.get("animating")){var e=this.attr("clip");e&&e.get("animating")&&e.stopAnimate();var n=this.get("animateTimer");n&&(n.stop(),this.setSilent("animateTimer",null));var r=this.get("animateCfg");r&&(this.attr(r.toAttrs),r.toM&&this.setMatrix(r.toM),r.callback&&r.callback(),this.setSilent("animateCfg",null)),this.setSilent("animating",!1),t.draw()}},animate:function(t,e,n,u){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,p=this,d=p.get("canvas"),g=function(t){var e={M:null,attrs:{}};for(var n in t)"transform"===n?e.M=r.transform(p.getMatrix(),t[n]):"matrix"===n?e.M=t[n]:f[n]||(e.attrs[n]=t[n]);return e}(t),v=g.attrs,m=g.M,y=function(t){var e={};for(var n in t)e[n]=p.attr(n);return e}(v),x=o.clone(p.getMatrix()),b=t.repeat,_=p.get("animateTimer");function w(t){var e={};if(!p.get("destroyed")){var n=void 0;for(var r in v)if(!o.isEqual(y[r],v[r]))if("path"===r){var a=i.parsePathString(v[r]),s=i.parsePathString(y[r]);e[r]=[];for(var u=0;u<a.length;u++){for(var f=a[u],l=s[u],g=[],b=0;b<f.length;b++)o.isNumber(f[b])&&l?(n=c(l[b],f[b]),g.push(n(t))):g.push(f[b]);e[r].push(g)}}else n=c(y[r],v[r]),e[r]=n(t);if(m){var _=h(x,m)(t);p.setMatrix(_)}p.attr(e),d.draw()}}_&&_.stop(),o.isNumber(u)&&(l=u,u=null),o.isFunction(n)?(u=n,n="easeLinear"):n=n||"easeLinear",p.setSilent("animating",!0),p.setSilent("animateCfg",{toAttrs:v,toM:m,callback:u}),_=s.timer(function(t){b?function(t){var r=t%e/e;w(r=a[n](r))}(t):function(t){var r=t/e;r<1?w(r=a[n](r)):(w(1),u&&u(),p.setSilent("animating",!1),p.setSilent("animateCfg",null),p.setSilent("animateTimer",null),_.stop())}(t)},l),p.setSilent("animateTimer",_)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=Math.PI/180,i=180/Math.PI},function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c});var r=n(5),i=n(18),o=n(32),a=n(8);function s(t){return function(e){var n,i,o=e.length,a=new Array(o),s=new Array(o),u=new Array(o);for(n=0;n<o;++n)i=Object(r.f)(e[n]),a[n]=i.r||0,s[n]=i.g||0,u[n]=i.b||0;return a=t(a),s=t(s),u=t(u),i.opacity=1,function(t){return i.r=a(t),i.g=s(t),i.b=u(t),i+""}}}e.a=function t(e){var n=Object(a.b)(e);function i(t,e){var i=n((t=Object(r.f)(t)).r,(e=Object(r.f)(e)).r),o=n(t.g,e.g),s=n(t.b,e.b),u=Object(a.a)(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=o(e),t.b=s(e),t.opacity=u(e),t+""}}return i.gamma=t,i}(1);var u=s(i.b),c=s(o.a)},function(t,e,n){"use strict";var r=n(18);e.a=function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),o=t[(i+e-1)%e],a=t[i%e],s=t[(i+1)%e],u=t[(i+2)%e];return Object(r.a)((n-i/e)*e,o,a,s,u)}}},function(t,e,n){"use strict";e.a=function(t){return function(){return t}}},function(t,e,n){"use strict";var r=n(15);e.a=function(t,e){var n,i=e?e.length:0,o=t?Math.min(i,t.length):0,a=new Array(o),s=new Array(i);for(n=0;n<o;++n)a[n]=Object(r.a)(t[n],e[n]);for(;n<i;++n)s[n]=e[n];return function(t){for(n=0;n<o;++n)s[n]=a[n](t);return s}}},function(t,e,n){"use strict";e.a=function(t,e){var n=new Date;return e-=t=+t,function(r){return n.setTime(t+e*r),n}}},function(t,e,n){"use strict";var r=n(15),i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)};e.a=function(t,e){var n,o={},a={};for(n in null!==t&&"object"===(void 0===t?"undefined":i(t))||(t={}),null!==e&&"object"===(void 0===e?"undefined":i(e))||(e={}),e)n in t?o[n]=Object(r.a)(t[n],e[n]):a[n]=e[n];return function(t){for(n in o)a[n]=o[n](t);return a}}},function(t,e,n){"use strict";var r=n(9),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,o=new RegExp(i.source,"g");e.a=function(t,e){var n,a,s,u=i.lastIndex=o.lastIndex=0,c=-1,h=[],f=[];for(t+="",e+="";(n=i.exec(t))&&(a=o.exec(e));)(s=a.index)>u&&(s=e.slice(u,s),h[c]?h[c]+=s:h[++c]=s),(n=n[0])===(a=a[0])?h[c]?h[c]+=a:h[++c]=a:(h[++c]=null,f.push({i:c,x:Object(r.a)(n,a)})),u=o.lastIndex;return u<e.length&&(s=e.slice(u),h[c]?h[c]+=s:h[++c]=s),h.length<2?f[0]?function(t){return function(e){return t(e)+""}}(f[0].x):function(t){return function(){return t}}(e):(e=f.length,function(t){for(var n,r=0;r<e;++r)h[(n=f[r]).i]=n.x(t);return h.join("")})}},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)};!function(e){"use strict";function o(){}var a=o.prototype,s=e.EventEmitter;function u(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function c(t){return function(){return this[t].apply(this,arguments)}}a.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);else e=r[t]||(r[t]=[]);return e},a.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},a.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},a.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!==(void 0===e?"undefined":i(e)))&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),o="object"===(void 0===e?"undefined":i(e));for(n in r)r.hasOwnProperty(n)&&-1===u(r[n],e)&&r[n].push(o?e:{listener:e,once:!1});return this},a.on=c("addListener"),a.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},a.once=c("addOnceListener"),a.defineEvent=function(t){return this.getListeners(t),this},a.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},a.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i)i.hasOwnProperty(r)&&-1!==(n=u(i[r],e))&&i[r].splice(n,1);return this},a.off=c("removeListener"),a.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},a.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},a.manipulateListeners=function(t,e,n){var r,o,a=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!==(void 0===e?"undefined":i(e))||e instanceof RegExp)for(r=n.length;r--;)a.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(o=e[r])&&("function"==typeof o?a.call(this,r,o):s.call(this,r,o));return this},a.removeEvent=function(t){var e,n=void 0===t?"undefined":i(t),r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},a.removeAllListeners=c("removeEvent"),a.emitEvent=function(t,e){var n,r,i,o,a=this.getListenersAsObject(t);for(o in a)if(a.hasOwnProperty(o))for(n=a[o].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},a.trigger=c("emitEvent"),a.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},a.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},o.noConflict=function(){return e.EventEmitter=s,o},void 0===(r=function(){return o}.call(e,n,e,t))||(t.exports=r)}(this||{})},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1,fill:"none"},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return{lineWidth:1,fill:"none"}},_afterSetRadius:function(){var t=this.get("el");t.setAttribute("rx",this.__attrs.radius),t.setAttribute("ry",this.__attrs.radius)},_afterSetAttrAll:function(t){"radius"in t&&this._afterSetRadius()}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return{lineWidth:1,fill:"none"}}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return{lineWidth:1}}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};function a(t,e,n,r,i){var o=1-i;return o*o*(o*r+3*i*n)+i*i*(i*t+3*o*e)}o.ATTRS={path:null,lineWidth:1,curve:null,tCache:null,startArrow:!1,endArrow:!1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return{lineWidth:1,fill:"none",startArrow:!1,endArrow:!1}},_afterSetAttrStroke:function(t){var e=this.get("marker-start"),n=this.get("marker-end");e&&this.get("defs").findById(e).update(null,t),n&&this.get("defs").findById(n).update(null,t)},_afterSetAttrPath:function(t){var e=this.get("el"),n=t;r.isArray(n)&&(n=n.map(function(t){return t.join(" ")}).join("")),~n.indexOf("NaN")?e.setAttribute("d",""):e.setAttribute("d",n)},_afterSetAttrAll:function(t){t.path&&this._afterSetAttrPath(t.path),t.stroke&&this._afterSetAttrStroke(t.stroke)},getPoint:function(t){var e=this.tCache,n=void 0,i=void 0;e||(this._calculateCurve(),this._setTcache(),e=this.tCache);var o=this.curve;if(!e)return o?{x:o[0][1],y:o[0][2]}:null;r.each(e,function(e,r){t>=e[0]&&t<=e[1]&&(n=(t-e[0])/(e[1]-e[0]),i=r)});var s=o[i];if(r.isNil(s)||r.isNil(i))return null;var u=s.length,c=o[i+1];return{x:a(s[u-2],c[1],c[3],c[5],1-n),y:a(s[u-1],c[2],c[4],c[6],1-n)}},createPath:function(){}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)},a={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},s={left:"left",start:"left",center:"middle",right:"end",end:"end"};o.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return{lineWidth:1,lineCount:1,fontSize:12,fill:"#000",fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"}},initTransform:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);var t=this.__attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this.__attrs.x,-1*this.__attrs.y],["s",+t/12,+t/12],["t",this.__attrs.x,this.__attrs.y]])},_assembleFont:function(){var t=this.get("el"),e=this.__attrs,n=e.fontSize,r=e.fontFamily,i=e.fontWeight,o=[e.fontStyle,e.fontVariant,i,n+"px",r].join(" ");e.font=o,t.setAttribute("font",e.font)},_afterSetAttrFontSize:function(){this._assembleFont()},_afterSetAttrFontFamily:function(){this._assembleFont()},_afterSetAttrFontWeight:function(){this._assembleFont()},_afterSetAttrFontStyle:function(){this._assembleFont()},_afterSetAttrFontVariant:function(){this._assembleFont()},_afterSetAttrTextAlign:function(){var t=this.__attrs.textAlign;this.get("el").setAttribute("text-anchor",s[t])},_afterSetAttrTextBaseLine:function(){var t=this.__attrs.textBaseline;this.get("el").setAttribute("alignment-baseline",a[t]||"baseline")},_afterSetAttrText:function(t){var e=this.__attrs,n=void 0;if(r.isString(t)&&-1!==t.indexOf("\n")){var i=(n=t.split("\n")).length;e.lineCount=i,e.textArr=n}var o=this.get("el");if(~["undefined","null","NaN"].indexOf(String(t))&&o)o.innerHTML="";else if(~t.indexOf("\n")){n=t.split("\n"),e.lineCount=n.length,e.textArr=n;var a="";r.each(n,function(t,e){a+='<tspan x="0" y="'+(e+1)+'em">'+t+"</tspan>"}),o.innerHTML=a}else o.innerHTML=t},_afterSetAttrOutline:function(t){var e=this.get("el");t||e.setAttribute("paint-order","normal");var n=t.stroke||"#000",r=t.fill||this.__attrs.stroke,i=t.lineWidth||2*this.__attrs.lineWidth;e.setAttribute("paint-order","stroke"),e.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;"),e.setAttribute("stroke",n),e.setAttribute("fill",r),e.setAttribute("stroke-width",i)},_afterSetAttrAll:function(t){("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&this._assembleFont(),"textAlign"in t&&this._afterSetAttrTextAlign(),"textBaseline"in t&&this._afterSetAttrTextBaseLine(),"text"in t&&this._afterSetAttrText(t.text),"outline"in t&&this._afterSetAttrOutline(t.outline)}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(o,i),r.augment(o,{canStroke:!0,type:"line",getDefaultAttrs:function(){return{lineWidth:1,stroke:"#000",startArrow:!1,endArrow:!1}},_afterSetAttrStroke:function(t){var e=this.get("marker-start"),n=this.get("marker-end");e&&this.get("defs").findById(e).update(t),n&&this.get("defs").findById(n).update(t)},_afterSetAttrAll:function(t){t.stroke&&this._afterSetAttrStroke(t.stroke)},createPath:function(){},getPoint:function(t){var e=this.__attrs;return{x:(e.x2-e.x1)*t+e.x1,y:(e.y2-e.y1)*t+e.y1}}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(o,i),r.augment(o,{type:"image",_afterSetAttrImg:function(t){this._setAttrImg(t)},_afterSetAttrAll:function(t){t.img&&this._setAttrImg(t.img)},_setAttrImg:function(t){var e=this.get("el"),n=this.__attrs,i=t;if(r.isString(i))e.setAttribute("href",i);else if(i instanceof Image)n.width||this.attr("width",i.width),n.height||this.attr("height",i.height),e.setAttribute("href",i.src);else if(i instanceof HTMLElement&&r.isString(i.nodeName)&&"CANVAS"===i.nodeName.toUpperCase())e.setAttribute("href",i.toDataURL());else if(i instanceof ImageData){var o=document.createElement("canvas");o.setAttribute("width",i.width),o.setAttribute("height",i.height),o.getContext("2d").putImageData(i,0,0),n.width||this.attr("width",i.width),n.height||this.attr("height",i.height),e.setAttribute("href",o.toDataURL())}},drawInner:function(){}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.ATTRS={points:null,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return{lineWidth:1,fill:"none"}},_afterSetAttrPoints:function(){var t=this.__attrs.points,e=this.get("el"),n=t;t&&0!==t.length?r.isArray(t)&&(n=(n=n.map(function(t){return t[0]+","+t[1]})).join(" ")):n="",e.setAttribute("points",n)},_afterSetAttrAll:function(t){"points"in t&&this._afterSetAttrPoints()},createPath:function(){}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};o.Symbols={circle:function(t,e,n){return"M"+t+","+e+"\n            m"+-n+",0\n            a "+n+","+n+",0,1,0,"+2*n+",0\n            a "+n+","+n+",0,1,0,"+2*-n+",0"},square:function(t,e,n){return"M"+(t-n)+","+(e-n)+"\n            H"+(t+n)+"V"+(e+n)+"\n            H"+(t-n)+"Z"},diamond:function(t,e,n){return"M"+(t-n)+","+e+"\n             L"+t+","+(e-n)+"\n             L"+(t+n)+","+e+",\n             L"+t+","+(e+n)+"Z"},triangle:function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return"M"+(t-n)+","+(e+r)+"\n            L"+t+","+(e-r)+"\n            L"+(t+n)+","+(e+r)+"Z"},"triangle-down":function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return"M"+(t-n)+","+(e-r)+"\n            L"+(t+n)+","+(e-r)+"\n            L"+t+","+(e+r)+"Z"}},o.ATTRS={path:null,lineWidth:1},r.extend(o,i),r.augment(o,{type:"marker",canFill:!0,canStroke:!0,init:function(t){o.superclass.init.call(this);var e=document.createElementNS("http://www.w3.org/2000/svg","path");t=t||r.uniqueId(this.type+"_"),e.setAttribute("id",t),this.setSilent("el",e)},getDefaultAttrs:function(){return{x:0,y:0,lineWidth:1,fill:"none"}},_afterSetX:function(){this._assembleShape()},_afterSetY:function(){this._assembleShape()},_afterSetRadius:function(){this._assembleShape()},_afterSetR:function(){this._assembleShape()},_afterSetAttrAll:function(t){("x"in t||"y"in t||"radius"in t)&&this._assembleShape()},_assembleShape:function(){var t=this.__attrs,e=t.r;if(void 0===t.r&&(e=t.radius),!(isNaN(Number(t.x))||isNaN(Number(t.y))||isNaN(Number(e)))){var n="";n="function"==typeof t.symbol?t.symbol(t.x,t.y,e):o.Symbols[t.symbol||"circle"](t.x,t.y,e),r.isArray(n)&&(n=n.map(function(t){return t.join(" ")}).join("")),this.get("el").setAttribute("d",n)}}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"dom",_afterSetAttrHtml:function(){var t=this.__attrs.html,e=this.get("el");"string"==typeof t?e.innerHTML=t:(e.innerHTML="",e.appendChild(t))},_afterSetAttrAll:function(t){"html"in t&&this._afterSetAttrHtml()}}),t.exports=o},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e)};function a(t,e,n){return{x:e*Math.cos(t)+n.x,y:e*Math.sin(t)+n.y}}o.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return{clockwise:!1,lineWidth:1,rs:0,re:0,fill:"none"}},_afterSetAttrX:function(){this._calculatePath()},_afterSetAttrY:function(){this._calculatePath()},_afterSetAttrRs:function(){this._calculatePath()},_afterSetAttrRe:function(){this._calculatePath()},_afterSetAttrStartAngle:function(){this._calculatePath()},_afterSetAttrEndAngle:function(){this._calculatePath()},_afterSetAttrClockwise:function(){this._calculatePath()},_afterSetAttrAll:function(t){("x"in t||"y"in t||"rs"in t||"re"in t||"startAngle"in t||"endAngle"in t||"clockwise"in t)&&this._calculatePath()},_calculatePath:function(){var t=this.__attrs,e={x:t.x,y:t.y},n=[],i=t.startAngle,o=t.endAngle;r.isNumberEqual(o-i,2*Math.PI)&&(o-=1e-5);var s=a(i,t.re,e),u=a(o,t.re,e),c=o>i?1:0,h=Math.abs(o-i)>Math.PI?1:0,f=t.rs,l=t.re,p=a(i,t.rs,e),d=a(o,t.rs,e);t.rs>0?(n.push("M "+u.x+","+u.y),n.push("L "+d.x+","+d.y),n.push("A "+f+","+f+",0,"+h+","+(1===c?0:1)+","+p.x+","+p.y),n.push("L "+s.x+" "+s.y)):(n.push("M "+e.x+","+e.y),n.push("L "+s.x+","+s.y)),n.push("A "+l+","+l+",0,"+h+","+c+","+u.x+","+u.y),t.rs>0?n.push("L "+d.x+","+d.y):n.push("Z"),this.get("el").setAttribute("d",n.join(" "))}}),t.exports=o},function(t,e,n){var r=n(0),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return r.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=i},function(t,e,n){var r=n(0),i=n(52),o=n(112),a={},s="_INDEX";function u(t,e,n){for(var r=void 0,i=t.length-1;i>=0;i--){var o=t[i];if(o.__cfg.visible&&o.__cfg.capture&&(o.isGroup?r=o.getShape(e,n):o.isHit(e,n)&&(r=o)),r)break}return r}var c=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI()};r.extend(c,i),r.augment(c,{isGroup:!0,canFill:!0,canStroke:!0,getDefaultCfg:function(){return function t(e){if(!e.__cfg&&e!==c){var n=e.superclass.constructor;n&&!n.__cfg&&t(n),e.__cfg={},r.merge(e.__cfg,n.__cfg),r.merge(e.__cfg,e.CFG)}}(this.constructor),r.merge({},this.constructor.__cfg)},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n=this.get("canvas");e=e||{};var i=a[t];if(i||(i=r.upperFirst(t),a[t]=i),e.attrs){var s=e.attrs;if("text"===t){var u=n.get("fontFamily");u&&(s.fontFamily=s.fontFamily?s.fontFamily:u)}}e.canvas=n,e.type=t;var c=new o[i](e);return this.add(c),c},addGroup:function(t,e){var n=this.get("canvas"),i=void 0;if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=n,e.parent=this,i=new t(e)):i=new t({canvas:n,parent:this}),this.add(i);else if(r.isObject(t))t.canvas=n,i=new c(t),this.add(i);else{if(void 0!==t)return!1;i=new c,this.add(i)}return i},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t}0===arguments.length&&(e=!0),c.superclass.remove.call(this,e)}return this},add:function(t){var e=this,n=e.get("children");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e._setEvn(t)}),n.push.apply(n,t);else{var i=t,o=i.get("parent");o&&o.removeChild(i,!1),e._setEvn(i),n.push(i)}return e},contain:function(t){return this.get("children").indexOf(t)>-1},getChildByIndex:function(t){return this.get("children")[t]},getFirst:function(){return this.getChildByIndex(0)},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t)},_setEvn:function(t){t.__cfg.parent=this,t.__cfg.context=this.__cfg.context,t.__cfg.canvas=this.__cfg.canvas;var e=t.__attrs.clip;e&&(e.setSilent("parent",this),e.setSilent("context",this.get("context")));var n=t.__cfg.children;n&&r.each(n,function(e){t._setEvn(e)})},getBBox:function(){var t=1/0,e=-1/0,n=1/0,i=-1/0,o=this.get("children");o.length>0?r.each(o,function(r){if(r.get("visible")){var o=r.getBBox();if(!o)return!0;var a=[o.minX,o.minY,1],s=[o.minX,o.maxY,1],u=[o.maxX,o.minY,1],c=[o.maxX,o.maxY,1];r.apply(a),r.apply(s),r.apply(u),r.apply(c);var h=Math.min(a[0],s[0],u[0],c[0]),f=Math.max(a[0],s[0],u[0],c[0]),l=Math.min(a[1],s[1],u[1],c[1]),p=Math.max(a[1],s[1],u[1],c[1]);h<t&&(t=h),f>e&&(e=f),l<n&&(n=l),p>i&&(i=p)}}):(t=0,e=0,n=0,i=0);var a={minX:t,minY:n,maxX:e,maxY:i};return a.x=a.minX,a.y=a.minY,a.width=a.maxX-a.minX,a.height=a.maxY-a.minY,a},drawInner:function(t){for(var e=this.get("children"),n=0;n<e.length;n++){e[n].draw(t)}return this},getCount:function(){return this.get("children").length},sort:function(){var t=this.get("children");return r.each(t,function(t,e){return t[s]=e,t}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r}}(function(t,e){return t.get("zIndex")-e.get("zIndex")})),this},findById:function(t){return this.find(function(e){return e.get("id")===t})},find:function(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return!1}),n},findAll:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},findBy:function(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1}),n},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},getShape:function(t,e){var n=this.__attrs.clip,r=this.__cfg.children,i=void 0;return n?n.inside(t,e)&&(i=u(r,t,e)):i=u(r,t,e),i},clearTotalMatrix:function(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this.__cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix()}}},clear:function(){for(var t=this.get("children");0!==t.length;)t[t.length-1].remove();return this},destroy:function(){this.get("destroyed")||(this.clear(),c.superclass.destroy.call(this))}}),t.exports=c},function(t,e,n){var r=n(0),i=n(110),o=n(111),a=n(29),s=n(19),u=n(38),c=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash","lineDashOffset"],h=function(t){this.__cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this.__cfg,this.getDefaultCfg(),t),this.initAttrs(this.__cfg.attrs),this.initTransform(),this.init()};h.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(h,i,o,u,a,{init:function(){this.setSilent("animable",!0),this.setSilent("animating",!1);var t=this.__attrs;t&&t.rotate&&this.rotateAtStart(t.rotate)},getParent:function(){return this.get("parent")},getDefaultCfg:function(){return{}},set:function(t,e){return"zIndex"===t&&this._beforeSetZIndex&&this._beforeSetZIndex(e),"loading"===t&&this._beforeSetLoading&&this._beforeSetLoading(e),this.__cfg[t]=e,this},setSilent:function(t,e){this.__cfg[t]=e},get:function(t){return this.__cfg[t]},draw:function(t){this.get("destroyed")||this.get("visible")&&(this.setContext(t),this.drawInner(t),this.restoreContext(t))},setContext:function(t){var e=this.__attrs.clip;t.save(),e&&(e.resetTransform(t),e.createPath(t),t.clip()),this.resetContext(t),this.resetTransform(t)},restoreContext:function(t){t.restore()},resetContext:function(t){var e=this.__attrs;if(!this.isGroup)for(var n in e)if(c.indexOf(n)>-1){var i=e[n];"fillStyle"===n&&(i=s.parseStyle(i,this)),"strokeStyle"===n&&(i=s.parseStyle(i,this)),"lineDash"===n&&t.setLineDash?r.isArray(i)?t.setLineDash(i):r.isString(i)&&t.setLineDash(i.split(" ")):t[n]=i}},drawInner:function(){},show:function(){return this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},remove:function(t){if(void 0===t&&(t=!0),this.get("parent")){var e=this.get("parent").get("children");r.remove(e,this)}return t&&this.destroy(),this},destroy:function(){if(!this.get("destroyed")){if(this.get("animating")){var t=this.get("animateTimer");t&&t.stop()}this.__cfg={},this.__attrs=null,this.removeEvent(),this.set("destroyed",!0)}},_beforeSetZIndex:function(t){return this.__cfg.zIndex=t,r.isNil(this.get("parent"))||this.get("parent").sort(),t},_setAttrs:function(t){return this.attr(t),t},setZIndex:function(t){return this.__cfg.zIndex=t,t},clone:function(){return r.clone(this)},getBBox:function(){return{minX:0,maxX:0,minY:0,maxY:0}}}),t.exports=h},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.r,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.r;return o.circle(r,i,a,t,e)},_isPointInStroke:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.r,s=this.getHitLineWidth();return o.arcline(r,i,a,0,2*Math.PI,!1,s,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.r;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,0,2*Math.PI,!1)}}),t.exports=a},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(2).mat3,s=n(2).vec3,u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(u,i),r.augment(u,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.rx,i=t.ry,o=this.getHitLineWidth(),a=r+o/2,s=i+o/2;return{minX:e-a,minY:n-s,maxX:e+a,maxY:n+s}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.__attrs,r=n.x,i=n.y,u=n.rx,c=n.ry,h=u>c?u:c,f=u>c?1:u/c,l=u>c?c/u:1,p=[t,e,1],d=[1,0,0,0,1,0,0,0,1];a.scale(d,d,[f,l]),a.translate(d,d,[r,i]);var g=a.invert([],d);return s.transformMat3(p,p,g),o.circle(0,0,h,p[0],p[1])},_isPointInStroke:function(t,e){var n=this.__attrs,r=n.x,i=n.y,u=n.rx,c=n.ry,h=this.getHitLineWidth(),f=u>c?u:c,l=u>c?1:u/c,p=u>c?c/u:1,d=[t,e,1],g=[1,0,0,0,1,0,0,0,1];a.scale(g,g,[l,p]),a.translate(g,g,[r,i]);var v=a.invert([],g);return s.transformMat3(d,d,v),o.arcline(0,0,f,0,2*Math.PI,!1,h,d[0],d[1])},createPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.rx,o=e.ry;t=t||self.get("context");var s=i>o?i:o,u=i>o?1:i/o,c=i>o?o/i:1,h=[1,0,0,0,1,0,0,0,1];a.scale(h,h,[u,c]),a.translate(h,h,[n,r]),t.beginPath(),t.save(),t.transform(h[0],h[1],h[3],h[4],h[6],h[7]),t.arc(0,0,s,0,2*Math.PI),t.restore(),t.closePath()}}),t.exports=u},function(t,e,n){var r=n(0),i=n(1),o=n(24),a=n(19),s=n(6),u=n(13),c=n(10),h=function t(e){t.superclass.constructor.call(this,e)};h.ATTRS={path:null,lineWidth:1,curve:null,tCache:null,startArrow:!1,endArrow:!1},r.extend(h,i),r.augment(h,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},_afterSetAttrPath:function(t){if(r.isNil(t))return this.setSilent("segments",null),void this.setSilent("box",void 0);var e=a.parsePath(t),n=void 0,i=[];if(r.isArray(e)&&0!==e.length&&("M"===e[0][0]||"m"===e[0][0])){for(var s=e.length,u=0;u<e.length;u++){var c=e[u];n=new o(c,n,u===s-1),i.push(n)}this.setSilent("segments",i),this.set("tCache",null),this.setSilent("box",null)}},_afterSetAttrAll:function(t){t.path&&this._afterSetAttrPath(t.path)},calculateBox:function(){var t=this.get("segments");if(!t)return null;var e=this.getHitLineWidth(),n=1/0,i=-1/0,o=1/0,a=-1/0;return r.each(t,function(t){t.getBBox(e);var r=t.box;r&&(r.minX<n&&(n=r.minX),r.maxX>i&&(i=r.maxX),r.minY<o&&(o=r.minY),r.maxY>a&&(a=r.maxY))}),{minX:n,minY:o,maxX:i,maxY:a}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.get("context");if(n)return this.createPath(),n.isPointInPath(t,e)},_isPointInStroke:function(t,e){var n=this.get("segments");if(!r.isEmpty(n))for(var i=this.getHitLineWidth(),o=0,a=n.length;o<a;o++)if(n[o].isInside(t,e,i))return!0;return!1},_setTcache:function(){var t=0,e=0,n=[],i=void 0,o=void 0,a=void 0,s=void 0,u=this.curve;u&&(r.each(u,function(e,n){a=u[n+1],s=e.length,a&&(t+=c.len(e[s-2],e[s-1],a[1],a[2],a[3],a[4],a[5],a[6]))}),r.each(u,function(r,h){a=u[h+1],s=r.length,a&&((i=[])[0]=e/t,o=c.len(r[s-2],r[s-1],a[1],a[2],a[3],a[4],a[5],a[6]),e+=o,i[1]=e/t,n.push(i))}),this.tCache=n)},_calculateCurve:function(){var t=this.__attrs.path;this.curve=u.pathTocurve(t)},getPoint:function(t){var e=this.tCache,n=void 0,i=void 0;e||(this._calculateCurve(),this._setTcache(),e=this.tCache);var o=this.curve;if(!e)return o?{x:o[0][1],y:o[0][2]}:null;r.each(e,function(e,r){t>=e[0]&&t<=e[1]&&(n=(t-e[0])/(e[1]-e[0]),i=r)});var a=o[i];if(r.isNil(a)||r.isNil(i))return null;var s=a.length,u=o[i+1];return{x:c.at(a[s-2],u[1],u[3],u[5],1-n),y:c.at(a[s-1],u[2],u[4],u[6],1-n)}},createPath:function(t){var e=this.get("segments");if(r.isArray(e)){(t=t||this.get("context")).beginPath();for(var n=e.length,i=0;i<n;i++)e[i].draw(t)}},afterPath:function(t){var e=this.__attrs,n=this.get("segments"),i=e.path,o=void 0,a=void 0,u=void 0;if(t=t||this.get("context"),r.isArray(n)&&(e.startArrow||e.endArrow)&&"z"!==i[i.length-1]&&"Z"!==i[i.length-1]&&!e.fill){var c=n.length;if(c>1)if(o=n[0].endPoint,a=n[1].endPoint,u=n[1].startTangent,r.isFunction(u)){var h=u();s.addStartArrow(t,e,o.x-h[0],o.y-h[1],o.x,o.y)}else s.addStartArrow(t,e,a.x,a.y,o.x,o.y);if(c>1&&!closed)if(o=n[c-2].endPoint,a=n[c-1].endPoint,u=n[c-1].endTangent,r.isFunction(u)){var f=u();s.addEndArrow(t,e,a.x-f[0],a.y-f[1],a.x,a.y,u())}else s.addEndArrow(t,e,o.x,o.y,a.x,a.y)}}}),t.exports=h},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return{lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"}},initTransform:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);var t=this.__attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this.__attrs.x,-1*this.__attrs.y],["s",+t/12,+t/12],["t",this.__attrs.x,this.__attrs.y]])},_assembleFont:function(){var t=this.__attrs,e=t.fontSize,n=t.fontFamily,r=t.fontWeight,i=t.fontStyle,o=t.fontVariant;t.font=[i,o,r,e+"px",n].join(" ")},_afterSetAttrFontSize:function(){this._assembleFont()},_afterSetAttrFontFamily:function(){this._assembleFont()},_afterSetAttrFontWeight:function(){this._assembleFont()},_afterSetAttrFontStyle:function(){this._assembleFont()},_afterSetAttrFontVariant:function(){this._assembleFont()},_afterSetAttrFont:function(){},_afterSetAttrText:function(){var t=this.__attrs,e=t.text,n=void 0;if(r.isString(e)&&-1!==e.indexOf("\n")){var i=(n=e.split("\n")).length;t.lineCount=i,t.textArr=n}},_getTextHeight:function(){var t=this.__attrs,e=t.lineCount,n=1*t.fontSize;return e>1?n*e+this._getSpaceingY()*(e-1):n},_afterSetAttrAll:function(t){("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&this._assembleFont(),"text"in t&&this._afterSetAttrText(t.text)},isHitBox:function(){return!1},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=this.measureText();if(!r)return{minX:e,minY:n,maxX:e,maxY:n};var i=this._getTextHeight(),o=t.textAlign,a=t.textBaseline,s=this.getHitLineWidth(),u={x:e,y:n-i};o&&("end"===o||"right"===o?u.x-=r:"center"===o&&(u.x-=r/2)),a&&("top"===a?u.y+=i:"middle"===a&&(u.y+=i/2)),this.set("startPoint",u);var c=s/2;return{minX:u.x-c,minY:u.y-c,maxX:u.x+r+c,maxY:u.y+i+c}},_getSpaceingY:function(){var t=this.__attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n},isPointInPath:function(t,e){var n=this.getBBox();if(this.hasFill()||this.hasStroke())return o.box(n.minX,n.maxX,n.minY,n.maxY,t,e)},drawInner:function(t){var e=this.__attrs,n=e.text;if(n){var i=e.textArr,o=e.x,a=e.y;if(t.beginPath(),this.hasStroke()&&(i?this._drawTextArr(t,!1):t.strokeText(n,o,a)),this.hasFill()){var s=e.fillOpacity;r.isNil(s)||1===s||(t.globalAlpha=s),i?this._drawTextArr(t,!0):t.fillText(n,o,a)}}},_drawTextArr:function(t,e){var n=this.__attrs.textArr,i=this.__attrs.textBaseline,o=1*this.__attrs.fontSize,a=this._getSpaceingY(),s=this.__attrs.x,u=this.__attrs.y,c=this.getBBox(),h=c.maxY-c.minY,f=void 0;r.each(n,function(n,r){f=u+r*(a+o)-h+o,"middle"===i&&(f+=h-o-(h-o)/2),"top"===i&&(f+=h-o),e?t.fillText(n,s,f):t.strokeText(n,s,f)})},measureText:function(){var t=this.__attrs,e=t.text,n=t.font,i=t.textArr,o=void 0,a=0;if(!r.isNil(e)){var s=document.createElement("canvas").getContext("2d");return s.save(),s.font=n,i?r.each(i,function(t){o=s.measureText(t).width,a<o&&(a=o),s.restore()}):(a=s.measureText(e).width,s.restore()),a}}}),t.exports=a},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(6),s=n(20),u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(u,i),r.augment(u,{canStroke:!0,type:"line",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.x1,n=t.y1,r=t.x2,i=t.y2,o=this.getHitLineWidth();return s.box(e,n,r,i,o)},isPointInPath:function(t,e){var n=this.__attrs,r=n.x1,i=n.y1,a=n.x2,s=n.y2,u=this.getHitLineWidth();return!!this.hasStroke()&&o.line(r,i,a,s,u,t,e)},createPath:function(t){var e=this.__attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;(t=t||self.get("context")).beginPath(),t.moveTo(n,r),t.lineTo(i,o)},afterPath:function(t){var e=this.__attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,i,o,n,r),e.endArrow&&a.addEndArrow(t,e,n,r,i,o)},getPoint:function(t){var e=this.__attrs;return{x:s.at(e.x1,e.x2,t),y:s.at(e.y1,e.y2,t)}}}),t.exports=u},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(a,i),r.augment(a,{type:"image",_afterSetAttrImg:function(t){this._setAttrImg(t)},_afterSetAttrAll:function(t){t.img&&this._setAttrImg(t.img)},isHitBox:function(){return!1},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y;return{minX:e,minY:n,maxX:e+t.width,maxY:n+t.height}},isPointInPath:function(t,e){var n=this.__attrs;if(this.get("toDraw")||!n.img)return!1;var r=n.x,i=n.y,a=n.width,s=n.height;return o.rect(r,i,a,s,t,e)},_beforeSetLoading:function(t){var e=this.get("canvas");return!1===t&&!0===this.get("toDraw")&&(this.__cfg.loading=!1,e.draw()),t},_setAttrImg:function(t){var e=this,n=e.__attrs;if(!r.isString(t))return t instanceof Image?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):t instanceof HTMLElement&&r.isString(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase()?(n.width||e.attr("width",Number(t.getAttribute("width"))),n.height||e.attr("height",Number(t.getAttribute("height"))),t):t instanceof ImageData?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):null;var i=new Image;i.onload=function(){if(e.get("destroyed"))return!1;e.attr("imgSrc",t),e.attr("img",i);var n=e.get("callback");n&&n.call(e),e.set("loading",!1)},i.src=t,e.set("loading",!0)},drawInner:function(t){this.get("loading")?this.set("toDraw",!0):this._drawImage(t)},_drawImage:function(t){var e=this.__attrs,n=e.x,i=e.y,o=e.img,a=e.width,s=e.height,u=e.sx,c=e.sy,h=e.swidth,f=e.sheight;this.set("toDraw",!1);var l=o;if(l instanceof ImageData&&((l=new Image).src=o),l instanceof Image||l instanceof HTMLElement&&r.isString(l.nodeName)&&"CANVAS"===l.nodeName.toUpperCase()){if(r.isNil(u)||r.isNil(c)||r.isNil(h)||r.isNil(f))return void t.drawImage(l,n,i,a,s);if(!(r.isNil(u)||r.isNil(c)||r.isNil(h)||r.isNil(f)))return void t.drawImage(l,u,c,h,f,n,i,a,s)}}}),t.exports=a},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e)};a.ATTRS={points:null,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this.__attrs.points,e=this.getHitLineWidth();if(!t||0===t.length)return null;var n=1/0,i=1/0,o=-1/0,a=-1/0;r.each(t,function(t){var e=t[0],r=t[1];e<n&&(n=e),e>o&&(o=e),r<i&&(i=r),r>a&&(a=r)});var s=e/2;return{minX:n-s,minY:i-s,maxX:o+s,maxY:a+s}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.get("context");return this.createPath(),n.isPointInPath(t,e)},_isPointInStroke:function(t,e){var n=this.__attrs.points;if(n.length<2)return!1;var r=this.getHitLineWidth(),i=n.slice(0);return n.length>=3&&i.push(n[0]),o.polyline(i,r,t,e)},createPath:function(t){var e=this.__attrs.points;e.length<2||((t=t||this.get("context")).beginPath(),r.each(e,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1])}),t.closePath())}}),t.exports=a},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(6),s=n(20),u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={points:null,lineWidth:1,startArrow:!1,endArrow:!1,tCache:null},r.extend(u,i),r.augment(u,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this.__attrs,e=this.getHitLineWidth(),n=t.points;if(!n||0===n.length)return null;var i=1/0,o=1/0,a=-1/0,s=-1/0;r.each(n,function(t){var e=t[0],n=t[1];e<i&&(i=e),e>a&&(a=e),n<o&&(o=n),n>s&&(s=n)});var u=e/2;return{minX:i-u,minY:o-u,maxX:a+u,maxY:s+u}},_setTcache:function(){var t=this.__attrs.points,e=0,n=0,i=[],o=void 0,a=void 0;t&&0!==t.length&&(r.each(t,function(n,r){t[r+1]&&(e+=s.len(n[0],n[1],t[r+1][0],t[r+1][1]))}),e<=0||(r.each(t,function(r,u){t[u+1]&&((o=[])[0]=n/e,a=s.len(r[0],r[1],t[u+1][0],t[u+1][1]),n+=a,o[1]=n/e,i.push(o))}),this.tCache=i))},isPointInPath:function(t,e){var n=this.__attrs;if(this.hasStroke()){var r=n.points;if(r.length<2)return!1;var i=n.lineWidth;return o.polyline(r,i,t,e)}return!1},createPath:function(t){var e,n=this.__attrs.points,r=void 0;if(!(n.length<2)){for((t=t||this.get("context")).beginPath(),t.moveTo(n[0][0],n[0][1]),r=1,e=n.length-1;r<e;r++)t.lineTo(n[r][0],n[r][1]);t.lineTo(n[e][0],n[e][1])}},afterPath:function(t){var e=this.__attrs,n=e.points,r=n.length-1;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,n[1][0],n[1][1],n[0][0],n[0][1]),e.endArrow&&a.addEndArrow(t,e,n[r-1][0],n[r-1][1],n[r][0],n[r][1])},getPoint:function(t){var e=this.__attrs.points,n=this.tCache,i=void 0,o=void 0;return n||(this._setTcache(),n=this.tCache),r.each(n,function(e,n){t>=e[0]&&t<=e[1]&&(i=(t-e[0])/(e[1]-e[0]),o=n)}),{x:s.at(e[o][0],e[o+1][0],i),y:s.at(e[o][1],e[o+1][1],i)}}}),t.exports=u},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(22),s=n(6);function u(t,e,n){return t+e*Math.cos(n)}function c(t,e,n){return t+e*Math.sin(n)}var h=function t(e){t.superclass.constructor.call(this,e)};h.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(h,i),r.augment(h,{canStroke:!0,type:"arc",getDefaultAttrs:function(){return{x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.r,i=t.startAngle,o=t.endAngle,s=t.clockwise,u=this.getHitLineWidth()/2,c=a.box(e,n,r,i,o,s);return c.minX-=u,c.minY-=u,c.maxX+=u,c.maxY+=u,c},isPointInPath:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.r,s=n.startAngle,u=n.endAngle,c=n.clockwise,h=this.getHitLineWidth();return!!this.hasStroke()&&o.arcline(r,i,a,s,u,c,h,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.r,o=e.startAngle,a=e.endAngle,s=e.clockwise;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,o,a,s)},afterPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.r,o=e.startAngle,a=e.endAngle,h=e.clockwise;t=t||this.get("context");var f=void 0,l=void 0,p=void 0,d=void 0,g=void 0;e.startArrow&&(f=Math.PI/180,h&&(f*=-1),l=u(n,i,o+f),p=c(r,i,o+f),d=u(n,i,o),g=c(r,i,o),s.addStartArrow(t,e,l,p,d,g)),e.endArrow&&(f=Math.PI/180,h&&(f*=-1),l=u(n,i,a+f),p=c(r,i,a+f),d=u(n,i,a),g=c(r,i,a),s.addEndArrow(t,e,d,g,l,p))}}),t.exports=h},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(22),s=n(2).vec2,u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(u,i),r.augment(u,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return{clockwise:!1,lineWidth:1,rs:0,re:0}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,r=t.rs,i=t.re,o=t.startAngle,s=t.endAngle,u=t.clockwise,c=this.getHitLineWidth(),h=a.box(e,n,r,o,s,u),f=a.box(e,n,i,o,s,u),l=c/2;return{minX:Math.min(h.minX,f.minX)-l,minY:Math.min(h.minY,f.minY)-l,maxX:Math.max(h.maxX,f.maxX)+l,maxY:Math.max(h.maxY,f.maxY)+l}},isPointInPath:function(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e)},_isPointInFill:function(t,e){var n=this.__attrs,i=n.x,o=n.y,u=n.rs,c=n.re,h=n.startAngle,f=n.endAngle,l=n.clockwise,p=[t-i,e-o],d=s.angleTo([1,0],p),g=a.nearAngle(d,h,f,l);if(r.isNumberEqual(d,g)){var v=s.squaredLength(p);if(u*u<=v&&v<=c*c)return!0}return!1},_isPointInStroke:function(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.rs,s=n.re,u=n.startAngle,c=n.endAngle,h=n.clockwise,f=this.getHitLineWidth(),l={x:Math.cos(u)*a+r,y:Math.sin(u)*a+i},p={x:Math.cos(u)*s+r,y:Math.sin(u)*s+i},d={x:Math.cos(c)*a+r,y:Math.sin(c)*a+i},g={x:Math.cos(c)*s+r,y:Math.sin(c)*s+i};return!!o.line(l.x,l.y,p.x,p.y,f,t,e)||(!!o.line(d.x,d.y,g.x,g.y,f,t,e)||(!!o.arcline(r,i,a,u,c,h,f,t,e)||!!o.arcline(r,i,s,u,c,h,f,t,e)))},createPath:function(t){var e=this.__attrs,n=e.x,r=e.y,i=e.rs,o=e.re,a=e.startAngle,s=e.endAngle,u=e.clockwise,c={x:Math.cos(a)*i+n,y:Math.sin(a)*i+r},h={x:Math.cos(a)*o+n,y:Math.sin(a)*o+r},f={x:Math.cos(s)*i+n,y:Math.sin(s)*i+r};(t=t||self.get("context")).beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.arc(n,r,o,a,s,u),t.lineTo(f.x,f.y),t.arc(n,r,i,s,a,!u),t.closePath()}}),t.exports=u},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(6),s=n(10),u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={p1:null,p2:null,p3:null,p4:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(u,i),r.augment(u,{canStroke:!0,type:"cubic",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.p1,n=t.p2,i=t.p3,o=t.p4,a=this.getHitLineWidth(),u=void 0,c=void 0;if(r.isNil(e)||r.isNil(n)||r.isNil(i)||r.isNil(o))return null;var h=a/2,f=s.extrema(e[0],n[0],i[0],o[0]);for(u=0,c=f.length;u<c;u++)f[u]=s.at(e[0],n[0],i[0],o[0],f[u]);var l=s.extrema(e[1],n[1],i[1],o[1]);for(u=0,c=l.length;u<c;u++)l[u]=s.at(e[1],n[1],i[1],o[1],l[u]);return f.push(e[0],o[0]),l.push(e[1],o[1]),{minX:Math.min.apply(Math,f)-h,maxX:Math.max.apply(Math,f)+h,minY:Math.min.apply(Math,l)-h,maxY:Math.max.apply(Math,l)+h}},isPointInPath:function(t,e){var n=this.__attrs,r=n.p1,i=n.p2,a=n.p3,s=n.p4,u=this.getHitLineWidth();return o.cubicline(r[0],r[1],i[0],i[1],a[0],a[1],s[0],s[1],u,t,e)},createPath:function(t){var e=this.__attrs,n=e.p1,i=e.p2,o=e.p3,a=e.p4;t=t||self.get("context"),r.isNil(n)||r.isNil(i)||r.isNil(o)||r.isNil(a)||(t.beginPath(),t.moveTo(n[0],n[1]),t.bezierCurveTo(i[0],i[1],o[0],o[1],a[0],a[1]))},afterPath:function(t){var e=this.__attrs,n=e.p1,r=e.p2,i=e.p3,o=e.p4;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,r[0],r[1],n[0],n[1]),e.endArrow&&a.addEndArrow(t,e,i[0],i[1],o[0],o[1])},getPoint:function(t){var e=this.__attrs;return{x:s.at(e.p4[0],e.p3[0],e.p2[0],e.p1[0],t),y:s.at(e.p4[1],e.p3[1],e.p2[1],e.p1[1],t)}}}),t.exports=u},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(6),s=n(21),u=function t(e){t.superclass.constructor.call(this,e)};u.ATTRS={p1:null,p2:null,p3:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(u,i),r.augment(u,{canStroke:!0,type:"quadratic",getDefaultAttrs:function(){return{lineWidth:1,startArrow:!1,endArrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.p1,n=t.p2,i=t.p3,o=this.getHitLineWidth(),a=void 0,u=void 0;if(r.isNil(e)||r.isNil(n)||r.isNil(i))return null;var c=o/2,h=s.extrema(e[0],n[0],i[0]);for(a=0,u=h.length;a<u;a++)h[a]=s.at(e[0],n[0],i[0],h[a]);h.push(e[0],i[0]);var f=s.extrema(e[1],n[1],i[1]);for(a=0,u=f.length;a<u;a++)f[a]=s.at(e[1],n[1],i[1],f[a]);return f.push(e[1],i[1]),{minX:Math.min.apply(Math,h)-c,maxX:Math.max.apply(Math,h)+c,minY:Math.min.apply(Math,f)-c,maxY:Math.max.apply(Math,f)+c}},isPointInPath:function(t,e){var n=this.__attrs,r=n.p1,i=n.p2,a=n.p3,s=this.getHitLineWidth();return o.quadraticline(r[0],r[1],i[0],i[1],a[0],a[1],s,t,e)},createPath:function(t){var e=this.__attrs,n=e.p1,i=e.p2,o=e.p3;r.isNil(n)||r.isNil(i)||r.isNil(o)||((t=t||this.get("context")).beginPath(),t.moveTo(n[0],n[1]),t.quadraticCurveTo(i[0],i[1],o[0],o[1]))},afterPath:function(t){var e=this.__attrs,n=e.p1,r=e.p2,i=e.p3;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,r[0],r[1],n[0],n[1]),e.endArrow&&a.addEndArrow(t,e,r[0],r[1],i[0],i[1])},getPoint:function(t){var e=this.__attrs;return{x:s.at(e.p1[0],e.p2[0],e.p3[0],t),y:s.at(e.p1[1],e.p2[1],e.p3[1],t)}}}),t.exports=u},function(t,e,n){t.exports={svg:n(66),canvas:n(108),CommonUtil:n(7),DomUtil:n(26),MatrixUtil:n(2),PathUtil:n(13),version:"3.0.0-beta.4"}},function(t,e,n){t.exports={Canvas:n(67),Group:n(28),Shape:n(4),Rect:n(39),Circle:n(40),Ellipse:n(41),Path:n(42),Text:n(43),Line:n(44),Image:n(45),Polygon:n(46),Marker:n(47),Dom:n(48),Fan:n(49),Event:n(27)}},function(t,e,n){var r=n(0),i=n(27),o=n(28),a=function t(e){t.superclass.constructor.call(this,e)},s=new(n(103));a.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:r.getRatio()},r.extend(a,o),r.augment(a,{init:function(){a.superclass.init.call(this),this._setDOM(),this._setInitSize(),this.get("eventEnable")&&this._registEvents()},getEmitter:function(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this.getEmitter(n,e)}},_getEventObj:function(t,e,n,r){var o=new i(t,e,!0,!0);return o.x=n.x,o.y=n.y,o.clientX=e.clientX,o.clientY=e.clientY,o.currentTarget=r,o.target=r,o},_triggerEvent:function(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.findShape(e.srcElement),i=void 0;if("mousemove"===t){var o=this.get("preShape");if(o&&o!==r){var a=this._getEventObj("mouseleave",e,n,o);(i=this.getEmitter(o,e))&&i.emit("mouseleave",a)}if(r){var s=this._getEventObj("mousemove",e,n,r);if((i=this.getEmitter(r,e))&&i.emit("mousemove",s),o!==r){var u=this._getEventObj("mouseenter",e,n,r);i&&i.emit("mouseenter",u,e)}}else{var c=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",c)}this.set("preShape",r)}else{var h=this._getEventObj(t,e,n,r||this);(i=this.getEmitter(r,e))&&i!==this&&i.emit(t,h),this.emit(t,h)}var f=this.get("el");r&&!r.get("destroyed")&&(f.style.cursor=r.attr("cursor")||"default")},_registEvents:function(){var t=this,e=t.get("el");r.each(["mouseout","mouseover","mousemove","mousedown","mouseup","click","dblclick"],function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e)},!1)}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0])},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0])},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0])},!1)},_setDOM:function(){this._setContainer(),this._setLayer()},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"})},_setLayer:function(){var t=this.get("containerDOM"),e=r.uniqueId("svg_");if(t){var n=r.createDom('<svg id="'+e+'"></svg>');t.appendChild(n),n.appendChild(s.get("el")),this.set("canvasDOM",n),this.set("el",n),this.set("defs",s),this.set("canvas",this)}var i=this.get("canvasDOM");this.set("context",i)},_setInitSize:function(){this.changeSize(this.get("width"),this.get("height")),this.set("pixelRatio",1)},_resize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n)},getWidth:function(){return this.get("width")},getHeight:function(){return this.get("height")},changeSize:function(t,e){this.set("widthCanvas",t),this.set("heightCanvas",e),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize()},getPointByClient:function(t,e){var n=this.get("el").getBoundingClientRect();return{x:t-n.left,y:e-n.top}},getClientByPoint:function(t,e){var n=this.get("el").getBoundingClientRect();return{clientX:t+n.left,clientY:e+n.top}},beforeDraw:function(){this.get("el").innerHTML=""},_beginDraw:function(){this.setSilent("toDraw",!0)},_endDraw:function(){this.setSilent("toDraw",!1)},draw:function(){},destroy:function(){var t=this.get("containerDOM"),e=this.get("canvasDOM");e&&t&&t.removeChild(e),a.superclass.destroy.call(this)}}),t.exports=a},function(t,e,n){(function(t){var n,r,i,a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)};!function(o,s){"object"===a(e)&&"object"===a(t)?t.exports=s():(r=[],void 0===(i="function"==typeof(n=s)?n.apply(e,r):n)||(t.exports=i))}(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e){t.exports=function(t){return null!==t&&"function"!=typeof t&&isFinite(t.length)}},function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]"}},function(t,e,n){var r=n(1),i=Array.isArray?Array.isArray:function(t){return r(t,"Array")};t.exports=i},function(t,e,n){var r=n(1);t.exports=function(t){return r(t,"Number")}},function(t,e,n){var r=n(1);t.exports=function(t){return r(t,"String")}},function(t,e){t.exports=function(t){return function(t){return void 0===t}(t)||function(t){return null===t}(t)}},function(t,e,n){var r=n(16),i=n(2);t.exports=function(t,e){if(t)if(i(t))for(var n=0;n<t.length&&!1!==e(t[n],n);n++);else if(r(t))for(var o in t)if(t.hasOwnProperty(o)&&!1===e(t[o],o))break}},function(t,e,n){var r=n(0),i=Array.prototype.indexOf;t.exports=function(t,e){return!!r(t)&&i.call(t,e)>-1}},function(t,e,n){var r=n(0),i=Array.prototype.splice;t.exports=function(t,e){if(!r(t))return[];for(var n=t?e.length:0,o=n-1;n--;){var a=void 0,s=e[n];n!==o&&s===a||(a=s,i.call(t,s,1))}return t}},function(t,e){var n="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t)};t.exports=function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t}},function(t,e,n){var r=n(0);t.exports=function(t){return r(t)?Array.prototype.slice.call(t):[]}},function(t,e,n){var r=n(1);t.exports=function(t){return r(t,"Function")}},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n])}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t}},function(t,e,n){var r=n(5),i=n(2);t.exports=function(t,e){for(var n=null,o=0;o<t.length;o++){var a=t[o][e];if(!r(a)){n=i(a)?a[0]:a;break}}return n}},function(t,e,n){var r=n(15),i=n(2);t.exports=function(t){if(!(t=r(t,function(t){return!isNaN(t)})).length)return{min:0,max:0};if(i(t[0])){for(var e=[],n=0;n<t.length;n++)e=e.concat(t[n]);t=e}var o=Math.max.apply(null,t);return{min:Math.min.apply(null,t),max:o}}},function(t,e,n){var r=n(6),i=n(0);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){e(t,r)&&n.push(t)}),n}},function(t,e){var n="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t)};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!==t&&"object"===e||"function"===e}},function(t,e){var n=Array.prototype,r=n.splice,i=n.indexOf,o=n.slice;t.exports=function(t){for(var e=o.call(arguments,1),n=0;n<e.length;n++)for(var a=e[n],s=-1;(s=i.call(t,a))>-1;)r.call(t,s,1);return t}},function(t,e,n){var r=n(0),i=n(8);t.exports=function(t,e){var n=[];if(!r(t))return n;for(var o=-1,a=[],s=t.length;++o<s;){var u=t[o];e(u,o,t)&&(n.push(u),a.push(o))}return i(t,a),n}},function(t,e,n){var r=n(7);t.exports=function(t){var e=[];return t.forEach(function(t){r(e,t)||e.push(t)}),e}},function(t,e,n){var r=n(6),i=n(5),o=n(2);t.exports=function(t,e){for(var n=[],a={},s=0;s<t.length;s++){var u=t[s][e];i(u)||(o(u)||(u=[u]),r(u,function(t){a[t]||(n.push(t),a[t]=!0)}))}return n}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).replace(/^\[object /,"").replace(/\]$/,"")}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(9),i=n(1);t.exports=function(t){if(!r(t)||!i(t,"Object"))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}},function(t,e){t.exports=parseInt},function(t,e,n){var r=n(4);t.exports=function(t){return r(t)?t.toString().toLowerCase():t}},function(t,e,n){var r=n(4);t.exports=function(t){return r(t)?t.toString().toUpperCase():t}},function(t,e,n){t.exports={arrayUtil:n(28),stringUtil:n(29),clone:n(30),each:n(6),filter:n(15),indexOf:n(31),isEmpty:n(32),isEqual:n(33),map:n(34),toArray:n(10),uniqueId:n(35),extend:n(36),augment:n(37),deepMix:n(38),mix:n(12),clamp:n(39),fixedBase:n(40),isDecimal:n(41),isEven:n(42),isInteger:n(43),isNegative:n(44),isNumberEqual:n(45),isOdd:n(46),isPositive:n(47),mod:n(48),toDegree:n(49),toInt:n(24),toInteger:n(24),toRadian:n(50),getType:n(21),isArray:n(2),isArrayLike:n(0),isBoolean:n(51),isFunction:n(11),isNil:n(5),isNull:n(52),isNumber:n(3),isObject:n(16),isObjectLike:n(9),isPlainObject:n(23),isPrototype:n(22),isType:n(1),isUndefined:n(53),isString:n(4),isRegExp:n(54),lowerCase:n(25),lowerFirst:n(55),substitute:n(56),upperCase:n(26),upperFirst:n(57),contains:n(7),firstValue:n(13),getRange:n(14),pull:n(17),pullAt:n(8),remove:n(18),uniq:n(19),values:n(20)}},function(t,e,n){t.exports={contains:n(7),firstValue:n(13),getRange:n(14),pull:n(17),pullAt:n(8),remove:n(18),uniq:n(19),values:n(20)}},function(t,e){function n(t){return t.toString()}function r(t){return n(t).toUpperCase()}function i(t){return n(t).toLowerCase()}var o={lc:i,lowerCase:i,lowerFirst:function(t){return i((t=n(t)).charAt(0))+t.substring(1)},uc:r,upperCase:r,upperFirst:function(t){return r((t=n(t)).charAt(0))+t.substring(1)}};t.exports=o},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t)},i=n(2);t.exports=function t(e){if("object"!==(void 0===e?"undefined":r(e))||null===e)return e;var n=void 0;if(i(e)){n=[];for(var o=0,a=e.length;o<a;o++)"object"===r(e[o])&&null!=e[o]?n[o]=t(e[o]):n[o]=e[o]}else for(var s in n={},e)"object"===r(e[s])&&null!=e[s]?n[s]=t(e[s]):n[s]=e[s];return n}},function(t,e,n){var r=n(0);t.exports=function(t,e){if(!r(t))return-1;var n=Array.prototype.indexOf;if(n)return n.call(t,e);for(var i=-1,o=0;o<t.length;o++)if(t[o]===e){i=o;break}return i}},function(t,e,n){var r=n(5),i=n(0),o=n(21),a=n(22),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(r(t))return!0;if(i(t))return!t.length;var e=o(t);if("Map"===e||"Set"===e)return!t.size;if(a(t))return!Object.keys(t).length;for(var n in t)if(s.call(t,n))return!1;return!0}},function(t,e,n){var r=n(9),i=n(0);t.exports=function t(e,n){if(e===n)return!0;if(!e||!n)return!1;if(i(e)||i(n)){if(e.length!==n.length)return!1;for(var o=!0,a=0;a<e.length&&(o=t(e[a],n[a]));a++);return o}if(r(e)||r(n)){var s=Object.keys(e),u=Object.keys(n);if(s.length!==u.length)return!1;for(var c=!0,h=0;h<s.length&&(c=t(e[s[h]],n[s[h]]));h++);return c}return!1}},function(t,e,n){var r=n(6),i=n(0);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){n.push(e(t,r))}),n}},function(t,e){var n=function(){var t={};return function(e){return t[e=e||"g"]?t[e]+=1:t[e]=1,e+t[e]}}();t.exports=n},function(t,e,n){var r=n(11),i=n(12);t.exports=function(t,e,n,o){r(e)||(n=e,e=t,t=function(){});var a=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}})}:function(t,e){function n(){}n.prototype=t;var r=new n;return r.constructor=e,r},s=a(e.prototype,t);return t.prototype=i(s,t.prototype),t.superclass=a(e.prototype,e),i(s,n),i(t,o),t}},function(t,e,n){var r=n(11),i=n(10),o=n(12);t.exports=function(t){for(var e=i(arguments),n=1;n<e.length;n++){var a=e[n];r(a)&&(a=a.prototype),o(t.prototype,a)}}},function(t,e,n){var r=n(23),i=n(2),o=n(10),a=5;function s(t,e,n,o){for(var u in n=n||0,o=o||a,e)if(e.hasOwnProperty(u)){var c=e[u];null!==c&&r(c)?(r(t[u])||(t[u]={}),n<o?s(t[u],c,n+1,o):t[u]=e[u]):i(c)?(t[u]=[],t[u]=t[u].concat(c)):void 0!==c&&(t[u]=c)}}t.exports=function(){for(var t=o(arguments),e=t[0],n=1;n<t.length;n++)s(e,t[n]);return e}},function(t,e){t.exports=function(t,e,n){return t<e?e:t>n?n:t}},function(t,e){t.exports=function(t,e){var n=e.toString(),r=n.indexOf(".");if(-1===r)return Math.round(t);var i=n.substr(r+1).length;return i>20&&(i=20),parseFloat(t.toFixed(i))}},function(t,e,n){var r=n(3);t.exports=function(t){return r(t)&&t%1!=0}},function(t,e,n){var r=n(3);t.exports=function(t){return r(t)&&t%2==0}},function(t,e,n){var r=n(3),i=Number.isInteger?Number.isInteger:function(t){return r(t)&&t%1==0};t.exports=i},function(t,e,n){var r=n(3);t.exports=function(t){return r(t)&&t<0}},function(t,e){t.exports=function(t,e){return Math.abs(t-e)<1e-5}},function(t,e,n){var r=n(3);t.exports=function(t){return r(t)&&t%2!=0}},function(t,e,n){var r=n(3);t.exports=function(t){return r(t)&&t>0}},function(t,e){t.exports=function(t,e){return(t%e+e)%e}},function(t,e){var n=180/Math.PI;t.exports=function(t){return n*t}},function(t,e){var n=Math.PI/180;t.exports=function(t){return n*t}},function(t,e,n){var r=n(1);t.exports=function(t){return r(t,"Boolean")}},function(t,e){t.exports=function(t){return null===t}},function(t,e){t.exports=function(t){return void 0===t}},function(t,e,n){var r=n(1);t.exports=function(t){return r(t,"RegExp")}},function(t,e,n){var r=n(4),i=n(25);t.exports=function(t){return r(t)?i(t.charAt(0))+t.substring(1):t}},function(t,e){t.exports=function(t,e){return t&&e?t.replace(/\\?\{([^{}]+)\}/g,function(t,n){return"\\"===t.charAt(0)?t.slice(1):void 0===e[n]?"":e[n]}):t}},function(t,e,n){var r=n(4),i=n(26);t.exports=function(t){return r(t)?i(t.charAt(0))+t.substring(1):t}}])})}).call(e,n(69)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(0),i=["strokeStyle","fillStyle","globalAlpha"],o={r:"R",opacity:"Opacity",lineWidth:"LineWidth",clip:"Clip",stroke:"Stroke",fill:"Fill",strokeOpacity:"Stroke",fillOpacity:"Fill",x:"X",y:"Y",rx:"Rx",ry:"Ry",re:"Re",rs:"Rs",width:"Width",height:"Height",img:"Img",x1:"X1",x2:"X2",y1:"Y1",y2:"Y2",points:"Points",p1:"P1",p2:"P2",p3:"P3",p4:"P4",text:"Text",radius:"Radius",textAlign:"TextAlign",textBaseline:"TextBaseline",font:"Font",fontSize:"FontSize",fontStyle:"FontStyle",fontVariant:"FontVariant",fontWeight:"FontWeight",fontFamily:"FontFamily",clockwise:"Clockwise",startAngle:"StartAngle",endAngle:"EndAngle",path:"Path",outline:"Outline",html:"Html"},a={opacity:"opacity",clip:"clip",stroke:"stroke",fill:"fill",strokeOpacity:"stroke-opacity",fillOpacity:"fill-opacity",strokeStyle:"stroke",fillStyle:"fill",x:"x",y:"y",r:"r",rx:"rx",ry:"ry",re:"re",rs:"rs",width:"width",height:"height",image:"href",x1:"x1",x2:"x2",y1:"y1",y2:"y2",lineCap:"stroke-linecap",lineJoin:"stroke-linejoin",lineWidth:"stroke-width",lineDash:"stroke-dasharray",miterLimit:"stroke-miterlimit",font:"font",fontSize:"font-size",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",fontFamily:"font-family",startArrow:"marker-start",endArrow:"marker-end",preserveAspectRatio:"preserveAspectRatio"},s={stroke:"strokeStyle",fill:"fillStyle",opacity:"globalAlpha"};t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this.__attrs={opacity:1,fillOpacity:1,strokeOpacity:1},this.attr(r.assign(this.getDefaultAttrs(),t)),this},getDefaultAttrs:function(){return{}},attr:function(t,e){if(0===arguments.length)return this.__attrs;if(r.isObject(t)){for(var n in t)if(-1===i.indexOf(n)){var a=t[n];this._setAttr(n,a)}return this._afterSetAttrAll&&this._afterSetAttrAll(t),this.clearBBox(),this}if(2===arguments.length){this._setAttr(t,e);var s="_afterSetAttr"+o[t];return o[t]&&this[s]&&this[s](e),this.clearBBox(),this}return this._getAttr(t)},clearBBox:function(){this.setSilent("box",null)},_afterSetAttrAll:function(){},_getAttr:function(t){return this.__attrs[t]},_setAttr:function(t,e){var n=this.get("el");if("clip"!==t){if(this.__attrs[t]=e,!("number"==typeof e&&isNaN(e)||this.get("destroyed"))){if("transform"===t||"rotate"===t)this._setAttrTrans(t,e);else if(t.startsWith("shadow"))this._setAttrShadow(t,e);else if(~["stroke","strokeStyle","fill","fillStyle"].indexOf(t)&&n)e?/^[r,R,L,l]{1}[\s]*\(/.test(e.trim())?this._setAttrGradients(t,e.trim()):n.setAttribute(a[t],e):n.setAttribute(a[t],"none");else if(~t.toLowerCase().indexOf("arrow")){if(!e)return this;this._setAttrArrow(t,e)}else if(~["circle","ellipse","marker"].indexOf(this.type)&&~["x","y"].indexOf(t))"marker"!==this.type&&"number"==typeof e&&n.setAttribute("c"+t,e);else{var r=a[t];n&&r&&n.setAttribute(r,e);var i=s[t];i&&(r=a[i],n&&r&&n.setAttribute(r,e),this.__attrs[i]=e)}return this}}else this._setAttrClip(t,e)},hasFill:function(){return this.canFill&&this.__attrs.fillStyle},hasStroke:function(){return this.canStroke&&this.__attrs.strokeStyle},_setAttrArrow:function(t,e){var n=this.get("el"),r=this.get("defs");if(!r){var i=this.get("canvas");if(!i)return this._setAttrDependency(t,e),this;r=i.get("defs")}if(!(t=a[t]))return this;if(!e)return n.removeAttribute(t),this;var o=r.find(t,{value:e,stroke:this.__attrs.stroke});o||(o=r.addArrow(t,e,this.__attrs.stroke)),this.__cfg[t]=o,this.get("el").setAttribute(t,"url(#"+o+")")},_setAttrShadow:function(t,e){var n=this.__attrs,r=this.get("filter"),i=this.get("defs");if(!e)return this.get("el").removeAttribute("filter"),this;if(r)return i.findById(r).update(t,e),this;if(!i){var o=this.get("canvas");if(!o)return this._setAttrDependency(t,e),this;i=o.get("defs")}var a={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(isNaN(Number(a.dx))||isNaN(Number(a.dy)))return this;var s=i.find("filter",a);s||(s=i.addShadow(a,this)),this.__cfg.filter=s,this.get("el").setAttribute("filter","url(#"+s+")")},_setAttrGradients:function(t,e){t=t.replace("Style","");var n=this.get("defs");if(!e)return this.get("el").removeAttribute("gradient"),this;if(!n){var r=this.get("canvas");if(!r)return this._setAttrDependency(t,e),this;n=r.get("defs")}var i=n.find("gradient",e);i||(i=n.addGradient(e,this)),this.get("el").setAttribute(t,"url(#"+i+")")},_setAttrDependency:function(t,e){var n=this.get("dependencies");return n||(n={}),n[t]=e,this.__cfg.dependencies=n,this},_setAttrClip:function(t,e){var n=this.get("defs"),r=this.get("canvas");if(!e)return this.get("el").removeAttribute("clip-path"),this;if(!n){var i=this.get("canvas");if(!i)return this._setAttrDependency(t,e),this;n=i.get("defs")}e.__cfg.canvas=r;var o=n.addClip(e);this.get("el").setAttribute("clip-path","url(#"+o+")")},_setAttrTrans:function(t,e){var n=this.__attrs;if(e||this.get("el").removeAttribute("transform"),n.matrix||this.initTransform(),"transform"===t)this.transform(e);else{if(void 0===n.x||void 0===n.y)return this._setAttrDependency(t,e),this;this.rotateAtStart(e)}return this}}},function(t,e,n){var r=n(0),i=n(2).mat3,o=n(2).vec3;t.exports={initTransform:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1])},translate:function(t,e,n){var r=this.attr("matrix");return i.translate(r,r,[t,e]),this.attr("matrix",r),(2===arguments.length||n)&&this._performTransform(),this},rotate:function(t,e){var n=this.attr("matrix");return Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),i.rotate(n,n,t),this.attr("matrix",n),(1===arguments.length||e)&&this._performTransform(),this},rotateAtStart:function(t){var e=this.attr("x"),n=this.attr("y");Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]])},scale:function(t,e,n){var r=this.attr("matrix");return i.scale(r,r,[t,e]),this.attr("matrix",r),(2===arguments.length||n)&&this._performTransform(),this},move:function(t,e){var n=this.get("x")||0,r=this.get("y")||0;this.translate(t-n,e-r),this.set("x",t),this.set("y",e)},_performTransform:function(){for(var t=this.__attrs.matrix,e=[],n=0;n<9;n+=3)e.push(t[n]+","+t[n+1]);var r=this.get("el");r&&r.setAttribute("transform","matrix("+e.join(",")+")")},transform:function(t){var e=this,n=e.attr("matrix");return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2],!1);break;case"s":e.scale(t[1],t[2],!1);break;case"r":e.rotate(t[1],!1);break;case"m":e.attr("matrix",i.multiply([],n,t[1]))}}),this._performTransform(),e},setTransform:function(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t)},getMatrix:function(){return this.attr("matrix")},setMatrix:function(t){return this.attr("matrix",t),this._performTransform(),this.clearTotalMatrix(),this},apply:function(t,e){var n=void 0;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),o.transformMat3(t,t,n),this},invert:function(t){var e=this.attr("matrix");if(function(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7]}(e))t[0]/=e[0],t[1]/=e[4];else{var n=i.invert([],e);n&&o.transformMat3(t,t,n)}return this},resetTransform:function(t){var e=this.attr("matrix");(function(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7]})(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7])}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=function(){var t=new r.a(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},e.clone=function(t){var e=new r.a(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromValues=function(t,e,n,i,o,a,s,u,c){var h=new r.a(9);return h[0]=t,h[1]=e,h[2]=n,h[3]=i,h[4]=o,h[5]=a,h[6]=s,h[7]=u,h[8]=c,h},e.set=function(t,e,n,r,i,o,a,s,u,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=o,t[5]=a,t[6]=s,t[7]=u,t[8]=c,t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.transpose=function(t,e){if(t===e){var n=e[1],r=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},e.invert=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],u=e[6],c=e[7],h=e[8],f=h*a-s*c,l=-h*o+s*u,p=c*o-a*u,d=n*f+r*l+i*p;if(!d)return null;return d=1/d,t[0]=f*d,t[1]=(-h*r+i*c)*d,t[2]=(s*r-i*a)*d,t[3]=l*d,t[4]=(h*n-i*u)*d,t[5]=(-s*n+i*o)*d,t[6]=p*d,t[7]=(-c*n+r*u)*d,t[8]=(a*n-r*o)*d,t},e.adjoint=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],u=e[6],c=e[7],h=e[8];return t[0]=a*h-s*c,t[1]=i*c-r*h,t[2]=r*s-i*a,t[3]=s*u-o*h,t[4]=n*h-i*u,t[5]=i*o-n*s,t[6]=o*c-a*u,t[7]=r*u-n*c,t[8]=n*a-r*o,t},e.determinant=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],a=t[5],s=t[6],u=t[7],c=t[8];return e*(c*o-a*u)+n*(-c*i+a*s)+r*(u*i-o*s)},e.multiply=i,e.translate=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],p=n[1];return t[0]=r,t[1]=i,t[2]=o,t[3]=a,t[4]=s,t[5]=u,t[6]=l*r+p*a+c,t[7]=l*i+p*s+h,t[8]=l*o+p*u+f,t},e.rotate=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=Math.sin(n),p=Math.cos(n);return t[0]=p*r+l*a,t[1]=p*i+l*s,t[2]=p*o+l*u,t[3]=p*a-l*r,t[4]=p*s-l*i,t[5]=p*u-l*o,t[6]=c,t[7]=h,t[8]=f,t},e.scale=function(t,e,n){var r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t},e.fromRotation=function(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},e.fromQuat=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=n+n,s=r+r,u=i+i,c=n*a,h=r*a,f=r*s,l=i*a,p=i*s,d=i*u,g=o*a,v=o*s,m=o*u;return t[0]=1-f-d,t[3]=h-m,t[6]=l+v,t[1]=h+m,t[4]=1-c-d,t[7]=p-g,t[2]=l-v,t[5]=p+g,t[8]=1-c-f,t},e.normalFromMat4=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],u=e[6],c=e[7],h=e[8],f=e[9],l=e[10],p=e[11],d=e[12],g=e[13],v=e[14],m=e[15],y=n*s-r*a,x=n*u-i*a,b=n*c-o*a,_=r*u-i*s,w=r*c-o*s,M=i*c-o*u,S=h*g-f*d,A=h*v-l*d,E=h*m-p*d,P=f*v-l*g,O=f*m-p*g,j=l*m-p*v,I=y*j-x*O+b*P+_*E-w*A+M*S;if(!I)return null;return I=1/I,t[0]=(s*j-u*O+c*P)*I,t[1]=(u*E-a*j-c*A)*I,t[2]=(a*O-s*E+c*S)*I,t[3]=(i*O-r*j-o*P)*I,t[4]=(n*j-i*E+o*A)*I,t[5]=(r*E-n*O-o*S)*I,t[6]=(g*M-v*w+m*_)*I,t[7]=(v*b-d*M-m*x)*I,t[8]=(d*w-g*b+m*y)*I,t},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},e.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t},e.subtract=o,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t},e.multiplyScalarAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]},e.equals=function(t,e){var n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],u=t[5],c=t[6],h=t[7],f=t[8],l=e[0],p=e[1],d=e[2],g=e[3],v=e[4],m=e[5],y=e[6],x=e[7],b=e[8];return Math.abs(n-l)<=r.b*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-p)<=r.b*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(o-d)<=r.b*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(a-g)<=r.b*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(s-v)<=r.b*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(u-m)<=r.b*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-y)<=r.b*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(h-x)<=r.b*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(f-b)<=r.b*Math.max(1,Math.abs(f),Math.abs(b))},n.d(e,"mul",function(){return a}),n.d(e,"sub",function(){return s});var r=n(12);function i(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],p=n[1],d=n[2],g=n[3],v=n[4],m=n[5],y=n[6],x=n[7],b=n[8];return t[0]=l*r+p*a+d*c,t[1]=l*i+p*s+d*h,t[2]=l*o+p*u+d*f,t[3]=g*r+v*a+m*c,t[4]=g*i+v*s+m*h,t[5]=g*o+v*u+m*f,t[6]=y*r+x*a+b*c,t[7]=y*i+x*s+b*h,t[8]=y*o+x*u+b*f,t}function o(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t}var a=i,s=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=i,e.clone=function(t){var e=new r.a(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},e.length=o,e.fromValues=a,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},e.set=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},e.subtract=s,e.multiply=u,e.divide=c,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t},e.distance=h,e.squaredDistance=f,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},e.normalize=p,e.dot=d,e.cross=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[0],s=n[1],u=n[2];return t[0]=i*u-o*s,t[1]=o*a-r*u,t[2]=r*s-i*a,t},e.lerp=function(t,e,n,r){var i=e[0],o=e[1],a=e[2];return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t[2]=a+r*(n[2]-a),t},e.hermite=function(t,e,n,r,i,o){var a=o*o,s=a*(2*o-3)+1,u=a*(o-2)+o,c=a*(o-1),h=a*(3-2*o);return t[0]=e[0]*s+n[0]*u+r[0]*c+i[0]*h,t[1]=e[1]*s+n[1]*u+r[1]*c+i[1]*h,t[2]=e[2]*s+n[2]*u+r[2]*c+i[2]*h,t},e.bezier=function(t,e,n,r,i,o){var a=1-o,s=a*a,u=o*o,c=s*a,h=3*o*s,f=3*u*a,l=u*o;return t[0]=e[0]*c+n[0]*h+r[0]*f+i[0]*l,t[1]=e[1]*c+n[1]*h+r[1]*f+i[1]*l,t[2]=e[2]*c+n[2]*h+r[2]*f+i[2]*l,t},e.random=function(t,e){e=e||1;var n=2*r.c()*Math.PI,i=2*r.c()-1,o=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(n)*o,t[1]=Math.sin(n)*o,t[2]=i*e,t},e.transformMat4=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[3]*r+n[7]*i+n[11]*o+n[15];return a=a||1,t[0]=(n[0]*r+n[4]*i+n[8]*o+n[12])/a,t[1]=(n[1]*r+n[5]*i+n[9]*o+n[13])/a,t[2]=(n[2]*r+n[6]*i+n[10]*o+n[14])/a,t},e.transformMat3=function(t,e,n){var r=e[0],i=e[1],o=e[2];return t[0]=r*n[0]+i*n[3]+o*n[6],t[1]=r*n[1]+i*n[4]+o*n[7],t[2]=r*n[2]+i*n[5]+o*n[8],t},e.transformQuat=function(t,e,n){var r=n[0],i=n[1],o=n[2],a=n[3],s=e[0],u=e[1],c=e[2],h=i*c-o*u,f=o*s-r*c,l=r*u-i*s,p=i*l-o*f,d=o*h-r*l,g=r*f-i*h,v=2*a;return h*=v,f*=v,l*=v,p*=2,d*=2,g*=2,t[0]=s+h+p,t[1]=u+f+d,t[2]=c+l+g,t},e.rotateX=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0],o[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),o[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t},e.rotateY=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),o[1]=i[1],o[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t},e.rotateZ=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),o[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),o[2]=i[2],t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t},e.angle=function(t,e){var n=a(t[0],t[1],t[2]),r=a(e[0],e[1],e[2]);p(n,n),p(r,r);var i=d(n,r);return i>1?0:i<-1?Math.PI:Math.acos(i)},e.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]},e.equals=function(t,e){var n=t[0],i=t[1],o=t[2],a=e[0],s=e[1],u=e[2];return Math.abs(n-a)<=r.b*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-s)<=r.b*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(o-u)<=r.b*Math.max(1,Math.abs(o),Math.abs(u))},n.d(e,"sub",function(){return g}),n.d(e,"mul",function(){return v}),n.d(e,"div",function(){return m}),n.d(e,"dist",function(){return y}),n.d(e,"sqrDist",function(){return x}),n.d(e,"len",function(){return b}),n.d(e,"sqrLen",function(){return _}),n.d(e,"forEach",function(){return w});var r=n(12);function i(){var t=new r.a(3);return t[0]=0,t[1]=0,t[2]=0,t}function o(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r)}function a(t,e,n){var i=new r.a(3);return i[0]=t,i[1]=e,i[2]=n,i}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function h(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i)}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}function l(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r}function p(t,e){var n=e[0],r=e[1],i=e[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o),t}function d(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}var g=s,v=u,m=c,y=h,x=f,b=o,_=l,w=function(){var t=i();return function(e,n,r,i,o,a){var s=void 0,u=void 0;for(n||(n=3),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],o(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=i,e.clone=function(t){var e=new r.a(2);return e[0]=t[0],e[1]=t[1],e},e.fromValues=function(t,e){var n=new r.a(2);return n[0]=t,n[1]=e,n},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},e.set=function(t,e,n){return t[0]=e,t[1]=n,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},e.subtract=o,e.multiply=a,e.divide=s,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t},e.distance=u,e.squaredDistance=c,e.length=h,e.squaredLength=f,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},e.normalize=function(t,e){var n=e[0],r=e[1],i=n*n+r*r;i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i);return t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},e.cross=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},e.lerp=function(t,e,n,r){var i=e[0],o=e[1];return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t},e.random=function(t,e){e=e||1;var n=2*r.c()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t},e.transformMat2=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i,t[1]=n[1]*r+n[3]*i,t},e.transformMat2d=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t},e.transformMat3=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t},e.transformMat4=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t},e.rotate=function(t,e,n,r){var i=e[0]-n[0],o=e[1]-n[1],a=Math.sin(r),s=Math.cos(r);return t[0]=i*s-o*a+n[0],t[1]=i*a+o*s+n[1],t},e.angle=function(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],a=n*n+r*r;a>0&&(a=1/Math.sqrt(a));var s=i*i+o*o;s>0&&(s=1/Math.sqrt(s));var u=(n*i+r*o)*a*s;return u>1?0:u<-1?Math.PI:Math.acos(u)},e.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]},e.equals=function(t,e){var n=t[0],i=t[1],o=e[0],a=e[1];return Math.abs(n-o)<=r.b*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-a)<=r.b*Math.max(1,Math.abs(i),Math.abs(a))},n.d(e,"len",function(){return l}),n.d(e,"sub",function(){return p}),n.d(e,"mul",function(){return d}),n.d(e,"div",function(){return g}),n.d(e,"dist",function(){return v}),n.d(e,"sqrDist",function(){return m}),n.d(e,"sqrLen",function(){return y}),n.d(e,"forEach",function(){return x});var r=n(12);function i(){var t=new r.a(2);return t[0]=0,t[1]=0,t}function o(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function a(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function s(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function u(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function h(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function f(t){var e=t[0],n=t[1];return e*e+n*n}var l=h,p=o,d=a,g=s,v=u,m=c,y=f,x=function(){var t=i();return function(e,n,r,i,o,a){var s=void 0,u=void 0;for(n||(n=2),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],o(t,t,a),e[s]=t[0],e[s+1]=t[1];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(76);n.d(e,"easeLinear",function(){return r.a});var i=n(77);n.d(e,"easeQuad",function(){return i.b}),n.d(e,"easeQuadIn",function(){return i.a}),n.d(e,"easeQuadOut",function(){return i.c}),n.d(e,"easeQuadInOut",function(){return i.b});var o=n(78);n.d(e,"easeCubic",function(){return o.b}),n.d(e,"easeCubicIn",function(){return o.a}),n.d(e,"easeCubicOut",function(){return o.c}),n.d(e,"easeCubicInOut",function(){return o.b});var a=n(79);n.d(e,"easePoly",function(){return a.b}),n.d(e,"easePolyIn",function(){return a.a}),n.d(e,"easePolyOut",function(){return a.c}),n.d(e,"easePolyInOut",function(){return a.b});var s=n(80);n.d(e,"easeSin",function(){return s.b}),n.d(e,"easeSinIn",function(){return s.a}),n.d(e,"easeSinOut",function(){return s.c}),n.d(e,"easeSinInOut",function(){return s.b});var u=n(81);n.d(e,"easeExp",function(){return u.b}),n.d(e,"easeExpIn",function(){return u.a}),n.d(e,"easeExpOut",function(){return u.c}),n.d(e,"easeExpInOut",function(){return u.b});var c=n(82);n.d(e,"easeCircle",function(){return c.b}),n.d(e,"easeCircleIn",function(){return c.a}),n.d(e,"easeCircleOut",function(){return c.c}),n.d(e,"easeCircleInOut",function(){return c.b});var h=n(83);n.d(e,"easeBounce",function(){return h.c}),n.d(e,"easeBounceIn",function(){return h.a}),n.d(e,"easeBounceOut",function(){return h.c}),n.d(e,"easeBounceInOut",function(){return h.b});var f=n(84);n.d(e,"easeBack",function(){return f.b}),n.d(e,"easeBackIn",function(){return f.a}),n.d(e,"easeBackOut",function(){return f.c}),n.d(e,"easeBackInOut",function(){return f.b});var l=n(85);n.d(e,"easeElastic",function(){return l.c}),n.d(e,"easeElasticIn",function(){return l.a}),n.d(e,"easeElasticOut",function(){return l.c}),n.d(e,"easeElasticInOut",function(){return l.b})},function(t,e,n){"use strict";e.a=function(t){return+t}},function(t,e,n){"use strict";e.a=function(t){return t*t},e.c=function(t){return t*(2-t)},e.b=function(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}},function(t,e,n){"use strict";e.a=function(t){return t*t*t},e.c=function(t){return--t*t*t+1},e.b=function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o});var r=function t(e){function n(t){return Math.pow(t,e)}return e=+e,n.exponent=t,n}(3),i=function t(e){function n(t){return 1-Math.pow(1-t,e)}return e=+e,n.exponent=t,n}(3),o=function t(e){function n(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,n.exponent=t,n}(3)},function(t,e,n){"use strict";e.a=function(t){return 1-Math.cos(t*i)},e.c=function(t){return Math.sin(t*i)},e.b=function(t){return(1-Math.cos(r*t))/2};var r=Math.PI,i=r/2},function(t,e,n){"use strict";e.a=function(t){return Math.pow(2,10*t-10)},e.c=function(t){return 1-Math.pow(2,-10*t)},e.b=function(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}},function(t,e,n){"use strict";e.a=function(t){return 1-Math.sqrt(1-t*t)},e.c=function(t){return Math.sqrt(1- --t*t)},e.b=function(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}},function(t,e,n){"use strict";e.a=function(t){return 1-p(1-t)},e.c=p,e.b=function(t){return((t*=2)<=1?1-p(1-t):p(t-1)+1)/2};var r=4/11,i=6/11,o=8/11,a=.75,s=9/11,u=10/11,c=.9375,h=21/22,f=63/64,l=1/r/r;function p(t){return(t=+t)<r?l*t*t:t<o?l*(t-=i)*t+a:t<u?l*(t-=s)*t+c:l*(t-=h)*t+f}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o});var r=function t(e){function n(t){return t*t*((e+1)*t-e)}return e=+e,n.overshoot=t,n}(1.70158),i=function t(e){function n(t){return--t*t*((e+1)*t+e)+1}return e=+e,n.overshoot=t,n}(1.70158),o=function t(e){function n(t){return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}return e=+e,n.overshoot=t,n}(1.70158)},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a});var r=2*Math.PI,i=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function o(t){return e*Math.pow(2,10*--t)*Math.sin((i-t)/n)}return o.amplitude=function(e){return t(e,n*r)},o.period=function(n){return t(e,n)},o}(1,.3),o=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function o(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/n)}return o.amplitude=function(e){return t(e,n*r)},o.period=function(n){return t(e,n)},o}(1,.3),a=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function o(t){return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((i-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((i+t)/n))/2}return o.amplitude=function(e){return t(e,n*r)},o.period=function(n){return t(e,n)},o}(1,.3)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14);n.d(e,"now",function(){return r.b}),n.d(e,"timer",function(){return r.c}),n.d(e,"timerFlush",function(){return r.d});var i=n(87);n.d(e,"timeout",function(){return i.a});var o=n(88);n.d(e,"interval",function(){return o.a})},function(t,e,n){"use strict";var r=n(14);e.a=function(t,e,n){var i=new r.a;return e=null==e?0:+e,i.restart(function(n){i.stop(),t(n+e)},e,n),i}},function(t,e,n){"use strict";var r=n(14);e.a=function(t,e,n){var i=new r.a,o=e;return null==e?(i.restart(t,e,n),i):(e=+e,n=null==n?Object(r.b)():+n,i.restart(function r(a){a+=o,i.restart(r,o+=e,n),t(a)},e,n),i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15);n.d(e,"interpolate",function(){return r.a});var i=n(34);n.d(e,"interpolateArray",function(){return i.a});var o=n(18);n.d(e,"interpolateBasis",function(){return o.b});var a=n(32);n.d(e,"interpolateBasisClosed",function(){return a.a});var s=n(35);n.d(e,"interpolateDate",function(){return s.a});var u=n(9);n.d(e,"interpolateNumber",function(){return u.a});var c=n(36);n.d(e,"interpolateObject",function(){return c.a});var h=n(92);n.d(e,"interpolateRound",function(){return h.a});var f=n(37);n.d(e,"interpolateString",function(){return f.a});var l=n(93);n.d(e,"interpolateTransformCss",function(){return l.a}),n.d(e,"interpolateTransformSvg",function(){return l.b});var p=n(96);n.d(e,"interpolateZoom",function(){return p.a});var d=n(31);n.d(e,"interpolateRgb",function(){return d.a}),n.d(e,"interpolateRgbBasis",function(){return d.b}),n.d(e,"interpolateRgbBasisClosed",function(){return d.c});var g=n(97);n.d(e,"interpolateHsl",function(){return g.a}),n.d(e,"interpolateHslLong",function(){return g.b});var v=n(98);n.d(e,"interpolateLab",function(){return v.a});var m=n(99);n.d(e,"interpolateHcl",function(){return m.a}),n.d(e,"interpolateHclLong",function(){return m.b});var y=n(100);n.d(e,"interpolateCubehelix",function(){return y.b}),n.d(e,"interpolateCubehelixLong",function(){return y.a});var x=n(101);n.d(e,"quantize",function(){return x.a})},function(t,e,n){"use strict";e.a=d,e.b=b;var r=n(17),i=n(16),o=n(30),a=.95047,s=1,u=1.08883,c=4/29,h=6/29,f=3*h*h,l=h*h*h;function p(t){if(t instanceof g)return new g(t.l,t.a,t.b,t.opacity);if(t instanceof _){var e=t.h*o.a;return new g(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof i.b||(t=Object(i.h)(t));var n=x(t.r),r=x(t.g),c=x(t.b),h=v((.4124564*n+.3575761*r+.1804375*c)/a),f=v((.2126729*n+.7151522*r+.072175*c)/s);return new g(116*f-16,500*(h-f),200*(f-v((.0193339*n+.119192*r+.9503041*c)/u)),t.opacity)}function d(t,e,n,r){return 1===arguments.length?p(t):new g(t,e,n,null==r?1:r)}function g(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function v(t){return t>l?Math.pow(t,1/3):t/f+c}function m(t){return t>h?t*t*t:f*(t-c)}function y(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function x(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function b(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof _)return new _(t.h,t.c,t.l,t.opacity);t instanceof g||(t=p(t));var e=Math.atan2(t.b,t.a)*o.b;return new _(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new _(t,e,n,null==r?1:r)}function _(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}Object(r.a)(g,d,Object(r.b)(i.a,{brighter:function(t){return new g(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new g(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return t=s*m(t),e=a*m(e),n=u*m(n),new i.b(y(3.2404542*e-1.5371385*t-.4985314*n),y(-.969266*e+1.8760108*t+.041556*n),y(.0556434*e-.2040259*t+1.0572252*n),this.opacity)}})),Object(r.a)(_,b,Object(r.b)(i.a,{brighter:function(t){return new _(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new _(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return p(this).rgb()}}))},function(t,e,n){"use strict";e.a=d;var r=n(17),i=n(16),o=n(30),a=-.14861,s=1.78277,u=-.29227,c=-.90649,h=1.97294,f=h*c,l=h*s,p=s*u-c*a;function d(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof g)return new g(t.h,t.s,t.l,t.opacity);t instanceof i.b||(t=Object(i.h)(t));var e=t.r/255,n=t.g/255,r=t.b/255,a=(p*r+f*e-l*n)/(p+f-l),s=r-a,d=(h*(n-a)-u*s)/c,v=Math.sqrt(d*d+s*s)/(h*a*(1-a)),m=v?Math.atan2(d,s)*o.b-120:NaN;return new g(m<0?m+360:m,v,a,t.opacity)}(t):new g(t,e,n,null==r?1:r)}function g(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}Object(r.a)(g,d,Object(r.b)(i.a,{brighter:function(t){return t=null==t?i.c:Math.pow(i.c,t),new g(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?i.d:Math.pow(i.d,t),new g(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*o.a,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),f=Math.sin(t);return new i.b(255*(e+n*(a*r+s*f)),255*(e+n*(u*r+c*f)),255*(e+n*(h*r)),this.opacity)}}))},function(t,e,n){"use strict";e.a=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r=n(9),i=n(94);function o(t,e,n,i){function o(t){return t.length?t.pop()+" ":""}return function(a,s){var u=[],c=[];return a=t(a),s=t(s),function(t,i,o,a,s,u){if(t!==o||i!==a){var c=s.push("translate(",null,e,null,n);u.push({i:c-4,x:Object(r.a)(t,o)},{i:c-2,x:Object(r.a)(i,a)})}else(o||a)&&s.push("translate("+o+e+a+n)}(a.translateX,a.translateY,s.translateX,s.translateY,u,c),function(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(o(n)+"rotate(",null,i)-2,x:Object(r.a)(t,e)})):e&&n.push(o(n)+"rotate("+e+i)}(a.rotate,s.rotate,u,c),function(t,e,n,a){t!==e?a.push({i:n.push(o(n)+"skewX(",null,i)-2,x:Object(r.a)(t,e)}):e&&n.push(o(n)+"skewX("+e+i)}(a.skewX,s.skewX,u,c),function(t,e,n,i,a,s){if(t!==n||e!==i){var u=a.push(o(a)+"scale(",null,",",null,")");s.push({i:u-4,x:Object(r.a)(t,n)},{i:u-2,x:Object(r.a)(e,i)})}else 1===n&&1===i||a.push(o(a)+"scale("+n+","+i+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,u,c),a=s=null,function(t){for(var e,n=-1,r=c.length;++n<r;)u[(e=c[n]).i]=e.x(t);return u.join("")}}}var a=o(i.a,"px, ","px)","deg)"),s=o(i.b,", ",")",")")},function(t,e,n){"use strict";e.a=function(t){if("none"===t)return s.b;r||(r=document.createElement("DIV"),i=document.documentElement,o=document.defaultView);return r.style.transform=t,t=o.getComputedStyle(i.appendChild(r),null).getPropertyValue("transform"),i.removeChild(r),t=t.slice(7,-1).split(","),Object(s.a)(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5])},e.b=function(t){if(null==t)return s.b;a||(a=document.createElementNS("http://www.w3.org/2000/svg","g"));return a.setAttribute("transform",t),(t=a.transform.baseVal.consolidate())?(t=t.matrix,Object(s.a)(t.a,t.b,t.c,t.d,t.e,t.f)):s.b};var r,i,o,a,s=n(95)},function(t,e,n){"use strict";n.d(e,"b",function(){return i});var r=180/Math.PI,i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};e.a=function(t,e,n,i,o,a){var s,u,c;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(u=Math.sqrt(n*n+i*i))&&(n/=u,i/=u,c/=u),t*i<e*n&&(t=-t,e=-e,c=-c,s=-s),{translateX:o,translateY:a,rotate:Math.atan2(e,t)*r,skewX:Math.atan(c)*r,scaleX:s,scaleY:u}}},function(t,e,n){"use strict";var r=Math.SQRT2;function i(t){return((t=Math.exp(t))+1/t)/2}e.a=function(t,e){var n,o,a=t[0],s=t[1],u=t[2],c=e[0],h=e[1],f=e[2],l=c-a,p=h-s,d=l*l+p*p;if(d<1e-12)o=Math.log(f/u)/r,n=function(t){return[a+t*l,s+t*p,u*Math.exp(r*t*o)]};else{var g=Math.sqrt(d),v=(f*f-u*u+4*d)/(2*u*2*g),m=(f*f-u*u-4*d)/(2*f*2*g),y=Math.log(Math.sqrt(v*v+1)-v),x=Math.log(Math.sqrt(m*m+1)-m);o=(x-y)/r,n=function(t){var e=t*o,n=i(y),c=u/(2*g)*(n*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(r*e+y)-function(t){return((t=Math.exp(t))-1/t)/2}(y));return[a+c*l,s+c*p,u*n/i(r*e+y)]}}return n.duration=1e3*o,n}},function(t,e,n){"use strict";n.d(e,"b",function(){return a});var r=n(5),i=n(8);function o(t){return function(e,n){var o=t((e=Object(r.d)(e)).h,(n=Object(r.d)(n)).h),a=Object(i.a)(e.s,n.s),s=Object(i.a)(e.l,n.l),u=Object(i.a)(e.opacity,n.opacity);return function(t){return e.h=o(t),e.s=a(t),e.l=s(t),e.opacity=u(t),e+""}}}e.a=o(i.c);var a=o(i.a)},function(t,e,n){"use strict";e.a=function(t,e){var n=Object(i.a)((t=Object(r.e)(t)).l,(e=Object(r.e)(e)).l),o=Object(i.a)(t.a,e.a),a=Object(i.a)(t.b,e.b),s=Object(i.a)(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=o(e),t.b=a(e),t.opacity=s(e),t+""}};var r=n(5),i=n(8)},function(t,e,n){"use strict";n.d(e,"b",function(){return a});var r=n(5),i=n(8);function o(t){return function(e,n){var o=t((e=Object(r.c)(e)).h,(n=Object(r.c)(n)).h),a=Object(i.a)(e.c,n.c),s=Object(i.a)(e.l,n.l),u=Object(i.a)(e.opacity,n.opacity);return function(t){return e.h=o(t),e.c=a(t),e.l=s(t),e.opacity=u(t),e+""}}}e.a=o(i.c);var a=o(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(5),i=n(8);function o(t){return function e(n){function o(e,o){var a=t((e=Object(r.b)(e)).h,(o=Object(r.b)(o)).h),s=Object(i.a)(e.s,o.s),u=Object(i.a)(e.l,o.l),c=Object(i.a)(e.opacity,o.opacity);return function(t){return e.h=a(t),e.s=s(t),e.l=u(Math.pow(t,n)),e.opacity=c(t),e+""}}return n=+n,o.gamma=e,o}(1)}e.b=o(i.c);var a=o(i.a)},function(t,e,n){"use strict";e.a=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n}},function(t,e,n){var r=n(4);r.Rect=n(39),r.Circle=n(40),r.Ellipse=n(41),r.Path=n(42),r.Text=n(43),r.Line=n(44),r.Image=n(45),r.Polygon=n(46),r.Marker=n(47),r.Dom=n(48),r.Fa=n(49),t.exports=r},function(t,e,n){var r=n(0),i=n(11),o=n(104),a=n(105),s=n(106),u=n(107),c=function t(e){t.superclass.constructor.call(this,e),this.set("children",[])};r.extend(c,i),r.augment(c,{isGroup:!1,canFill:!1,canStroke:!1,capture:!1,visible:!1,init:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","defs"),e=r.uniqueId("defs_");t.setAttribute("id",e),this.set("el",t),this.set("children",[])},find:function(t,e){for(var n=this.get("children"),r=null,i=0;i<n.length;i++)if(n[i].match(t,e)){r=n[i].__cfg.id;break}return r},findById:function(t){for(var e=this.get("children"),n=null,r=0;r<e.length;r++)if(e[r].__cfg.id===t){n=e[r];break}return n},add:function(t){var e=this.get("el"),n=this,i=this.get("children");if(r.isArray(t))return r.each(t,function(t){var r=t.get("parent");r&&(r.removeChild(t,!1),n._setContext(t)),e.appendChild(t.get("el"))}),i.push.apply(i,t),n;if(n.findById(t.get("id")))return n;var o=t.get("parent");return o&&o.removeChild(t,!1),n._add(t),e.appendChild(t.get("el")),n},_add:function(t){this.get("el").appendChild(t.__cfg.el),this.get("children").push(t),t.__cfg.parent=this,t.__cfg.defs=this,t.__cfg.canvas=this.__cfg.canvas},addGradient:function(t){var e=new o(t);return this._add(e),e.__cfg.id},addShadow:function(t){var e=new a(t);return this._add(e),e.__cfg.id},addArrow:function(t,e,n){var r=new s(t,e,n);return this._add(r),r.__cfg.id},addClip:function(t){var e=new u(t);return this._add(e),e.__cfg.id}}),t.exports=c},function(t,e,n){var r=n(0),i=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,o=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,a=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function s(t){var e=t.match(a);if(!e)return"";var n="";return e.sort(function(t,e){return t=t.split(":"),e=e.split(":"),Number(t[0])-Number(e[0])}),r.each(e,function(t){t=t.split(":"),n+='<stop offset="'+t[0]+'" stop-color="'+t[1]+'"></stop>'}),n}var u=function(t){var e=null,n=r.uniqueId("gradient_");return t.toLowerCase().startsWith("l")?function(t,e){var n=i.exec(t),o=r.mod(r.toRadian(parseFloat(n[1])),2*Math.PI),a=n[2],u=void 0,c=void 0;o>=0&&o<.5*Math.PI?(u={x:0,y:0},c={x:1,y:1}):.5*Math.PI<=o&&o<Math.PI?(u={x:1,y:0},c={x:0,y:1}):Math.PI<=o&&o<1.5*Math.PI?(u={x:1,y:1},c={x:0,y:0}):(u={x:0,y:1},c={x:1,y:0});var h=Math.tan(o),f=h*h,l=(c.x-u.x+h*(c.y-u.y))/(f+1)+u.x,p=h*(c.x-u.x+h*(c.y-u.y))/(f+1)+u.y;e.setAttribute("x1",u.x),e.setAttribute("y1",u.y),e.setAttribute("x2",l),e.setAttribute("y2",p),e.innerHTML=s(a)}(t,e=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")):function(t,e){var n=o.exec(t),r=parseFloat(n[1]),i=parseFloat(n[2]),a=parseFloat(n[3]),u=n[4];e.setAttribute("cx",r),e.setAttribute("cy",i),e.setAttribute("r",a),e.innerHTML=s(u)}(t,e=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")),e.setAttribute("id",n),this.__cfg={el:e,id:n},this.__attrs={config:t},this};r.augment(u,{type:"gradient",match:function(t,e){return this.type===t&&this.__attrs.config===e}}),t.exports=u},function(t,e,n){var r=n(0),i={shadowColor:"color",shadowOpacity:"opacity",shadowBlur:"blur",shadowOffsetX:"dx",shadowOffsetY:"dy"};function o(t,e){var n='<feDropShadow \n      dx="'+t.dx+'" \n      dy="'+t.dy+'" \n      stdDeviation="'+(t.blur?t.blur/10:0)+'"\n      flood-color="'+(t.color?t.color:"#000")+'"\n      flood-opacity="'+(t.opacity?t.opacity:1)+'"\n      />';e.innerHTML=n}var a=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","filter"),n=r.uniqueId("filter_");return e.setAttribute("id",n),o(t,e),this.__cfg={el:e,id:n},this.__attrs={config:t},this};r.augment(a,{type:"filter",match:function(t,e){if(this.type!==t)return!1;var n=!1,i=this.__attrs.config;return r.each(Object.keys(i),function(t){n||(n=i[t]===e[t])}),n},update:function(t,e){var n=this.__attrs.config;return n[i[t]]=e,o(n,this.__cfg.el),this}}),t.exports=a},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},i=n(0),a={"marker-start":"M6,0 L0,3 L6,6 L3,3Z","marker-end":"M0,0 L6,3 L0,6 L3,3Z"};function s(t,e,n){var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",a[e]),r.setAttribute("stroke","none"),r.setAttribute("fill",n||"#000"),t.appendChild(r),t.setAttribute("refX",3),t.setAttribute("refY",3),t.setAttribute("markerWidth",16),t.setAttribute("markerHeight",16),t.setAttribute("orient","auto"),r}var u=function(t,e,n){var o=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=i.uniqueId("marker_");o.setAttribute("id",a),this.__cfg={el:o,id:a,stroke:n||"#000"},this.__cfg[t]=!0;var u=null;return"boolean"==typeof e&&e?(u=s(o,t,n),this._setChild(u,!0)):"object"===(void 0===e?"undefined":r(e))&&(u=function(t,e,n,r){if(!t)return s(e,n);if("marker"!==t.type)throw new TypeError("the shape of an arrow should be an instance of Marker");t.attr({stroke:"none",fill:r}),e.append(t.get("el"));var i=t.__attrs.x,o=t.__attrs.y;return e.setAttribute("refX",i),e.setAttribute("refY",o),e.setAttribute("markerWidth",2*i),e.setAttribute("markerHeight",2*o),e.setAttribute("orient","auto"),t}(e,o,t,n),this._setChild(u,!1)),this.__attrs={config:e},this};i.augment(u,{type:"arrow",match:function(t,e){return!!this.__cfg[t]&&("object"!==r(e.value)&&("#000"===e.stroke&&!("boolean"==typeof e.value&&!this.__cfg.default)))},_setChild:function(t,e){this.__cfg.child=t,this.__cfg.default=e},update:function(t){var e=this.__cfg.child;this.__cfg.default=!1,e.attr?e.attr("fill",t):e.setAttribute("fill",t)}}),t.exports=u},function(t,e,n){var r=n(0),i=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),n=r.uniqueId("clip_");if(t.get("el"))e.appendChild(t.get("el"));else{if(!r.isString(t.nodeName))throw"clip element should be a instance of Shape or a SVG node";e.appendChild(t)}return e.setAttribute("id",n),this.__cfg={el:e,id:n},this.__attrs={config:t},this};r.augment(i,{type:"clip",match:function(){return!1}}),t.exports=i},function(t,e,n){t.exports={Canvas:n(109),Group:n(51),Shape:n(1),Rect:n(23),Circle:n(53),Ellipse:n(54),Path:n(55),Text:n(56),Line:n(57),Image:n(58),Polygon:n(59),Polyline:n(60),Arc:n(61),Fan:n(62),Cubic:n(63),Quadratic:n(64),Marker:n(25),PathSegment:n(24),Event:n(50)}},function(t,e,n){var r=n(0),i=n(50),o=n(51),a=function t(e){t.superclass.constructor.call(this,e)};a.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null},r.extend(a,o),r.augment(a,{init:function(){a.superclass.init.call(this),this._setGlobalParam(),this._setDOM(),this._setInitSize(),this._setCanvas(),this._scale(),this.get("eventEnable")&&this._registEvents()},getEmitter:function(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this.getEmitter(n,e)}},_getEventObj:function(t,e,n,r){var o=new i(t,e,!0,!0);return o.x=n.x,o.y=n.y,o.clientX=e.clientX,o.clientY=e.clientY,o.currentTarget=r,o.target=r,o},_triggerEvent:function(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.getShape(n.x,n.y),i=void 0;if("mousemove"===t){var o=this.get("preShape");if(o&&o!==r){var a=this._getEventObj("mouseleave",e,n,o);(i=this.getEmitter(o,e))&&i.emit("mouseleave",a)}if(r){var s=this._getEventObj("mousemove",e,n,r);if((i=this.getEmitter(r,e))&&i.emit("mousemove",s),o!==r){var u=this._getEventObj("mouseenter",e,n,r);i&&i.emit("mouseenter",u,e)}}else{var c=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",c)}this.set("preShape",r)}else{var h=this._getEventObj(t,e,n,r||this);(i=this.getEmitter(r,e))&&i!==this&&i.emit(t,h),this.emit(t,h)}var f=this.get("el");r&&!r.get("destroyed")&&(f.style.cursor=r.attr("cursor")||"default")},_registEvents:function(){var t=this,e=t.get("el");r.each(["mouseout","mouseover","mousemove","mousedown","mouseup","click","dblclick"],function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e)},!1)}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0])},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0])},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0])},!1)},_scale:function(){var t=this.get("pixelRatio");this.scale(t,t)},_setCanvas:function(){var t=this.get("canvasDOM");this.set("el",t),this.set("context",t.getContext("2d")),this.set("canvas",this)},_setGlobalParam:function(){this.get("pixelRatio")||this.set("pixelRatio",r.getRatio())},_setDOM:function(){this._setContainer(),this._setLayer()},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"})},_setLayer:function(){var t=this.get("containerDOM"),e=r.uniqueId("canvas_");if(t){var n=r.createDom('<canvas id="'+e+'"></canvas>');t.appendChild(n),this.set("canvasDOM",n)}},_setInitSize:function(){this.changeSize(this.get("width"),this.get("height"))},_resize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n)},getWidth:function(){var t=this.get("pixelRatio");return this.get("width")*t},getHeight:function(){var t=this.get("pixelRatio");return this.get("height")*t},changeSize:function(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize()},getPointByClient:function(t,e){var n=this.get("el"),r=n.getBoundingClientRect(),i=r.right-r.left,o=r.bottom-r.top;return{x:(t-r.left)*(n.width/i),y:(e-r.top)*(n.height/o)}},getClientByPoint:function(t,e){var n=this.get("el"),r=n.getBoundingClientRect(),i=r.right-r.left,o=r.bottom-r.top;return{clientX:t/(n.width/i)+r.left,clientY:e/(n.height/o)+r.top}},beforeDraw:function(){var t=this.get("context"),e=this.get("el");t&&t.clearRect(0,0,e.width,e.height)},_beginDraw:function(){this.setSilent("toDraw",!0)},_endDraw:function(){this.setSilent("toDraw",!1)},draw:function(){var t=this;t.get("destroyed")||(t.get("animateHandler")?this._beginDraw():function e(){t.setSilent("animateHandler",r.requestAnimationFrame(function(){t.setSilent("animateHandler",void 0),t.get("toDraw")&&e()})),t.beforeDraw();try{var n=t.get("context");a.superclass.draw.call(t,n)}catch(e){console.warn("error in draw canvas, detail as:"),console.warn(e),t._endDraw()}t._endDraw()}())},destroy:function(){var t=this.get("containerDOM"),e=this.get("canvasDOM");e&&t&&t.removeChild(e),a.superclass.destroy.call(this)}}),t.exports=a},function(t,e,n){var r=n(0),i=["strokeStyle","fillStyle","globalAlpha"],o=["circle","ellipse","fan","polygon","rect","path"],a={r:"R",opacity:"Opacity",lineWidth:"LineWidth",clip:"Clip",stroke:"Stroke",fill:"Fill",strokeOpacity:"Stroke",fillOpacity:"Fill",x:"X",y:"Y",rx:"Rx",ry:"Ry",re:"Re",rs:"Rs",width:"Width",height:"Height",img:"Img",x1:"X1",x2:"X2",y1:"Y1",y2:"Y2",points:"Points",p1:"P1",p2:"P2",p3:"P3",p4:"P4",text:"Text",radius:"Radius",textAlign:"TextAlign",textBaseline:"TextBaseline",font:"Font",fontSize:"FontSize",fontStyle:"FontStyle",fontVariant:"FontVariant",fontWeight:"FontWeight",fontFamily:"FontFamily",clockwise:"Clockwise",startAngle:"StartAngle",endAngle:"EndAngle",path:"Path"},s={stroke:"strokeStyle",fill:"fillStyle",opacity:"globalAlpha"};t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this.__attrs={opacity:1,fillOpacity:1,strokeOpacity:1},this.attr(r.assign(this.getDefaultAttrs(),t)),this},getDefaultAttrs:function(){return{}},attr:function(t,e){if(0===arguments.length)return this.__attrs;if(r.isObject(t)){for(var n in t)if(-1===i.indexOf(n)){var o=t[n];this._setAttr(n,o)}return this._afterSetAttrAll&&this._afterSetAttrAll(t),this.clearBBox(),this}if(2===arguments.length){if(!1!==this._setAttr(t,e)){var s="_afterSetAttr"+a[t];this[s]&&this[s](e)}return this.clearBBox(),this}return this._getAttr(t)},clearBBox:function(){this.setSilent("box",null)},_afterSetAttrAll:function(){},_getAttr:function(t){return this.__attrs[t]},_setAttr:function(t,e){if("clip"===t)this._setAttrClip(e),this.__attrs.clip=e;else if("transform"===t)this._setAttrTrans(e);else{this.__attrs[t]=e;var n=s[t];n&&(this.__attrs[n]=e)}return this},hasFill:function(){return this.canFill&&this.__attrs.fillStyle},hasStroke:function(){return this.canStroke&&this.__attrs.strokeStyle},_setAttrOpacity:function(t){return this.__attrs.globalAlpha=t,t},_setAttrClip:function(t){var e=this;return t&&o.indexOf(t.type)>-1?(null===t.get("canvas")&&(t=r.clone(t)),t.set("parent",e.get("parent")),t.set("canvas",e.get("canvas")),t.set("context",e.get("context")),t.inside=function(n,r){var i=[n,r,1];return t.invert(i,e.get("canvas")),t._isPointInFill(i[0],i[1])},t):null},_setAttrTrans:function(t){return this.transform(t)}}},function(t,e,n){var r=n(0),i=n(2).mat3,o=n(2).vec3;function a(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7]}function s(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7]}function u(t,e){a(e)||(s(e)?(t[0]*=e[0],t[4]*=e[4]):i.multiply(t,t,e))}t.exports={initTransform:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1])},translate:function(t,e){var n=this.attr("matrix");return i.translate(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this},rotate:function(t){var e=this.attr("matrix");return i.rotate(e,e,t),this.clearTotalMatrix(),this.attr("matrix",e),this},scale:function(t,e){var n=this.attr("matrix");return i.scale(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this},rotateAtStart:function(t){var e=this.attr("x"),n=this.attr("y");Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]])},move:function(t,e){var n=this.get("x")||0,r=this.get("y")||0;this.translate(t-n,e-r),this.set("x",t),this.set("y",e)},transform:function(t){var e=this,n=e.attr("matrix");return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.attr("matrix",i.multiply([],n,t[1])),e.clearTotalMatrix()}}),e},setTransform:function(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t)},getMatrix:function(){return this.attr("matrix")},setMatrix:function(t){return this.attr("matrix",t),this.clearTotalMatrix(),this},apply:function(t,e){var n=void 0;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),o.transformMat3(t,t,n),this},_getMatrixByRoot:function(t){t=t||this;for(var e=this,n=[];e!==t;)n.unshift(e),e=e.get("parent");n.unshift(e);var o=[1,0,0,0,1,0,0,0,1];return r.each(n,function(t){i.multiply(o,t.attr("matrix"),o)}),o},getTotalMatrix:function(){var t=this.__cfg.totalMatrix;if(!t){t=[1,0,0,0,1,0,0,0,1];var e=this.__cfg.parent;if(e)u(t,e.getTotalMatrix());u(t,this.attr("matrix")),this.__cfg.totalMatrix=t}return t},clearTotalMatrix:function(){},invert:function(t){var e=this.getTotalMatrix();if(s(e))t[0]/=e[0],t[1]/=e[4];else{var n=i.invert([],e);n&&o.transformMat3(t,t,n)}return this},resetTransform:function(t){var e=this.attr("matrix");a(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7])}}},function(t,e,n){var r=n(1);r.Rect=n(23),r.Rect=n(23),r.Circle=n(53),r.Ellipse=n(54),r.Path=n(55),r.Text=n(56),r.Line=n(57),r.Image=n(58),r.Polygon=n(59),r.Polyline=n(60),r.Arc=n(61),r.Fan=n(62),r.Cubic=n(63),r.Quadratic=n(64),r.Marker=n(25),t.exports=r},function(t,e){t.exports={xAt:function(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r},yAt:function(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r},xExtrema:function(t,e,n){return Math.atan(-n/e*Math.tan(t))},yExtrema:function(t,e,n){return Math.atan(n/(e*Math.tan(t)))}}}])})}).call(this,n(20)(t))},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return null!=t&&"object"==(void 0===t?"undefined":n(t))}},,,,,,function(t,e,n){var r=n(297),i=n(294);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},,,,function(t,e,n){var r=n(35),i=n(317),o=n(316),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:a:u&&u in Object(t)?i(t):o(t)}},function(t,e,n){var r=5,i=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},n(18).CommonUtil,{lowerFirst:n(326),isPlainObject:n(315),indexOf:n(314),cloneDeep:n(309),round:n(249),filter:n(247),throttle:n(217),debounce:n(151),uniq:n(215),traverseTree:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=n(t);r&&e(t,null,null),o&&i.each(o,function(r,o){e(r,t,o),i.traverseTree(r,e,n)})},toAllPadding:function(t){var e=0,n=0,r=0,o=0;return i.isNumber(t)||i.isString(t)?e=n=r=o=t:i.isArray(t)&&(e=t[0],r=i.isNil(t[1])?t[0]:t[1],o=i.isNil(t[2])?t[0]:t[2],n=i.isNil(t[3])?r:t[3]),[e,r,o,n]},guid:function(){return"xxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},mix:function(){var t=i.toArray(arguments),e=t[0],n=void 0,r=void 0;if(!0===e)for(e=t[1],r=2;r<t.length;r++)o(e,n=t[r]);else for(r=1;r<t.length;r++)for(var a in n=t[r])n.hasOwnProperty(a)&&"constructor"!==a&&(e[a]=n[a]);return e},mixin:function(t,e){if(t&&e){t._mixins=e,t.ATTRS=t.ATTRS||{};i.each(e,function(e){i.augment(t,e)}),t.ATTRS=i.mix({},t.ATTRS)}}});function o(t,e,n){for(var a in n=n||0,e)if(e.hasOwnProperty(a)){var s=e[a];null!==s&&i.isPlainObject(s)?(i.isPlainObject(t[a])||(t[a]={}),n<r?o(t[a],e[a],n+1):t[a]=e[a]):i.isArray(s)?(t[a]=[],t[a]=t[a].concat(s)):void 0!==s&&(t[a]=e[a])}}i.Array={remove:function(t,e){var n=i.indexOf(t,e);-1!==n&&t.splice(n,1)}},t.exports=i},,function(t,e,n){var r=n(172),i=n(274),o=n(67);t.exports=function(t){return o(t)?r(t):i(t)}},function(t,e,n){var r=n(16).Symbol;t.exports=r},,,,function(t,e,n){var r=n(149);t.exports={trackable:!0,defaultNodeSize:40,nodeStyle:{lineWidth:1},labelStyle:{fill:"#595959",textAlign:"center",textBaseline:"middle"},groupStyle:{stroke:"#CED4D9",fill:"#F2F4F5",radius:2},groupBackgroundPadding:[40,10,10,10],updateDuration:450,enterDuration:450,leaveDuration:450,updateEasing:"easeQuadOut",enterEasing:"easeQuadOut",leaveEasing:"easeQuadOut",version:r}},function(t,e,n){var r=n(47),i=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}},function(t,e,n){var r=n(264),i=n(74),o=n(263),a=n(161),s=n(262),u=n(31),c=n(175),h=c(r),f=c(i),l=c(o),p=c(a),d=c(s),g=u;(r&&"[object DataView]"!=g(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=g(new i)||o&&"[object Promise]"!=g(o.resolve())||a&&"[object Set]"!=g(new a)||s&&"[object WeakMap]"!=g(new s))&&(g=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case h:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case p:return"[object Set]";case d:return"[object WeakMap]"}return e}),t.exports=g},function(t,e,n){var r=n(174),i=n(173);t.exports=function(t,e,n,o){var a=!n;n||(n={});for(var s=-1,u=e.length;++s<u;){var c=e[s],h=o?o(n[c],t[c],c,n,t):void 0;void 0===h&&(h=t[c]),a?i(n,c,h):r(n,c,h)}return n}},function(t,e,n){var r=n(285);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(27)(Object,"create");t.exports=r},function(t,e,n){var r=n(75);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(307),i=n(306),o=n(305),a=n(304),s=n(303);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(31),o=n(21),a="[object Symbol]";t.exports=function(t){return"symbol"==(void 0===t?"undefined":r(t))||o(t)&&i(t)==a}},function(t,e){var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},,,,,,,,,,,,,,,function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(17),o=n(47),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(i(t))return!1;var n=void 0===t?"undefined":r(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||s.test(t)||!a.test(t)||null!=e&&t in Object(e)}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},function(t,e,n){var r=n(160);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e,n){var r=n(167),i=n(166),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(e){return o.call(t,e)}))}:i;t.exports=s},function(t,e,n){var r=n(176),i=n(71);t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(180),o="object"==r(e)&&e&&!e.nodeType&&e,a=o&&"object"==r(t)&&t&&!t.nodeType&&t,s=a&&a.exports===o&&i.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=u}).call(this,n(20)(t))},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(16),o=n(276),a="object"==r(e)&&e&&!e.nodeType&&e,s=a&&"object"==r(t)&&t&&!t.nodeType&&t,u=s&&s.exports===a?i.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,n(20)(t))},function(t,e,n){var r=n(293),i=n(286),o=n(284),a=n(283),s=n(282);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r=n(27)(n(16),"Map");t.exports=r},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(46),i=n(302),o=n(301),a=n(300),s=n(299),u=n(298);function c(t){var e=this.__data__=new r(t);this.size=e.size}c.prototype.clear=i,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=s,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(19),i=n(47),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return o;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||c.test(t)?h(t.slice(2),n?2:8):s.test(t)?o:+t}},function(t,e,n){var r=n(179)(Object.getPrototypeOf,Object);t.exports=r},function(t,e,n){var r=n(319);t.exports=function(t){return null==t?"":r(t)}},,,function(t,e,n){var r=n(13),i={},o={draw:function(){}},a={defaultShapeType:null,getShape:function(t,e){return this[t]||this[e]||this[this.defaultShapeType]||o},getExtendShape:function(t,e){var n=this;if(r.isArray(t)){var i={};return t.forEach(function(t){i=r.mix({},i,n.getShape(t,e))}),i}return this.getShape(t,e)}};i.registerShapeManager=function(t,e){var n=r.mix({},a,e),o=r.upperFirst(t);return i[o]=n,i["register"+o]=function(t,e,i,o){r.isNil(i)&&r.isNil(o)&&(i=t);var a=n.getExtendShape(i,o),s=r.mix({},a,e);return s.type=t,n[t]=s,s},n},t.exports=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports="2.0.4"},function(t,e,n){var r=n(18),i=n(32),o={};i.mix(o,r.DomUtil,{addEventListener:function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0},createDOM:function(t,e){var n=void 0;return(n=i.isString(t)?r.DomUtil.createDom(t):t).bbox=n.getBoundingClientRect(),n.hide=function(){return n.style.visibility="hidden",n},n.show=function(){return n.style.visibility="visible",n},n.css=function(t){return r.DomUtil.modifyCSS(n,t),n},n.width=function(){return r.DomUtil.getWidth(n)},n.height=function(){return r.DomUtil.getHeight(n)},n.destroy=function(){n.parentNode&&n.parentNode.removeChild(n)},n.on=function(t,e){n.addEventListener(t,e)},n.off=function(t,e){n.removeEventListener(t,e)},n.attr=function(t){return n.getAttribute(t)},n.css(e),n}}),t.exports=o},function(t,e,n){var r=n(19),i=n(216),o=n(77),a="Expected a function",s=Math.max,u=Math.min;t.exports=function(t,e,n){var c,h,f,l,p,d,g=0,v=!1,m=!1,y=!0;if("function"!=typeof t)throw new TypeError(a);function x(e){var n=c,r=h;return c=h=void 0,g=e,l=t.apply(r,n)}function b(t){var n=t-d;return void 0===d||n>=e||n<0||m&&t-g>=f}function _(){var t=i();if(b(t))return w(t);p=setTimeout(_,function(t){var n=e-(t-d);return m?u(n,f-(t-g)):n}(t))}function w(t){return p=void 0,y&&c?x(t):(c=h=void 0,l)}function M(){var t=i(),n=b(t);if(c=arguments,h=this,d=t,n){if(void 0===p)return function(t){return g=t,p=setTimeout(_,e),v?x(t):l}(d);if(m)return p=setTimeout(_,e),x(d)}return void 0===p&&(p=setTimeout(_,e)),l}return e=o(e)||0,r(n)&&(v=!!n.leading,f=(m="maxWait"in n)?s(o(n.maxWait)||0,e):f,y="trailing"in n?!!n.trailing:y),M.cancel=function(){void 0!==p&&clearTimeout(p),g=0,c=d=h=p=void 0},M.flush=function(){return void 0===p?l:w(i())},M}},function(t,e,n){var r=n(17),i=n(63),o=n(227),a=n(79);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t))}},function(t,e,n){var r=n(152),i=n(40);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])];return n&&n==o?t:void 0}},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}},function(t,e,n){var r=n(19);t.exports=function(t){return t==t&&!r(t)}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(73),i=n(236),o=n(235);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},function(t,e,n){var r=n(157),i=n(234),o=n(156),a=1,s=2;t.exports=function(t,e,n,u,c,h){var f=n&a,l=t.length,p=e.length;if(l!=p&&!(f&&p>l))return!1;var d=h.get(t);if(d&&h.get(e))return d==e;var g=-1,v=!0,m=n&s?new r:void 0;for(h.set(t,e),h.set(e,t);++g<l;){var y=t[g],x=e[g];if(u)var b=f?u(x,y,g,e,t,h):u(y,x,g,t,e,h);if(void 0!==b){if(b)continue;v=!1;break}if(m){if(!i(e,function(t,e){if(!o(m,e)&&(y===t||c(y,t,n,u,h)))return m.push(e)})){v=!1;break}}else if(y!==x&&!c(y,x,n,u,h)){v=!1;break}}return h.delete(t),h.delete(e),v}},function(t,e,n){var r=n(237),i=n(21);t.exports=function t(e,n,o,a,s){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,s))}},function(t,e,n){var r=n(16).Uint8Array;t.exports=r},function(t,e,n){var r=n(27)(n(16),"Set");t.exports=r},function(t,e,n){var r=n(164),i=n(17);t.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t))}},function(t,e,n){var r=n(162),i=n(66),o=n(34);t.exports=function(t){return r(t,o,i)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},function(t,e,n){var r=n(164),i=n(78),o=n(66),a=n(166),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;t.exports=s},function(t,e){t.exports=function(){return[]}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}},function(t,e,n){var r=n(172),i=n(271),o=n(67);t.exports=function(t){return o(t)?r(t,!0):i(t)}},function(t,e,n){var r=n(275),i=n(70),o=n(69),a=o&&o.isTypedArray,s=a?i(a):r;t.exports=s},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=void 0===t?"undefined":n(t);return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&i.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(277),i=n(21),o=Object.prototype,a=o.hasOwnProperty,s=o.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},function(t,e,n){var r=n(278),i=n(171),o=n(17),a=n(72),s=n(170),u=n(169),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=o(t),h=!n&&i(t),f=!n&&!h&&a(t),l=!n&&!h&&!f&&u(t),p=n||h||f||l,d=p?r(t.length,String):[],g=d.length;for(var v in t)!e&&!c.call(t,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||l&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,g))||d.push(v);return d}},function(t,e,n){var r=n(280);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(173),i=n(75),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(31),i=n(19),o="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!i(t))return!1;var e=r(t);return e==a||e==s||e==o||e==u}},function(t,e,n){var r=n(310);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},function(t,e,n){var r=n(313),i=n(312),o=n(311);t.exports=function(t,e,n){return e==e?o(t,e,n):r(t,i,n)}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e;t.exports=r}).call(this,n(48))},function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},function(t,e,n){var r=n(18),i=n(32),o={isBetween:function(t,e,n){return t>=e&&t<=n},getLineIntersect:function(t,e,n,r){var i=n.x-t.x,a=n.y-t.y,s=e.x-t.x,u=e.y-t.y,c=r.x-n.x,h=r.y-n.y,f=s*h-u*c,l=null;if(f*f>.001*(s*s+u*u)*(c*c+h*h)){var p=(i*h-a*c)/f,d=(i*u-a*s)/f;o.isBetween(p,0,1)&&o.isBetween(d,0,1)&&(l={x:t.x+p*s,y:t.y+p*u})}return l},getIntersectPointRect:function(t,e){var n=t.minX,r=t.minY,i=t.maxX-t.minX,a=t.maxY-t.minY,s=[],u={x:n+i/2,y:r+a/2};s.push({x:n,y:r}),s.push({x:n+i,y:r}),s.push({x:n+i,y:r+a}),s.push({x:n,y:r+a}),s.push({x:n,y:r});for(var c=null,h=1;h<s.length&&!(c=o.getLineIntersect(s[h-1],s[h],u,e));h++);return c},getIntersectPointCircle:function(t,e,n,r,i){if(Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))<i)return null;var o=t-n,a=e-r,s=Math.sign(o),u=Math.sign(a),c=Math.atan(a/o);return{x:n+Math.abs(i*Math.cos(c))*s,y:r+Math.abs(i*Math.sin(c))*u}},applyMatrix:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=[t.x,t.y,n];return r.MatrixUtil.vec3.transformMat3(i,i,e),{x:i[0],y:i[1]}},invertMatrix:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=r.MatrixUtil.mat3.invert([],e),o=[t.x,t.y,n];return r.MatrixUtil.vec3.transformMat3(o,o,i),{x:o[0],y:o[1]}},radixSort:function(t,e){var n=10,r=1,i=[],o=1,a=void 0,s=void 0,u=void 0,c=void 0,h=void 0,f=void 0,l=void 0;for(u=0;u<t.length;u++)a=e(t[u]),s=(a=parseInt(a,10)).toString().length,a.toString().length>o&&(o=s);for(u=0;u<o;u++,r*=10,n*=10){for(c=0;c<t.length;c++)h=e(t[c]),void 0===i[h=parseInt(h%n/r,10)]&&(i[h]=[]),i[h].push(t[c]);for(f=0,c=0;c<i.length;c++)if(l=void 0,void 0!==i[c])for(l=i[c].shift();void 0!==l;)t[f++]=l,l=i[c].shift()}return t},getArcOfVectors:function(t,e){var n=t.x,r=t.y,i=e.x,o=e.y,a=Math.sqrt(n*n+r*r),s=Math.sqrt(i*i+o*o);return Math.acos((n*i+r*o)/(a*s))}};t.exports=i.mix({},r.MatrixUtil,o)},,,,,function(t,e,n){var r=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return r.options=n,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.execute=function(){var t=this,e=this.options;this.roots.forEach(function(n){t.layout(n,e).eachNode(function(t){t.data.x=t.x+t.data.width/2+t.hgap,t.data.y=t.y+t.data.height/2+t.vgap})})},e}(n(378));t.exports=r},function(t,e,n){(function(t){var n,r,i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a,s){"object"===o(e)&&"object"===o(t)?t.exports=s():(r=[],void 0===(i="function"==typeof(n=s)?n.apply(e,r):n)||(t.exports=i))}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(2),i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.options=n,this.rootNode=r(e,n)}return t.prototype.execute=function(){throw new Error("please override this method")},t}();t.exports=i},function(t,e,n){var r=n(3),i=["LR","RL","TB","BT","H","V"],o=["LR","RL","H"],a=i[0];t.exports=function(t,e,n){var s=e.direction||a;if(e.isHorizontal=function(t){return o.indexOf(t)>-1}(s),s&&-1===i.indexOf(s))throw new TypeError("Invalid direction: "+s);if(s===i[0])n(t,e);else if(s===i[1])n(t,e),t.right2left();else if(s===i[2])n(t,e);else if(s===i[3])n(t,e),t.bottom2top();else if(s===i[4]||s===i[5]){var u=r(t,e),c=u.left,h=u.right;n(c,e),n(h,e),e.isHorizontal?c.right2left():c.bottom2top(),h.translate(c.x-h.x,c.y-h.y),t.x=c.x,t.y=h.y;var f=t.getBoundingBox();e.isHorizontal?f.top<0&&t.translate(0,-f.top):f.left<0&&t.translate(-f.left,0)}return t.translate(-(t.x+t.width/2+t.hgap),-(t.y+t.height/2+t.vgap)),t}},function(t,e){var n={getId:function(t){return t.id||t.name},getHGap:function(t){return t.hgap||18},getVGap:function(t){return t.vgap||18},getChildren:function(t){return t.children},getHeight:function(t){return t.height||36},getWidth:function(t){var e=t.name||" ";return t.width||18*e.split("").length}};function r(t,e){var n=this;if(n.vgap=n.hgap=0,t instanceof r)return t;n.data=t;var i=e.getHGap(t),o=e.getVGap(t);return n.width=e.getWidth(t),n.height=e.getHeight(t),n.id=e.getId(t),n.x=n.y=0,n.depth=0,n.children||(n.children=[]),n.addGap(i,o),n}Object.assign(r.prototype,{isRoot:function(){return 0===this.depth},isLeaf:function(){return 0===this.children.length},addGap:function(t,e){this.hgap+=t,this.vgap+=e,this.width+=2*t,this.height+=2*e},eachNode:function(t){for(var e=[this],n=void 0;n=e.pop();)t(n),e=e.concat(n.children)},DFTraverse:function(t){this.eachNode(t)},BFTraverse:function(t){for(var e=[this],n=void 0;n=e.shift();)t(n),e=e.concat(n.children)},getBoundingBox:function(){var t={left:Number.MAX_VALUE,top:Number.MAX_VALUE,width:0,height:0};return this.eachNode(function(e){t.left=Math.min(t.left,e.x),t.top=Math.min(t.top,e.y),t.width=Math.max(t.width,e.x+e.width),t.height=Math.max(t.height,e.y+e.height)}),t},translate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.eachNode(function(n){n.x+=t,n.y+=e})},right2left:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.x=e.x-2*(e.x-t.left)-e.width}),this.translate(t.width,0)},bottom2top:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.y=e.y-2*(e.y-t.top)-e.height}),this.translate(0,t.height)}}),t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],o=new r(t,e=Object.assign({},n,e)),a=[o],s=void 0;if(!i&&!t.collapsed)for(;s=a.pop();)if(!s.data.collapsed){var u=e.getChildren(s.data),c=u?u.length:0;if(s.children=new Array(c),u&&c)for(var h=0;h<c;h++){var f=new r(u[h],e);s.children[h]=f,a.push(f),f.parent=s,f.depth=s.depth+1}}return o}},function(t,e,n){var r=n(2);t.exports=function(t,e){for(var n=r(t.data,e,!0),i=r(t.data,e,!0),o=t.children.length,a=Math.round(o/2),s=e.getSide||function(t,e){return e<a?"right":"left"},u=0;u<o;u++){var c=t.children[u];"right"===s(c,u)?i.children.push(c):n.children.push(c)}return n.eachNode(function(t){t.isRoot()||(t.side="left")}),i.eachNode(function(t){t.isRoot()||(t.side="right")}),{left:n,right:i}}},function(t,e,n){var r={compactBox:n(5),dendrogram:n(7),indented:n(9),mindmap:n(11)};t.exports=r},function(t,e,n){var r=n(0),i=n(6),a=n(1),s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=Object.assign({},u,e),new s(t,e).execute()}},function(t,e){function n(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=this;i.w=t||0,i.h=e||0,i.y=n||0,i.x=0,i.c=r||[],i.cs=r.length,i.prelim=0,i.mod=0,i.shift=0,i.change=0,i.tl=null,i.tr=null,i.el=null,i.er=null,i.msel=0,i.mser=0}function r(t,e){!function t(e,n,r){r?e.y+=n:e.x+=n,e.children.forEach(function(e){t(e,n,r)})}(t,-function t(e,n){var r=n?e.y:e.x;return e.children.forEach(function(e){r=Math.min(t(e,n),r)}),r}(t,e),e)}n.fromNode=function(t,e){if(!t)return null;var r=[];return t.children.forEach(function(t){r.push(n.fromNode(t,e))}),e?new n(t.height,t.width,t.x,r):new n(t.width,t.height,t.y,r)},t.exports=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isHorizontal;function i(t){0===t.cs?(t.el=t,t.er=t,t.msel=t.mser=0):(t.el=t.c[0].el,t.msel=t.c[0].msel,t.er=t.c[t.cs-1].er,t.mser=t.c[t.cs-1].mser)}function o(t,e,n){for(var r=t.c[e-1],i=r.mod,o=t.c[e],h=o.mod;null!==r&&null!==o;){c(r)>n.low&&(n=n.nxt);var f=i+r.prelim+r.w-(h+o.prelim);f>0&&(h+=f,a(t,e,n.index,f));var l=c(r),p=c(o);l<=p&&null!==(r=u(r))&&(i+=r.mod),l>=p&&null!==(o=s(o))&&(h+=o.mod)}!r&&o?function(t,e,n,r){var i=t.c[0].el;i.tl=n;var o=r-n.mod-t.c[0].msel;i.mod+=o,i.prelim-=o,t.c[0].el=t.c[e].el,t.c[0].msel=t.c[e].msel}(t,e,o,h):r&&!o&&function(t,e,n,r){var i=t.c[e].er;i.tr=n;var o=r-n.mod-t.c[e].mser;i.mod+=o,i.prelim-=o,t.c[e].er=t.c[e-1].er,t.c[e].mser=t.c[e-1].mser}(t,e,r,i)}function a(t,e,n,r){t.c[e].mod+=r,t.c[e].msel+=r,t.c[e].mser+=r,function(t,e,n,r){if(n!==e-1){var i=e-n;t.c[n+1].shift+=r/i,t.c[e].shift-=r/i,t.c[e].change-=r-r/i}}(t,e,n,r)}function s(t){return 0===t.cs?t.tl:t.c[0]}function u(t){return 0===t.cs?t.tr:t.c[t.cs-1]}function c(t){return t.y+t.h}function h(t,e,n){for(;null!==n&&t>=n.low;)n=n.nxt;return{low:t,index:e,nxt:n}}!function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n?(e.x=r,r+=e.width):(e.y=r,r+=e.height),e.children.forEach(function(e){t(e,n,r)})}(t,e);var f=n.fromNode(t,e);return function t(e){if(0!==e.cs){t(e.c[0]);for(var n=h(c(e.c[0].el),0,null),r=1;r<e.cs;++r){t(e.c[r]);var a=c(e.c[r].er);o(e,r,n),n=h(a,r,n)}!function(t){t.prelim=(t.c[0].prelim+t.c[0].mod+t.c[t.cs-1].mod+t.c[t.cs-1].prelim+t.c[t.cs-1].w)/2-t.w/2}(e),i(e)}else i(e)}(f),function t(e,n){n+=e.mod,e.x=e.prelim+n,function(t){for(var e=0,n=0,r=0;r<t.cs;r++)e+=t.c[r].shift,n+=e+t.c[r].change,t.c[r].mod+=n}(e);for(var r=0;r<e.cs;r++)t(e.c[r],n)}(f,0),function t(e,n,r){r?n.y=e.x:n.x=e.x,e.c.forEach(function(e,i){t(e,n.children[i],r)})}(f,t,e),r(t,e),t}},function(t,e,n){var r=n(0),i=n(8),a=n(1),s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.execute=function(){return this.rootNode.width=0,a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=Object.assign({},u,e),new s(t,e).execute()}},function(t,e){var n={isHorizontal:!0,nodeSep:20,nodeSize:20,rankSep:200,subTreeSep:10};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object.assign({},n,e);var r=0;var i=void 0;var o=function t(e){if(!e)return null;e.width=0,e.depth&&e.depth>r&&(r=e.depth);var n=e.children,i=n.length,o=new function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=this;e.x=e.y=0,e.leftChild=e.rightChild=null,e.height=0,e.children=t}(e.height,[]);return n.forEach(function(e,n){var r=t(e);o.children.push(r),0===n&&(o.leftChild=r),n===i-1&&(o.rightChild=r)}),o.originNode=e,o.isLeaf=e.isLeaf(),o}(t);return function t(e){if(e.isLeaf||0===e.children.length)e.drawingDepth=r;else{var n=e.children.map(function(e){return t(e)}),i=Math.min.apply(null,n);e.drawingDepth=i-1}return e.drawingDepth}(o),function t(n){n.x=n.drawingDepth*e.rankSep,n.isLeaf?(n.y=0,i&&(n.y=i.y+i.height+e.nodeSep,n.originNode.parent!==i.originNode.parent&&(n.y+=e.subTreeSep)),i=n):(n.children.forEach(function(e){t(e)}),n.y=(n.leftChild.y+n.rightChild.y)/2)}(o),function t(e,n,r){r?(n.x=e.x,n.y=e.y):(n.x=e.y,n.y=e.x),e.children.forEach(function(e,i){t(e,n.children[i],r)})}(o,t,e.isHorizontal),t}},function(t,e,n){var r=n(0),i=n(10),a=n(3),s=["LR","RL","H"],u=s[0],c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.execute=function(){var t=this.options,e=this.rootNode;t.isHorizontal=!0;var n=t.indent,r=t.direction||u;if(r&&-1===s.indexOf(r))throw new TypeError("Invalid direction: "+r);if(r===s[0])i(e,n);else if(r===s[1])i(e,n),e.right2left();else if(r===s[2]){var o=a(e,t),c=o.left,h=o.right;i(c,n),c.right2left(),i(h,n);var f=c.getBoundingBox();h.translate(f.width,0),e.x=h.x-e.width/2}return e},e}(r),h={};t.exports=function(t,e){return e=Object.assign({},h,e),new c(t,e).execute()}},function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=null;t.eachNode(function(t){!function(t,e,n){t.x+=n*t.depth,t.y=e?e.y+e.height:0}(t,n,e),n=t})}},function(t,e,n){var r=n(0),i=n(12),a=n(1),s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i)},e}(r),u={};t.exports=function(t,e){return e=Object.assign({},u,e),new s(t,e).execute()}},function(t,e){var n={getSubTreeSep:function(){return 0}};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object.assign({},n,e),t.parent={x:0,width:0,height:0,y:0},t.BFTraverse(function(t){t.x=t.parent.x+t.parent.width}),t.parent=null,function t(e,n){var r=0;return e.children.length?e.children.forEach(function(e){r+=t(e,n)}):r=e.height,e._subTreeSep=n.getSubTreeSep(e.data),e.totalHeight=Math.max(e.height,r)+2*e._subTreeSep,e.totalHeight}(t,e),t.startY=0,t.y=t.totalHeight/2-t.height/2,t.eachNode(function(t){var e=t.children,n=e.length;if(n){var r=e[0];if(r.startY=t.startY+t._subTreeSep,1===n)r.y=t.y+t.height/2-r.height/2;else{r.y=r.startY+r.totalHeight/2-r.height/2;for(var i=1;i<n;i++){var o=e[i];o.startY=e[i-1].startY+e[i-1].totalHeight,o.y=o.startY+o.totalHeight/2-o.height/2}}}}),function t(e){var n=e.children,r=n.length;if(r){n.forEach(function(e){t(e)});var i=n[0],o=n[r-1],a=o.y-i.y+o.height,s=0;if(n.forEach(function(t){s+=t.totalHeight}),a>e.height)e.y=i.y+a/2-e.height/2;else if(1!==n.length||e.height>s){var u=e.y+(e.height-a)/2-i.y;n.forEach(function(t){t.translate(0,u)})}else e.y=(i.y+i.height/2+o.y+o.height/2)/2-e.height/2}}(t)}}])})}).call(this,n(20)(t))},function(t,e,n){var r=n(13),i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=this.getDefaultCfg();r.mix(this,n,e)}return t.prototype.getDefaultCfg=function(){return{}},t.prototype.destroy=function(){},t}();t.exports=i},,,,,,,,,,,,function(t,e,n){var r=n(13);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);r.mix(this,{id:"",type:null,model:{},group:null,animate:!1,modelCache:{}},e),this._init()}return t.prototype._init=function(){this._setIndex(),this._mapping(),this._setShapeObj(),this._initGroup(),this.draw()},t.prototype._setIndex=function(){var t=this.model;r.isNil(t.index)&&(t.index=this.zIndex)},t.prototype._mapping=function(){var t=this.mapper,e=this.model;t.mapping(e)},t.prototype._initGroup=function(){var t=this.group,e=this.model,n=this.type;t.isItemContainer=!0,t.id=e.id,t.itemType=n,t.model=e},t.prototype._calculateBBox=function(){var t=this.keyShape,e=this.group,n=r.getBBox(t,e);return n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.centerX=(n.minX+n.maxX)/2,n.centerY=(n.minY+n.maxY)/2,n},t.prototype.getLabel=function(){return this.group.findByClass("label")[0]},t.prototype.getGraph=function(){return this.graph},t.prototype.getEnterAnimate=function(){var t=this.shapeObj,e=this.graph;return t.enterAnimate?t.enterAnimate:e.get("_enterAnimate")},t.prototype.getLeaveAnimate=function(){var t=this.shapeObj,e=this.graph;return t.leaveAnimate?t.leaveAnimate:e.get("_leaveAnimate")},t.prototype._setShapeObj=function(){var t=this.graph,e=this.type,n=this.getModel();this.shapeObj=t.getShapeObj(e,n)},t.prototype._afterDraw=function(){var t=this.graph;this._setGId(),this._cacheModel(),t.emit("afteritemdraw",{item:this})},t.prototype._cacheModel=function(){this.modelCache=r.mix({},this.model)},t.prototype._setGId=function(){var t=this.group,e=this.id,n=this.type;t.gid=e,t.deepEach(function(t,r,i){var o=r.gid;t.id=e,t.eventPreFix=n,t.gid=o+"-"+i})},t.prototype._beforeDraw=function(){this.graph.emit("beforeitemdraw",{item:this}),this.updateCollapsedParent(),this._setShapeObj()},t.prototype._shouldDraw=function(){return!0},t.prototype._getDiff=function(){var t=[],e=this.model,n=this.modelCache;return r.each(e,function(e,i){r.isEqual(e,n[i])||t.push(i)}),0!==t.length&&t},t.prototype._drawInner=function(){var t=this.animate;this.group.clear(!t);var e=this.shapeObj,n=e.draw(this);n&&(n.isKeyShape=!0,this.keyShape=n),e.afterDraw&&e.afterDraw(this)},t.prototype.deepEach=function(t,e){r.traverseTree(this,t,e||function(t){return t.getChildren()})},t.prototype.getShapeObj=function(){return this.shapeObj},t.prototype.updateCollapsedParent=function(){var t=this.dataMap;this.collapsedParent=function t(e,n){var r=n[e.parent];if(!r)return!1;if(r){var i=t(r,n);if(i)return i}return r.collapsed?r:void 0}(this.model,t)},t.prototype.isVisible=function(){return this.group.get("visible")},t.prototype.hide=function(){var t=this.group,e=this.graph;e.emit("beforeitemhide",{item:this}),t.hide(),e.emit("afteritemhide",{item:this})},t.prototype.show=function(){var t=this.group,e=this.graph;e.emit("beforeitemshow",{item:this}),t.show(),e.emit("afteritemshow",{item:this})},t.prototype.draw=function(){this._beforeDraw(),this._shouldDraw()&&this._drawInner(),this._afterDraw()},t.prototype.forceUpdate=function(){this._beforeDraw(),this._drawInner(),this._afterDraw()},t.prototype.getCenter=function(){var t=this.getBBox();return{x:t.centerX,y:t.centerY}},t.prototype.getBBox=function(){return this.bbox||this._calculateBBox()},t.prototype.layoutUpdate=function(){this.draw()},t.prototype.update=function(){this.draw()},t.prototype.getModel=function(){return this.model},t.prototype.getKeyShape=function(){return this.keyShape},t.prototype.getGraphicGroup=function(){return this.group},t.prototype.getParent=function(){var t=this.model;return this.itemMap[t.parent]},t.prototype.getAllParents=function(){for(var t=this.model,e=this.itemMap,n=[],r=t.parent;r&&e[r];)n.push(e[r]),r=r.parent;return n},t.prototype.getAllChildren=function(){var t=[];return this.deepEach(function(e){t.push(e)}),t},t.prototype.getChildren=function(){var t=this.id;return this.graph.getItems().filter(function(e){return e.model.parent===t})},t.prototype.destroy=function(){if(!this.destroyed){var t=this.animate,e=this.graph;e.emit("beforeitemdestroy",{item:this}),this.group.remove(!t),this.destroyed=!0,e.emit("afteritemdestroy",{item:this})}},t}();t.exports=i},function(t,e,n){var r=n(13),i=n(18),o=function(){};r.augment(o,{beforeDraw:function(){var t=this.get("context"),e=this.get("el");this.emit("beforedraw"),t&&t.clearRect(0,0,e.width,e.height)}}),r.mixin(i.Canvas,[o]),t.exports=o},function(t,e,n){var r=n(39);t.exports={scaleIn:function(t,e,n,i,o){i=i||e,o=o||n,t.transform([["t",-i,-o],["s",.01,.01],["t",e,n]]),t&&!t.get("destroyed")&&t.animate({transform:[["t",-e,-n],["s",100,100],["t",i,o]]},r.enterDuration,r.enterEasing)},scaleOut:function(t,e,n,i,o){i=i||e,o=o||n,t&&!t.get("destroyed")&&t.animate({transform:[["t",-i,-o],["s",.01,.01],["t",e,n]]},r.leaveDuration,r.leaveEasing,function(){t.remove()})}}},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(o){var a=/^\s+/,s=/\s+$/,u=0,c=o.round,h=o.min,f=o.max,l=o.random;function p(t,e){if(t=t||"",e=e||{},t instanceof p)return t;if(!(this instanceof p))return new p(t,e);var n=function(t){var e={r:0,g:0,b:0},n=1,r=null,u=null,c=null,l=!1,p=!1;"string"==typeof t&&(t=function(t){t=t.replace(a,"").replace(s,"").toLowerCase();var e,n=!1;if(C[t])t=C[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=X.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=X.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=X.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=X.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=X.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=X.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=X.hex8.exec(t))return{r:N(e[1]),g:N(e[2]),b:N(e[3]),a:Y(e[4]),format:n?"name":"hex8"};if(e=X.hex6.exec(t))return{r:N(e[1]),g:N(e[2]),b:N(e[3]),format:n?"name":"hex"};if(e=X.hex4.exec(t))return{r:N(e[1]+""+e[1]),g:N(e[2]+""+e[2]),b:N(e[3]+""+e[3]),a:Y(e[4]+""+e[4]),format:n?"name":"hex8"};if(e=X.hex3.exec(t))return{r:N(e[1]+""+e[1]),g:N(e[2]+""+e[2]),b:N(e[3]+""+e[3]),format:n?"name":"hex"};return!1}(t));"object"==(void 0===t?"undefined":i(t))&&(G(t.r)&&G(t.g)&&G(t.b)?(e=function(t,e,n){return{r:255*F(t,255),g:255*F(e,255),b:255*F(n,255)}}(t.r,t.g,t.b),l=!0,p="%"===String(t.r).substr(-1)?"prgb":"rgb"):G(t.h)&&G(t.s)&&G(t.v)?(r=D(t.s),u=D(t.v),e=function(t,e,n){t=6*F(t,360),e=F(e,100),n=F(n,100);var r=o.floor(t),i=t-r,a=n*(1-e),s=n*(1-i*e),u=n*(1-(1-i)*e),c=r%6;return{r:255*[n,s,a,a,u,n][c],g:255*[u,n,n,s,a,a][c],b:255*[a,a,u,n,n,s][c]}}(t.h,r,u),l=!0,p="hsv"):G(t.h)&&G(t.s)&&G(t.l)&&(r=D(t.s),c=D(t.l),e=function(t,e,n){var r,i,o;function a(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(t=F(t,360),e=F(e,100),n=F(n,100),0===e)r=i=o=n;else{var s=n<.5?n*(1+e):n+e-n*e,u=2*n-s;r=a(u,s,t+1/3),i=a(u,s,t),o=a(u,s,t-1/3)}return{r:255*r,g:255*i,b:255*o}}(t.h,r,c),l=!0,p="hsl"),t.hasOwnProperty("a")&&(n=t.a));return n=T(n),{ok:l,format:t.format||p,r:h(255,f(e.r,0)),g:h(255,f(e.g,0)),b:h(255,f(e.b,0)),a:n}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=c(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=c(this._r)),this._g<1&&(this._g=c(this._g)),this._b<1&&(this._b=c(this._b)),this._ok=n.ok,this._tc_id=u++}function d(t,e,n){t=F(t,255),e=F(e,255),n=F(n,255);var r,i,o=f(t,e,n),a=h(t,e,n),s=(o+a)/2;if(o==a)r=i=0;else{var u=o-a;switch(i=s>.5?u/(2-o-a):u/(o+a),o){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,l:s}}function g(t,e,n){t=F(t,255),e=F(e,255),n=F(n,255);var r,i,o=f(t,e,n),a=h(t,e,n),s=o,u=o-a;if(i=0===o?0:u/o,o==a)r=0;else{switch(o){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,v:s}}function v(t,e,n,r){var i=[L(c(t).toString(16)),L(c(e).toString(16)),L(c(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function m(t,e,n,r){return[L(R(r)),L(c(t).toString(16)),L(c(e).toString(16)),L(c(n).toString(16))].join("")}function y(t,e){e=0===e?0:e||10;var n=p(t).toHsl();return n.s-=e/100,n.s=B(n.s),p(n)}function x(t,e){e=0===e?0:e||10;var n=p(t).toHsl();return n.s+=e/100,n.s=B(n.s),p(n)}function b(t){return p(t).desaturate(100)}function _(t,e){e=0===e?0:e||10;var n=p(t).toHsl();return n.l+=e/100,n.l=B(n.l),p(n)}function w(t,e){e=0===e?0:e||10;var n=p(t).toRgb();return n.r=f(0,h(255,n.r-c(-e/100*255))),n.g=f(0,h(255,n.g-c(-e/100*255))),n.b=f(0,h(255,n.b-c(-e/100*255))),p(n)}function M(t,e){e=0===e?0:e||10;var n=p(t).toHsl();return n.l-=e/100,n.l=B(n.l),p(n)}function S(t,e){var n=p(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,p(n)}function A(t){var e=p(t).toHsl();return e.h=(e.h+180)%360,p(e)}function E(t){var e=p(t).toHsl(),n=e.h;return[p(t),p({h:(n+120)%360,s:e.s,l:e.l}),p({h:(n+240)%360,s:e.s,l:e.l})]}function P(t){var e=p(t).toHsl(),n=e.h;return[p(t),p({h:(n+90)%360,s:e.s,l:e.l}),p({h:(n+180)%360,s:e.s,l:e.l}),p({h:(n+270)%360,s:e.s,l:e.l})]}function O(t){var e=p(t).toHsl(),n=e.h;return[p(t),p({h:(n+72)%360,s:e.s,l:e.l}),p({h:(n+216)%360,s:e.s,l:e.l})]}function j(t,e,n){e=e||6,n=n||30;var r=p(t).toHsl(),i=360/n,o=[p(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(p(r));return o}function I(t,e){e=e||6;for(var n=p(t).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/e;e--;)a.push(p({h:r,s:i,v:o})),o=(o+s)%1;return a}p.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:o.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=T(t),this._roundA=c(100*this._a)/100,this},toHsv:function(){var t=g(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=g(this._r,this._g,this._b),e=c(360*t.h),n=c(100*t.s),r=c(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=d(this._r,this._g,this._b),e=c(360*t.h),n=c(100*t.s),r=c(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return v(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,n,r,i){var o=[L(c(t).toString(16)),L(c(e).toString(16)),L(c(n).toString(16)),L(R(r))];if(i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0);return o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:c(this._r),g:c(this._g),b:c(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+c(this._r)+", "+c(this._g)+", "+c(this._b)+")":"rgba("+c(this._r)+", "+c(this._g)+", "+c(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:c(100*F(this._r,255))+"%",g:c(100*F(this._g,255))+"%",b:c(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+c(100*F(this._r,255))+"%, "+c(100*F(this._g,255))+"%, "+c(100*F(this._b,255))+"%)":"rgba("+c(100*F(this._r,255))+"%, "+c(100*F(this._g,255))+"%, "+c(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(k[v(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+m(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=p(t);n="#"+m(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return p(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(M,arguments)},desaturate:function(){return this._applyModification(y,arguments)},saturate:function(){return this._applyModification(x,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(S,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(I,arguments)},splitcomplement:function(){return this._applyCombination(O,arguments)},triad:function(){return this._applyCombination(E,arguments)},tetrad:function(){return this._applyCombination(P,arguments)}},p.fromRatio=function(t,e){if("object"==(void 0===t?"undefined":i(t))){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]="a"===r?t[r]:D(t[r]));t=n}return p(t,e)},p.equals=function(t,e){return!(!t||!e)&&p(t).toRgbString()==p(e).toRgbString()},p.random=function(){return p.fromRatio({r:l(),g:l(),b:l()})},p.mix=function(t,e,n){n=0===n?0:n||50;var r=p(t).toRgb(),i=p(e).toRgb(),o=n/100;return p({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},p.readability=function(t,e){var n=p(t),r=p(e);return(o.max(n.getLuminance(),r.getLuminance())+.05)/(o.min(n.getLuminance(),r.getLuminance())+.05)},p.isReadable=function(t,e,n){var r,i,o=p.readability(t,e);switch(i=!1,(r=function(t){var e,n;e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA");"small"!==n&&"large"!==n&&(n="small");return{level:e,size:n}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},p.mostReadable=function(t,e,n){var r,i,o,a,s=null,u=0;i=(n=n||{}).includeFallbackColors,o=n.level,a=n.size;for(var c=0;c<e.length;c++)(r=p.readability(t,e[c]))>u&&(u=r,s=p(e[c]));return p.isReadable(t,s,{level:o,size:a})||!i?s:(n.includeFallbackColors=!1,p.mostReadable(t,["#fff","#000"],n))};var C=p.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},k=p.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(C);function T(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function F(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=h(e,f(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),o.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function B(t){return h(1,f(0,t))}function N(t){return parseInt(t,16)}function L(t){return 1==t.length?"0"+t:""+t}function D(t){return t<=1&&(t=100*t+"%"),t}function R(t){return o.round(255*parseFloat(t)).toString(16)}function Y(t){return N(t)/255}var X=function(){var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+e),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+e),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+e),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function G(t){return!!X.CSS_UNIT.exec(t)}void 0!==t&&t.exports?t.exports=p:void 0===(r=function(){return p}.call(e,n,e,t))||(t.exports=r)}(Math)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],n=(0,r.default)(t),i=c;i>0;i-=1){var o=n.toHsv(),a=(0,r.default)({h:f(o,i,!0),s:l(o,i,!0),v:p(o,i,!0)}).toHexString();e.push(a)}e.push(n.toHexString());for(var s=1;s<=h;s+=1){var u=n.toHsv(),d=(0,r.default)({h:f(u,s),s:l(u,s),v:p(u,s)}).toHexString();e.push(d)}return e};var r=function(t){return t&&t.__esModule?t:{default:t}}(n(204));var i=2,o=16,a=5,s=5,u=15,c=5,h=4;function f(t,e,n){var r=void 0;return(r=Math.round(t.h)>=60&&Math.round(t.h)<=240?n?Math.round(t.h)-i*e:Math.round(t.h)+i*e:n?Math.round(t.h)+i*e:Math.round(t.h)-i*e)<0?r+=360:r>=360&&(r-=360),r}function l(t,e,n){var r=void 0;return(r=n?Math.round(100*t.s)-o*e:e===h?Math.round(100*t.s)+o:Math.round(100*t.s)+a*e)>100&&(r=100),n&&e===c&&r>10&&(r=10),r<6&&(r=6),r}function p(t,e,n){return n?Math.round(100*t.v)+s*e:Math.round(100*t.v)-u*e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.presetPrimaryColors=e.presetPalettes=e.generate=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(205));var i={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96"},o={};Object.keys(i).forEach(function(t){o[t]=(0,r.default)(i[t])}),e.generate=r.default,e.presetPalettes=o,e.presetPrimaryColors=i},function(t,e,n){var r=n(182),i=n(32),o={getNineBoxPosition:function(t,e,n,r,i){var o={};switch(t){case"tl":o.y=e.x+i[0],o.x=e.y+i[3];break;case"lc":o.y=(e.height-r)/2,o.x=i[3];break;case"bl":o.y=e.height-r-i[2],o.x=i[3];break;case"cc":o.y=(e.height-r)/2,o.x=(e.width-n)/2;break;case"tc":o.y=i[0],o.x=(e.width-n)/2;break;case"tr":o.y=i[0],o.x=e.width-n-i[1];break;case"rc":o.y=(e.height-r)/2,o.x=e.width-n-i[1];break;case"br":o.y=e.height-r-i[2],o.x=e.width-n-i[1];break;case"bc":o.y=e.height-r-i[2],o.x=(e.width-n)/2;break;default:o.y=e.x+i[0],o.x=e.y+i[3]}return o.x+=e.x,o.y+=e.y,o},getTotalBBox:function(t){var e=1/0,n=-1/0,r=1/0,i=-1/0;return t.forEach(function(t){t.minX<e&&(e=t.minX),t.maxX>n&&(n=t.maxX),t.minY<r&&(r=t.minY),t.maxY>i&&(i=t.maxY)}),{minX:e,minY:r,maxX:n,maxY:i,width:n-e,height:i-r}},getChildrenBBox:function(t){var e=1/0,n=-1/0,r=1/0,a=-1/0;i.each(t,function(t){var i=t.isGroup?o.getChildrenBBox(t.get("children")):t.getBBox();if(!i)return!0;var s=[i.minX,i.minY,1],u=[i.minX,i.maxY,1],c=[i.maxX,i.minY,1],h=[i.maxX,i.maxY,1];t.apply(s),t.apply(u),t.apply(c),t.apply(h);var f=Math.min(s[0],u[0],c[0],h[0]),l=Math.max(s[0],u[0],c[0],h[0]),p=Math.min(s[1],u[1],c[1],h[1]),d=Math.max(s[1],u[1],c[1],h[1]);f<e&&(e=f),l>n&&(n=l),p<r&&(r=p),d>a&&(a=d)});var s={minX:e,minY:r,maxX:n,maxY:a};return s.x=s.minX,s.y=s.minY,s.width=s.maxX-s.minX,s.height=s.maxY-s.minY,s.centerX=(s.minX+s.maxX)/2,s.centerY=(s.minY+s.maxY)/2,s},getBBox:function(t,e){var n=t.getBBox(),i={x:n.minX,y:n.minY},o={x:n.maxX,y:n.maxY},a=void 0;if(e.isGroup){for(a=t;a!==e;){var s=a.getMatrix();i=r.applyMatrix(i,s),o=r.applyMatrix(o,s),a=a.getParent()}var u=a.getMatrix();i=r.applyMatrix(i,u),o=r.applyMatrix(o,u)}else i=r.applyMatrix(i,e),o=r.applyMatrix(o,e);return{minX:i.x,minY:i.y,maxX:o.x,maxY:o.y}},toBack:function(t,e){!e&&(e=t.getParent());var n=e.get("children");i.Array.remove(n,t),n.unshift(t)},toFront:function(t,e){!e&&(e=t.getParent());var n=e.get("children");i.Array.remove(n,t),n.push(t)},Palettes:n(206)};t.exports=o},function(t,e,n){var r=n(32),i=n(150),o=n(18),a=o.canvas.Canvas,s=o.svg.Canvas;t.exports={isNode:function(t){return t&&r.isObject(t)&&"node"===t.type},isEdge:function(t){return t&&r.isObject(t)&&"edge"===t.type},isGroup:function(t){return t&&r.isObject(t)&&"group"===t.type},graph2Canvas:function(t){var e=t=r.mix({graph:null,width:null,height:null,canvas:null,minMaxZoom:1/0,minMinZoom:0,pixelRatio:2,beforeTransform:function(){},afterTransform:function(){}},t),n=e.graph,o=e.width,u=e.height,c=e.canvas,h=e.minMaxZoom,f=e.minMinZoom,l=e.pixelRatio,p=e.beforeTransform,d=e.afterTransform,g=n.getCanvas(),v=void 0;if(!c){var m=i.createDOM("<canvas></canvas>");v=l/g.get("pixelRatio"),g.scale(v,v),c=new(n.getConstructor(a,s))({containerDOM:m,width:o*v,height:u*v})}var y=c.get("context"),x=g.get("context"),b=n.get("width"),_=n.get("height"),w=r.cloneDeep(n.getMatrix()),M=n.get("maxZoom"),S=n.get("minZoom"),A=n._events;return n.set("maxZoom",h),n.set("minZoom",f),n.set("width",o),n.set("height",u),n._events=[],n.getItems().length>0&&(p(n),g.set("context",y),n.autoZoom(),c.matrix=r.cloneDeep(n.getMatrix())),g.set("context",y),g.beforeDraw(),g.constructor.superclass.draw.call(g,y),n.set("width",b),n.set("height",_),n.set("maxZoom",M),n.set("minZoom",S),n.updateMatrix(w),v&&(d(n),g.scale(1/v,1/v)),n._events=A,g.set("context",x),g.draw(),c.get("el")}}},function(t,e,n){var r=n(18),i={};n(32).mix(i,r.PathUtil,{getRectPath:r.PathUtil.rectPath,pointsToPolygon:function(t){for(var e=[["M",t[0].x,t[0].y]],n=1;n<t.length;n++){var r=t[n];e.push(["L",r.x,r.y])}return e},getEllipsePath:function(t,e,n,r){return[["M",t,e-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]]}}),t.exports=i},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(161),i=n(210),o=n(64),a=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=a},function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},function(t,e,n){var r=n(178);t.exports=function(t,e){return!(null==t||!t.length)&&r(t,e,0)>-1}},function(t,e,n){var r=n(157),i=n(213),o=n(212),a=n(156),s=n(211),u=n(64),c=200;t.exports=function(t,e,n){var h=-1,f=i,l=t.length,p=!0,d=[],g=d;if(n)p=!1,f=o;else if(l>=c){var v=e?null:s(t);if(v)return u(v);p=!1,f=a,g=new r}else g=e?[]:d;t:for(;++h<l;){var m=t[h],y=e?e(m):m;if(m=n||0!==m?m:0,p&&y==y){for(var x=g.length;x--;)if(g[x]===y)continue t;e&&g.push(y),d.push(m)}else f(g,y,n)||(g!==d&&g.push(y),d.push(m))}return d}},function(t,e,n){var r=n(214);t.exports=function(t){return t&&t.length?r(t):[]}},function(t,e,n){var r=n(16);t.exports=function(){return r.Date.now()}},function(t,e,n){var r=n(151),i=n(19),o="Expected a function";t.exports=function(t,e,n){var a=!0,s=!0;if("function"!=typeof t)throw new TypeError(o);return i(n)&&(a="leading"in n?!!n.leading:a,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:a,maxWait:e,trailing:s})}},function(t,e,n){var r=n(153);t.exports=function(t){return function(e){return r(e,t)}}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,n){var r=n(219),i=n(218),o=n(63),a=n(40);t.exports=function(t){return o(t)?r(a(t)):i(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(152),i=n(171),o=n(17),a=n(170),s=n(71),u=n(40);t.exports=function(t,e,n){for(var c=-1,h=(e=r(e,t)).length,f=!1;++c<h;){var l=u(e[c]);if(!(f=null!=t&&n(t,l)))break;t=t[l]}return f||++c!=h?f:!!(h=null==t?0:t.length)&&s(h)&&a(l,h)&&(o(t)||i(t))}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(223),i=n(222);t.exports=function(t,e){return null!=t&&i(t,e,r)}},function(t,e,n){var r=n(73),i="Expected a function";function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(225),i=500;t.exports=function(t){var e=r(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}},function(t,e,n){var r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=n(226)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=o},function(t,e,n){var r=n(153);t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}},function(t,e,n){var r=n(159),i=n(228),o=n(224),a=n(63),s=n(155),u=n(154),c=n(40),h=1,f=2;t.exports=function(t,e){return a(t)&&s(e)?u(c(t),e):function(n){var a=i(n,t);return void 0===a&&a===e?o(n,t):r(e,a,h|f)}}},function(t,e,n){var r=n(155),i=n(34);t.exports=function(t){for(var e=i(t),n=e.length;n--;){var o=e[n],a=t[o];e[n]=[o,a,r(a)]}return e}},function(t,e,n){var r=n(163),i=1,o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,s,u){var c=n&i,h=r(t),f=h.length;if(f!=r(e).length&&!c)return!1;for(var l=f;l--;){var p=h[l];if(!(c?p in e:o.call(e,p)))return!1}var d=u.get(t);if(d&&u.get(e))return d==e;var g=!0;u.set(t,e),u.set(e,t);for(var v=c;++l<f;){var m=t[p=h[l]],y=e[p];if(a)var x=c?a(y,m,p,e,t,u):a(m,y,p,t,e,u);if(!(void 0===x?m===y||s(m,y,n,a,u):x)){g=!1;break}v||(v="constructor"==p)}if(g&&!v){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(g=!1)}return u.delete(t),u.delete(e),g}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},function(t,e,n){var r=n(35),i=n(160),o=n(75),a=n(158),s=n(232),u=n(64),c=1,h=2,f="[object Boolean]",l="[object Date]",p="[object Error]",d="[object Map]",g="[object Number]",v="[object RegExp]",m="[object Set]",y="[object String]",x="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",w=r?r.prototype:void 0,M=w?w.valueOf:void 0;t.exports=function(t,e,n,r,w,S,A){switch(n){case _:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case b:return!(t.byteLength!=e.byteLength||!S(new i(t),new i(e)));case f:case l:case g:return o(+t,+e);case p:return t.name==e.name&&t.message==e.message;case v:case y:return t==e+"";case d:var E=s;case m:var P=r&c;if(E||(E=u),t.size!=e.size&&!P)return!1;var O=A.get(t);if(O)return O==e;r|=h,A.set(t,e);var j=a(E(t),E(e),r,w,S,A);return A.delete(t),j;case x:if(M)return M.call(t)==M.call(e)}return!1}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},function(t,e,n){var r=n(76),i=n(158),o=n(233),a=n(231),s=n(41),u=n(17),c=n(72),h=n(169),f=1,l="[object Arguments]",p="[object Array]",d="[object Object]",g=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,m,y){var x=u(t),b=u(e),_=x?p:s(t),w=b?p:s(e),M=(_=_==l?d:_)==d,S=(w=w==l?d:w)==d,A=_==w;if(A&&c(t)){if(!c(e))return!1;x=!0,M=!1}if(A&&!M)return y||(y=new r),x||h(t)?i(t,e,n,v,m,y):o(t,e,_,n,v,m,y);if(!(n&f)){var E=M&&g.call(t,"__wrapped__"),P=S&&g.call(e,"__wrapped__");if(E||P){var O=E?t.value():t,j=P?e.value():e;return y||(y=new r),m(O,j,n,v,y)}}return!!A&&(y||(y=new r),a(t,e,n,v,m,y))}},function(t,e,n){var r=n(76),i=n(159),o=1,a=2;t.exports=function(t,e,n,s){var u=n.length,c=u,h=!s;if(null==t)return!c;for(t=Object(t);u--;){var f=n[u];if(h&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++u<c;){var l=(f=n[u])[0],p=t[l],d=f[1];if(h&&f[2]){if(void 0===p&&!(l in t))return!1}else{var g=new r;if(s)var v=s(p,d,l,t,e,g);if(!(void 0===v?i(d,p,o|a,s,g):v))return!1}}return!0}},function(t,e,n){var r=n(238),i=n(230),o=n(154);t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(239),o=n(229),a=n(221),s=n(17),u=n(220);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==(void 0===t?"undefined":r(t))?s(t)?o(t[0],t[1]):i(t):u(t)}},function(t,e,n){var r=n(67);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var o=n.length,a=e?o:-1,s=Object(n);(e?a--:++a<o)&&!1!==i(s[a],a,s););return n}}},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i];if(!1===n(o[u],u,o))break}return e}}},function(t,e,n){var r=n(242)();t.exports=r},function(t,e,n){var r=n(243),i=n(34);t.exports=function(t,e){return t&&r(t,e,i)}},function(t,e,n){var r=n(244),i=n(241)(r);t.exports=i},function(t,e,n){var r=n(245);t.exports=function(t,e){var n=[];return r(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}},function(t,e,n){var r=n(167),i=n(246),o=n(240),a=n(17);t.exports=function(t,e){return(a(t)?r:i)(t,o(e,3))}},function(t,e,n){var r=n(177),i=n(77),o=n(79),a=Math.min;t.exports=function(t){var e=Math[t];return function(t,n){if(t=i(t),n=null==n?0:a(r(n),292)){var s=(o(t)+"e").split("e"),u=e(s[0]+"e"+(+s[1]+n));return+((s=(o(u)+"e").split("e"))[0]+"e"+(+s[1]-n))}return e(t)}}},function(t,e,n){var r=n(248)("round");t.exports=r},function(t,e,n){var r=n(41),i=n(21),o="[object Set]";t.exports=function(t){return i(t)&&r(t)==o}},function(t,e,n){var r=n(250),i=n(70),o=n(69),a=o&&o.isSet,s=a?i(a):r;t.exports=s},function(t,e,n){var r=n(41),i=n(21),o="[object Map]";t.exports=function(t){return i(t)&&r(t)==o}},function(t,e,n){var r=n(252),i=n(70),o=n(69),a=o&&o.isMap,s=a?i(a):r;t.exports=s},function(t,e,n){var r=n(19),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=o},function(t,e,n){var r=n(254),i=n(78),o=n(68);t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:r(i(t))}},function(t,e,n){var r=n(65);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e,n){var r=n(35),i=r?r.prototype:void 0,o=i?i.valueOf:void 0;t.exports=function(t){return o?Object(o.call(t)):{}}},function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e}},function(t,e,n){var r=n(65);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},function(t,e,n){var r=n(65),i=n(259),o=n(258),a=n(257),s=n(256),u="[object Boolean]",c="[object Date]",h="[object Map]",f="[object Number]",l="[object RegExp]",p="[object Set]",d="[object String]",g="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",y="[object Float32Array]",x="[object Float64Array]",b="[object Int8Array]",_="[object Int16Array]",w="[object Int32Array]",M="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]";t.exports=function(t,e,n){var P=t.constructor;switch(e){case v:return r(t);case u:case c:return new P(+t);case m:return i(t,n);case y:case x:case b:case _:case w:case M:case S:case A:case E:return s(t,n);case h:return new P;case f:case d:return new P(t);case l:return o(t);case p:return new P;case g:return a(t)}}},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},function(t,e,n){var r=n(27)(n(16),"WeakMap");t.exports=r},function(t,e,n){var r=n(27)(n(16),"Promise");t.exports=r},function(t,e,n){var r=n(27)(n(16),"DataView");t.exports=r},function(t,e,n){var r=n(162),i=n(165),o=n(168);t.exports=function(t){return r(t,o,i)}},function(t,e,n){var r=n(42),i=n(165);t.exports=function(t,e){return r(t,i(t),e)}},function(t,e,n){var r=n(42),i=n(66);t.exports=function(t,e){return r(t,i(t),e)}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(16),o="object"==r(e)&&e&&!e.nodeType&&e,a=o&&"object"==r(t)&&t&&!t.nodeType&&t,s=a&&a.exports===o?i.Buffer:void 0,u=s?s.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=u?u(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(20)(t))},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(19),i=n(68),o=n(270),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},function(t,e,n){var r=n(42),i=n(168);t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e,n){var r=n(179)(Object.keys,Object);t.exports=r},function(t,e,n){var r=n(68),i=n(273),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e,n){var r=n(31),i=n(71),o=n(21),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(31),i=n(21),o="[object Arguments]";t.exports=function(t){return i(t)&&r(t)==o}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(42),i=n(34);t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e,n){var r=n(27),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(43);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},function(t,e,n){var r=n(43);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(43);t.exports=function(t){return r(this,t).get(t)}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e=void 0===t?"undefined":n(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(43);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e,n){var r=n(44),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}},function(t,e,n){var r=n(44),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},function(t,e,n){var r=n(44),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(44);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e,n){var r=n(291),i=n(290),o=n(289),a=n(288),s=n(287);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r=n(292),i=n(46),o=n(74);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(16)["__core-js_shared__"];t.exports=r},function(t,e,n){var r=n(295),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(176),i=n(296),o=n(19),a=n(175),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,h=u.toString,f=c.hasOwnProperty,l=RegExp("^"+h.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(r(t)?l:s).test(a(t))}},function(t,e,n){var r=n(46),i=n(74),o=n(73),a=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var s=n.__data__;if(!i||s.length<a-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new o(s)}return n.set(t,e),this.size=n.size,this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e,n){var r=n(46);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e,n){var r=n(45);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e,n){var r=n(45);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(45);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(45),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(76),i=n(281),o=n(174),a=n(279),s=n(272),u=n(269),c=n(268),h=n(267),f=n(266),l=n(163),p=n(265),d=n(41),g=n(261),v=n(260),m=n(255),y=n(17),x=n(72),b=n(253),_=n(19),w=n(251),M=n(34),S=1,A=2,E=4,P="[object Arguments]",O="[object Function]",j="[object GeneratorFunction]",I="[object Object]",C={};C[P]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object DataView]"]=C["[object Boolean]"]=C["[object Date]"]=C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Map]"]=C["[object Number]"]=C[I]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object Symbol]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Error]"]=C[O]=C["[object WeakMap]"]=!1,t.exports=function t(e,n,k,T,F,B){var N,L=n&S,D=n&A,R=n&E;if(k&&(N=F?k(e,T,F,B):k(e)),void 0!==N)return N;if(!_(e))return e;var Y=y(e);if(Y){if(N=g(e),!L)return c(e,N)}else{var X=d(e),G=X==O||X==j;if(x(e))return u(e,L);if(X==I||X==P||G&&!F){if(N=D||G?{}:m(e),!L)return D?f(e,s(N,e)):h(e,a(N,e))}else{if(!C[X])return F?e:{};N=v(e,X,L)}}B||(B=new r);var H=B.get(e);if(H)return H;if(B.set(e,N),w(e))return e.forEach(function(r){N.add(t(r,n,k,r,e,B))}),N;if(b(e))return e.forEach(function(r,i){N.set(i,t(r,n,k,i,e,B))}),N;var q=R?D?p:l:D?keysIn:M,z=Y?void 0:q(e);return i(z||e,function(r,i){z&&(r=e[i=r]),o(N,i,t(r,n,k,i,e,B))}),N}},function(t,e,n){var r=n(308),i=1,o=4;t.exports=function(t){return r(t,i|o)}},function(t,e,n){var r=n(77),i=1/0,o=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}},function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}},function(t,e){t.exports=function(t){return t!=t}},function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},function(t,e,n){var r=n(178),i=n(177),o=Math.max;t.exports=function(t,e,n){var a=null==t?0:t.length;if(!a)return-1;var s=null==n?0:i(n);return s<0&&(s=o(a+s,0)),r(t,e,s)}},function(t,e,n){var r=n(31),i=n(78),o=n(21),a="[object Object]",s=Function.prototype,u=Object.prototype,c=s.toString,h=u.hasOwnProperty,f=c.call(Object);t.exports=function(t){if(!o(t)||r(t)!=a)return!1;var e=i(t);if(null===e)return!0;var n=h.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==f}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(35),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},function(t,e,n){var r=n(35),i=n(318),o=n(17),a=n(47),s=1/0,u=r?r.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-s?"-0":n}},function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",c="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[o,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),h="(?:"+[o+r+"?",r,a,s,n].join("|")+")",f=RegExp(i+"(?="+i+")|"+h+c,"g");t.exports=function(t){return t.match(f)||[]}},function(t,e){t.exports=function(t){return t.split("")}},function(t,e,n){var r=n(321),i=n(181),o=n(320);t.exports=function(t){return i(t)?o(t):r(t)}},function(t,e){t.exports=function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}},function(t,e,n){var r=n(323);t.exports=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:r(t,e,n)}},function(t,e,n){var r=n(324),i=n(181),o=n(322),a=n(79);t.exports=function(t){return function(e){e=a(e);var n=i(e)?o(e):void 0,s=n?n[0]:e.charAt(0),u=n?r(n,1).join(""):e.slice(1);return s[t]()+u}}},function(t,e,n){var r=n(325)("toLowerCase");t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.prototype.execute=function(){throw new Error("please override this method")},t}();t.exports=n},function(t,e,n){t.exports={CompactBoxTree:n(477),Dendrogram:n(476),IndentedTree:n(475),Mindmap:n(474),Base:n(378)}},function(t,e,n){var r=n(13),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i={type:"node",linkable:!0,isNode:!0,zIndex:3};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.updatePosition=function(){var t=this.group,e=this.model;t.setMatrix([1,0,0,0,1,0,e.x?e.x:0,e.y?e.y:0,1]),this.bbox=this._calculateBBox()},e.prototype._shouldDraw=function(){var e=this._getDiff(),n=t.prototype._shouldDraw.call(this);return e&&!(2===e.length&&-1!==e.indexOf("x")&&-1!==e.indexOf("y"))&&!(1===e.length&&("x"===e[0]||"y"===e[0]))&&n},e.prototype._afterDraw=function(){this.updatePosition(),t.prototype._afterDraw.call(this)},e.prototype.layoutUpdate=function(){this._beforeDraw(),this._afterDraw()},e.prototype.getEdges=function(t){var e=this.id,n=this.itemMap._edges,i=[];return r.each(n,function(n){if(t)t(n)&&i.push(n);else{var r=n.getModel();e!==r.target&&e!==r.source||i.push(n)}}),i},e.prototype.getInEdges=function(){var t=this;return this.getEdges(function(e){return e.target===t})},e.prototype.getOutEdges=function(){var t=this;return this.getEdges(function(e){return e.source===t})},e.prototype.getLinkPoints=function(t){var e=this.getAnchorPoints();if(r.isNumber(t)&&e[t])return[e[t]];var n=t.x,i=t.y,o=this.getBBox(),a=o.centerX,s=o.centerY,u=n-a,c=i-s,h=this.shapeObj.anchor||{},f=this.defaultIntersectBox,l=[];if(r.isEmpty(e)){switch(h.intersectBox||h.type||f){case"rect":l=[r.getIntersectPointRect(o,t)];break;case"path":if(this.keyShape&&"path"===this.keyShape.get("type")){var p=r.parsePathArray(["M",n,i,"L",a,s]);l=[r.intersection(p,this.keyShape.get("path"))]}break;default:l=[r.getIntersectPointCircle(n,i,o.centerX,o.centerY,Math.max(o.width,o.height)/2)]}r.isEmpty(l[0])&&(l=[{x:a,y:s}])}else l=e.map(function(t){var e=t.x-a,n=t.y-s,i=r.getArcOfVectors({x:u,y:c},{x:e,y:n});return r.mix({},t,{arc:i})}).sort(function(t,e){return t.arc-e.arc});return l},e.prototype.getAnchorPoints=function(t){var e=this.shapeObj,n=this.getBBox(),i=[],o=e.anchor||{},a=void 0;return a=r.isArray(o)?o:r.isFunction(o)?o(this):o.points,r.each(a,function(t,e){var o=r.mix({x:n.minX+t[0]*n.width,y:n.minY+t[1]*n.height},t[2],{index:e});i.push(o)}),this._anchorPoints=i,r.isNumber(t)?this._anchorPoints[t]:this._anchorPoints},e}(n(201));t.exports=i},function(t,e,n){var r=n(13),i=n(18),o=function t(e){t.superclass.constructor.call(this,e)};r.extend(o,i.canvas.Shape),o.ATTRS={x:0,y:0,width:0,height:0},r.extend(o,i.canvas.Shape),r.augment(o,{canFill:!0,type:"html",__isPointInFill:function(t,e){var n=this.getBBox(),r=n.minX,i=n.minY,o=n.maxX-n.minX,a=n.maxY-n.minY;return r<=t&&t<=r+o&&i<=e&&e<=i+a},__initHtml:function(t){var e=this.get("attrs"),n=this.get("canvas").get("htmlElementContaniner");e.html&&e.html.destroy&&e.html.destroy(),(t=r.createDOM(t)).css({position:"absolute",padding:"0px",margin:"0px",visibility:"hidden"}),e.html=t,n.appendChild(t)},isPointInPath:function(t,e){return this.__isPointInFill(t,e)},init:function(){var t=this.attr("html");this.get("canvas").on("beforedraw",function(){t.css({visibility:"hidden"})}),this.__initHtml(t)},getDefaultAttrs:function(){return o.ATTRS},attr:function(t,e){var n=this.get("attrs");return r.isObject(t)?(t.html&&(this.__initHtml(t.html),delete t.html),r.mix(n,t),void 0===t.x&&void 0===t.y&&void 0===t.width&&void 0===t.height||this.calculateBox(),n):r.isNil(e)?n[t]:("html"===t?this.__initHtml(e):(n[t]=e,"x"!==t&&"y"!==t&&"width"!==t&&"height"!==t||this.calculateBox()),this)},calculateBox:function(){var t=this.attr("x"),e=this.attr("y");return{minX:t,minY:e,maxX:t+this.attr("width"),maxY:e+this.attr("height")}},getDrawTotalMatrix:function(){for(var t=this.get("canvas"),e=r.clone(this.attr("matrix")),n=this.getParent();n!==t;)r.mat3.multiply(e,n.attr("matrix"),e),n=n.getParent();return e},getDOM:function(){return this.attr("html")},applyTransform:function(){var t=this.attr("html"),e=this.getDrawTotalMatrix(),n=this.attr("x"),r=this.attr("y"),i=this.attr("width")/2,o=this.attr("height")/2,a=e[0]*n+e[6]+e[0]*i-i,s=e[4]*r+e[7]+e[4]*o-o;t.css({transform:"matrix("+e[0]+","+e[1]+","+e[3]+","+e[4]+","+a+","+s+")"})},createPath:function(){var t=this.attr("html"),e=this.get("attrs");this.applyTransform(),t.css(r.mix({visibility:"visible"},e))},remove:function(t){this.attr("html").css({visibility:"hidden"}),o.superclass.remove.call(this,t)},destroy:function(){var t=this.attr("html");t&&t.destroy(),o.superclass.destroy.call(this)}}),i.canvas.Shape.Html=o,t.exports=o},function(t,e,n){n(381),n(202),n(501),n(500),n(381);var r=n(499),i=n(497),o=n(384),a=n(13),s=n(18),u=n(493),c=n(492),h=n(491),f=n(489),l=n(487),p=n(486),d=n(484),g=n(483),v=n(482),m=n(480),y=n(479),x=s.canvas.Canvas,b=s.svg.Canvas,_=[g,f,l,v,y,h,m,p,d],w=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r={};_.forEach(function(t){a.mix(r,t.CFG,n)});var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,r));return i._pluginInit(),i.emit("beforeinit"),i._init(),i.emit("afterinit"),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getDefaultCfg=function(){return{container:void 0,width:void 0,height:void 0,modes:{},mode:"default",plugins:[],fontFamily:'"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',nodeDefaultShape:void 0,edgeDefaultShape:void 0,groupDefaultShape:void 0,defaultIntersectBox:"circle",render:"canvas",_controllers:{},_timers:{},_dataMap:{},_itemMap:{},_data:{},_delayRunObj:{}}},e.prototype._init=function(){var t=this;this._initData(),this._initContainer(),this._initCanvas(),_.forEach(function(e){e.INIT&&t[e.INIT]()}),this.initEvent()},e.prototype.initEvent=function(){},e.prototype._executeLayout=function(t,e,n,r){a.isFunction(t)?t(e,n,this):a.isObject(t)&&(t.nodes=e,t.edges=n,t.groups=r,t.graph=this,t.execute())},e.prototype._pluginInit=function(){var t=this;this.get("plugins").forEach(function(e){e.graph=t,e.init&&e.init()})},e.prototype._getTimer=function(t){return this.get("_timers")[t]},e.prototype._setTimer=function(t,e){this.get("_timers")[t]=e},e.prototype._getController=function(t){return this.get("_controllers")[t]},e.prototype._initContainer=function(){var t=this.get("container");if(t||(t=this.get("id")),!t)throw new Error("please set the container for the graph !");a.isString(t)&&(t=document.getElementById(t));var e=a.createDOM('<div class="graph-container"></div>',{position:"relative"});t.appendChild(e),this.set("_containerDOM",t),this.set("_graphContainer",e)},e.prototype._initCanvas=function(){var t=this,e=this.get("_graphContainer"),n=this.get("width"),r=this.get("height"),i={width:n,height:r,fontFamily:this.get("fontFamily"),eventEnable:!1,containerDOM:e},o=this.getConstructor(x,b),s=new o(i),h=new o(i),f=h.get("el"),l=e.appendChild(a.createDOM('<div class="graph-container-html-Elements"></div>'));s.on("beforedraw",function(){t.emit("beforecanvasdraw")}),f.style.position="absolute",f.style.top=0,f.style.left=0,l.style.overflow="hidden",l.style.width=n+"px",l.style.height=r+"px",l.style.position="absolute",l.style.top=0,l.style.left=0,this.set("_canvas",s),this.set("_frontCanvas",h),this.set("_htmlElementContaniner",l);var p=this.getMouseEventWrapper();p.style.outline="none",p.style["user-select"]="none",p.setAttribute("tabindex",20),s.set("htmlElementContaniner",l);var d=this.getConstructor(u,c),g=s.addGroup(d),v=h.addGroup(d),m=g.addGroup();this.set("_itemGroup",m),this.set("_rootGroup",g),this.set("_frontRootGroup",v)},e.prototype._initData=function(){this.set("_dataMap",{}),this.set("_itemMap",{_nodes:[],_edges:[],_groups:[],_guides:[]}),this.set("_data",{})},e.prototype._refresh=function(){},e.prototype.getKeyboardEventWrapper=function(){var t=this.get("keyboardEventWrapper");return t||this.getMouseEventWrapper()},e.prototype.getMouseEventWrapper=function(){return this.get("_htmlElementContaniner")},e.prototype.getGraphContainer=function(){return this.get("_graphContainer")},e.prototype.addItems=function(t,e){var n=this;this._addDatas(t,e);var r=a.upperFirst(t),o=i[r],s=this.get("_itemMap"),u=this.get("_itemGroup"),c=this.get("_dataMap"),h=this.get("animate"),f=this.get("defaultIntersectBox");if(!o)throw new Error("please set valid item type!");e.forEach(function(e){var r=new o({id:e.id,type:t,model:e,group:u.addGroup(),graph:n,mapper:n._getController(t+"Mapper"),itemMap:s,animate:h,dataMap:c,defaultIntersectBox:f});s[e.id]=r,s["_"+t+"s"].push(r)})},e.prototype.removeItems=function(t){var e=this.get("_dataMap"),n=this.get("_itemMap");t.forEach(function(t){delete e[t.id],delete n[t.id],a.Array.remove(n["_"+t.type+"s"],t),t.destroy()})},e.prototype.updateItem=function(t,e){a.mix(t.getModel(),e),t.update()},e.prototype._addDatas=function(t,e){var n=this.get("_dataMap");e.forEach(function(t){if(a.isNil(t.id)&&(t.id=a.guid()),n[t.id])throw new Error("id:"+t.id+" has already been set, please set new one");n[t.id]=t})},e.prototype._drawInner=function(){var t=this.get("_data"),e=this.get("_itemGroup"),n=this.get("_dataMap");t.nodes&&this.addItems("node",t.nodes),t.groups&&this.addItems("group",t.groups),t.edges&&this.addItems("edge",t.edges),t.guides&&this.addItems("guide",t.guides),e.sortBy(function(t){var e=t.id;return n[e].index})},e.prototype._clearInner=function(){this.getItems().forEach(function(t){t&&!t.destroyed&&t.destroy()})},e.prototype.getConstructor=function(t,e){return"svg"===this.get("render")?e:t},e.prototype.getShapeObj=function(t,e){if(!a.isObject(t)){var n=a.upperFirst(t),r=o[n],i=this.get(t+"DefaultShape");return r.getShape(e.shape,i)}return t.getShapeObj()},e.prototype.getSource=function(){return this.get("_sourceData")},e.prototype.parseSource=function(t){return t},e.prototype.getCanvas=function(){return this.get("_canvas")},e.prototype.getRootGroup=function(){return this.get("_rootGroup")},e.prototype.getItemGroup=function(){return this.get("_itemGroup")},e.prototype.getFrontRootGroup=function(){return this.get("_frontRootGroup")},e.prototype.getFrontCanvas=function(){return this.get("_frontCanvas")},e.prototype.source=function(t){return this.emit("beforesource"),this.set("_data",t),this.set("_sourceData",t),this.emit("aftersource"),this},e.prototype.render=function(){return this.emit("beforerender"),this.emit("beforedrawinner"),this._drawInner(),this.emit("afterdrawinner"),this.draw(),this.emit("afterrender"),this},e.prototype.forcePreventAnimate=function(t){this.set("forcePreventAnimate",t)},e.prototype.reRender=function(){var t=this.get("_sourceData");return this.read(t),this},e.prototype.destroy=function(){var e=this.get("_canvas"),n=this.get("_frontCanvas"),r=this.get("_graphContainer"),i=this.get("_controllers"),o=this.get("_timers"),s=this.get("_windowForceResizeEvent"),u=this.get("plugins");return a.each(o,function(t){clearTimeout(t)}),a.each(i,function(t){t.destroy()}),u.forEach(function(t){t.destroy&&t.destroy()}),e&&e.destroy(),n&&n.destroy(),r.destroy(),window.removeEventListener("resize",s),t.prototype.destroy.call(this),this},e.prototype.save=function(){var t={nodes:[],edges:[],groups:[],guides:[]};return this.get("_itemGroup").get("children").forEach(function(e,n){var r=e.model;if(r){var i=e.itemType,o=a.cloneDeep(r);o.index=n,t[i+"s"].push(o)}}),0===t.nodes.length&&delete t.nodes,0===t.edges.length&&delete t.edges,0===t.groups.length&&delete t.groups,0===t.guides.length&&delete t.guides,t},e.prototype.add=function(t,e){var n={action:"add",model:e};this.emit("beforechange",n);var r=this.get("_itemMap");this.addItems(t,[e]);var i=r[e.id];return i.getAllParents().forEach(function(t){t.update()}),n.item=i,this.emit("afterchange",n),this.draw(),i},e.prototype.remove=function(t){var e=this;if((t=this.getItem(t))&&!t.destroyed){var n={action:"remove",item:t};if(this.emit("beforechange",n),t.isNode||t.isGroup)t.getEdges().forEach(function(t){e.remove(t)});if(t.isGroup)t.getChildren().forEach(function(t){e.remove(t)});return this.removeItems([t]),t.getAllParents().forEach(function(t){t.update()}),this.emit("afterchange",n),this.draw(),this}},e.prototype.simpleUpdate=function(t,e){return this.updateItem(t,e),this.draw(),this},e.prototype.update=function(t,e){var n=this.get("_itemMap");if((t=this.getItem(t))&&!t.destroyed){var r=t.getModel(),i=a.mix({},r),o={action:"update",item:t,originModel:i,updateModel:e},s=n[i.parent];if(s&&s!==parent&&a.isGroup(s)&&t.getAllParents().forEach(function(t){t.update()}),e&&this.emit("beforechange",o),this.updateItem(t,e),t.getAllParents().forEach(function(t){t.update()}),(t.isNode||t.isGroup)&&!t.collapsedParent)t.getEdges().forEach(function(t){t.update()});return t.isGroup&&e&&(t.deepEach(function(t){t.updateCollapsedParent(),t.collapsedParent?t.hide():t.show(),t.update()}),t.getInnerEdges().forEach(function(t){t.linkedItemVisible()?t.show():t.hide(),t.update()})),e&&this.emit("afterchange",o),this.draw(),this}},e.prototype.read=function(t){if(!t)throw new Error("please read valid data!");var e=this.get("fitView"),n={action:"changeData",data:t};return this.emit("beforechange",n),this.clear(),this.source(t),this.render(),this.emit("afterchange",n),e&&this.setFitView(e),this},e.prototype.clear=function(){return this.emit("beforeclear"),this._clearInner(),this._initData(),this.emit("afterclear"),this.draw(),this},e.prototype.hide=function(t){return(t=this.getItem(t)).hide(),t.isNode&&t.getEdges().forEach(function(t){t.hide()}),t.isGroup&&(t.getEdges().forEach(function(t){t.hide()}),t.getInnerEdges().forEach(function(t){t.hide()}),t.deepEach(function(t){t.hide()})),this.draw(),this},e.prototype.show=function(t){return(t=this.getItem(t)).show(),t.isNode&&t.getEdges().forEach(function(t){t.show()}),t.isGroup&&(t.getEdges().forEach(function(t){t.show()}),t.getInnerEdges().forEach(function(t){t.show()}),t.deepEach(function(t){t.show()})),this.draw(),this},e.prototype.getWidth=function(){return this.get("width")},e.prototype.getHeight=function(){return this.get("height")},e.prototype.changeSize=function(t,e){if(!(Math.abs(t)>=1/0||Math.abs(e)>=1/0)){var n=this.get("_canvas"),r=this.get("_frontCanvas"),i=this.get("_htmlElementContaniner");return t===this.get("width")&&e===this.get("height")||(this.emit("beforechangesize"),n.changeSize(t,e),r.changeSize(t,e),i.css({width:t+"px",height:e+"px"}),this.set("width",t),this.set("height",e),this.emit("afterchangesize"),this.draw()),this}console.warn("size parameter more than the maximum")},e.prototype.toFront=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();a.toFront(n,e),this.draw()},e.prototype.toBack=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();a.toBack(n,e),this.draw()},e.prototype.css=function(t){var e=this.getGraphContainer();a.modifyCSS(e,t)},e.prototype.saveImage=function(){var t=this.getBBox(),e=this.getFitViewPadding();return a.graph2Canvas({graph:this,width:t.width+e[1]+e[3],height:t.height+e[0]+e[2]})},e}(r);_.forEach(function(t){a.mix(w.prototype,t.AUGMENT)}),t.exports=w},function(t,e){var n={registerBehaviour:function(t,e,r){e.dependences=r,n[t]=e},resetMode:function(t,e){var r=[],i=void 0;e._off();for(var o=0;o<t.length;o++)(i=n[t[o]])&&(i.dependences&&i.dependences.forEach(function(t){t&&-1===r.indexOf(t)&&(n[t](e),r.push(t))}),i&&-1===r.indexOf(i)&&i(e))}};t.exports=n},function(t,e,n){var r=n(82);r.registerShapeManager("node",{defaultShapeType:"common"}),r.registerShapeManager("edge",{defaultShapeType:"common"}),r.registerShapeManager("group",{defaultShapeType:"common"}),r.registerShapeManager("guide",{defaultShapeType:"common"}),n(510),n(507),n(505),n(503),t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(39),i=n(149);setTimeout(function(){if(r.trackable){var t=new Image,e={pg:document.URL,r:(new Date).getTime(),g6:!0,version:i,page_type:"syslog"},n=encodeURIComponent(JSON.stringify([e]));t.src="https://kcart.alipay.com/web/bi.do?BIProfile=merge&d="+n}},3e3)},function(t,e,n){var r=n(188),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.layout=r.mindmap,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n(187));t.exports=i},function(t,e,n){var r=n(188),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.layout=r.indented,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n(187));t.exports=i},function(t,e,n){var r=n(188),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.layout=r.dendrogram,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n(187));t.exports=i},function(t,e,n){var r=n(188),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.layout=r.compactBox,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n(187));t.exports=i},function(t,e,n){var r=n(13),i=n(382),o=n(379),a=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=r.mix({layout:new o.CompactBoxTree({getHGap:function(){return 10},getVGap:function(){return 10}})},n);return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.initEvent=function(){var t=this;this.on("afterdrawinner",function(){t.get("_sourceData").roots.forEach(function(e){var n=t.find(e.id);t._setVisibleByCollapsed(n)})})},e.prototype._executeLayout=function(t){var e=this.get("_sourceData");r.isFunction(t)?t(e.roots,this):r.isObject(t)&&(t.roots=e.roots,t.graph=this,t.execute())},e.prototype.parseSource=function(t){var e=t.roots,n=this.get("_dataMap"),i=[],o=[];return e.forEach(function(t){r.traverseTree(t,function(t,e){t.id||(t.id=r.guid()),e||(e=n[t.parent]),e&&(t.parent=e.id,e.id||(e.id=r.guid()),o.push({source:e.id,target:t.id,id:e.id+"-"+t.id})),i.push(t)},function(t){return t.children},!0)}),{nodes:i,edges:o}},e.prototype._setVisibleByCollapsed=function(t){t.getModel().collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide()})}):t.deepEach(function(t){t.collapsedParent&&(t.hide(),t.getEdges().forEach(function(t){t.hide()}))})},e.prototype.source=function(t){var e=this.parseSource(t);this.emit("beforesource"),this.set("_sourceData",t),this.set("_data",e),this.emit("aftersource")},e.prototype.setNodeNth=function(t,e){var n=t.getModel(),i=t.getParent().getModel().children;r.Array.remove(i,n),i.splice(e,0,n)},e.prototype.getNth=function(t){var e=t.getModel();return t.getParent().getModel().children.indexOf(e)},e.prototype.add=function(t,e){var n=this.get("_dataMap")[e.parent],i={action:"add",model:e},o=void 0;if("node"===t||"guide"===t){if(this.emit("beforechange",i),"node"===t){if(!n)throw new Error("please set available parent Id !");r.isArray(n.children)?n.children.push(e):n.children=[e];var a=this.parseSource({roots:[e]});this.addItems("node",a.nodes),this.addItems("edge",a.edges),o=this.find(e.id),this._setVisibleByCollapsed(o),r.isNil(e.nth)||this.setNodeNth(o,e.nth),this.find(n.id).forceUpdate()}else this.addItems(t,[e]),o=this.find(e.id);return i.item=o,this.emit("afterchange",i),this.draw(),o}console.warn("Tree do not support add type "+t+"!")},e.prototype.update=function(t,e){var n=this;if(e){var i=(t=this.getItem(t)).getModel(),o=r.mix({},i),a={action:"update",item:t,originModel:o,updateModel:e};if(e&&this.emit("beforechange",a),this.updateItem(t,e),t.isNode){if("collapsed"in e&&(e.collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide()})}):t.deepEach(function(t){t.show(),t.getEdges(function(e){return e.getModel().target===t.id}).forEach(function(t){t.show()})},function(t){return t.model.collapsed?null:t.getChildren()})),e.parent){var s=this.find(o.id).getModel(),u=this.find(e.parent).getModel();r.Array.remove(s.children,i),u.push(i),this.find(u.id).forceUpdate()}r.isArray(e.children)&&(o.children&&r.each(o.children,function(t){var e=[n.find(t)];t.getEdges().forEach(function(t){e.push(t)}),n.removeItems(e)}),r.each(e.children,function(t){var e=n.parseSource({roots:[t]});n.addItems("node",e.nodes),n.addItems("edge",e.edges)})),r.isNil(e.nth)||this.setNodeNth(t,e.nth);var c=this.find(i.parent);c&&c.forceUpdate()}return this.emit("afterchange",a),this.draw(),this}},e.prototype.remove=function(t){var e=this.get("_dataMap"),n=[];if((t=this.getItem(t))&&!t.destroyed){var i={action:"remove",item:t};if(this.emit("beforechange",i),n.push(t),t.getEdges().forEach(function(t){n.push(t)}),"node"===t.type){var o=t.getModel(),a=e[o.parent];t.deepEach(function(t){n.push(t),t.getEdges().forEach(function(t){n.push(t)})}),r.Array.remove(a.children,o),this.find(a.id).forceUpdate()}return this.removeItems(r.uniq(n)),this.emit("afterchange",i),this.draw(),this}},e.prototype.getRoots=function(){var t=this;return this.getSource().roots.map(function(e){return t.find(e.id)})},e.prototype.save=function(){var t={roots:r.cloneDeep(this.getSource().roots),guides:this.getGuides().map(function(t){return t.getModel()})};return 0===t.roots.length&&delete t.roots,0===t.guides.length&&delete t.guides,t},e}(i);t.exports=a},function(t,e,n){var r=n(13),i={INIT:"_initForceFit"};i.AUGMENT={_initForceFit:function(){var t=this.get("width"),e=this.get("height");return t||e?t?e?void 0:(this.forceFit("height"),void this._bindForceEvent("height")):(this.forceFit("width"),void this._bindForceEvent("width")):(this.forceFit(),void this._bindForceEvent())},_bindForceEvent:function(t){var e=this,n=this._getTimer("forceFit"),r=function(){var r=setTimeout(function(){e.forceFit(t)},200);n&&clearTimeout(n),e._setTimer("forceFit",r)};window.addEventListener("resize",r),this.set("_windowForceResizeEvent",r)},forceFit:function(t){var e=this.get("_containerDOM"),n=this.get("width"),i=this.get("height"),o=r.getHeight(e),a=r.getWidth(e);return"width"===t?(this.changeSize(a,i),this):"height"===t?(this.changeSize(n,o),this):(this.changeSize(a,o),this)}},t.exports=i},function(t,e,n){var r=n(13),i={CFG:{fitView:void 0,fitViewPadding:10,minZoom:.2,maxZoom:10}};i.AUGMENT={getBBox:function(){return this.get("_itemGroup").getBBox()},getFitViewPadding:function(){return r.toAllPadding(this.get("fitViewPadding"))},setFitView:function(t){if(!t)return this;if("autoZoom"===t)return this.autoZoom(),this;var e=this.getFitViewPadding(),n=this.get("width"),i=this.get("height"),o=this.getBBox(),a=o.maxX-o.minX,s=o.maxY-o.minY,u={x:0,y:0,width:n,height:i},c=r.getNineBoxPosition(t,u,a,s,e),h=[1,0,0,0,1,0,0,0,1];r.mat3.translate(h,h,[-o.minX+c.x,-o.minY+c.y]),this.updateMatrix(h)},_getZoomRatio:function(t){var e=this.get("maxZoom"),n=this.get("minZoom");return t<n&&(t=n),t>e&&(t=e),t},autoZoom:function(t){t||(t=this.getFitViewPadding());var e=[1,0,0,0,1,0,0,0,1],n=this.get("width"),i=this.get("height"),o=this.getBBox(),a=(o.maxX+o.minX)/2,s=(o.maxY+o.minY)/2,u=n-t[1]-t[3],c=i-t[0]-t[2],h=o.maxX-o.minX,f=o.maxY-o.minY,l=Math.min(c/f,u/h);l=this._getZoomRatio(l),r.mat3.translate(e,e,[-a,-s]),r.mat3.scale(e,e,[l,l]),r.mat3.translate(e,e,[n/2,i/2]),this.updateMatrix(e)},getZoom:function(){return this.getMatrix()[0]},updateMatrix:function(t){var e=this.get("_rootGroup"),n=this.get("_frontRootGroup"),r={updateMatrix:t,originMatrix:this.getMatrix()};return this.emit("beforeviewportchange",r),e.setMatrix(t),n.setMatrix(t),this.emit("afterviewportchange",r),this.draw(),this},zoom:function(t,e){if(!r.isNumber(t)){e=this._getZoomRatio(e);var n=this.get("_rootGroup"),i=r.clone(n.getMatrix()),o=i[6]+i[0]*t.x-e*t.x,a=i[7]+i[0]*t.y-e*t.y;return i[6]=0,i[7]=0,i[0]=e,i[4]=e,r.mat3.translate(i,i,[o,a]),this.updateMatrix(i),this}var s=this.get("width"),u=this.get("height");this.zoomByDom({x:s/2,y:u/2},t)},zoomByDom:function(t,e){var n=this.getPoint(t);return this.zoom(n,e),this},translate:function(t,e){var n=this.get("_rootGroup").getMatrix();return r.mat3.translate(n,n,[t,e]),this.updateMatrix(n),this},translateByDom:function(t,e){var n=this.get("_rootGroup").getMatrix()[0];return this.translate(t/n,e/n),this},getMatrix:function(){return this.get("_rootGroup").getMatrix()},getPoint:function(t){return this.getPointByDom(t)},getPointByDom:function(t){var e=this.get("_rootGroup").getMatrix();return r.invertMatrix(t,e)},getPointByCanvas:function(t){var e=this.get("_canvas").get("pixelRatio");return this.getPoint({x:t.x/e,y:t.y/e})},getPointByClient:function(t){var e=this.get("_canvas").getPointByClient(t.x,t.y);return this.getPointByCanvas(e)},getDomPoint:function(t){var e=this.get("_rootGroup").getMatrix();return r.applyMatrix(t,e)},getCanvasPoint:function(t){var e=this.get("_canvas").get("pixelRatio"),n=this.getDomPoint(t);return{x:n.x*e,y:n.y*e}},getClientPoint:function(t){var e=this.getCanvasPoint(t),n=this.get("_canvas").getClientByPoint(e.x,e.y);return{x:n.clientX,y:n.clientY}},focus:function(t){if(r.isString(t)&&(t=this.find(t)),t){var e=t.getCenter();this.focusPoint(e)}return this},focusPoint:function(t){var e=this.get("_rootGroup").getMatrix(),n=this.get("width"),r=this.get("height"),i=-e[6]+n/2-e[0]*t.x,o=-e[7]+r/2-e[0]*t.y;return this.translate(i,o),this},focusPointByDom:function(t){var e=this.getPoint(t);return this.focusPoint(e),this}},t.exports=i},function(t,e,n){var r=n(189),i=n(13),o=n(39);var a=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return r._init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._init=function(){var t=this;this.graph.on("afteritemdraw",function(e){t.cacheKeyFrame(e.item)})},e.prototype.cacheKeyFrame=function(t){var e=this.keyFrameCache,n=t.getGraphicGroup();t.isEdge&&n.setMatrix([1,0,0,0,1,0,0,0,1]),n.deepEach(function(n){var r=n.gid,o={matrix:i.clone(n.getMatrix())};n.isItemContainer&&(o.enterAnimate=t.getEnterAnimate(),o.leaveAnimate=t.getLeaveAnimate()),n.isShape&&(o.attrs=n.getAttrs()),o.item=t,e[r]=o},!0)},e.prototype._compare=function(){var t=this.stash0,e=this.stash1,n=[],r=[],o=[];i.each(e,function(e,r){t[r]?e.element.get("type")===t[r].element.get("type")&&o.push(r):n.push(r)}),i.each(t,function(t,n){e[n]||r.push(n)}),this.enterElements=n,this.leaveElements=r,this.updateElements=o},e.prototype._addTween=function(){var t=this.enterElements,e=this.leaveElements,n=this.updateElements,r=this.stash0,a=this.stash1,s=this.keyFrameCache;i.each(t,function(t){var e=s[t],n=e.enterAnimate;n&&n(e.item,r.element,a.element)}),i.each(e,function(t){var e=s[t],n=e.leaveAnimate;if(n){var i=r[t].element;i.getParent().add(i),n(e.item,r,a)}}),i.each(n,function(t){var e=s[t],n=a[t],u=r[t],c=n.element,h=u.element;u.attrsStash&&c.attr(u.attrsStash),c.setMatrix(u.matrixStash),function(t,e){t.set("capture",!1),t.animate(e,o.updateDuration,o.updateEasing,function(){t.set("capture",!0)})}(c,i.mix({},e.attrs,{matrix:e.matrix})),h!==c&&h.remove()})},e.prototype.getDefaultCfg=function(){return{graph:null,canvases:null,stash0:null,stash1:null,keyFrameCache:{}}},e.prototype.run=function(){this.graph.destroyed||(this.updateStash(),this.count<5e3&&(this._compare(),this._addTween()),i.each(this.canvases,function(t){t.draw()}))},e.prototype.updateStash=function(){var t=this.canvases,e=this.elementsStash,n={},r=0;e=e||{},i.each(t,function(t){r+=function t(e,n,r){var o=n.get("children");return i.each(o,function(n){r++;var o=n.gid;if(n.isGroup&&(r=t(e,n,r)),!i.isNil(o)){var a={matrixStash:i.clone(n.getMatrix()),element:n};if(n.isShape){var s=n.get("attrs");a.attrsStash={},i.each(s,function(t,e){a.attrsStash[e]=n.attr(e)})}e[o]=a}}),r}(n,t,0)}),this.elementsStash=n,this.stash0=e,this.stash1=n,this.count=r},e}(r);t.exports=a},function(t,e,n){var r=n(13),i=n(481),o={INIT:"_initAnimate"};o.CFG={animate:!1,forcePreventAnimate:!1,_enterAnimate:function(t){var e=t.getGraphicGroup(),n=e.getMatrix(),i=r.getBBox(e,n),o=(i.minX+i.maxX)/2,a=(i.minY+i.maxY)/2;r.scaleIn(e,o,a)},_leaveAnimate:function(t){var e=t.getGraphicGroup(),n=e.getMatrix(),i=r.getBBox(e,n),o=(i.minX+i.maxX)/2,a=(i.minY+i.maxY)/2;r.scaleOut(e,o,a)}},o.AUGMENT={_initAnimate:function(){var t=this,e=this.get("_controllers"),n=this.get("animate"),o=this.get("_canvas"),a=this.get("_frontCanvas"),s=void 0;n&&(s=new i({canvases:[o,a],graph:this}),e.animate=s);var u=function(){o.draw(),a.draw()},c=r.debounce(function(){s.run()},16);if(s){var h=void 0;this.draw=function(){t.get("forcePreventAnimate")?(h&&clearTimeout(h),h=setTimeout(function(){s.updateStash()},16),u()):c()}}else this.draw=u},drawFrontCanvas:function(){this.get("_frontCanvas").draw()}},t.exports=o},function(t,e,n){var r=n(13),i={INIT:"_initFilter",CFG:{filters:[]}};i.AUGMENT={_initFilter:function(){var t=this,e=this.get("filters");r.isFunction(e)&&this.set("filters",[e]),this.on("afterchange",function(){!t.destroyed&&t.filter()})},addFilter:function(t){return this.get("filters").push(t),t},removeFilter:function(t){var e=this.get("filters");this.set("filters",r.filter(e,t))},filter:function(){var t=this.get("filters"),e=this.getItems(),n=this.getItems();t.forEach(function(t){n=r.filter(n,t)}),e.forEach(function(t){-1===n.indexOf(t)&&t.hide()}),this.draw()}},t.exports=i},function(t,e,n){var r=n(13),i=n(383),o={CFG:{modes:null,mode:"default"},INIT:"_initModes"};o.AUGMENT={_initModes:function(){this._eventStash={};var t=this.get("modes"),e=this.get("mode");r.isEmpty(t)&&(t=r.cloneDeep(this.constructor.Modes),this.set("modes",t)),this.changeMode(e)},changeMode:function(t){var e=this.get("modes");r.isEmpty(e)||r.isEmpty(e[t])||(i.resetMode(e[t],this),this.set("mode",t))},addBehaviour:function(t){var e=this.get("modes"),n=this.get("mode");r.isEmpty(e[n])&&(e[n]=[]);var o=e[n],a=[].concat(t);return r.each(a,function(t){-1===o.indexOf(t)&&o.push(t)}),i.resetMode(e[n],this),this},removeBehaviour:function(t){var e=this.get("modes")[this.get("mode")];if(!r.isEmpty(e)){var n=[].concat(t);return e=e.filter(function(t){return-1===n.indexOf(t)}),i.resetMode(e,this),this}},behaviourOn:function(t,e){var n=this._eventStash;n[t]||(n[t]=[]),n[t].push(e),this.on(t,e)},_off:function(){var t=this,e=this._eventStash;r.each(e,function(e,n){r.each(e,function(e){t.off(n,e)})}),this._eventStash={}}},t.exports=o},function(t,e,n){var r=n(189),i=n(13),o={MOUSEMOVE:"mousemove",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",CLICK:"click",DBLCLICK:"dblclick",DRAGSTART:"dragstart",DRAG:"drag",DRAGENTER:"dragenter",DRAGLEAVE:"dragleave",DRAGEND:"dragend",DROP:"drop",CONTEXTMENU:"contextmenu",MOUSEWHEEL:"mousewheel",KEYDOWN:"keydown",KEYUP:"keyup",KEYPRESS:"keypress"},a=[o.DBLCLICK,o.MOUSEDOWN,o.MOUSEUP,o.MOUSEENTER,o.MOUSELEAVE,o.MOUSEMOVE,o.CONTEXTMENU,o.MOUSEWHEEL],s=[o.KEYDOWN,o.KEYUP,o.KEYPRESS],u=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return r._domEvents=[],r._initEventStates(),r._registerEvents(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._initEventStates=function(){this._pressing=!1,this._dragging=!1,this._currentEventObj=null,this._dragEventObj={}},e.prototype._registerEvents=function(){this._registerMouseEvents(),this._registerKeyboardEvents()},e.prototype._registerKeyboardEvents=function(){var t=this.graph,e=t.getKeyboardEventWrapper(),n=this._domEvents,r=t.get("keyboardEnable");i.each(s,function(o){n.push(i.addEventListener(e,o,function(e){var n=!0;i.isFunction(r)&&(n=r()),n&&t.emit(o,{domEvent:e})}))})},e.prototype._registerMouseEvents=function(){var t=this,e=this,n=this.graph.getMouseEventWrapper(),r=this._domEvents;i.each(a,function(a){r.push(i.addEventListener(n,a,function(n){var r=t._currentEventObj;t._oldEventObj=r,t._processEventObj(n);var a=t._currentEventObj;e._simulateEvents(n,r,a),-1!==[o.MOUSELEAVE,o.MOUSEENTER].indexOf(n.type)&&e._triggerEvent("canvas:"+n.type),e._triggerEvent(n.type),n.type===o.MOUSELEAVE&&(t._dragging&&e._triggerEvent(o.DRAGLEAVE,i.mix({},a,{item:null,shape:null,currentItem:t._dragEventObj.item,currentShape:t._dragEventObj.shape})),e._initEventStates())}))})},e.prototype.destroy=function(){var t=this._domEvents;i.each(t,function(t){t&&t.remove()}),this._domEvents=null},e.prototype._triggerEvent=function(t,e){if(e||(e="mouseleave"===t?this._oldEventObj:this._currentEventObj),"mousedown"===t&&(e.button=this._button),e._type=t,this.emitGraphEvent(t,e),-1===["canvas:"+o.MOUSELEAVE,"canvas:"+o.MOUSEENTER].indexOf(t)){var n=e.shape&&e.shape.eventPreFix;if(-1!==[o.DRAGSTART,o.DRAG,o.DRAGEND].indexOf(t)&&(n=e.currentShape&&e.currentShape.eventPreFix),n){var r=n+":"+t;e._type=r,i.isBoolean(e._isItemChange)?e._isItemChange&&this.emitGraphEvent(r,e):this.emitGraphEvent(r,e)}}},e.prototype.emitGraphEvent=function(t,e){this.graph.emit(t,e)},e.prototype._getDistanceToPress=function(t){return Math.pow(t.clientX-this._pressX,2)+Math.pow(t.clientY-this._pressY,2)},e.prototype._simulateEvents=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this._dragEventObj.item,a=this._dragEventObj.shape;switch(t.type){case o.MOUSEDOWN:this._pressing=!0,this._button=t.button,this._pressX=t.clientX,this._pressY=t.clientY;break;case o.MOUSEMOVE:if(this._dragging){if(this._triggerEvent(o.DRAG,i.mix({},n,{button:this._button,currentItem:r,currentShape:a})),e.shape!==n.shape){var s=this._isItemChange(e,n);e.shape&&this._triggerEvent(o.DRAGLEAVE,i.mix({},n,{button:this._button,item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,currentItem:r,currentShape:a,_isItemChange:s})),n.shape&&this._triggerEvent(o.DRAGENTER,i.mix({},n,{button:this._button,currentItem:r,currentShape:a,fromItem:e.item,fromShape:e.shape,_isItemChange:s}))}}else this._pressing&&this._getDistanceToPress(t)>9&&(this._dragging=!0,this._dragEventObj=n,r=this._dragEventObj.item,a=this._dragEventObj.shape,this._triggerEvent(o.DRAGSTART,i.mix({},n,{button:this._button,currentItem:r,currentShape:a})));if(e.shape!==n.shape){var u=this._isItemChange(e,n);e.shape&&this._triggerEvent(o.MOUSELEAVE,i.mix({},n,{item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,_isItemChange:u})),n.shape&&this._triggerEvent(o.MOUSEENTER,i.mix({},n,{fromtItem:e.item,fromShape:e.shape,_isItemChange:u}))}break;case o.MOUSEUP:!this._dragging&&this._pressing?this._triggerEvent(o.CLICK,i.mix({},n,{button:this._button})):(this._triggerEvent(o.DROP,i.mix({},n,{button:this._button,currentItem:r,currentShape:a})),this._triggerEvent(o.DRAGEND,i.mix({},n,{button:this._button,currentItem:r,currentShape:a}))),this._pressing=!1,this._dragging=!1,this._dragEventObj={};break;default:return}},e.prototype._isItemChange=function(t,e){var n=t.shape,r=e.shape,o=n&&r&&(n.get("isItemChange")||r.get("isItemChange"));return o?o(r,n):i.isObject(t.item)&&i.isObject(e.item)?t.item.id!==e.item.id:t.item!==e.item},e.prototype._processEventObj=function(t){var e=this.graph,n=e.get("_canvas"),r=e.get("_frontCanvas"),i=this._getEventObj(t,n),o=this._getEventObj(t,r);o.shape&&(i.shape=o.shape,i.item=o.item),i.frontEvObj=o,this._currentEventObj=i},e.prototype._parsePoint=function(t,e){return this.graph.getPointByCanvas({x:t,y:e})},e.prototype._getEventObj=function(t,e){var n=this.graph,r=t.clientX,i=t.clientY,o=e.getPointByClient(r,i),a=this._parsePoint(o.x,o.y),s=e.getShape(o.x,o.y),u=n.getItemByShape(s),c=e.get("pixelRatio");return{item:u,shape:s,x:a.x,y:a.y,domX:o.x/c,domY:o.y/c,domEvent:t}},e}(r);t.exports=u},function(t,e,n){var r={},i=n(485);r.INIT="_initEvents",r.CFG={keyboardEnable:!0},r.AUGMENT={_initEvents:function(){this.get("_controllers").events=new i({graph:this})}},t.exports=r},function(t,e,n){var r=n(13),i={};i.AUGMENT={find:function(t){return this.get("_itemMap")[t]},getNodes:function(){return this.get("_itemMap")._nodes},getEdges:function(){return this.get("_itemMap")._edges},getGroups:function(){return this.get("_itemMap")._groups},getGuides:function(){return this.get("_itemMap")._guides},getItems:function(){var t=this.get("_itemMap"),e=[];return r.each(t,function(t){t.type&&e.push(t)}),e},getItemByShape:function(t){return t?this.getItem(t.id):null},getItem:function(t){var e=this.get("_itemMap");return r.isObject(t)?t.destroyed&&(t=e[t.id]):t=e[t],t}},t.exports=i},function(t,e,n){var r=n(189),i=n(13),o=["color","shape","size","label","style"],a=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return r._init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._init=function(){var t=this,e={};i.each(o,function(n){e[n]={},t[n]=function(r){return e[n].input=r,t}}),this.channels=e},e.prototype.addChannels=function(t){var e=this.channels;i.each(t,function(t,n){e[n]={input:t}})},e.prototype.mapping=function(t){var e=this.channels;i.each(e,function(e,n){i.isNil(t[n])&&(i.isFunction(e.input)?t[n]=e.input(t):e.input&&(t[n]=e.input))})},e}(r);t.exports=a},function(t,e,n){var r=n(488),i={INIT:"_initMapper"};i.AUGMENT={_initMapper:function(){var t=this.get("_controllers");t.nodeMapper=new r({graph:this}),t.edgeMapper=new r({graph:this}),t.groupMapper=new r({graph:this}),t.guideMapper=new r({graph:this})},node:function(t){var e=this._getController("nodeMapper");return t&&e.addChannels(t),e},edge:function(t){var e=this._getController("edgeMapper");return t&&e.addChannels(t),e},group:function(t){var e=this._getController("groupMapper");return t&&e.addChannels(t),this._getController("groupMapper")},guide:function(t){var e=this._getController("guideMapper");return t&&e.addChannels(t),this._getController("guideMapper")}},t.exports=i},function(t,e,n){var r=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return r._init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getDefaultCfg=function(){return{graph:null,auto:!0,processer:null}},e.prototype._init=function(){var t=this,e=this.graph;e.on("afteritemdraw",function(t){var e=t.item,n=e.getKeyShape(),r=e.getModel();if(e.isEdge)r.lineWidth=n.attr("lineWidth");else if(e.isNode||e.isGroup){var i=e.getBBox();r.width=i.width,r.height=i.height}}),e.on("afterchange",function(){t.auto&&!e.destroyed&&t.layout()})},e.prototype.changeLayout=function(t){this.processer=t,this.layout()},e.prototype.layout=function(){var t=this.graph,e=this.processer;t.emit("beforelayout");var n=t.getNodes().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()}),r=t.getEdges().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()}),i=t.getGroups().filter(function(t){return t.isVisible()}).map(function(t){return t.getModel()});t._executeLayout(e,n,r,i),t.updateNodePosition(),t.emit("afterlayout")},e.prototype.getLayoutProcesser=function(){return this.processer},e}(n(189));t.exports=r},function(t,e,n){var r=n(13),i=n(490),o={CFG:{layout:void 0},INIT:"_initLayout"};o.AUGMENT={_initLayout:function(){var t=this.get("_controllers"),e=this._getLayoutCfg();e&&(t.layout=new i(r.mix({graph:this},e)))},_getLayoutCfg:function(){var t=this.get("layout");return r.isPlainObject(t)?t:r.isFunction(t)||r.isObject(t)?{processer:t}:null},layout:function(){return this._getController("layout").layout(),this},updateNodePosition:function(){var t=this.getNodes(),e=this.getGroups(),n=this.getEdges();return t.forEach(function(t){t.layoutUpdate()}),e.forEach(function(t){t.layoutUpdate()}),n.forEach(function(t){t.layoutUpdate()}),this.draw(),this},changeLayout:function(t){return this._getController("layout").changeLayout(t),this},getLayout:function(){return this._getController("layout").getLayoutProcesser()}},t.exports=o},function(t,e,n){var r=n(18),i=n(13),o=function(t){r.svg.Group.superclass.constructor.call(this,t.canvas),this.set("children",[])};i.extend(o,r.svg.Group),i.augment(o,{drawInner:function(t){var e=this;this.deepEach(function(t){var n=t.get("freezePoint"),r=e.getMatrix()[0];t.isShape&&n&&t.get("visible")&&(t.initTransform(),t.transform([["t",-n.x,-n.y],["s",1/r,1/r],["t",n.x,n.y]]))}),o.superclass.drawInner.call(this,t)}}),t.exports=o},function(t,e,n){var r=n(18),i=n(13),o=function(t){r.canvas.Group.superclass.constructor.call(this,t.canvas),this.set("children",[])};i.extend(o,r.canvas.Group),i.augment(o,{drawInner:function(t){var e=this;this.deepEach(function(t){var n=t.get("freezePoint"),r=e.getMatrix()[0];t.isShape&&n&&t.get("visible")&&(t.initTransform(),t.transform([["t",-n.x,-n.y],["s",1/r,1/r],["t",n.x,n.y]]))}),o.superclass.drawInner.call(this,t)}}),t.exports=o},function(t,e,n){var r=n(13),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i={type:"guide",isGuide:!0,zIndex:4};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n(201));t.exports=i},function(t,e,n){var r=n(13),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i={type:"group",isNode:!1,isGroup:!0,zIndex:1};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._afterDraw=function(){this.getModel().collapsed&&this.deepEach(function(t){t.hide()}),t.prototype._afterDraw.call(this)},e.prototype.updatePosition=function(){},e.prototype._shouldDraw=function(){return!0},e.prototype.getCrossEdges=function(){var t=[],e=this.getInnerEdges();this.deepEach(function(e){t.push(e.id)});var n=e.filter(function(e){var n=e.getModel();return-1===t.indexOf(n.source)||-1===t.indexOf(n.target)});return r.uniq(n)},e.prototype.getInnerEdges=function(){var t=[];return this.deepEach(function(e){e.getEdges().forEach(function(e){t.push(e)})}),r.uniq(t)},e.prototype.getChildrenBBox=function(){var t=this.getChildren().map(function(t){return t.getGraphicGroup()});return r.getChildrenBBox(t)},e}(n(380));t.exports=i},function(t,e,n){var r=n(13),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i={type:"edge",isEdge:!0,zIndex:2};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._beforeDraw=function(){var e=this.model,n=this.itemMap;r.isObject(e.source)?this.source=e.source:this.source=n[e.source],r.isObject(e.target)?this.target=e.target:this.target=n[e.target],t.prototype._beforeDraw.call(this)},e.prototype._afterDraw=function(){this.linkedItemVisible()||this.hide(),t.prototype._afterDraw.call(this)},e.prototype._getControlPoints=function(){var t=this.model.controlPoints;return r.isArray(t)?t:[]},e.prototype._shouldDraw=function(){return t.prototype._shouldDraw.call(this)&&this.linkedItemVisible()},e.prototype._getPoint=function(t){if(t.linkable){var e=t.getBBox();return{x:e.centerX,y:e.centerY}}return{x:t.x,y:t.y}},e.prototype.layoutUpdate=function(){var t=this.getGraphicGroup().get("children");if(this._beforeDraw(),1===t.length){var e=this.keyShape,n=this.shapeObj;e.attr("path",n.getPath(this))}else this.draw();this._afterDraw()},e.prototype.linkedItemVisible=function(){var t=this.source,e=this.target;return r.isPlainObject(t)||r.isPlainObject(e)||t.isVisible()||e.isVisible()||t.collapsedParent!==e.collapsedParent},e.prototype.getSource=function(){var t=this.source,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t},e.prototype.getTarget=function(){var t=this.target,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t},e.prototype.getPoints=function(){var t=this.getSource(),e=this.getTarget(),n=this.model,i=this._getControlPoints(),o=this._getPoint(t),a=this._getPoint(e),s=[o].concat(i).concat([a]),u=s.length;if(t.linkable){var c=r.isNumber(this.model.sourceAnchor)&&t.id===n.source?this.model.sourceAnchor:s[1],h=t.getLinkPoints(c);s[0]=h[0]}if(e.linkable){var f=r.isNumber(this.model.targetAnchor)&&e.id===n.target?this.model.targetAnchor:s[u-2],l=e.getLinkPoints(f);s[u-1]=l[0]}return s},e}(n(201));t.exports=i},function(t,e,n){t.exports={Node:n(380),Edge:n(496),Group:n(495),Guide:n(494)}},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e){"use strict";function o(){}var a=o.prototype,s=e.EventEmitter;function u(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function c(t){return function(){return this[t].apply(this,arguments)}}a.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);else e=r[t]||(r[t]=[]);return e},a.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},a.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},a.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!==(void 0===e?"undefined":i(e)))&&t(e.listener)}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),o="object"===(void 0===e?"undefined":i(e));for(n in r)r.hasOwnProperty(n)&&-1===u(r[n],e)&&r[n].push(o?e:{listener:e,once:!1});return this},a.on=c("addListener"),a.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},a.once=c("addOnceListener"),a.defineEvent=function(t){return this.getListeners(t),this},a.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},a.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i)i.hasOwnProperty(r)&&-1!==(n=u(i[r],e))&&i[r].splice(n,1);return this},a.off=c("removeListener"),a.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},a.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},a.manipulateListeners=function(t,e,n){var r,o,a=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!==(void 0===e?"undefined":i(e))||e instanceof RegExp)for(r=n.length;r--;)a.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(o=e[r])&&("function"==typeof o?a.call(this,r,o):s.call(this,r,o));return this},a.removeEvent=function(t){var e,n=void 0===t?"undefined":i(t),r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},a.removeAllListeners=c("removeEvent"),a.emitEvent=function(t,e){var n,r,i,o,a=this.getListenersAsObject(t);for(o in a)if(a.hasOwnProperty(o))for(n=a[o].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},a.trigger=c("emitEvent"),a.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},a.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},o.noConflict=function(){return e.EventEmitter=s,o},void 0===(r=function(){return o}.call(e,n,e,t))||(t.exports=r)}("undefined"!=typeof window?window:this||{})},function(t,e,n){var r=n(13),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this)),o=i.getDefaultCfg();return i._cfg=r.mix({},o,n),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getDefaultCfg=function(){return{}},e.prototype.get=function(t){return this._cfg[t]},e.prototype.set=function(t,e){this._cfg[t]=e},e.prototype.destroy=function(){this._cfg={},this.removeAllListeners(),this.destroyed=!0},e}(n(498));t.exports=i},function(t,e,n){var r=n(13),i=n(18),o=function(){};r.augment(o,{getAttrs:function(){var t=this,e=this.get("attrs"),n={};return r.each(e,function(e,r){n[r]=t.attr(r)}),n},hasClass:function(t){var e=this.get("class");return!(!e||-1===e.indexOf(t))}}),r.mixin(i.canvas.Shape,[o]),t.exports=o},function(t,e,n){var r=n(18),i=n(13),o=function(){};i.augment(o,{findByClass:function(t){var e=[];return this.deepEach(function(n){n.hasClass(t)&&e.push(n)}),e},hasClass:function(t){var e=this.get("class");return!(!e||-1===e.indexOf(t))},deepEach:function(t,e){i.traverseTree(this,t,function(t){return t.get("children")},e)},sort:function(){var t=this.get("children");this.set("children",i.radixSort(t,function(t){return t.get("zIndex")}))},sortBy:function(t){var e=this.get("children");this.set("children",i.radixSort(e,t))},clear:function(t){var e=this.get("children");for(t=!1!==t;0!==e.length;)e[e.length-1].remove(t);return this}}),i.mixin(r.canvas.Group,[o]),i.mixin(r.svg.Group,[o]),t.exports=o},function(t,e,n){n(82).registerGuide("common",{draw:function(){console.warn("do not have this guide, please register one")}})},function(t,e,n){t.exports={common:n(502)}},function(t,e,n){var r=n(82),i=n(13),o=n(39);r.registerGroup("common",{draw:function(t){return t.getModel().collapsed?this.drawCollapsed(t):this.drawExpanded(t)},getLabel:function(t){return t.getModel().label},drawLabel:function(t,e,n){var r=this.getLabel(t);if(r){var a=t.getGraphicGroup(),s=[8,8],u=i.mix(!0,{},o.labelStyle,{x:e+s[0],y:n+s[1],textAlign:"left",textBaseline:"top"});i.isObject(r)?i.mix(u,r):u.text=r,a.addShape("text",{attrs:u})}},drawKeyShape:function(t,e,n,r,a){var s=t.getModel(),u=t.getGraphicGroup(),c=i.mix({},o.groupStyle,s.style),h=i.getRectPath(e,n,r,a,c.radius);return u.addShape("path",{attrs:i.mix({},c,{path:h})})},drawExpanded:function(t){var e=t.getChildrenBBox(),n=e.minX-o.groupBackgroundPadding[3],r=e.minY-o.groupBackgroundPadding[0],i=e.maxX-e.minX+o.groupBackgroundPadding[3]+o.groupBackgroundPadding[1],a=e.maxY-e.minY+o.groupBackgroundPadding[0]+o.groupBackgroundPadding[2],s=this.drawKeyShape(t,n,r,i,a);return this.drawLabel(t,n,r),s},drawCollapsed:function(t){var e=t.getChildrenBBox(),n=e.minX-o.groupBackgroundPadding[3],r=e.minY-o.groupBackgroundPadding[0],i=this.drawKeyShape(t,n,r,184,40);return this.drawLabel(t,n,r),i},anchor:{intersectBox:"rect"}})},function(t,e,n){t.exports={common:n(504)}},function(t,e,n){var r=n(82),i=n(13),o=n(39);r.registerEdge("common",{draw:function(t){var e=this.drawKeyShape(t);return this.drawLabel(t,e),e},drawKeyShape:function(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:i.mix({},n,{path:r})})},getSize:function(t){return t.getModel().size||1},getColor:function(t){return t.getModel().color||"#A3B1BF"},getStyle:function(t){var e=t.getModel();return i.mix(!0,{},{stroke:this.getColor(t),strokeOpacity:.92,lineAppendWidth:4,lineWidth:this.getSize(t)},e.style)},getPath:function(t){var e=t.getPoints();return i.pointsToPolygon(e)},getLabel:function(t){return t.getModel().label},drawLabel:function(t,e){var n=this.getLabel(t),r=t.getGraphicGroup(),a=t.getModel();if(n){var s=e.getPoint(.5),u=i.mix(!0,{},o.labelStyle,s);i.isObject(n)?i.mix(u,n):u.text=n,n=r.addShape("text",{attrs:u});var c=i.toAllPadding([4,8]),h=n.getBBox(),f={fill:"white"},l=a.labelRectStyle?i.mix({},f,a.labelRectStyle):f;r.addShape("rect",{attrs:i.mix({},l,{x:h.minX-c[3],y:h.minY-c[0],width:h.maxX-h.minX+c[1]+c[3],height:h.maxY-h.minY+c[0]+c[2]})}),i.toFront(n)}}})},function(t,e,n){t.exports={common:n(506)}},function(t,e,n){var r=n(82),i=n(13);r.registerNode("html",{getHtml:function(t){return t.getModel().html},cssSize:!0,draw:function(t){var e=i.createDOM('<div class="g6-html-node-container"></div>'),n=t.getGraphicGroup(),r=t.getModel(),o=this.getSize(t),a=this.getStyle(t),s=n.get("canvas").get("htmlElementContaniner"),u=this.cssSize,c=this.getHtml(t);c=c?i.createDOM(c):i.createDOM("<div></div>"),e.css({position:"absolute",padding:"0px",margin:"0px",visibility:"hidden"}),e.appendChild(c),u&&(s.appendChild(e),o[0]=e.width(),o[1]=e.height());var h=-o[0]/2,f=-o[1]/2,l=o[0],p=o[1],d=n.addShape("rect",{attrs:i.mix({},a,{x:h,y:f,width:l,height:p})});return n.addShape("html",{attrs:i.mix({x:h,y:f,width:l,height:p,html:e},r.style)}),d}})},function(t,e,n){var r=n(82),i=n(13),o=n(39);r.registerNode("common",{draw:function(t){var e=t.getGraphicGroup(),n=this.drawLabel(t),r=this.drawKeyShape(t);return n&&i.toFront(n,e),r},getSize:function(t){var e=t.getModel().size;return i.isArray(e)?e:i.isNumber(e)?[e,e]:[o.defaultNodeSize,o.defaultNodeSize]},getStyle:function(t){var e=t.getModel(),n=this.getColor(t),r=i.Palettes.generate(n);return i.mix(!0,{},o.nodeStyle,{fill:r[4],fillOpacity:.92,stroke:r[6]},e.style)},getColor:function(t){return t.getModel().color||"#1890FF"},getLabel:function(t){return t.getModel().label},drawKeyShape:function(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:i.mix({},n,{path:r})})},drawLabel:function(t){var e=t.getGraphicGroup(),n=this.getLabel(t);if(!i.isNil(n)){var r=i.mix(!0,{},o.labelStyle,{x:0,y:0});return i.isObject(n)?i.mix(r,n):r.text=n,e.addShape("text",{class:"label",attrs:r})}},getPath:function(t){var e=this.getSize(t);return i.getEllipsePath(0,0,e[0]/2,e[1]/2)}})},function(t,e,n){t.exports={common:n(509),html:n(508)}},function(t,e,n){var r=n(384),i=n(383),o=n(39),a=n(149),s=n(18),u={Graph:n(382),Tree:n(478),Util:n(13),Layouts:n(379),G:s,Plugins:{},Global:o,Shape:r,registerNode:r.registerNode,registerEdge:r.registerEdge,registerGroup:r.registerGroup,registerGuide:r.registerGuide,registerBehaviour:i.registerBehaviour,version:a,getG:function(){return n(18)},track:function(t){o.trackable=t}};n(473),t.exports=u}])});
//# sourceMappingURL=g6.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(108),
    listCacheDelete = __webpack_require__(109),
    listCacheGet = __webpack_require__(110),
    listCacheHas = __webpack_require__(111),
    listCacheSet = __webpack_require__(112);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(76),
    isObjectLike = __webpack_require__(46);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(31);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(11);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(137)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent(props, name) {
    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

    _this.getParentInfo = function () {
      return {
        id: _this.id,
        name: _this.name
      };
    };

    _this.name = name;
    return _this;
  }

  _createClass(BaseComponent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addElement: this.context.addElement,
        updateElement: this.context.updateElement,
        deleteElement: this.context.deleteElement,
        createId: this.context.createId,
        getParentInfo: this.getParentInfo
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var context = this.context;
      this.id = context.createId();
      context.addElement(this.name, this.id, this.props, context.getParentInfo());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.context.updateElement(this.name, this.id, nextProps, this.context.getParentInfo());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.deleteElement(this.name, this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      if (children) {
        if (children.length) {
          children = _react2.default.createElement(
            'div',
            null,
            children
          );
        }
      } else {
        children = null;
      }

      return children;
    }
  }]);

  return BaseComponent;
}(_react2.default.Component);

BaseComponent.contextTypes = {
  addElement: _propTypes2.default.func,
  updateElement: _propTypes2.default.func,
  deleteElement: _propTypes2.default.func,
  createId: _propTypes2.default.func,
  getParentInfo: _propTypes2.default.func
};
BaseComponent.childContextTypes = {
  addElement: _propTypes2.default.func,
  updateElement: _propTypes2.default.func,
  deleteElement: _propTypes2.default.func,
  createId: _propTypes2.default.func,
  getParentInfo: _propTypes2.default.func
};


function generateBaseTypedComponent(name) {
  var TypedComponent = function (_BaseComponent) {
    _inherits(TypedComponent, _BaseComponent);

    function TypedComponent(props) {
      _classCallCheck(this, TypedComponent);

      return _possibleConstructorReturn(this, (TypedComponent.__proto__ || Object.getPrototypeOf(TypedComponent)).call(this, props, name));
    }

    _createClass(TypedComponent, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          addElement: this.context.addElement,
          updateElement: this.context.updateElement,
          deleteElement: this.context.deleteElement,
          createId: this.context.createId,
          getParentInfo: this.getParentInfo
        };
      }
    }]);

    return TypedComponent;
  }(BaseComponent);

  TypedComponent.contextTypes = {
    addElement: _propTypes2.default.func,
    updateElement: _propTypes2.default.func,
    deleteElement: _propTypes2.default.func,
    createId: _propTypes2.default.func,
    getParentInfo: _propTypes2.default.func
  };
  TypedComponent.childContextTypes = {
    addElement: _propTypes2.default.func,
    updateElement: _propTypes2.default.func,
    deleteElement: _propTypes2.default.func,
    createId: _propTypes2.default.func,
    getParentInfo: _propTypes2.default.func
  };


  return TypedComponent;
}

BaseComponent.generateBaseTypedComponent = generateBaseTypedComponent;

exports.default = BaseComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootComponent = function (_React$Component) {
  _inherits(RootComponent, _React$Component);

  function RootComponent(props, name) {
    _classCallCheck(this, RootComponent);

    var _this = _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this, props));

    _initialiseProps.call(_this);

    _this.name = name;
    _this.gId = 0;
    _this.id = _this.createId();
    var Processor = __webpack_require__(141)("./" + name + 'Processor').default;
    _this.g6Processor = new Processor();
    return _this;
  }

  _createClass(RootComponent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addElement: this.addElement,
        updateElement: this.updateElement,
        deleteElement: this.deleteElement,
        createId: this.createId,
        getParentInfo: this.getParentInfo
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addElement(this.name, this.id, _extends({}, this.props, {
        container: this.containerWrap
      }));
      this.instance = this.g6Processor.createInstance();
      this.notifyG6Instance();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateElement(this.name, this.id, _extends({}, this.props, {
        container: this.containerWrap
      }));
      var newInstance = this.g6Processor.batchedUpdate();
      if (this.instance !== newInstance) {
        this.instance = newInstance;
        this.notifyG6Instance();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.g6Processor.destroy();
      this.instance = null;
      this.containerWrap = null;
    }
  }, {
    key: 'getG6Instance',
    value: function getG6Instance() {
      return this.instance;
    }
  }, {
    key: 'notifyG6Instance',
    value: function notifyG6Instance() {
      if (this.props.onGetG6Instance) {
        this.props.onGetG6Instance(this.instance);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: this.refHandle },
        this.props.children
      );
    }
  }]);

  return RootComponent;
}(_react2.default.Component);

RootComponent.propTypes = {
  data: _propTypes2.default.object,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fitView: _propTypes2.default.string,
  fitViewPadding: _propTypes2.default.string,
  animate: _propTypes2.default.bool,
  minZoom: _propTypes2.default.number,
  maxZoom: _propTypes2.default.number,
  models: _propTypes2.default.object,
  model: _propTypes2.default.string
};
RootComponent.childContextTypes = {
  addElement: _propTypes2.default.func,
  updateElement: _propTypes2.default.func,
  deleteElement: _propTypes2.default.func,
  createId: _propTypes2.default.func,
  getParentInfo: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.createId = function () {
    _this3.gId += 1;
    return _this3.gId;
  };

  this.getParentInfo = function () {
    return {
      id: _this3.id,
      name: _this3.name
    };
  };

  this.addElement = function (name, id, props, parentInfo) {
    return _this3.g6Processor.addElement(name, id, props, parentInfo);
  };

  this.updateElement = function (name, id, props, parentInfo) {
    _this3.g6Processor.updateElement(name, id, props, parentInfo);
  };

  this.deleteElement = function (name, id, parentInfo) {
    _this3.g6Processor.deleteElement(name, id, parentInfo);
  };

  this.refHandle = function (cw) {
    // chart container wrap for reset operation
    if (!_this3.containerWrap) {
      _this3.containerWrap = cw;
    }
  };
};

function generateRootTypedComponent(name) {
  var TypedComponent = function (_RootComponent) {
    _inherits(TypedComponent, _RootComponent);

    function TypedComponent(props) {
      _classCallCheck(this, TypedComponent);

      return _possibleConstructorReturn(this, (TypedComponent.__proto__ || Object.getPrototypeOf(TypedComponent)).call(this, props, name));
    }

    _createClass(TypedComponent, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          addElement: this.addElement,
          updateElement: this.updateElement,
          deleteElement: this.deleteElement,
          createId: this.createId,
          getParentInfo: this.getParentInfo
        };
      }
    }]);

    return TypedComponent;
  }(RootComponent);

  TypedComponent.contextTypes = {
    addElement: _propTypes2.default.func,
    updateElement: _propTypes2.default.func,
    deleteElement: _propTypes2.default.func,
    createId: _propTypes2.default.func,
    getParentInfo: _propTypes2.default.func
  };
  TypedComponent.childContextTypes = {
    addElement: _propTypes2.default.func,
    updateElement: _propTypes2.default.func,
    deleteElement: _propTypes2.default.func,
    createId: _propTypes2.default.func,
    getParentInfo: _propTypes2.default.func
  };


  return TypedComponent;
}

RootComponent.generateRootTypedComponent = generateRootTypedComponent;

exports.default = RootComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(138);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Empty Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 用 g6 创建 chart 一开始没有数据，有数据时对当前 chart 更新数据时，会有问题。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 因此用了 Empty 作为无数据 chart，PureChart 作为有数据的 chart。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


(0, _warning2.default)(_react2.default.PureComponent, '`React.PureComponent` needs React >=15.3.0');

// react 15.3.0 以下不支持 PureComponent 就做一个兼容

var Empty = function (_ref) {
  _inherits(Empty, _ref);

  function Empty() {
    _classCallCheck(this, Empty);

    return _possibleConstructorReturn(this, (Empty.__proto__ || Object.getPrototypeOf(Empty)).apply(this, arguments));
  }

  _createClass(Empty, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          placeholder = _props.placeholder;


      return _react2.default.createElement(
        'div',
        { style: { width: width, height: height } },
        placeholder
      );
    }
  }]);

  return Empty;
}(_react2.default.PureComponent || _react2.default.Component);

Empty.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  placeholder: _propTypes2.default.node
};
Empty.defaultProps = {
  width: '100%',
  placeholder: _react2.default.createElement(
    'div',
    { style: { position: 'relative', top: '48%', textAlign: 'center' } },
    '\u6682\u65E0\u6570\u636E'
  )
};
exports.default = Empty;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addElement: function addElement(name, config, elementInfo) {
    this['add' + name](config, elementInfo, elementInfo.id, elementInfo.parentInfo);
  },
  addUniqueElement: function addUniqueElement(config, name, elementInfo, id) {
    var configContainer = config;

    configContainer[name] = elementInfo;

    return id;
  },
  addGraph: function addGraph(config, elementInfo, id) {
    return this.addUniqueElement(config, 'graph', elementInfo, id);
  },
  addTree: function addTree(config, elementInfo, id) {
    return this.addUniqueElement(config, 'tree', elementInfo, id);
  },
  addLayout: function addLayout(config, elementInfo, id) {
    return this.addUniqueElement(config, 'layout', elementInfo, id);
  },
  addNodeMapper: function addNodeMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'nodeMapper', elementInfo, id);
  },
  addEdgeMapper: function addEdgeMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'edgeMapper', elementInfo, id);
  },
  addGroupMapper: function addGroupMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'groupMapper', elementInfo, id);
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  merge: function merge(config, deleteInfos, elementInfos, clear) {
    this.mergeDelete(config, deleteInfos, elementInfos);
    this.mergeUpdate(config, clear);
  },
  mergeDelete: function mergeDelete(config, deleteInfos, elementInfos) {
    var _this = this;

    Object.keys(deleteInfos).forEach(function (id) {
      var funName = "delete" + elementInfos[id].name;
      if (_this[funName]) {
        _this[funName](config, id, elementInfos[id].parentInfo.id);
      }
    });
  },
  mergeUpdate: function mergeUpdate(config, clear) {
    this.mergeGraph(config, clear);
    this.mergeLayout(config);
    this.mergeNodeMapper(config);
    this.mergeEdgeMapper(config);
    this.mergeGroupMapper(config);
  },
  mergeGraph: function mergeGraph(config, clear) {
    if (config.graph && config.graph.updateProps) {
      config.graph.props = config.graph.updateProps;
    }
    if (clear) {
      delete config.graph.g6Instance;
    }
  },
  mergeLayout: function mergeLayout(config) {
    if (config.layout && config.layout.updateProps) {
      config.layout.props = config.layout.updateProps;
    }
  },
  mergeNodeMapper: function mergeNodeMapper(config) {
    if (config.nodeMapper && config.nodeMapper.updateProps) {
      config.nodeMapper.props = config.nodeMapper.updateProps;
    }
  },
  mergeEdgeMapper: function mergeEdgeMapper(config) {
    if (config.edgeMapper && config.edgeMapper.updateProps) {
      config.edgeMapper.props = config.edgeMapper.updateProps;
    }
  },
  mergeGroupMapper: function mergeGroupMapper(config) {
    if (config.groupMapper && config.groupMapper.updateProps) {
      config.groupMapper.props = config.groupMapper.updateProps;
    }
  },
  deleteNodeMapper: function deleteNodeMapper(config) {
    if (!config) {
      return;
    }
    delete config.nodeMapper;
  },
  deleteEdgeMapper: function deleteEdgeMapper(config) {
    if (!config) {
      return;
    }
    delete config.edgeMapper;
  },
  deleteGroupMapper: function deleteGroupMapper(config) {
    if (!config) {
      return;
    }
    delete config.groupMapper;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _each2 = __webpack_require__(121);

var _each3 = _interopRequireDefault(_each2);

var _capitalize2 = __webpack_require__(118);

var _capitalize3 = _interopRequireDefault(_capitalize2);

var _shared = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var baseEventNames = ['click', 'dblclick', 'mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'mousemove', 'dragstart', 'drag', 'dragend', 'dragenter', 'dragleave', 'drop', 'contextmenu'];

var baseEventsPostfix = baseEventNames.map(_capitalize3.default);

var graphEventNames = ['keydown', 'keyup', 'mousewheel', 'beforechangesize', 'afterchangesize', 'beforeviewportchange', 'afterviewportchange', 'beforechange', 'afterchange'];

var items = ['node', 'edge', 'group', 'guide'];
var itemsEvtNamePrefix = ['onNode', 'onEdge', 'onGroup', 'onGuide'];

var itemEvents = [];

itemsEvtNamePrefix.forEach(function (prefix, i) {
  baseEventsPostfix.forEach(function (postfix, j) {
    itemEvents.push({
      prop: '' + prefix + postfix,
      event: items[i] + ':' + baseEventNames[j]
    });
  });
});

var baseEvents = baseEventNames.map(function (eventName) {
  return {
    prop: 'on' + (0, _capitalize3.default)(eventName),
    event: eventName
  };
});

var graphEvents = graphEventNames.map(function (eventName) {
  return {
    prop: 'on' + (0, _capitalize3.default)(eventName),
    event: eventName
  };
}).concat(baseEvents).concat(itemEvents);

function bindEvents(graph) {
  var EVENTS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments[2];

  (0, _each3.default)(EVENTS, function (key) {
    var prop = key.prop,
        event = key.event;

    var fns = props[prop];

    if (_shared.Util.isFunction(fns)) {
      graph.on(event, function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fns.apply(undefined, _toConsumableArray(args.concat([graph])));
      });
    } else if (_shared.Util.isObject(fns)) {
      for (var name in fns) {
        if (fns[name] !== undefined) {
          graph.on(name + ':' + event, fns[name]);
        }
      }
    }
  });
}

function unbindEvents(graph) {
  var EVENTS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments[2];

  (0, _each3.default)(EVENTS, function (key) {
    var prop = key.prop,
        event = key.event;

    var fns = props[prop];

    if (_shared.Util.isFunction(fns)) {
      graph.off(event, fns);
    } else if (_shared.Util.isObject(fns)) {
      for (var name in fns) {
        if (Object.prototype.hasOwnProperty.call(fns, name)) {
          graph.off(name + ':' + event, fns[name]);
        }
      }
    }
  });
}

function updateEvents(graph) {
  var EVENTS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments[2];
  var nextProps = arguments[3];

  (0, _each3.default)(EVENTS, function (key) {
    var prop = key.prop,
        event = key.event;

    var fns = props[prop];
    var nextFns = nextProps[prop];
    var name = void 0;

    if (!_shared.Util.shallowEqual(fns, nextFns)) {
      if (_shared.Util.isFunction(fns) && _shared.Util.isFunction(nextFns)) {
        graph.off(event, fns);
        graph.on(event, nextFns);
      } else if (_shared.Util.isObject(fns) && _shared.Util.isObject(nextFns)) {
        for (name in fns) {
          if (Object.prototype.hasOwnProperty.call(fns, name)) {
            graph.off(name + ':' + event, fns[name]);
          }
        }
        for (name in nextFns) {
          if (Object.prototype.hasOwnProperty.call(nextFns, name)) {
            graph.on(name + ':' + event, nextFns[name]);
          }
        }
      }
    }
  });
}

exports.default = {
  baseEvents: baseEvents,
  graphEvents: graphEvents,
  treeEvents: graphEvents.slice(0),
  bindEvents: bindEvents,
  unbindEvents: unbindEvents,
  updateEvents: updateEvents
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneDeep2 = __webpack_require__(119);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _g = __webpack_require__(7);

var _g2 = _interopRequireDefault(_g);

var _event = __webpack_require__(21);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createGraph: function createGraph(config) {
    var graphConfig = config.graph;
    var cfg = graphConfig.props;
    var layoutCfg = config.layout;
    if (layoutCfg) {
      // 布局初始化
      cfg.layout = layoutCfg.props;
    }
    var graph = new _g2.default.Graph(cfg);
    graph.dataSource = (0, _cloneDeep3.default)(cfg.data);
    graphConfig.g6Instance = graph;
    return graph;
  },
  executeConfig: function executeConfig(instance, config) {
    var nodeMapperCfg = config.nodeMapper;
    if (nodeMapperCfg) {
      instance.node(nodeMapperCfg.props);
    }
    var edgeMapperCfg = config.edgeMapper;
    if (edgeMapperCfg) {
      instance.edge(edgeMapperCfg.props);
    }
    var groupMapperCfg = config.groupMapper;
    if (groupMapperCfg) {
      instance.group(groupMapperCfg.props);
    }
  },
  executeGraphConfig: function executeGraphConfig(graph, config) {
    var graphCfg = config.graph;
    if (graphCfg && graphCfg.css) {
      graph.css(graphCfg.css);
    }
    this.executeConfig(graph, config);
    if (graphCfg) {
      _event2.default.bindEvents(graph, _event2.default.graphEvents, graphCfg.props);
    }
  },
  createTree: function createTree(config) {
    var treeConfig = config.tree;
    var cfg = treeConfig.props;
    var layoutCfg = config.layout;
    if (layoutCfg) {
      // 布局初始化
      cfg.layout = layoutCfg.props;
    }
    var tree = new _g2.default.Tree(cfg);
    tree.dataSource = (0, _cloneDeep3.default)(cfg.data);
    treeConfig.g6Instance = tree;
    return tree;
  },
  executeTreeConfig: function executeTreeConfig(tree, config) {
    var treeCfg = config.tree;
    if (treeCfg && treeCfg.css) {
      tree.css(treeCfg.css);
    }
    this.executeConfig(tree, config);
    if (treeCfg) {
      _event2.default.bindEvents(tree, _event2.default.treeEvents, treeCfg.props);
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intersectionBy2 = __webpack_require__(125);

var _intersectionBy3 = _interopRequireDefault(_intersectionBy2);

var _differenceBy2 = __webpack_require__(120);

var _differenceBy3 = _interopRequireDefault(_differenceBy2);

var _isEqual2 = __webpack_require__(14);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _shared = __webpack_require__(24);

var _event = __webpack_require__(21);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  needRebuildGraph: function needRebuildGraph(config) {
    if (!config.graph.props || !config.graph.updateProps) {
      return false;
    }
    var graphProps = config.graph.props;
    var nextGraphProps = config.graph.updateProps;
    if (!(0, _isEqual3.default)(graphProps.fitViewPadding, nextGraphProps.fitViewPadding) || !(0, _isEqual3.default)(graphProps.minZoom, nextGraphProps.minZoom) || !(0, _isEqual3.default)(graphProps.maxZoom, nextGraphProps.maxZoom) || !(0, _isEqual3.default)(graphProps.modes, nextGraphProps.modes) || !(0, _isEqual3.default)(graphProps.plugins, nextGraphProps.plugins) || config.nodeMapper && !_shared.Util.shallowEqual(config.nodeMapper.props, config.nodeMapper.updateProps) || config.edgeMapper && !_shared.Util.shallowEqual(config.edgeMapper.props, config.edgeMapper.updateProps) || config.groupMapper && !_shared.Util.shallowEqual(config.groupMapper.props, config.groupMapper.updateProps)) {
      return true;
    }

    return false;
  },
  synchronizeG6GraphUpdate: function synchronizeG6GraphUpdate(graph, config) {
    this.updateGraph(graph, config.graph);
    this.updateLayout(graph, config.layout);
  },
  updateGraph: function updateGraph(graph, graphConfig) {
    if (!graphConfig) {
      return;
    }

    var props = graphConfig.props,
        nextProps = graphConfig.updateProps;
    var width = props.width,
        height = props.height,
        animate = props.animate,
        data = props.data,
        mode = props.mode,
        fitView = props.fitView,
        style = props.style;
    var nextWidth = nextProps.width,
        nextHeight = nextProps.height,
        nextAnimate = nextProps.animate,
        nextData = nextProps.data,
        nextMode = nextProps.mode,
        nextFitView = nextProps.fitView,
        nextStyle = nextProps.style,
        forceFit = nextProps.forceFit;

    // 更新群组

    this.addGraphItem(graph, 'group', data.groups, nextData.groups);
    this.removeGraphItem(graph, data.groups, nextData.groups);
    this.updateGraphItem(graph, data.groups, nextData.groups);
    // 更新接点
    this.addGraphItem(graph, 'node', data.nodes, nextData.nodes);
    this.removeGraphItem(graph, data.nodes, nextData.nodes);
    this.updateGraphItem(graph, data.nodes, nextData.nodes);
    // 更新连线
    this.addGraphItem(graph, 'edge', data.edges, nextData.edges);
    this.removeGraphItem(graph, data.edges, nextData.edges);
    this.updateGraphItem(graph, data.edges, nextData.edges);
    // 更新导引
    this.addGraphItem(graph, 'guide', data.guides, nextData.guides);
    this.removeGraphItem(graph, data.guides, nextData.guides);
    this.updateGraphItem(graph, data.guides, nextData.guides);

    if (animate !== nextAnimate) {
      graph.set('animate', nextAnimate);
    }

    if (width !== nextWidth && height !== nextHeight) {
      graph.changeSize(nextWidth, nextHeight);
    } else if (width !== nextWidth) {
      graph.changeSize(nextWidth, graph.getHeight());
    } else if (height !== nextHeight) {
      graph.changeSize(graph.getWidth(), nextHeight);
    }

    if (mode !== nextMode) {
      graph.changeMode(nextMode);
    }

    if (forceFit || fitView !== nextFitView) {
      graph.setFitView(nextFitView);
    }

    if (!(0, _isEqual3.default)(style, nextStyle)) {
      graph.css(nextStyle);
    }

    _event2.default.updateEvents(graph, _event2.default.graphEvents, props, nextProps);
  },
  addGraphItem: function addGraphItem(graph, type, data, nextData) {
    var paddings = (0, _differenceBy3.default)(nextData, data, 'id');
    paddings.forEach(function (item) {
      graph.add(type, item);
    });
  },
  removeGraphItem: function removeGraphItem(graph, data, nextData) {
    var paddings = (0, _differenceBy3.default)(data, nextData, 'id');
    paddings.forEach(function (item) {
      graph.remove(item.id);
    });
  },
  updateGraphItem: function updateGraphItem(graph, data, nextData) {
    var paddings = (0, _intersectionBy3.default)(nextData, data, 'id');
    paddings.forEach(function (item) {
      graph.update(item.id, item);
    });
  },
  updateLayout: function updateLayout(instance, layoutConfig) {
    if (!layoutConfig) {
      return;
    }
    var props = layoutConfig.props,
        nextProps = layoutConfig.updateProps;

    if (!!nextProps.processer && props.processer !== nextProps.processer && props.processer.toString() !== nextProps.processer.toString()) {
      instance.changeLayout(layoutConfig.updateProps.processer);
    }
  },
  needRebuildTree: function needRebuildTree(config) {
    if (!config.tree.props || !config.tree.updateProps) {
      return false;
    }
    var treeProps = config.tree.props;
    var nextTreeProps = config.tree.updateProps;
    if (!(0, _isEqual3.default)(treeProps.fitViewPadding, nextTreeProps.fitViewPadding) || !(0, _isEqual3.default)(treeProps.minZoom, nextTreeProps.minZoom) || !(0, _isEqual3.default)(treeProps.maxZoom, nextTreeProps.maxZoom) || !(0, _isEqual3.default)(treeProps.modes, nextTreeProps.modes) || !(0, _isEqual3.default)(graphProps.plugins, nextTreeProps.plugins) || config.nodeMapper && !_shared.Util.shallowEqual(config.nodeMapper.props, config.nodeMapper.updateProps) || config.edgeMapper && !_shared.Util.shallowEqual(config.edgeMapper.props, config.edgeMapper.updateProps) || config.groupMapper && !_shared.Util.shallowEqual(config.groupMapper.props, config.groupMapper.updateProps)) {
      return true;
    }

    return false;
  },
  synchronizeG6TreeUpdate: function synchronizeG6TreeUpdate(tree, config) {
    this.updateTree(tree, config.tree);
    this.updateLayout(tree, config.layout);
  },
  updateTree: function updateTree(tree, treeConfig) {
    if (!treeConfig) {
      return;
    }

    var props = treeConfig.props,
        nextProps = treeConfig.updateProps;
    var width = props.width,
        height = props.height,
        animate = props.animate,
        data = props.data,
        mode = props.mode,
        fitView = props.fitView,
        style = props.style;
    var nextWidth = nextProps.width,
        nextHeight = nextProps.height,
        nextAnimate = nextProps.animate,
        nextData = nextProps.data,
        nextMode = nextProps.mode,
        nextFitView = nextProps.fitView,
        nextStyle = nextProps.style,
        forceFit = nextProps.forceFit;


    if (animate !== nextAnimate) {
      tree.set('animate', nextAnimate);
    }

    if (width !== nextWidth && height !== nextHeight) {
      tree.changeSize(nextWidth, nextHeight);
    } else if (width !== nextWidth) {
      tree.changeSize(nextWidth, tree.getHeight());
    } else if (height !== nextHeight) {
      tree.changeSize(tree.getWidth(), nextHeight);
    }

    if (mode !== nextMode) {
      tree.changeMode(nextMode);
    }

    if (forceFit || fitView !== nextFitView) {
      tree.setFitView(nextFitView);
    }

    if (!(0, _isEqual3.default)(style, nextStyle)) {
      tree.css(nextStyle);
    }

    if (!(0, _isEqual3.default)(data, nextData)) {
      tree.source(nextData);
      tree.reRender();
    }

    _event2.default.updateEvents(tree, _event2.default.treeEvents, props, nextProps);
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = undefined;

var _util = __webpack_require__(25);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Util = _util2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _g = __webpack_require__(7);

function length(obj) {
  if (_g.Util.isArray(obj)) {
    return obj.length;
  } else if (_g.Util.isObject(obj)) {
    return Object.keys(obj).length;
  }

  return 0;
}

exports.default = _g.Util.mix({}, _g.Util, {
  shallowEqual: function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
      return !!ret;
    }
    if (objA === objB) {
      return true;
    }
    if (typeof objA === 'function' && typeof objB === 'function') {
      return objA.toString() === objB.toString();
    }
    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== "object" || !objA || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== "object" || !objB) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];
      if (!bHasOwnProperty(key)) {
        return false;
      }
      var valueA = objA[key];
      var valueB = objB[key];
      if (typeof valueA === 'function' && typeof valueB === 'function') {
        ret = valueA.toString() === valueB.toString();
        if (!ret) {
          return false;
        }
        continue;
      }
      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
      if (ret === false || ret === void 0 && valueA !== valueB) {
        return false;
      }
    }
    return true;
  },
  without: function without(objA) {
    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var ret = {};
    _g.Util.each(objA, function (v, k) {
      if (_g.Util.indexOf(keys, k) === -1) {
        ret[k] = v;
      }
    });
    return ret;
  },


  length: length
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(31);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(30),
    eq = __webpack_require__(41);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(91);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(78),
    baseMatchesProperty = __webpack_require__(79),
    identity = __webpack_require__(42),
    isArray = __webpack_require__(0),
    property = __webpack_require__(133);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(42),
    overRest = __webpack_require__(113),
    setToString = __webpack_require__(114);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(95);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(127),
    isLength = __webpack_require__(128);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(43),
    isObjectLike = __webpack_require__(46);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _empty = __webpack_require__(18);

var _empty2 = _interopRequireDefault(_empty);

var _pureGraph = __webpack_require__(51);

var _pureGraph2 = _interopRequireDefault(_pureGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hasSource(source) {
  return !!source && !!source.length;
}

var Graph = function (_ref) {
  _inherits(Graph, _ref);

  function Graph() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Graph);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Graph.__proto__ || Object.getPrototypeOf(Graph)).call.apply(_ref2, [this].concat(args))), _this), _this._refCallback = function (g) {
      if (g) {
        _this.graph = g.getG6Instance();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Graph, [{
    key: 'getG6Instance',
    value: function getG6Instance() {
      return this.graph;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          width = _props.width,
          height = _props.height,
          className = _props.className,
          style = _props.style,
          placeholder = _props.placeholder;


      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        hasSource(data) || !placeholder ? _react2.default.createElement(_pureGraph2.default, _extends({ ref: this._refCallback }, this.props)) : _react2.default.createElement(_empty2.default, {
          width: width,
          height: height,
          placeholder: placeholder === true ? undefined : placeholder
        })
      );
    }
  }]);

  return Graph;
}(_react2.default.PureComponent || _react2.default.Component);

exports.default = Graph;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RootComponent = __webpack_require__(17);

var _RootComponent2 = _interopRequireDefault(_RootComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RootComponent2.default.generateRootTypedComponent('Graph');

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base = __webpack_require__(16);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Base2.default.generateBaseTypedComponent('Layout');

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMapper = exports.EdgeMapper = exports.NodeMapper = undefined;

var _Base = __webpack_require__(16);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeMapper = exports.NodeMapper = _Base2.default.generateBaseTypedComponent('NodeMapper');
var EdgeMapper = exports.EdgeMapper = _Base2.default.generateBaseTypedComponent('EdgeMapper');
var GroupMapper = exports.GroupMapper = _Base2.default.generateBaseTypedComponent('GroupMapper');

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _empty = __webpack_require__(18);

var _empty2 = _interopRequireDefault(_empty);

var _pureTree = __webpack_require__(55);

var _pureTree2 = _interopRequireDefault(_pureTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hasSource(source) {
  return !!source && !!source.length;
}

var Tree = function (_ref) {
  _inherits(Tree, _ref);

  function Tree() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Tree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Tree.__proto__ || Object.getPrototypeOf(Tree)).call.apply(_ref2, [this].concat(args))), _this), _this._refCallback = function (g) {
      if (g) {
        _this.tree = g.getG6Instance();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tree, [{
    key: 'getG6Instance',
    value: function getG6Instance() {
      return this.tree;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          width = _props.width,
          height = _props.height,
          className = _props.className,
          style = _props.style,
          placeholder = _props.placeholder;


      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        hasSource(data) || !placeholder ? _react2.default.createElement(_pureTree2.default, _extends({ ref: this._refCallback }, this.props)) : _react2.default.createElement(_empty2.default, {
          width: width,
          height: height,
          placeholder: placeholder === true ? undefined : placeholder
        })
      );
    }
  }]);

  return Tree;
}(_react2.default.PureComponent || _react2.default.Component);

exports.default = Tree;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RootComponent = __webpack_require__(17);

var _RootComponent2 = _interopRequireDefault(_RootComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RootComponent2.default.generateRootTypedComponent('Tree');

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMapper = exports.EdgeMapper = exports.NodeMapper = exports.Layout = exports.Tree = exports.Graph = undefined;

var _Graph = __webpack_require__(50);

var _Graph2 = _interopRequireDefault(_Graph);

var _Tree = __webpack_require__(54);

var _Tree2 = _interopRequireDefault(_Tree);

var _Layout = __webpack_require__(52);

var _Layout2 = _interopRequireDefault(_Layout);

var _Mapper = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Graph = _Graph2.default;
exports.Tree = _Tree2.default;
exports.Layout = _Layout2.default;
exports.NodeMapper = _Mapper.NodeMapper;
exports.EdgeMapper = _Mapper.EdgeMapper;
exports.GroupMapper = _Mapper.GroupMapper;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = __webpack_require__(14);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _g6Creator = __webpack_require__(22);

var _g6Creator2 = _interopRequireDefault(_g6Creator);

var _g6Update = __webpack_require__(23);

var _g6Update2 = _interopRequireDefault(_g6Update);

var _configAdd = __webpack_require__(19);

var _configAdd2 = _interopRequireDefault(_configAdd);

var _configMerge = __webpack_require__(20);

var _configMerge2 = _interopRequireDefault(_configMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphProcessor = function () {
  function GraphProcessor() {
    _classCallCheck(this, GraphProcessor);

    this.config = {};
    this.elementInfos = {};
    this.added = false;
    this.mounted = false;
    this.updated = false;
    this.deleted = false;
    this.deleteInfos = {};
    this.instanceType = 'graph';
  }

  _createClass(GraphProcessor, [{
    key: 'createInstance',
    value: function createInstance() {
      if (this.mounted) {
        return;
      }
      var config = this.config;
      var graph = _g6Creator2.default.createGraph(config, this.elementInfos);
      _g6Creator2.default.executeGraphConfig(graph, config);
      graph.read(graph.dataSource);

      this.instance = graph;
      this.mounted = true;
      this.resetStates();
      return this.instance;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.instance.destroy();
      this.instance = null;
      this.mounted = false;
    }
  }, {
    key: 'resetStates',
    value: function resetStates() {
      var elems = this.elementInfos;
      for (var id in elems) {
        if (elems[id].updateProps) delete elems[id].updateProps;
        if (this.deleteInfos[id]) {
          delete elems[id];
        }
      }
      this.added = false;
      this.updated = false;
      this.deleteInfos = {};
    }
  }, {
    key: 'addElement',
    value: function addElement(name, id, props, parentInfo) {
      this.added = true;
      this.elementInfos[id] = {
        id: id,
        parentInfo: parentInfo,
        name: name,
        props: props
      };
      if (parentInfo && !this.elementInfos[parentInfo.id]) {
        this.elementInfos[parentInfo.id] = {
          id: parentInfo.id,
          name: parentInfo.name
        };
      }
      _configAdd2.default.addElement(name, this.config, this.elementInfos[id]);
    }
  }, {
    key: 'calUpdateFlag',
    value: function calUpdateFlag(name, id) {
      /* eslint-disable  no-unused-vars */
      var _elementInfos$id$prop = this.elementInfos[id].props,
          children = _elementInfos$id$prop.children,
          props = _objectWithoutProperties(_elementInfos$id$prop, ['children']);

      var _elementInfos$id$upda = this.elementInfos[id].updateProps,
          nextChildren = _elementInfos$id$upda.children,
          nextProps = _objectWithoutProperties(_elementInfos$id$upda, ['children']);
      /* eslint-enable */


      if (name === 'Graph') {
        var data = props.data,
            container = props.container,
            otherProps = _objectWithoutProperties(props, ['data', 'container']);

        var nextData = nextProps.data,
            nextContainer = nextProps.container,
            nextOtherProps = _objectWithoutProperties(nextProps, ['data', 'container']);

        if (!(0, _isEqual3.default)(data, nextData) || !(0, _isEqual3.default)(otherProps, nextOtherProps)) {
          this.updated = true;
        }
      } else {
        if (!(0, _isEqual3.default)(props, nextProps)) {
          this.updated = true;
        }
      }
    }
  }, {
    key: 'updateElement',
    value: function updateElement(name, id, props) {
      this.elementInfos[id].updateProps = _extends({}, props);
      this.calUpdateFlag(name, id);
    }
  }, {
    key: 'deleteElement',
    value: function deleteElement(name, id) {
      if (!this.instance) return;

      this.deleteInfos[id] = id;
      this.deleted = true;
    }
  }, {
    key: 'batchedUpdate',
    value: function batchedUpdate() {
      if (!this.instance) {
        return null;
      }

      if (_g6Update2.default.needRebuildGraph(this.config)) {
        _configMerge2.default.merge(this.config, this.deleteInfos, this.elementInfos, true);
        this.instance.destroy();
        this.mounted = false;
        return this.createInstance();
      }

      if (this.deleted) {
        _configMerge2.default.mergeDelete(this.config, this.deleteInfos, this.elementInfos);
      }

      if (this.updated) {
        _g6Update2.default.synchronizeG6GraphUpdate(this.instance, this.config);
      }

      _configMerge2.default.mergeUpdate(this.config, false);
      this.resetStates();

      return this.instance;
    }
  }]);

  return GraphProcessor;
}();

exports.default = GraphProcessor;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = __webpack_require__(14);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _g6Creator = __webpack_require__(22);

var _g6Creator2 = _interopRequireDefault(_g6Creator);

var _g6Update = __webpack_require__(23);

var _g6Update2 = _interopRequireDefault(_g6Update);

var _configAdd = __webpack_require__(19);

var _configAdd2 = _interopRequireDefault(_configAdd);

var _configMerge = __webpack_require__(20);

var _configMerge2 = _interopRequireDefault(_configMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeProcessor = function () {
  function TreeProcessor() {
    _classCallCheck(this, TreeProcessor);

    this.config = {};
    this.elementInfos = {};
    this.added = false;
    this.mounted = false;
    this.updated = false;
    this.deleted = false;
    this.deleteInfos = {};
    this.instanceType = 'tree';
  }

  _createClass(TreeProcessor, [{
    key: 'createInstance',
    value: function createInstance() {
      if (this.mounted) {
        return;
      }
      var config = this.config;
      var tree = _g6Creator2.default.createTree(config, this.elementInfos);
      _g6Creator2.default.executeTreeConfig(tree, config);
      tree.read(tree.dataSource);

      this.instance = tree;
      this.mounted = true;
      this.resetStates();
      return this.instance;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.instance.destroy();
      this.instance = null;
      this.mounted = false;
    }
  }, {
    key: 'resetStates',
    value: function resetStates() {
      var elems = this.elementInfos;
      for (var id in elems) {
        if (elems[id].updateProps) delete elems[id].updateProps;
        if (this.deleteInfos[id]) {
          delete elems[id];
        }
      }
      this.added = false;
      this.updated = false;
      this.deleteInfos = {};
    }
  }, {
    key: 'addElement',
    value: function addElement(name, id, props, parentInfo) {
      this.added = true;
      this.elementInfos[id] = {
        id: id,
        parentInfo: parentInfo,
        name: name,
        props: props
      };
      if (parentInfo && !this.elementInfos[parentInfo.id]) {
        this.elementInfos[parentInfo.id] = {
          id: parentInfo.id,
          name: parentInfo.name
        };
      }
      _configAdd2.default.addElement(name, this.config, this.elementInfos[id]);
    }
  }, {
    key: 'calUpdateFlag',
    value: function calUpdateFlag(name, id) {
      /* eslint-disable  no-unused-vars */
      var _elementInfos$id$prop = this.elementInfos[id].props,
          children = _elementInfos$id$prop.children,
          props = _objectWithoutProperties(_elementInfos$id$prop, ['children']);

      var _elementInfos$id$upda = this.elementInfos[id].updateProps,
          nextChildren = _elementInfos$id$upda.children,
          nextProps = _objectWithoutProperties(_elementInfos$id$upda, ['children']);
      /* eslint-enable */


      if (name === 'Tree') {
        var data = props.data,
            container = props.container,
            otherProps = _objectWithoutProperties(props, ['data', 'container']);

        var nextData = nextProps.data,
            nextContainer = nextProps.container,
            nextOtherProps = _objectWithoutProperties(nextProps, ['data', 'container']);

        if (!(0, _isEqual3.default)(data, nextData) || !(0, _isEqual3.default)(otherProps, nextOtherProps)) {
          this.updated = true;
        }
      } else {
        if (!(0, _isEqual3.default)(props, nextProps)) {
          this.updated = true;
        }
      }
    }
  }, {
    key: 'updateElement',
    value: function updateElement(name, id, props) {
      this.elementInfos[id].updateProps = _extends({}, props);
      this.calUpdateFlag(name, id);
    }
  }, {
    key: 'deleteElement',
    value: function deleteElement(name, id) {
      if (!this.instance) return;

      this.deleteInfos[id] = id;
      this.deleted = true;
    }
  }, {
    key: 'batchedUpdate',
    value: function batchedUpdate() {
      if (!this.instance) {
        return null;
      }

      if (_g6Update2.default.needRebuildTree(this.config)) {
        _configMerge2.default.merge(this.config, this.deleteInfos, this.elementInfos, true);
        this.instance.destroy();
        this.mounted = false;
        return this.createInstance();
      }

      if (this.deleted) {
        _configMerge2.default.mergeDelete(this.config, this.deleteInfos, this.elementInfos);
      }

      if (this.updated) {
        _g6Update2.default.synchronizeG6TreeUpdate(this.instance, this.config);
      }

      _configMerge2.default.mergeUpdate(this.config, false);
      this.resetStates();

      return this.instance;
    }
  }]);

  return TreeProcessor;
}();

exports.default = TreeProcessor;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(40);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(3),
    keys = __webpack_require__(5);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(3),
    keysIn = __webpack_require__(132);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(9),
    arrayEach = __webpack_require__(26),
    assignValue = __webpack_require__(29),
    baseAssign = __webpack_require__(64),
    baseAssignIn = __webpack_require__(65),
    cloneBuffer = __webpack_require__(84),
    copyArray = __webpack_require__(85),
    copySymbols = __webpack_require__(86),
    copySymbolsIn = __webpack_require__(87),
    getAllKeys = __webpack_require__(35),
    getAllKeysIn = __webpack_require__(96),
    getTag = __webpack_require__(36),
    initCloneArray = __webpack_require__(102),
    initCloneByTag = __webpack_require__(103),
    initCloneObject = __webpack_require__(104),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(45),
    isMap = __webpack_require__(129),
    isObject = __webpack_require__(4),
    isSet = __webpack_require__(130),
    keys = __webpack_require__(5);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(8),
    arrayIncludes = __webpack_require__(27),
    arrayIncludesWith = __webpack_require__(28),
    arrayMap = __webpack_require__(10),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(12);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(72),
    createBaseEach = __webpack_require__(88);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(61),
    isFlattenable = __webpack_require__(105);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(89);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(71),
    keys = __webpack_require__(5);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(8),
    arrayIncludes = __webpack_require__(27),
    arrayIncludesWith = __webpack_require__(28),
    arrayMap = __webpack_require__(10),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(12);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(9),
    equalArrays = __webpack_require__(92),
    equalByTag = __webpack_require__(93),
    equalObjects = __webpack_require__(94),
    getTag = __webpack_require__(36),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(45),
    isTypedArray = __webpack_require__(131);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(9),
    baseIsEqual = __webpack_require__(11);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(77),
    getMatchData = __webpack_require__(97),
    matchesStrictComparable = __webpack_require__(39);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(11),
    get = __webpack_require__(123),
    hasIn = __webpack_require__(124),
    isKey = __webpack_require__(106),
    isStrictComparable = __webpack_require__(38),
    matchesStrictComparable = __webpack_require__(39),
    toKey = __webpack_require__(116);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(44);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(80);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(40);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)(module)))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(3),
    getSymbols = __webpack_require__(100);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(3),
    getSymbolsIn = __webpack_require__(101);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(43);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(83),
    hasUnicode = __webpack_require__(37),
    stringToArray = __webpack_require__(115),
    toString = __webpack_require__(48);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(98);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(8),
    arraySome = __webpack_require__(62),
    cacheHas = __webpack_require__(12);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(139)))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(38),
    keys = __webpack_require__(5);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(67),
    getPrototype = __webpack_require__(99),
    isPrototype = __webpack_require__(107);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(59),
    isArguments = __webpack_require__(126),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(60);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(63),
    hasUnicode = __webpack_require__(37),
    unicodeToArray = __webpack_require__(117);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(48),
    upperFirst = __webpack_require__(134);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(66);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(68),
    baseFlatten = __webpack_require__(70),
    baseIteratee = __webpack_require__(32),
    baseRest = __webpack_require__(33),
    isArrayLikeObject = __webpack_require__(44),
    last = __webpack_require__(47);

/**
 * This method is like `_.difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var differenceBy = baseRest(function(array, values) {
  var iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2))
    : [];
});

module.exports = differenceBy;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(26),
    baseEach = __webpack_require__(69),
    castFunction = __webpack_require__(82),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(73);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(10),
    baseIntersection = __webpack_require__(75),
    baseIteratee = __webpack_require__(32),
    baseRest = __webpack_require__(33),
    castArrayLikeObject = __webpack_require__(81),
    last = __webpack_require__(47);

/**
 * This method is like `_.intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [2.1]
 *
 * // The `_.property` iteratee shorthand.
 * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }]
 */
var intersectionBy = baseRest(function(arrays) {
  var iteratee = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, baseIteratee(iteratee, 2))
    : [];
});

module.exports = intersectionBy;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(74),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(90);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(49);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(135);

var ReactPropTypesSecret = __webpack_require__(49);
var checkPropTypes = __webpack_require__(136);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GraphProcessor": 57,
	"./TreeProcessor": 58
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 141;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
});