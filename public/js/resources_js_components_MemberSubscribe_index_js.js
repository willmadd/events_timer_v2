(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MemberSubscribe_index_js"],{

/***/ "./resources/js/components/MemberSubscribe/CheckoutArea.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/MemberSubscribe/CheckoutArea.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers_withStripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/withStripe */ "./resources/js/helpers/withStripe.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CheckoutArea = function CheckoutArea(_ref) {
  var selectedPlan = _ref.selectedPlan,
      setSelectedPlan = _ref.setSelectedPlan;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var cardElement, _yield$stripe$createP, error, paymentMethod, id, token, headers;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!stripe || !elements)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement);
              _context.next = 5;
              return stripe.createPaymentMethod({
                type: "card",
                card: cardElement
              });

            case 5:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (error) {
                console.log("[error]", error);
              } else {
                setLoading(true);
                id = paymentMethod.id;
                token = localStorage.getItem("eventcountdown:all:userToken");
                headers = {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                };
                axios.post("/api/auth/subscribe", {
                  id: id,
                  plan: selectedPlan.stripe_plan
                }, headers).then(function (res) {
                  setLoading(false);
                  history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_6__.default.memberDashboard);
                })["catch"](function (e) {
                  setLoading(false);
                  setError("A server error occured, Please try again");
                  console.log(e);
                });
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getOneMonthForward = function getOneMonthForward() {
    var newDate = new Date();
    var day = newDate.getDate();
    newDate.setMonth(newDate.getMonth() + +1);
    if (newDate.getDate() != day) newDate.setDate(0);
    return newDate;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "plans__checkout",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "plans__checkout__modal",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        type: "button",
        onClick: function onClick() {
          return setSelectedPlan(null);
        },
        className: "plans__checkout__close"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        children: "Checkout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "plans__checkout__summary",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: ["You are purchasing 1 x ", selectedPlan.name, " subscription to EventsCountdown.com"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: "Cancel at any time"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: "Charge today: 0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: ["Your first payment of ".concat(selectedPlan.cost, " ").concat(selectedPlan.currency, " will happen on "), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
            children: getOneMonthForward().toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })
          }), " ", "unless you cancel beforehand"]
        })]
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "error",
        children: error
      }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {
          options: {
            style: {
              base: {
                fontSize: "16px",
                border: "1px solid #333333",
                marginBottom: "24px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4"
                }
              },
              invalid: {
                color: "#9e2146"
              }
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          className: "primary",
          type: "button",
          onClick: function onClick() {
            return handleSubmit();
          },
          disabled: !stripe,
          children: "Sign Up"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "checkout__info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: "Payments are handled by Stripe and card details are never stored on Events Countdown's servers"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_withStripe__WEBPACK_IMPORTED_MODULE_3__.withStripe)(CheckoutArea));

/***/ }),

/***/ "./resources/js/components/MemberSubscribe/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/MemberSubscribe/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CheckoutArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutArea */ "./resources/js/components/MemberSubscribe/CheckoutArea.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./resources/js/components/MemberSubscribe/index.scss");
/* harmony import */ var _PlansSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlansSelector */ "./resources/js/components/MemberSubscribe/PlansSelector.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var MemberSubscribe = function MemberSubscribe(_ref) {
  var plans = _ref.plans;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPlan = _useState2[0],
      setSelectedPlan = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "plans",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      children: "Get Events Countdown Pro"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: "If you're running online or in person events regularly then it works out much more cost effective to purchase an Events Countdown subscription."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [" ", "The first month is on us, so if you don't like our service, you can cancel within the first month and you won't be charged at all."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "plans__wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlansSelector__WEBPACK_IMPORTED_MODULE_4__.default, {
        plans: plans,
        selectedPlan: selectedPlan,
        setSelectedPlan: setSelectedPlan,
        buttonLabel: 'Sign up to'
      }), selectedPlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CheckoutArea__WEBPACK_IMPORTED_MODULE_2__.default, {
        setSelectedPlan: setSelectedPlan,
        selectedPlan: plans.find(function (plan) {
          return plan.slug === selectedPlan;
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberSubscribe);

/***/ })

}]);