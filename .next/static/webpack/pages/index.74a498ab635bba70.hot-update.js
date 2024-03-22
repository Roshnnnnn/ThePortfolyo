"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userData = ref5[0], setUserData = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), imageURL = ref1[0], setImageURL = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, ref2, data, ref3, ref4;\n                return D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            ;\n                            _ctx.next = 4;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 4:\n                            data = _ctx.sent;\n                            setUserData(data.about);\n                            if ((data === null || data === void 0 ? void 0 : (ref = data.about) === null || ref === void 0 ? void 0 : ref.avatar) && ((ref2 = data.about.avatar) === null || ref2 === void 0 ? void 0 : ref2.url)) {\n                                ;\n                                setImageURL(data === null || data === void 0 ? void 0 : (ref3 = data.about) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.avatar) === null || ref4 === void 0 ? void 0 : ref4.url);\n                            } else {\n                                console.error(\"Avatar URL not found in data:\", data);\n                            }\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching user data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        id: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_hero\",\n            style: {\n                position: \"relative\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                minHeight: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"background\",\n                    children: [\n                        imageURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: \"image\",\n                            src: imageURL,\n                            alt: \"User Avatar\",\n                            style: {\n                                overflow: \"hidden\",\n                                filter: \"grayscale(100%)\",\n                                clipPath: \"polygon(0 0, 100% 0, 100% 90%, 0 100%)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"overlay\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"content\",\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content_in\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"name\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                children: \"I\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, _this),\n                                            \" am\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, _this),\n                                            userData.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"welcome\",\n                                        children: userData === null || userData === void 0 ? void 0 : userData.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"tonni_tm_button\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            className: \"anchor\",\n                                            href: \"#portfolio\",\n                                            children: [\n                                                \"See All Projects\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    className: \"svg\",\n                                                    src: \"img/svg/arrow-right.svg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"tonni_tm_down\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"anchor\",\n                                href: \"#about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: \"svg\",\n                                    src: \"img/svg/down_button.svg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"play_button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"popup-youtube\",\n                        href: \"//www.youtube.com/embed/7e90gBu4pas?autoplay=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg anim_circle\",\n                        src: \"img/svg/icon5.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg\",\n                        src: \"img/svg/icon7.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg\",\n                        src: \"img/svg/icon3.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg anim_circle\",\n                        src: \"img/svg/icon6.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg anim_circle\",\n                        src: \"img/svg/icon5.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"shape7\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"svg\",\n                        src: \"img/svg/icon2.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Home.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ007O0FBRWxELElBQU1HLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFnQ0YsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUo5QyxRQUlpQixHQUFpQkEsSUFBWSxHQUE3QixFQUpqQixXQUk4QixHQUFJQSxJQUFZLEdBQWhCO0lBQzVCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTDlDLFFBS2lCLEdBQWlCQSxJQUFZLEdBQTdCLEVBTGpCLFdBSzhCLEdBQUlBLElBQVksR0FBaEI7SUFFNUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1RLGFBQWE7dUJBQUcsK0pBQVk7b0JBSzFCQyxHQUFXLEVBQVlBLElBQWlCLEVBSHRDQSxJQUFJLEVBSUlBLElBQVc7Ozs7Ozs7bUNBSk5QLDJEQUFTLEVBQUU7OzRCQUF4Qk8sSUFBSSxZQUFvQjs0QkFDOUJKLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQzs0QkFFeEIsSUFBSUQsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxDQUFBQSxHQUFXLEdBQVhBLElBQUksQ0FBRUMsS0FBSyxjQUFYRCxHQUFXLGNBQVhBLEtBQUFBLENBQVcsR0FBWEEsR0FBVyxDQUFFRSxNQUFNLENBQVIsSUFBWUYsQ0FBQUEsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLGNBQWpCRixJQUFpQixXQUFLLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsSUFBaUIsQ0FBRUcsR0FBRyxHQUFFOztnQ0FDakRMLFdBQVcsQ0FBQ0UsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxDQUFBQSxJQUFXLEdBQVhBLElBQUksQ0FBRUMsS0FBSyxjQUFYRCxJQUFXLGNBQVhBLEtBQUFBLENBQVcsR0FBWEEsUUFBQUEsSUFBVyxDQUFFRSxNQUFNLDZCQUFSLEdBQVhGLEtBQUFBLENBQVcsUUFBVUcsR0FBRyxDQUFDLENBQUM7NkJBQ3ZDLE1BQU07Z0NBQ0xDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLCtCQUErQixFQUFFTCxJQUFJLENBQUMsQ0FBQzs2QkFDdEQ7Ozs7Ozs0QkFFREksT0FBTyxDQUFDQyxLQUFLLENBQUMsMkJBQTJCLFVBQVEsQ0FBQzs7Ozs7Ozs7Ozs7YUFFckQ7NEJBYktOLGFBQWE7OztXQWFsQjtRQUVEQSxhQUFhLEVBQUUsQ0FBQztLQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtCQUFrQjtRQUFDQyxFQUFFLEVBQUMsTUFBTTtrQkFDekMsNEVBQUNGLEtBQUc7WUFDRkMsU0FBUyxFQUFDLGVBQWU7WUFDekJFLEtBQUssRUFBRTtnQkFDTEMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCQyxPQUFPLEVBQUUsTUFBTTtnQkFDZkMsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCQyxjQUFjLEVBQUUsUUFBUTtnQkFDeEJDLFNBQVMsRUFBRSxPQUFPO2FBQ25COzs4QkFFRCw4REFBQ1IsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7O3dCQUN4QlYsUUFBUSxrQkFDUCw4REFBQ2tCLEtBQUc7NEJBQ0ZSLFNBQVMsRUFBQyxPQUFPOzRCQUNqQlMsR0FBRyxFQUFFbkIsUUFBUTs0QkFDYm9CLEdBQUcsRUFBQyxhQUFhOzRCQUNqQlIsS0FBSyxFQUFFO2dDQUNMUyxRQUFRLEVBQUUsUUFBUTtnQ0FDbEJDLE1BQU0sRUFBRSxpQkFBaUI7Z0NBQ3pCQyxRQUFRLEVBQUUsd0NBQXdDOzZCQUNuRDs7Ozs7aUNBQ0Q7c0NBRUosOERBQUNkLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxTQUFTOzs7OztpQ0FBRzs7Ozs7O3lCQUN2Qjs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O3NDQUN4Qiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFNBQVM7NEJBQUNFLEtBQUssRUFBRTtnQ0FBRVksU0FBUyxFQUFFLFFBQVE7NkJBQUU7c0NBQ3JELDRFQUFDZixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsWUFBWTs7a0RBQ3pCLDhEQUFDZSxJQUFFO3dDQUFDZixTQUFTLEVBQUMsTUFBTTs7MERBQ2xCLDhEQUFDZ0IsTUFBSTswREFBQyxHQUFDOzs7OztxREFBTzs0Q0FBQSxLQUNkOzBEQUFBLDhEQUFDQyxJQUFFOzs7O3FEQUFHOzRDQUNMN0IsUUFBUSxDQUFDOEIsSUFBSTs7Ozs7OzZDQUNYO2tEQUNMLDhEQUFDRixNQUFJO3dDQUFDaEIsU0FBUyxFQUFDLFNBQVM7a0RBQUVaLFFBQVEsYUFBUkEsUUFBUSxXQUFPLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsUUFBUSxDQUFFK0IsS0FBSzs7Ozs7NkNBQVE7a0RBRWxELDhEQUFDcEIsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGlCQUFpQjtrREFDOUIsNEVBQUNvQixHQUFDOzRDQUFDcEIsU0FBUyxFQUFDLFFBQVE7NENBQUNxQixJQUFJLEVBQUMsWUFBWTs7Z0RBQUMsa0JBRXRDOzhEQUFBLDhEQUFDYixLQUFHO29EQUFDUixTQUFTLEVBQUMsS0FBSztvREFBQ1MsR0FBRyxFQUFDLHlCQUF5QjtvREFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O3lEQUFHOzs7Ozs7aURBQzFEOzs7Ozs2Q0FDQTs7Ozs7O3FDQUNGOzs7OztpQ0FDRjtzQ0FDTiw4REFBQ1gsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGVBQWU7c0NBQzVCLDRFQUFDb0IsR0FBQztnQ0FBQ3BCLFNBQVMsRUFBQyxRQUFRO2dDQUFDcUIsSUFBSSxFQUFDLFFBQVE7MENBQ2pDLDRFQUFDYixLQUFHO29DQUFDUixTQUFTLEVBQUMsS0FBSztvQ0FBQ1MsR0FBRyxFQUFDLHlCQUF5QjtvQ0FBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O3lDQUFHOzs7OztxQ0FDMUQ7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0Y7OEJBQ04sOERBQUNYLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxhQUFhOzhCQUMxQiw0RUFBQ29CLEdBQUM7d0JBQ0FwQixTQUFTLEVBQUMsZUFBZTt3QkFDekJxQixJQUFJLEVBQUMsZ0RBQWdEOzs7Ozs2QkFDckQ7Ozs7O3lCQUNFOzhCQUVOLDhEQUFDTCxNQUFJO29CQUFDaEIsU0FBUyxFQUFDLFFBQVE7OEJBQ3RCLDRFQUFDUSxLQUFHO3dCQUFDUixTQUFTLEVBQUMsaUJBQWlCO3dCQUFDUyxHQUFHLEVBQUMsbUJBQW1CO3dCQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7NkJBQUc7Ozs7O3lCQUM3RDs4QkFDUCw4REFBQ00sTUFBSTtvQkFBQ2hCLFNBQVMsRUFBQyxRQUFROzhCQUN0Qiw0RUFBQ1EsS0FBRzt3QkFBQ1IsU0FBUyxFQUFDLEtBQUs7d0JBQUNTLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2QkFBRzs7Ozs7eUJBQ2pEOzhCQUNQLDhEQUFDTSxNQUFJO29CQUFDaEIsU0FBUyxFQUFDLFFBQVE7OEJBQ3RCLDRFQUFDUSxLQUFHO3dCQUFDUixTQUFTLEVBQUMsS0FBSzt3QkFBQ1MsR0FBRyxFQUFDLG1CQUFtQjt3QkFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7OzZCQUFHOzs7Ozt5QkFDakQ7OEJBQ1AsOERBQUNNLE1BQUk7b0JBQUNoQixTQUFTLEVBQUMsUUFBUTs4QkFDdEIsNEVBQUNRLEtBQUc7d0JBQUNSLFNBQVMsRUFBQyxpQkFBaUI7d0JBQUNTLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2QkFBRzs7Ozs7eUJBQzdEOzhCQUVQLDhEQUFDTSxNQUFJO29CQUFDaEIsU0FBUyxFQUFDLFFBQVE7OEJBQ3RCLDRFQUFDUSxLQUFHO3dCQUFDUixTQUFTLEVBQUMsaUJBQWlCO3dCQUFDUyxHQUFHLEVBQUMsbUJBQW1CO3dCQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7NkJBQUc7Ozs7O3lCQUM3RDs4QkFDUCw4REFBQ00sTUFBSTtvQkFBQ2hCLFNBQVMsRUFBQyxRQUFROzhCQUN0Qiw0RUFBQ1EsS0FBRzt3QkFBQ1IsU0FBUyxFQUFDLEtBQUs7d0JBQUNTLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2QkFBRzs7Ozs7eUJBQ2pEOzs7Ozs7aUJBQ0g7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdkdLdkIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0dWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcz9lZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2VVUkwsIHNldEltYWdlVVJMXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgc2V0VXNlckRhdGEoZGF0YS5hYm91dCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5hYm91dD8uYXZhdGFyICYmIGRhdGEuYWJvdXQuYXZhdGFyPy51cmwpIHtcclxuICAgICAgICAgIHNldEltYWdlVVJMKGRhdGE/LmFib3V0Py5hdmF0YXI/LnVybCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdmF0YXIgVVJMIG5vdCBmb3VuZCBpbiBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlckRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX3NlY3Rpb25cIiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRvbm5pX3RtX2hlcm9cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICB7aW1hZ2VVUkwgJiYgKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiVXNlciBBdmF0YXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogXCJncmF5c2NhbGUoMTAwJSlcIiwgLy8gQ29udmVydCB0byBncmF5c2NhbGVcclxuICAgICAgICAgICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgOTAlLCAwIDEwMCUpXCIsIC8vIEN1dCB0aGUgdG9wIHBhcnRcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkk8L3NwYW4+IGFtXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2VsY29tZVwiPnt1c2VyRGF0YT8udGl0bGV9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yXCIgaHJlZj1cIiNwb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgICAgU2VlIEFsbCBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz1cImltZy9zdmcvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9ubmlfdG1fZG93blwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3JcIiBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJpbWcvc3ZnL2Rvd25fYnV0dG9uLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheV9idXR0b25cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwLXlvdXR1YmVcIlxyXG4gICAgICAgICAgICBocmVmPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvN2U5MGdCdTRwYXM/YXV0b3BsYXk9MVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBTaGFwZSBlbGVtZW50cyAqL31cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFwZTFcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnIGFuaW1fY2lyY2xlXCIgc3JjPVwiaW1nL3N2Zy9pY29uNS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFwZTJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiaW1nL3N2Zy9pY29uNy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFwZTNcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiaW1nL3N2Zy9pY29uMy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFwZTRcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnIGFuaW1fY2lyY2xlXCIgc3JjPVwiaW1nL3N2Zy9pY29uNi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcGU2XCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2ZyBhbmltX2NpcmNsZVwiIHNyYz1cImltZy9zdmcvaWNvbjUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcGU3XCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz1cImltZy9zdmcvaWNvbjIuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwiSG9tZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJpbWFnZVVSTCIsInNldEltYWdlVVJMIiwiZmV0Y2hVc2VyRGF0YSIsImRhdGEiLCJhYm91dCIsImF2YXRhciIsInVybCIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJpbWciLCJzcmMiLCJhbHQiLCJvdmVyZmxvdyIsImZpbHRlciIsImNsaXBQYXRoIiwidGV4dEFsaWduIiwiaDMiLCJzcGFuIiwiYnIiLCJuYW1lIiwidGl0bGUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home.js\n");

/***/ })

});