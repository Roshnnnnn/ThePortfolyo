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

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Testimonials = function() {\n    var _this1 = _this;\n    var ref9, ref1, ref2, ref3, ref4, ref5;\n    _s();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), testimonials = ref6[0], setTestimonials = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), activeIndex = ref7[0], setActiveIndex = ref7[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchTestimonials = function() {\n            var _ref = _asyncToGenerator(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, filteredTestimonials;\n                return D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            filteredTestimonials = data.testimonials.filter(function(testimonial) {\n                                return testimonial.enabled === true;\n                            });\n                            setTestimonials(filteredTestimonials);\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(\"Error fetching testimonials:\", _ctx.t0.message);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        8\n                    ]\n                ]);\n            }));\n            return function fetchTestimonials() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchTestimonials();\n    }, []);\n    var handleItemClick = function(index) {\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_testimonials\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"testimonials_inner wow fadeInUp\",\n                    \"data-wow-duration\": \"1s\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"shape\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                className: \"svg anim_circle\",\n                                src: \"img/svg/icon9.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"shape2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                className: \"svg\",\n                                src: \"img/svg/icon12.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"leftpart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"active-image\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: (ref9 = testimonials[activeIndex]) === null || ref9 === void 0 ? void 0 : (ref1 = ref9.image) === null || ref1 === void 0 ? void 0 : ref1.url,\n                                    alt: (ref2 = testimonials[activeIndex]) === null || ref2 === void 0 ? void 0 : ref2.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"rightpart\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"active-review\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: (ref3 = testimonials[activeIndex]) === null || ref3 === void 0 ? void 0 : ref3.review\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"details\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"infos\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: \"avatars\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                                    className: \"grid-sort\",\n                                                    children: testimonials.map(function(item, index) {\n                                                        var ref, ref8;\n                                                        return index !== activeIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                                            className: \" grid-item \".concat(index),\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                    onClick: function() {\n                                                                        return handleItemClick(index);\n                                                                    },\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                        \"data-img-url\": item && (item === null || item === void 0 ? void 0 : (ref = item.image) === null || ref === void 0 ? void 0 : ref.url),\n                                                                        style: {\n                                                                            backgroundImage: \"url(\".concat(item && (item === null || item === void 0 ? void 0 : (ref8 = item.image) === null || ref8 === void 0 ? void 0 : ref8.url), \")\")\n                                                                        }\n                                                                    }, void 0, false, {\n                                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                                        lineNumber: 63,\n                                                                        columnNumber: 33\n                                                                    }, _this1)\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                                    lineNumber: 62,\n                                                                    columnNumber: 31\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                    className: \"hidden\",\n                                                                    children: \"hlo\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 31\n                                                                }, _this1)\n                                                            ]\n                                                        }, index, true, {\n                                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 29\n                                                        }, _this1);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: \"short\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"name\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                                children: (ref4 = testimonials[activeIndex]) === null || ref4 === void 0 ? void 0 : ref4.name\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                children: (ref5 = testimonials[activeIndex]) === null || ref5 === void 0 ? void 0 : ref5.position\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Testimonials.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Testimonials, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFscy5qcz82Y2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXN0aW1vbmlhbHMsIHNldFRlc3RpbW9uaWFsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVGVzdGltb25pYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFRlc3RpbW9uaWFscyA9IGRhdGEudGVzdGltb25pYWxzLmZpbHRlcihcclxuICAgICAgICAgICh0ZXN0aW1vbmlhbCkgPT4gdGVzdGltb25pYWwuZW5hYmxlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGVzdGltb25pYWxzKGZpbHRlcmVkVGVzdGltb25pYWxzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHRlc3RpbW9uaWFsczpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hUZXN0aW1vbmlhbHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX3NlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV90ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHNfaW5uZXIgd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXBlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmcgYW5pbV9jaXJjbGVcIiBzcmM9XCJpbWcvc3ZnL2ljb245LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcGUyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJpbWcvc3ZnL2ljb24xMi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdHBhcnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2ZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Rlc3RpbW9uaWFsc1thY3RpdmVJbmRleF0/LmltYWdlPy51cmx9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17dGVzdGltb25pYWxzW2FjdGl2ZUluZGV4XT8ubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0cGFydFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZlLXJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsc1thY3RpdmVJbmRleF0/LnJldmlld308L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkLXNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IGFjdGl2ZUluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2AgZ3JpZC1pdGVtICR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1nLXVybD17aXRlbSAmJiBpdGVtPy5pbWFnZT8udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtPy5pbWFnZT8udXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5obG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGVzdGltb25pYWxzW2FjdGl2ZUluZGV4XT8ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVzdGltb25pYWxzW2FjdGl2ZUluZGV4XT8ucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxzIiwic2V0VGVzdGltb25pYWxzIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImZldGNoVGVzdGltb25pYWxzIiwiZGF0YSIsImZpbHRlcmVkVGVzdGltb25pYWxzIiwiZmlsdGVyIiwidGVzdGltb25pYWwiLCJlbmFibGVkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZUl0ZW1DbGljayIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS13b3ctZHVyYXRpb24iLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwicCIsInJldmlldyIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwib25DbGljayIsImRhdGEtaW1nLXVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Testimonials.js\n");

/***/ })

});