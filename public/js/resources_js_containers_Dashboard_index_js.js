(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_containers_Dashboard_index_js"],{

/***/ "./resources/js/components/Dashboard/ManageSubscriptions.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Dashboard/ManageSubscriptions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _MemberSubscribe_PlansSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MemberSubscribe/PlansSelector */ "./resources/js/components/MemberSubscribe/PlansSelector.js");
/* harmony import */ var _PopupModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopupModal */ "./resources/js/components/PopupModal/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_init_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/init/actions */ "./resources/js/store/init/actions/index.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ManageSubscriptions = function ManageSubscriptions(_ref) {
  var plans = _ref.plans;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPlan = _useState2[0],
      setSelectedPlan = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      showModal = _useState4[0],
      setShowModal = _useState4[1];

  var cancelSubscription = function cancelSubscription() {
    var token = localStorage.getItem("eventcountdown:all:userToken");
    var headers = {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    };
    axios.get('/api/auth/cancelsubscription', headers).then(function (res) {
      console.log('heard back');
      console.log(res);
      var userToken = localStorage.getItem("eventcountdown:all:userToken"); // if inplace so if there's no user token (i.e. user is logged out) it dosn't hit the user info api point

      dispatch((0,_store_init_actions__WEBPACK_IMPORTED_MODULE_6__.initUser)(userToken));
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_4__.default.memberDashboard, {
        message: "You're subscription has now been cancelled."
      });
    })["catch"](function (e) {
      console.log(e);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      children: "Manage My Subscription"
    }), showModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopupModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      proceed: cancelSubscription,
      close: setShowModal,
      message: "Are you sure you want to canel. Your cancellation will happen immediately. Any remaining downloads will be lost."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MemberSubscribe_PlansSelector__WEBPACK_IMPORTED_MODULE_2__.default, {
      plans: plans,
      selectedPlan: selectedPlan,
      setSelectedPlan: setSelectedPlan
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      // onClick={() => setSelectedPlan(plan.slug)}
      className: "plans__individual",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        onClick: function onClick() {
          return setShowModal(true);
        },
        children: "Cancel my subscription"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageSubscriptions);

/***/ }),

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _menuitems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuitems */ "./resources/js/components/Dashboard/menuitems.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.scss */ "./resources/js/components/Dashboard/menu.scss");







var Menu = function Menu(_ref) {
  var membership = _ref.membership;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
    className: "member",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      children: _menuitems__WEBPACK_IMPORTED_MODULE_2__.default.map(function (menuItem) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
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
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./resources/js/components/Dashboard/MyVideos.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Dashboard/MyVideos.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MyVideos = function MyVideos() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      videos = _useState2[0],
      setVideos = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var token = localStorage.getItem("eventcountdown:all:userToken");
    var headers = {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/auth/recentvideos', headers).then(function (res) {
      console.log(res);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: "My Videos!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      children: videos.map(function (video) {
        /*#__PURE__*/
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: video.thumb
          })
        });
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyVideos);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader/index.js");
/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LogOut */ "./resources/js/components/LogOut/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./resources/js/components/Dashboard/Menu.js");
/* harmony import */ var _img_header_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/header.jpg */ "./resources/js/components/Dashboard/img/header.jpg");
/* harmony import */ var _MyVideos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyVideos */ "./resources/js/components/Dashboard/MyVideos.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ManageSubscriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ManageSubscriptions */ "./resources/js/components/Dashboard/ManageSubscriptions.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Dashboard = function Dashboard(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useHistory)();
  var DashboardMain = (0,_routes_helpers__WEBPACK_IMPORTED_MODULE_2__.ReactLazyPreload)(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_components_Dashboard_Dashboard_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Dashboard */ "./resources/js/components/Dashboard/Dashboard.js"));
  });
  var MemberSubscribe = (0,_routes_helpers__WEBPACK_IMPORTED_MODULE_2__.ReactLazyPreload)(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_components_MemberSubscribe_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../MemberSubscribe */ "./resources/js/components/MemberSubscribe/index.js"));
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      plans = _useState2[0],
      setPlans = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    if (!props.user.loading && props.user.error) {
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.signup);
    }
  }, [props.user]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/plansbycurrency/gbp").then(function (res) {
      setPlans(res.data);
    })["catch"](function (e) {
      console.log(e);
    });
  }, []);
  console.log('index', plans);

  if (props.user.loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_4__.default, {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "dashboard",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: _img_header_jpg__WEBPACK_IMPORTED_MODULE_7__.default
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dashboard__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu__WEBPACK_IMPORTED_MODULE_6__.default, {
          membership: props.user.membership_level
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
            exact: true,
            path: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.memberDashboard,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardMain, {
              user: props.user
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
            exact: true,
            path: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.myVideos,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MyVideos__WEBPACK_IMPORTED_MODULE_8__.default, {
              user: props.user
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
            exact: true,
            path: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.memberSubscribe,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemberSubscribe, {
              plans: plans
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
            exact: true,
            path: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__.default.manageSubscription,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ManageSubscriptions__WEBPACK_IMPORTED_MODULE_10__.default, {
              plans: plans,
              user: props.user
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
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
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: "Profile",
  url: _routes_routeID__WEBPACK_IMPORTED_MODULE_0__.default.memberDashboard
}, {
  name: "Get EventsCountdown Pro",
  url: _routes_routeID__WEBPACK_IMPORTED_MODULE_0__.default.memberSubscribe,
  hide: "paid"
}, {
  name: "Manage Subscriptions",
  url: _routes_routeID__WEBPACK_IMPORTED_MODULE_0__.default.manageSubscription,
  hide: "free"
}, {
  name: "My Videos",
  url: _routes_routeID__WEBPACK_IMPORTED_MODULE_0__.default.myVideos
}, {
  name: "Logout",
  url: _routes_routeID__WEBPACK_IMPORTED_MODULE_0__.default.logout
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

/***/ "./resources/js/components/MemberSubscribe/PlansSelector.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/MemberSubscribe/PlansSelector.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var PlansSelector = function PlansSelector(_ref) {
  var plans = _ref.plans,
      setSelectedPlan = _ref.setSelectedPlan,
      selectedPlan = _ref.selectedPlan;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "plans__area",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: "If you're running online or in person events regularly then it works out much more cost effective to purchase an Events Countdown subscription. The first month is on us, so if you don't like our service, you can cancel within the first month and you won't be charged at all."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: "With no minimum contact, you can cancel any time and to make matters better, the first month is completly free"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      children: "Choose a subscription:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "plans__selector",
      children: plans.map(function (plan) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          onClick: function onClick() {
            return setSelectedPlan(plan.slug);
          },
          className: "plans__individual ".concat(selectedPlan === plan.slug ? "active" : selectedPlan ? "inactive" : undefined),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
            children: plan.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: plan.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
            children: "Pay nothing for the first month, then ".concat(plan.cost, " ").concat(plan.currency, " per month, charged monthly")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: "No minium contract, cancel anytime"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            type: "button",
            onClick: function onClick() {
              return setSelectedPlan(plan.slug);
            },
            children: "Sign Up to ".concat(plan.name)
          })]
        }, plan.slug);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlansSelector);

/***/ }),

/***/ "./resources/js/components/PopupModal/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/PopupModal/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./resources/js/components/PopupModal/index.scss");





var PopupModal = function PopupModal(_ref) {
  var message = _ref.message,
      close = _ref.close,
      proceed = _ref.proceed;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.addEventListener("keydown", function () {
      return close(null);
    }, false);
    return function () {
      window.removeEventListener("keydown", function () {
        return close(null);
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "overlay__wrapper",
    onClick: function onClick() {
      return close(null);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "overlay__modal",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        type: "button",
        onClick: function onClick() {
          return close(null);
        },
        children: "Close"
      }), proceed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        type: "button",
        onClick: function onClick() {
          return proceed();
        },
        children: "Proceed"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupModal);

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/Dashboard/menu.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/Dashboard/menu.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav.member {\n  padding: 16px;\n  margin-right: 16px;\n}\nnav.member li {\n  margin: 0;\n  list-style: none;\n  padding: 8px;\n  background-color: #333333;\n  margin-bottom: 8px;\n  border-radius: 3px;\n}\nnav.member li a {\n  color: #f5f5f5;\n  text-decoration: none;\n}\nnav.member li a.active {\n  border-bottom: 3px solid yellow;\n  color: red;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/PopupModal/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/PopupModal/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".overlay__wrapper {\n  position: fixed;\n  z-index: 8;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.overlay__modal {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #333333;\n  width: 80%;\n  max-width: 480px;\n  box-shadow: 0px 0px 15px #333333;\n  border-radius: 7px;\n}\n.overlay__modal button {\n  margin-top: 24px;\n  padding: 8px 24px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ }),

/***/ "./resources/js/components/Dashboard/menu.scss":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/menu.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./menu.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/Dashboard/menu.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/PopupModal/index.scss":
/*!*******************************************************!*\
  !*** ./resources/js/components/PopupModal/index.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/PopupModal/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);