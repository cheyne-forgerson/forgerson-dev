module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Hamburger.js":
/*!*********************************!*\
  !*** ./components/Hamburger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Hamburger.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Hamburger(props) {\n  return __jsx(\"div\", {\n    className: props.hamContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: props.hamClass,\n    onClick: props.hamClick,\n    id: props.navIcon4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhbWJ1cmdlci5qcz80ZTdhIl0sIm5hbWVzIjpbIkhhbWJ1cmdlciIsInByb3BzIiwiaGFtQ29udGFpbmVyIiwiaGFtQ2xhc3MiLCJoYW1DbGljayIsIm5hdkljb240Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUdBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBRXRCLFNBQ0k7QUFBSyxhQUFTLEVBQUVBLEtBQUssQ0FBQ0MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxLQUFLLENBQUNFLFFBQXRCO0FBQWdDLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxRQUEvQztBQUF5RCxNQUFFLEVBQUVILEtBQUssQ0FBQ0ksUUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBREo7QUFTSDs7QUFFY0wsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hhbWJ1cmdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gSGFtYnVyZ2VyKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaGFtQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5oYW1DbGFzc30gb25DbGljaz17cHJvcHMuaGFtQ2xpY2t9IGlkPXtwcm9wcy5uYXZJY29uNH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IFxuICAgIClcbn0gICAgXG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hamburger.js\n");

/***/ }),

/***/ "./components/Hamburger.module.css":
/*!*****************************************!*\
  !*** ./components/Hamburger.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"hamContainer\": \"Hamburger_hamContainer__19to_\",\n\t\"navIcon4\": \"Hamburger_navIcon4__2-PL5\",\n\t\"open\": \"Hamburger_open__1Y9qj\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhbWJ1cmdlci5tb2R1bGUuY3NzPzI5MjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IYW1idXJnZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhhbUNvbnRhaW5lclwiOiBcIkhhbWJ1cmdlcl9oYW1Db250YWluZXJfXzE5dG9fXCIsXG5cdFwibmF2SWNvbjRcIjogXCJIYW1idXJnZXJfbmF2SWNvbjRfXzItUEw1XCIsXG5cdFwib3BlblwiOiBcIkhhbWJ1cmdlcl9vcGVuX18xWTlxalwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hamburger.module.css\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hamburger */ \"./components/Hamburger.js\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hamburger.module.css */ \"./components/Hamburger.module.css\");\n/* harmony import */ var _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ \"@fortawesome/pro-solid-svg-icons\");\n/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Layout(props) {\n  //NAV\n  const {\n    0: openNav,\n    1: setOpenNav\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  function navBtnClick() {\n    openNav ? setOpenNav(false) : setOpenNav(true);\n  }\n\n  const navOpen = {\n    display: \"flex\"\n  };\n  const navClosed = {\n    display: \"none\"\n  };\n  return __jsx(\"div\", {\n    className: \"layout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(\"div\", {\n    style: openNav ? navOpen : navClosed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  })), __jsx(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    navIcon4: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navIcon4,\n    hamContainer: _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hamContainer,\n    hamClass: openNav,\n    hamClick: () => navBtnClick(),\n    hamClass: openNav ? _components_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.open : \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwib3Blbk5hdiIsInNldE9wZW5OYXYiLCJ1c2VTdGF0ZSIsIm5hdkJ0bkNsaWNrIiwibmF2T3BlbiIsImRpc3BsYXkiLCJuYXZDbG9zZWQiLCJjaGlsZHJlbiIsImhhbVN0eWxlcyIsIm5hdkljb240IiwiaGFtQ29udGFpbmVyIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFFbkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFFQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCSCxXQUFPLEdBQUdDLFVBQVUsQ0FBQyxLQUFELENBQWIsR0FBdUJBLFVBQVUsQ0FBQyxJQUFELENBQXhDO0FBQ0Q7O0FBRUQsUUFBTUcsT0FBTyxHQUFHO0FBQ2RDLFdBQU8sRUFBRTtBQURLLEdBQWhCO0FBR0EsUUFBTUMsU0FBUyxHQUFHO0FBQ2hCRCxXQUFPLEVBQUU7QUFETyxHQUFsQjtBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixLQUFLLENBQUNRLFFBRFgsQ0FESixFQUlJO0FBQUssU0FBSyxFQUFFUCxPQUFPLEdBQUdJLE9BQUgsR0FBYUUsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkosRUFRSSxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxFQUFFRSx1RUFBUyxDQUFDQyxRQUR0QjtBQUVFLGdCQUFZLEVBQUVELHVFQUFTLENBQUNFLFlBRjFCO0FBR0UsWUFBUSxFQUFFVixPQUhaO0FBSUUsWUFBUSxFQUFFLE1BQU1HLFdBQVcsRUFKN0I7QUFLRSxZQUFRLEVBQUVILE9BQU8sR0FBR1EsdUVBQVMsQ0FBQ0csSUFBYixHQUFvQixFQUx2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQWtCSDs7QUFFY2IscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JzsgXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvSGFtYnVyZ2VyJztcbmltcG9ydCBoYW1TdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1idXJnZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZhQmVsbEV4Y2xhbWF0aW9uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Byby1zb2xpZC1zdmctaWNvbnMnO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcblxuICAgIC8vTkFWXG4gICAgY29uc3QgW29wZW5OYXYsIHNldE9wZW5OYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gbmF2QnRuQ2xpY2soKSB7XG4gICAgICBvcGVuTmF2ID8gc2V0T3Blbk5hdihmYWxzZSkgOiBzZXRPcGVuTmF2KHRydWUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYXZPcGVuID0ge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2Q2xvc2VkID0ge1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtvcGVuTmF2ID8gbmF2T3BlbiA6IG5hdkNsb3NlZH0+XG4gICAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgICAgICAgPEhhbWJ1cmdlciBcbiAgICAgICAgICAgICAgbmF2SWNvbjQ9e2hhbVN0eWxlcy5uYXZJY29uNH1cbiAgICAgICAgICAgICAgaGFtQ29udGFpbmVyPXtoYW1TdHlsZXMuaGFtQ29udGFpbmVyfVxuICAgICAgICAgICAgICBoYW1DbGFzcz17b3Blbk5hdn1cbiAgICAgICAgICAgICAgaGFtQ2xpY2s9eygpID0+IG5hdkJ0bkNsaWNrKCl9XG4gICAgICAgICAgICAgIGhhbUNsYXNzPXtvcGVuTmF2ID8gaGFtU3R5bGVzLm9wZW4gOiBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.module.css */ \"./components/Nav.module.css\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ \"@fortawesome/pro-solid-svg-icons\");\n/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ \"@fortawesome/pro-light-svg-icons\");\n/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/components/Nav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Nav(props) {\n  return __jsx(\"div\", {\n    style: props.navShow,\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navInfoContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    id: \"infoIcon\",\n    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faInfoSquare\"],\n    width: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faSignIn\"],\n    width: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faQuestionSquare\"],\n    width: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navSocialContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-linkedin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }), __jsx(\"i\", {\n    className: \"fal fa-envelope\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }), __jsx(\"i\", {\n    className: \"fab fa-instagram-square\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz9hMTMzIl0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwibmF2U2hvdyIsInN0eWxlcyIsIm5hdkNvbnRhaW5lciIsIm5hdkluZm9Db250YWluZXIiLCJmYUluZm9TcXVhcmUiLCJmYVNpZ25JbiIsImZhUXVlc3Rpb25TcXVhcmUiLCJuYXZTb2NpYWxDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUVoQixTQUNJO0FBQUssU0FBSyxFQUFFQSxLQUFLLENBQUNDLE9BQWxCO0FBQTJCLGFBQVMsRUFBRUMsc0RBQU0sQ0FBQ0MsWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxzREFBTSxDQUFDRSxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOEVBQUQ7QUFBaUIsTUFBRSxFQUFDLFVBQXBCO0FBQStCLFFBQUksRUFBRUMsNkVBQXJDO0FBQW1ELFNBQUssRUFBQyxHQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMseUVBQXZCO0FBQWlDLFNBQUssRUFBQyxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsaUZBQXZCO0FBQXlDLFNBQUssRUFBQyxHQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixFQU1HO0FBQUssYUFBUyxFQUFFTCxzREFBTSxDQUFDTSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETCxFQUVLO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTCxFQUdLO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITCxDQU5ILENBREo7QUFjSDs7QUFFY1Qsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7ZmFJbmZvU3F1YXJlfSBmcm9tICdAZm9ydGF3ZXNvbWUvcHJvLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7ZmFRdWVzdGlvblNxdWFyZX0gZnJvbSAnQGZvcnRhd2Vzb21lL3Byby1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQge2ZhU2lnbklufSBmcm9tICdAZm9ydGF3ZXNvbWUvcHJvLWxpZ2h0LXN2Zy1pY29ucydcblxuXG5mdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3Byb3BzLm5hdlNob3d9IGNsYXNzTmFtZT17c3R5bGVzLm5hdkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkluZm9Db250YWluZXJ9PiBcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGlkPVwiaW5mb0ljb25cIiBpY29uPXtmYUluZm9TcXVhcmV9IHdpZHRoPVwiMFwiLz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbklufSB3aWR0aD1cIjBcIi8+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVF1ZXN0aW9uU3F1YXJlfSB3aWR0aD1cIjBcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZTb2NpYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbS1zcXVhcmVcIj48L2k+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./components/Nav.module.css":
/*!***********************************!*\
  !*** ./components/Nav.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"navContainer\": \"Nav_navContainer__221xH\",\n\t\"navInfoContainer\": \"Nav_navInfoContainer__3Ek9w\",\n\t\"navSocialContainer\": \"Nav_navSocialContainer__x9PWr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5tb2R1bGUuY3NzPzhkODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkNvbnRhaW5lclwiOiBcIk5hdl9uYXZDb250YWluZXJfXzIyMXhIXCIsXG5cdFwibmF2SW5mb0NvbnRhaW5lclwiOiBcIk5hdl9uYXZJbmZvQ29udGFpbmVyX18zRWs5d1wiLFxuXHRcIm5hdlNvY2lhbENvbnRhaW5lclwiOiBcIk5hdl9uYXZTb2NpYWxDb250YWluZXJfX3g5UFdyXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(\"meta\", {\n  charSet: \"utf-8\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}), __jsx(\"link\", {\n  rel: \"icon\",\n  href: \"%PUBLIC_URL%/favicon.ico\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}), __jsx(\"link\", {\n  rel: \"apple-touch-icon\",\n  href: \"%PUBLIC_URL%/logo192.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}), __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n}, \"forgerson.DEV\"), __jsx(\"link\", {\n  href: \"https://fonts.googleapis.com/css2?family=Nunito&display=swap\",\n  rel: \"stylesheet\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }\n})), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 7\n  }\n}, \"Hello\")));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLDBCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBSUU7QUFBTSxLQUFHLEVBQUMsa0JBQVY7QUFBNkIsTUFBSSxFQUFDLDBCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLEVBTUU7QUFBTSxNQUFJLEVBQUMsOERBQVg7QUFBMEUsS0FBRyxFQUFDLFlBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFORixDQURGLEVBU0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBVEYsQ0FERjs7QUFnQmVBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiJVBVQkxJQ19VUkwlL2xvZ28xOTIucG5nXCIgLz5cbiAgICAgIDx0aXRsZT5mb3JnZXJzb24uREVWPC90aXRsZT5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICA8L0xheW91dD5cbiAgPC9kaXY+ICBcbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/qlab/Documents/Forgerson/WebDev/Apps/forgerson-dev-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/pro-light-svg-icons":
/*!***************************************************!*\
  !*** external "@fortawesome/pro-light-svg-icons" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/pro-light-svg-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcHJvLWxpZ2h0LXN2Zy1pY29uc1wiPzM5MTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGZvcnRhd2Vzb21lL3Byby1saWdodC1zdmctaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcHJvLWxpZ2h0LXN2Zy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/pro-light-svg-icons\n");

/***/ }),

/***/ "@fortawesome/pro-solid-svg-icons":
/*!***************************************************!*\
  !*** external "@fortawesome/pro-solid-svg-icons" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/pro-solid-svg-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcHJvLXNvbGlkLXN2Zy1pY29uc1wiPzg1YzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGZvcnRhd2Vzb21lL3Byby1zb2xpZC1zdmctaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcHJvLXNvbGlkLXN2Zy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/pro-solid-svg-icons\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIj85N2FhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/react-fontawesome\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });