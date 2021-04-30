webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_camilo_Git_term_project_team_11_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/camilo/Git/term-project--team-11/web/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar MicRecorder = __webpack_require__(/*! mic-recorder-to-mp3 */ \"./node_modules/mic-recorder-to-mp3/dist/index.js\");\n\nvar recorder = new MicRecorder({\n  bitRate: 128\n});\nvar isRecording = false;\nvar clicked = false;\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var startRecord = function startRecord(recorder) {\n    if (loading) return;\n    var win;\n\n    if (!clicked) {\n      var text = document.getElementById('click_me');\n      text.innerText = 'Click again to search for news!';\n      clicked = true;\n    } else {\n      var text = document.getElementById('click_me');\n      text.innerText = 'Click me and ask for some news!';\n      stopRecord(recorder);\n      clicked = false;\n    }\n\n    try {\n      win = window;\n      recorder.start().then(function () {});\n      isRecording = true;\n    } catch (error) {\n      win = {};\n      console.log(error);\n    }\n  };\n\n  var stopRecord = function stopRecord(recorder) {\n    setLoading(true);\n    isRecording = false;\n\n    try {\n      recorder.stop().getMp3().then(function (_ref) {\n        var _ref2 = Object(_Users_camilo_Git_term_project_team_11_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n            buffer = _ref2[0],\n            blob = _ref2[1];\n\n        var file = new File(buffer, 'recording.mp3', {\n          type: blob.type,\n          lastModified: Date.now()\n        });\n        var formData = new FormData();\n        formData.append('file', file);\n        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"\".concat(\"http://localhost:5000\", \"/search\"), formData).then(function (_ref3) {\n          var data = _ref3.data;\n          router.push(\"/results/\".concat(data.id));\n        })[\"catch\"](function (e) {\n          console.error(e);\n          setLoading(false);\n        }); // const player = new Audio(URL.createObjectURL(file));\n        // player.play();\n      })[\"catch\"](function (e) {\n        alert('We could not retrieve your audios');\n        console.log(e);\n        setLoading(false);\n      });\n    } catch (error) {\n      console.log(error);\n      setLoading(false);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Pane\"], {\n    width: \"100%\",\n    minHeight: \"100vh\",\n    maxHeight: \"100%\",\n    paddingY: 20,\n    background: \"blueTint\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"stylesheet\",\n      href: \"/styles/styles.css\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Pane\"], {\n      display: \"flex\",\n      width: \"100%\",\n      justifyContent: \"center\",\n      marginTop: 250,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"20px\",\n        fontWeight: \"bold\",\n        id: \"click_me\",\n        children: [\"Click me and ask for some news!\", ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Pane\"], {\n      display: \"flex\",\n      width: \"100%\",\n      justifyContent: \"center\",\n      marginTop: 20,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        drag: \"x\",\n        dragConstraints: {\n          left: -100,\n          right: 100\n        },\n        whileHover: {\n          scale: 1.1\n        },\n        whileTap: {\n          scale: 0.9,\n          color: '#FF0000'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n          icon: evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"RecordIcon\"],\n          intent: \"danger\",\n          height: 100,\n          borderRadius: \"100%\",\n          onClick: function onClick() {\n            return startRecord(recorder);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HomePage, \"OeGW3YQfIEwiDdtbkZtE38+y0P4=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiTWljUmVjb3JkZXIiLCJyZXF1aXJlIiwicmVjb3JkZXIiLCJiaXRSYXRlIiwiaXNSZWNvcmRpbmciLCJjbGlja2VkIiwiSG9tZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnRSZWNvcmQiLCJ3aW4iLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInN0b3BSZWNvcmQiLCJ3aW5kb3ciLCJzdGFydCIsInRoZW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiZ2V0TXAzIiwiYnVmZmVyIiwiYmxvYiIsImZpbGUiLCJGaWxlIiwidHlwZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJub3ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImRhdGEiLCJwdXNoIiwiaWQiLCJlIiwiYWxlcnQiLCJsZWZ0IiwicmlnaHQiLCJzY2FsZSIsImNvbG9yIiwiUmVjb3JkSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDZFQUFELENBQTNCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxJQUFJRixXQUFKLENBQWdCO0FBQy9CRyxTQUFPLEVBQUU7QUFEc0IsQ0FBaEIsQ0FBakI7QUFJQSxJQUFJQyxXQUFvQixHQUFHLEtBQTNCO0FBQ0EsSUFBSUMsT0FBZ0IsR0FBRyxLQUF2Qjs7QUFFQSxJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7O0FBRCtCLGtCQUVEQyxzREFBUSxDQUFDLEtBQUQsQ0FGUDtB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RTs7O0tBRFhGLFE7QUF3R1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgUGFuZSwgVGV4dCwgUmVjb3JkSWNvbiB9IGZyb20gJ2V2ZXJncmVlbi11aSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5cbmNvbnN0IE1pY1JlY29yZGVyID0gcmVxdWlyZSgnbWljLXJlY29yZGVyLXRvLW1wMycpO1xuXG5jb25zdCByZWNvcmRlciA9IG5ldyBNaWNSZWNvcmRlcih7XG4gIGJpdFJhdGU6IDEyOFxufSk7XG5cbmxldCBpc1JlY29yZGluZzogYm9vbGVhbiA9IGZhbHNlO1xudmFyIGNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkID0gKHJlY29yZGVyKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybjtcblxuICAgIGxldCB3aW47XG4gICAgaWYgKCFjbGlja2VkKSB7XG4gICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlja19tZScpO1xuICAgICAgdGV4dC5pbm5lclRleHQgPSAnQ2xpY2sgYWdhaW4gdG8gc2VhcmNoIGZvciBuZXdzISc7XG4gICAgICBjbGlja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2tfbWUnKTtcbiAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ0NsaWNrIG1lIGFuZCBhc2sgZm9yIHNvbWUgbmV3cyEnO1xuICAgICAgc3RvcFJlY29yZChyZWNvcmRlcik7XG4gICAgICBjbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB3aW4gPSB3aW5kb3c7XG4gICAgICByZWNvcmRlci5zdGFydCgpLnRoZW4oKCkgPT4ge30pO1xuICAgICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3aW4gPSB7fTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZCA9IChyZWNvcmRlcikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICByZWNvcmRlclxuICAgICAgICAuc3RvcCgpXG4gICAgICAgIC5nZXRNcDMoKVxuICAgICAgICAudGhlbigoW2J1ZmZlciwgYmxvYl0pID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUoYnVmZmVyLCAncmVjb3JkaW5nLm1wMycsIHtcbiAgICAgICAgICAgIHR5cGU6IGJsb2IudHlwZSxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcblxuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9zZWFyY2hgLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHtkYXRhLmlkfWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gY29uc3QgcGxheWVyID0gbmV3IEF1ZGlvKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xuICAgICAgICAgIC8vIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdXZSBjb3VsZCBub3QgcmV0cmlldmUgeW91ciBhdWRpb3MnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgbWluSGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgbWF4SGVpZ2h0PVwiMTAwJVwiXG4gICAgICBwYWRkaW5nWT17MjB9XG4gICAgICBiYWNrZ3JvdW5kPVwiYmx1ZVRpbnRcIlxuICAgID5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlcy9zdHlsZXMuY3NzXCIgLz5cblxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB3aWR0aD1cIjEwMCVcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1hcmdpblRvcD17MjUwfT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyMHB4XCIgZm9udFdlaWdodD1cImJvbGRcIiBpZD1cImNsaWNrX21lXCI+XG4gICAgICAgICAgQ2xpY2sgbWUgYW5kIGFzayBmb3Igc29tZSBuZXdzIXsnICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUGFuZT5cbiAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYXJnaW5Ub3A9ezIwfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IC0xMDAsIHJpZ2h0OiAxMDAgfX1cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45LCBjb2xvcjogJyNGRjAwMDAnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgaWNvbj17UmVjb3JkSWNvbn1cbiAgICAgICAgICAgIGludGVudD1cImRhbmdlclwiXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwMCVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRSZWNvcmQocmVjb3JkZXIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvUGFuZT5cbiAgICA8L1BhbmU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})