(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_js"],{

/***/ "./resources/js/components/Dashboard/Dashboard.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_getMemberShopLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/getMemberShopLevel */ "./resources/js/helpers/getMemberShopLevel.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");







var Dashboard = function Dashboard(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      children: "Welcome ".concat(user.name)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      children: "Membership Level ".concat((0,_helpers_getMemberShopLevel__WEBPACK_IMPORTED_MODULE_2__.default)(user.membership_level))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.getpro,
      children: "Upgrade Now"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./resources/js/helpers/getMemberShopLevel.js":
/*!****************************************************!*\
  !*** ./resources/js/helpers/getMemberShopLevel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (num) {
  return num === 0 ? "basic" : "pro";
});

/***/ })

}]);