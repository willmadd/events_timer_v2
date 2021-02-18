(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_containers_Dashboard_index_js"],{

/***/ "./resources/js/components/Dashboard/Menu.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Dashboard/Menu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _menuitems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuitems */ "./resources/js/components/Dashboard/menuitems.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");






var Menu = function Menu() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
    children: _menuitems__WEBPACK_IMPORTED_MODULE_2__.default.map(function (menuItem) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          exact: true,
          to: menuItem.url,
          onMouseOver: function onMouseOver() {
            return (0,_routes_helpers__WEBPACK_IMPORTED_MODULE_3__.preloadRouteComponent)(menuItem.url);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
            children: menuItem.name
          })
        })
      }, menuItem.name);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./resources/js/components/Dashboard/index.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Dashboard/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader/index.js");
/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LogOut */ "./resources/js/components/LogOut/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./resources/js/components/Dashboard/Menu.js");
/* harmony import */ var _img_header_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/header.jpg */ "./resources/js/components/Dashboard/img/header.jpg");











var Dashboard = function Dashboard(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var DashboardMain = (0,_routes_helpers__WEBPACK_IMPORTED_MODULE_2__.ReactLazyPreload)(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_components_Dashboard_Dashboard_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Dashboard */ "./resources/js/components/Dashboard/Dashboard.js"));
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    if (!props.user.loading && props.user.error) {
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.signup);
    }
  }, [props.user]);

  if (props.user.loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_4__.default, {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "dashboard",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: _img_header_jpg__WEBPACK_IMPORTED_MODULE_7__.default
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dashboard__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
            exact: true,
            path: "/dashboard",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardMain, {
              user: props.user
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
            exact: true,
            path: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.logout,
            component: _LogOut__WEBPACK_IMPORTED_MODULE_5__.default
          })]
        })]
      })]
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./resources/js/components/Dashboard/menuitems.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/menuitems.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: "Profile",
  url: "/dashboard"
}, {
  name: "Get EventsCountdown Pro",
  url: "/getpro"
}, {
  name: "My Videos",
  url: "/dashboard/myvideos"
}, {
  name: "Logout",
  url: "/dashboard/logout"
}]);

/***/ }),

/***/ "./resources/js/components/Loader/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/Loader/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Loading = function Loading(_ref) {
  var percentage = _ref.percentage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "bar",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      style: {
        width: "".concat(percentage, "%")
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./resources/js/components/LogOut/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/LogOut/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

 // import { useHistory } from "react-router-dom";
// import routeID from "../../routes/routeID";

var LogOut = function LogOut() {
  // const history = useHistory();
  // useEffect(() => {
  //     let token = localStorage.getItem("trailshub:all:userToken");
  //     localStorage.removeItem("trailshub:all:userToken");
  //     return axios
  //         .get(`/api/auth/logout`, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //             },
  //         })
  //         .then((res) => {
  //             history.push(routeID.home);
  //         });
  // }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: "Logging out..."
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogOut);

/***/ }),

/***/ "./resources/js/containers/Dashboard/index.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/Dashboard/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dashboard */ "./resources/js/components/Dashboard/index.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
}; // const mapDispatchToProps = dispatch => {
//     return {
//         toggleUnits: (bool) => {
//             return dispatch(config({imperial:bool}))}
//     }
//   }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./resources/js/components/Dashboard/img/header.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/Dashboard/img/header.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/header.jpg?512421a0ccf5a4a82d03da84cf2aee2c");

/***/ })

}]);