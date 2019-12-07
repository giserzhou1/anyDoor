/*! 版权所有，翻版必究 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exercise.js":
/*!*************************!*\
  !*** ./src/exercise.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar c = 4;\nvar b = 5;\nfunction newSet() {\n    // const s = new Set();\n    // [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));\n\n    // for (let i of s) {\n    //     console.log(i);\n    // }\n    var b = 4;\n    return c;\n}\nfunction test() {\n    var a = 4;\n    console.log(a);\n}\nfunction s() {\n    return 6;\n}\nfunction compare(b, c) {\n    if (b > c) {\n        return s();\n    } else {\n        return c;\n    }\n}\nexports.newSet = newSet;\nexports.test = test;\nexports.compare = compare;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXhlcmNpc2UuanM/ODY3NSJdLCJuYW1lcyI6WyJjIiwiYiIsIm5ld1NldCIsInRlc3QiLCJhIiwiY29uc29sZSIsImxvZyIsInMiLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLElBQUksQ0FBVjtBQUNBLElBQU1DLElBQUksQ0FBVjtBQUNBLFNBQVNDLE1BQVQsR0FBa0I7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU1ELElBQUksQ0FBVjtBQUNBLFdBQU9ELENBQVA7QUFDSDtBQUNELFNBQVNHLElBQVQsR0FBZ0I7QUFDYixRQUFJQyxJQUFJLENBQVI7QUFDQUMsWUFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0Y7QUFDRCxTQUFTRyxDQUFULEdBQVk7QUFDUixXQUFPLENBQVA7QUFDSDtBQUNELFNBQVNDLE9BQVQsQ0FBaUJQLENBQWpCLEVBQW1CRCxDQUFuQixFQUFxQjtBQUNqQixRQUFHQyxJQUFFRCxDQUFMLEVBQU87QUFDSCxlQUFPTyxHQUFQO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsZUFBT1AsQ0FBUDtBQUNIO0FBQ0o7UUFFR0UsTSxHQUFBQSxNO1FBQVFDLEksR0FBQUEsSTtRQUFNSyxPLEdBQUFBLE8iLCJmaWxlIjoiLi9zcmMvZXhlcmNpc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjID0gNFxyXG5jb25zdCBiID0gNVxyXG5mdW5jdGlvbiBuZXdTZXQoKSB7XHJcbiAgICAvLyBjb25zdCBzID0gbmV3IFNldCgpO1xyXG4gICAgLy8gWzIsIDMsIDUsIDQsIDUsIDIsIDJdLmZvckVhY2goeCA9PiBzLmFkZCh4KSk7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSBvZiBzKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBiID0gNFxyXG4gICAgcmV0dXJuIGNcclxufVxyXG5mdW5jdGlvbiB0ZXN0KCkge1xyXG4gICB2YXIgYSA9IDRcclxuICAgY29uc29sZS5sb2coYSlcclxufVxyXG5mdW5jdGlvbiBzKCl7XHJcbiAgICByZXR1cm4gNlxyXG59XHJcbmZ1bmN0aW9uIGNvbXBhcmUoYixjKXtcclxuICAgIGlmKGI+Yyl7XHJcbiAgICAgICAgcmV0dXJuIHMoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGNcclxuICAgIH1cclxufVxyXG5leHBvcnR7XHJcbiAgICBuZXdTZXQsIHRlc3QsIGNvbXBhcmVcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/exercise.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _exercise = __webpack_require__(/*! ./exercise */ \"./src/exercise.js\");\n\n(0, _exercise.newSet)();\n(0, _exercise.test)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtuZXdTZXQsIHRlc3R9IGZyb20gXCIuL2V4ZXJjaXNlXCJcclxubmV3U2V0KClcclxudGVzdCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });