webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/AddToMetamask.tsx":
/*!******************************************!*\
  !*** ./src/components/AddToMetamask.tsx ***!
  \******************************************/
/*! exports provided: AddToMetamask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddToMetamask\", function() { return AddToMetamask; });\n/* harmony import */ var _Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/kaikurosawa/Desktop/code/cheemscoin/src/components/AddToMetamask.tsx\",\n    _this = undefined;\n\n\n\nvar AddToMetamask = function AddToMetamask() {\n  function add() {\n    return _add.apply(this, arguments);\n  }\n\n  function _add() {\n    _add = Object(_Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_kaikurosawa_Desktop_code_cheemscoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"wallet_watchAsset\",\n                params: {\n                  type: \"ERC20\",\n                  options: {\n                    address: \"0x16471F90e21ACF55f4F7ed8247b7759E7f7003Eb\",\n                    // TODO Use xDai address\n                    symbol: \"CHEEMS\",\n                    decimals: 18,\n                    image: \"https://raw.githubusercontent.com/kowasaur/cheemscoin/main/public/cheemscoinSmall.png\"\n                  }\n                }\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _add.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: add,\n    colorScheme: \"yellow\",\n    children: \"Add To Metamask\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n_c = AddToMetamask;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToMetamask\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkVG9NZXRhbWFzay50c3g/ZDg2NCJdLCJuYW1lcyI6WyJBZGRUb01ldGFtYXNrIiwiYWRkIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwidHlwZSIsIm9wdGlvbnMiLCJhZGRyZXNzIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBLFdBQzVCQyxHQUQ0QjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwU0FDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDNUJDLHNCQUFNLEVBQUUsbUJBRG9CO0FBRTVCQyxzQkFBTSxFQUFFO0FBQ05DLHNCQUFJLEVBQUUsT0FEQTtBQUVOQyx5QkFBTyxFQUFFO0FBQ1BDLDJCQUFPLEVBQUUsNENBREY7QUFDZ0Q7QUFDdkRDLDBCQUFNLEVBQUUsUUFGRDtBQUdQQyw0QkFBUSxFQUFFLEVBSEg7QUFJUEMseUJBQUssRUFDSDtBQUxLO0FBRkg7QUFGb0IsZUFBeEIsQ0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQyQztBQUFBO0FBQUE7O0FBaUIzQyxzQkFDRSxxRUFBQyx1REFBRDtBQUFRLFdBQU8sRUFBRVgsR0FBakI7QUFBc0IsZUFBVyxFQUFDLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXRCTTtLQUFNRCxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQWRkVG9NZXRhbWFzay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQWRkVG9NZXRhbWFzazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIndhbGxldF93YXRjaEFzc2V0XCIsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdHlwZTogXCJFUkMyMFwiLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWRkcmVzczogXCIweDE2NDcxRjkwZTIxQUNGNTVmNEY3ZWQ4MjQ3Yjc3NTlFN2Y3MDAzRWJcIiwgLy8gVE9ETyBVc2UgeERhaSBhZGRyZXNzXG4gICAgICAgICAgc3ltYm9sOiBcIkNIRUVNU1wiLFxuICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tvd2FzYXVyL2NoZWVtc2NvaW4vbWFpbi9wdWJsaWMvY2hlZW1zY29pblNtYWxsLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17YWRkfSBjb2xvclNjaGVtZT1cInllbGxvd1wiPlxuICAgICAgQWRkIFRvIE1ldGFtYXNrXG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddToMetamask.tsx\n");

/***/ })

})