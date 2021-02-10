(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Logout_index_js"],{

/***/ "./resources/js/components/Logout/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/Logout/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");





var LogOut = function LogOut() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var token = localStorage.getItem("trailshub:all:userToken");
    localStorage.removeItem("trailshub:all:userToken");
    return axios.get("/api/auth/logout", {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_2__.default.home);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: "Logging out..."
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogOut);

/***/ })

}]);