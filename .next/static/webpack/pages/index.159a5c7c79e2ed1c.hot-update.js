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

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), skills = ref[0], setSkills = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), about = ref1[0], setAbout = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, filteredSkills;\n                return D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            filteredSkills = data.skills.filter(function(item) {\n                                return item.enabled === true;\n                            });\n                            setSkills(filteredSkills);\n                            setAbout(data.about);\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching user data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        id: \"about\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_about\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"about_inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"left_inner\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"year\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: about.exp_year\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"rounded\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"img/about/flower.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"experience\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"years experience\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"shape\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"img/about/dots.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"circle_shape\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    className: \"svg\",\n                                                    src: \"img/svg/icon1.svg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: about.quote\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            children: about.subTitle\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: about.description\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"dodo_progress\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                        children: skills.map(function(item, index) {\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"list_inner\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: \"progress_inner skillsInner___\",\n                                                        \"data-value\": item === null || item === void 0 ? void 0 : item.percentage,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                className: \"background\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                    className: \"bar\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                        className: \"bar_in\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                        lineNumber: 73,\n                                                                        columnNumber: 31\n                                                                    }, _this1)\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 29\n                                                                }, _this1)\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                lineNumber: 71,\n                                                                columnNumber: 27\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                className: \"percent\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                                        className: \"svg\",\n                                                                        src: item === null || item === void 0 ? void 0 : item.image.url,\n                                                                        alt: \"\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                        lineNumber: 77,\n                                                                        columnNumber: 29\n                                                                    }, _this1),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                        className: \"number\",\n                                                                        children: [\n                                                                            item === null || item === void 0 ? void 0 : item.percentage,\n                                                                            \" %\"\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                        lineNumber: 78,\n                                                                        columnNumber: 29\n                                                                    }, _this1)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 27\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            }, index, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, _this1);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\About.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBQyxFQUFFOzs7Ozs4RUFBRztrRkFDcEQsOERBQUNILE1BQUk7d0VBQUNKLFNBQVMsRUFBQyxRQUFROzs0RUFBRUwsSUFBSSxhQUFKQSxJQUFJLFdBQVksR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxJQUFJLENBQUV1QixVQUFVOzRFQUFDLElBQUU7Ozs7Ozs4RUFBTzs7Ozs7O3NFQUNoRDs7Ozs7OzhEQUNGOzs7OzswREFDRjsrQ0FoQkNILEtBQUs7Ozs7c0RBaUJUO3lDQUNOLENBQUM7Ozs7OzZDQUNDOzs7Ozt5Q0FDRDs7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F4Rks3QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUEwRlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcz9lNTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NraWxscywgc2V0U2tpbGxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkU2tpbGxzID0gZGF0YS5za2lsbHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uZW5hYmxlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0U2tpbGxzKGZpbHRlcmVkU2tpbGxzKTtcclxuICAgICAgICBzZXRBYm91dChkYXRhLmFib3V0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9ubmlfdG1fc2VjdGlvblwiIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9hYm91dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X2lubmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0IHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5ZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57YWJvdXQuZXhwX3llYXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fib3V0L2Zsb3dlci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+KzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnllYXJzIGV4cGVyaWVuY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWJvdXQvZG90cy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZV9zaGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiaW1nL3N2Zy9pY29uMS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBSaWdodCBzZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Fib3V0LnF1b3RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGgzPnthYm91dC5zdWJUaXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e2Fib3V0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogU2tpbGxzIHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2RvX3Byb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtza2lsbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3NfaW5uZXIgc2tpbGxzSW5uZXJfX19cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e2l0ZW0/LnBlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX2luXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9e2l0ZW0/LmltYWdlLnVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPntpdGVtPy5wZXJjZW50YWdlfSAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsIkFib3V0Iiwic2tpbGxzIiwic2V0U2tpbGxzIiwiYWJvdXQiLCJzZXRBYm91dCIsImZldGNoVXNlckRhdGEiLCJkYXRhIiwiZmlsdGVyZWRTa2lsbHMiLCJmaWx0ZXIiLCJpdGVtIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDMiLCJleHBfeWVhciIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwicXVvdGUiLCJociIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJkYXRhLXZhbHVlIiwicGVyY2VudGFnZSIsImltYWdlIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About.js\n");

/***/ })

});