/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ \"./src/utils/index.js\");\n\n\n(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.styleLog)(\n  \"안녕! 웹팩 😃\",\n  `\n    font-size: 4rem;\n    font-weight: bold;\n  `\n);\n\nlet price = 89_000;\n\n(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.test)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.currency)(price) === `${(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.numberWithComma)(price)}원`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbWFudWFsLXRvb2xjaGFpbi8uL3NyYy9tYWluLmpzPzMzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVMb2csIHRlc3QsIGN1cnJlbmN5LCBudW1iZXJXaXRoQ29tbWEgfSBmcm9tIFwiLi91dGlscy9pbmRleC5qc1wiO1xuXG5zdHlsZUxvZyhcbiAgXCLslYjrhZUhIOybue2MqSDwn5iDXCIsXG4gIGBcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGBcbik7XG5cbmxldCBwcmljZSA9IDg5XzAwMDtcblxudGVzdChjdXJyZW5jeShwcmljZSkgPT09IGAke251bWJlcldpdGhDb21tYShwcmljZSl97JuQYCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/utils/currency.js":
/*!*******************************!*\
  !*** ./src/utils/currency.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": function() { return /* binding */ currency; }\n/* harmony export */ });\n/* harmony import */ var _numberWithComma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberWithComma.js */ \"./src/utils/numberWithComma.js\");\n\n\nconst currency = (price, currencyUnit = \"원\") => {\n  price = (0,_numberWithComma_js__WEBPACK_IMPORTED_MODULE_0__.numberWithComma)(price);\n  return currencyUnit === \"원\"\n    ? `${price}${currencyUnit}`\n    : `${currencyUnit}${price}`;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3VycmVuY3kuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbWFudWFsLXRvb2xjaGFpbi8uL3NyYy91dGlscy9jdXJyZW5jeS5qcz8xMGYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlcldpdGhDb21tYSB9IGZyb20gXCIuL251bWJlcldpdGhDb21tYS5qc1wiO1xuXG5leHBvcnQgY29uc3QgY3VycmVuY3kgPSAocHJpY2UsIGN1cnJlbmN5VW5pdCA9IFwi7JuQXCIpID0+IHtcbiAgcHJpY2UgPSBudW1iZXJXaXRoQ29tbWEocHJpY2UpO1xuICByZXR1cm4gY3VycmVuY3lVbml0ID09PSBcIuybkFwiXG4gICAgPyBgJHtwcmljZX0ke2N1cnJlbmN5VW5pdH1gXG4gICAgOiBgJHtjdXJyZW5jeVVuaXR9JHtwcmljZX1gO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/currency.js\n");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": function() { return /* reexport safe */ _currency_js__WEBPACK_IMPORTED_MODULE_2__.currency; },\n/* harmony export */   \"numberWithComma\": function() { return /* reexport safe */ _numberWithComma_js__WEBPACK_IMPORTED_MODULE_3__.numberWithComma; },\n/* harmony export */   \"styleLog\": function() { return /* reexport safe */ _styleLog_js__WEBPACK_IMPORTED_MODULE_1__.styleLog; },\n/* harmony export */   \"test\": function() { return /* reexport safe */ _test_js__WEBPACK_IMPORTED_MODULE_0__.test; }\n/* harmony export */ });\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ \"./src/utils/test.js\");\n/* harmony import */ var _styleLog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleLog.js */ \"./src/utils/styleLog.js\");\n/* harmony import */ var _currency_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.js */ \"./src/utils/currency.js\");\n/* harmony import */ var _numberWithComma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberWithComma.js */ \"./src/utils/numberWithComma.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW1hbnVhbC10b29sY2hhaW4vLi9zcmMvdXRpbHMvaW5kZXguanM/NzViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi90ZXN0LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZUxvZy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY3VycmVuY3kuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL251bWJlcldpdGhDb21tYS5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/index.js\n");

/***/ }),

/***/ "./src/utils/numberWithComma.js":
/*!**************************************!*\
  !*** ./src/utils/numberWithComma.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberWithComma\": function() { return /* binding */ numberWithComma; }\n/* harmony export */ });\nconst numberWithComma = (number) => {\n  return number.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \"$1,\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbnVtYmVyV2l0aENvbW1hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1tYW51YWwtdG9vbGNoYWluLy4vc3JjL3V0aWxzL251bWJlcldpdGhDb21tYS5qcz8wYmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBudW1iZXJXaXRoQ29tbWEgPSAobnVtYmVyKSA9PiB7XG4gIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiJDEsXCIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/numberWithComma.js\n");

/***/ }),

/***/ "./src/utils/styleLog.js":
/*!*******************************!*\
  !*** ./src/utils/styleLog.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleLog\": function() { return /* binding */ styleLog; }\n/* harmony export */ });\nconst styleLog = (message, cssCode) => {\n  console.log(`%c${message}`, cssCode);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3R5bGVMb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW1hbnVhbC10b29sY2hhaW4vLi9zcmMvdXRpbHMvc3R5bGVMb2cuanM/ZDUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3R5bGVMb2cgPSAobWVzc2FnZSwgY3NzQ29kZSkgPT4ge1xuICBjb25zb2xlLmxvZyhgJWMke21lc3NhZ2V9YCwgY3NzQ29kZSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/styleLog.js\n");

/***/ }),

/***/ "./src/utils/test.js":
/*!***************************!*\
  !*** ./src/utils/test.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": function() { return /* binding */ test; }\n/* harmony export */ });\nconst test = (condition, ...data) => {\n  console.assert(condition, ...data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbWFudWFsLXRvb2xjaGFpbi8uL3NyYy91dGlscy90ZXN0LmpzPzI3MjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3QgPSAoY29uZGl0aW9uLCAuLi5kYXRhKSA9PiB7XG4gIGNvbnNvbGUuYXNzZXJ0KGNvbmRpdGlvbiwgLi4uZGF0YSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/test.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;