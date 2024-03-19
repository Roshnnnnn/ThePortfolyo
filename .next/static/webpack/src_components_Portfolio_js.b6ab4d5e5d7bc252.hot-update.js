"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Portfolio_js",{

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/DetailsPopup */ \"./src/components/popup/DetailsPopup.js\");\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Portfolio = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), activeDetailsPopup = ref[0], setActiveDetailsPopup = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), imageURL = ref2[0], setImageURL = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), loading = ref4[0], setLoading = ref4[1];\n    // Isotope\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (0,_utilits__WEBPACK_IMPORTED_MODULE_4__.dataImage)();\n        setTimeout(function() {\n            new (isotope_layout__WEBPACK_IMPORTED_MODULE_2___default())(\".gallery_zoom\", {\n                itemSelector: \".grid-item\"\n            });\n        }, 500);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, imageUrls;\n                return D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_6__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            setUser(data.projects.filter(function(project) {\n                                return project.enabled === true;\n                            }).sort(function(a, b) {\n                                return a.sequence - b.sequence;\n                            }));\n                            imageUrls = data.projects.map(function(project) {\n                                return project.image.url;\n                            });\n                            setImageURL(imageUrls);\n                            setLoading(false);\n                            if (data.projects.image && data.projects.image.url) {\n                                console.log(data.image.url);\n                            }\n                            _ctx.next = 16;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0.message);\n                            setError(\"Error fetching Image. Please try again later.\");\n                            setLoading(false);\n                        case 16:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        11\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: activeDetailsPopup,\n                close: function() {\n                    return setActiveDetailsPopup(false);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"tonni_tm_section\",\n                id: \"portfolio\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"tonni_tm_portfolio\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"tonni_tm_main_title\",\n                                \"data-type\": \"centered\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"title\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            children: \"Latest Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"subtitle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: \"Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"portfolio_list wow fadeInUp\",\n                                \"data-wow-duration\": \"1s\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: \"gallery_zoom grid\",\n                                    children: user.map(function(project, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            className: \"grid-sizer\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: \"list_inner\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: \"image\",\n                                                        children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                            children: error\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 29\n                                                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                                    src: imageURL[index],\n                                                                    alt: \"\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                                    lineNumber: 86,\n                                                                    columnNumber: 31\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                                    className: \"main\",\n                                                                    \"data-img-url\": project.image.url\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                                    lineNumber: 87,\n                                                                    columnNumber: 31\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 25\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: \"details\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                className: \"category\",\n                                                                children: project.sequence\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 27\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                                className: \"title\",\n                                                                children: project.title\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 27\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                                className: \"svg\",\n                                                                src: \"img/svg/vector5.svg\",\n                                                                alt: \"\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                                lineNumber: 97,\n                                                                columnNumber: 27\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 25\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                        className: \"tonni_tm_full_link popup-youtube\",\n                                                        href: \"//www.youtube.com/embed/7e90gBu4pas?autoplay=1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 23\n                                            }, _this1)\n                                        }, project._id, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(Portfolio, \"sUwOQiqNkT10FvOoM+NjkVhfdkc=\");\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ2lCO0FBQ2Y7QUFDUztBQUNFOztBQUVsRCxJQUFNTyxTQUFTLEdBQUcsV0FBTTs7O0lBQ3RCLElBQW9ESixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUHJFLGtCQU8yQixHQUEyQkEsR0FBZSxHQUExQyxFQVAzQixxQkFPa0QsR0FBSUEsR0FBZSxHQUFuQjtJQUNoRCxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVJ0QyxJQVFhLEdBQWFBLElBQVksR0FBekIsRUFSYixPQVFzQixHQUFJQSxJQUFZLEdBQWhCO0lBQ3BCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVDlDLFFBU2lCLEdBQWlCQSxJQUFZLEdBQTdCLEVBVGpCLFdBUzhCLEdBQUlBLElBQVksR0FBaEI7SUFDNUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFWeEMsS0FVYyxHQUFjQSxJQUFZLEdBQTFCLEVBVmQsUUFVd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUN0QixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVg5QyxPQVdnQixHQUFnQkEsSUFBYyxHQUE5QixFQVhoQixVQVc0QixHQUFJQSxJQUFjLEdBQWxCO0lBRTFCLFVBQVU7SUFDVkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RFLG1EQUFTLEVBQUUsQ0FBQztRQUNaYyxVQUFVLENBQUMsV0FBTTtZQUNmLElBQUlsQix1REFBTyxDQUFDLGVBQWUsRUFBRTtnQkFDM0JtQixZQUFZLEVBQUUsWUFBWTthQUMzQixDQUFDLENBQUM7U0FDSixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQakIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWtCLGFBQWE7dUJBQUcsK0pBQVk7b0JBRXhCQyxJQUFJLEVBT0pDLFNBQVM7Ozs7OzttQ0FQSWhCLDJEQUFTLEVBQUU7OzRCQUF4QmUsSUFBSSxZQUFvQjs0QkFDOUJWLE9BQU8sQ0FDTFUsSUFBSSxDQUFDRSxRQUFRLENBQ1ZDLE1BQU0sQ0FBQyxTQUFDQyxPQUFPO3VDQUFLQSxPQUFPLENBQUNDLE9BQU8sS0FBSyxJQUFJOzZCQUFBLENBQUMsQ0FDN0NDLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7dUNBQUtELENBQUMsQ0FBQ0UsUUFBUSxHQUFHRCxDQUFDLENBQUNDLFFBQVE7NkJBQUEsQ0FBQyxDQUMzQyxDQUFDOzRCQUVJUixTQUFTLEdBQUdELElBQUksQ0FBQ0UsUUFBUSxDQUFDUSxHQUFHLENBQUMsU0FBQ04sT0FBTzt1Q0FBS0EsT0FBTyxDQUFDTyxLQUFLLENBQUNDLEdBQUc7NkJBQUEsQ0FBQyxDQUFDOzRCQUNwRXBCLFdBQVcsQ0FBQ1MsU0FBUyxDQUFDLENBQUM7NEJBQ3ZCTCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2xCLElBQUlJLElBQUksQ0FBQ0UsUUFBUSxDQUFDUyxLQUFLLElBQUlYLElBQUksQ0FBQ0UsUUFBUSxDQUFDUyxLQUFLLENBQUNDLEdBQUcsRUFBRTtnQ0FDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxJQUFJLENBQUNXLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUM7NkJBQzdCOzs7Ozs7NEJBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDckIsUUFBTXNCLE9BQU8sQ0FBQyxDQUFDOzRCQUMzQnJCLFFBQVEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDOzRCQUMxREUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7OzthQUVyQjs0QkFwQktHLGFBQWE7OztXQW9CbEI7UUFFREEsYUFBYSxFQUFFLENBQUM7S0FDakIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDbkIsMkNBQVE7OzBCQUNQLDhEQUFDSSwyREFBWTtnQkFDWGdDLElBQUksRUFBRTdCLGtCQUFrQjtnQkFDeEI4QixLQUFLLEVBQUU7MkJBQU03QixxQkFBcUIsQ0FBQyxLQUFLLENBQUM7aUJBQUE7Ozs7O3FCQUN6QzswQkFDRiw4REFBQzhCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQUNDLEVBQUUsRUFBQyxXQUFXOzBCQUM5Qyw0RUFBQ0YsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4QkFDakMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxXQUFXOzswQ0FDeEIsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxxQkFBcUI7Z0NBQUNFLFdBQVMsRUFBQyxVQUFVOztrREFDdkQsOERBQUNILEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxPQUFPO2tEQUNwQiw0RUFBQ0csSUFBRTtzREFBQyxpQkFBZTs7Ozs7aURBQUs7Ozs7OzZDQUNwQjtrREFDTiw4REFBQ0osS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLFVBQVU7a0RBQ3ZCLDRFQUFDSSxHQUFDO3NEQUFDLCtHQUdIOzs7OztpREFBSTs7Ozs7NkNBQ0E7Ozs7OztxQ0FDRjs0QkFDTDVCLE9BQU8saUJBQ04sOERBQUN1QixLQUFHOzBDQUFDLFlBQVU7Ozs7O3FDQUFNLGlCQUVyQiw4REFBQ0EsS0FBRztnQ0FDRkMsU0FBUyxFQUFDLDZCQUE2QjtnQ0FDdkNLLG1CQUFpQixFQUFDLElBQUk7MENBRXRCLDRFQUFDQyxJQUFFO29DQUFDTixTQUFTLEVBQUMsbUJBQW1COzhDQUM5QjlCLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDTixPQUFPLEVBQUVzQixLQUFLOzZEQUN2Qiw4REFBQ0MsSUFBRTs0Q0FBQ1IsU0FBUyxFQUFDLFlBQVk7c0RBQ3hCLDRFQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsWUFBWTs7a0VBQ3pCLDhEQUFDRCxLQUFHO3dEQUFDQyxTQUFTLEVBQUMsT0FBTztrRUFDbkIxQixLQUFLLGlCQUNKLDhEQUFDeUIsS0FBRztzRUFBRXpCLEtBQUs7Ozs7O2tFQUFPLGlCQUVsQjs7OEVBQ0UsOERBQUNtQyxLQUFHO29FQUFDQyxHQUFHLEVBQUV0QyxRQUFRLENBQUNtQyxLQUFLLENBQUM7b0VBQUVJLEdBQUcsRUFBQyxFQUFFOzs7OzswRUFBRzs4RUFDcEMsOERBQUNaLEtBQUc7b0VBQ0ZDLFNBQVMsRUFBQyxNQUFNO29FQUNoQlksY0FBWSxFQUFFM0IsT0FBTyxDQUFDTyxLQUFLLENBQUNDLEdBQUc7Ozs7OzBFQUMvQjs7d0VBQ0Q7Ozs7OzhEQUVEO2tFQUNOLDhEQUFDTSxLQUFHO3dEQUFDQyxTQUFTLEVBQUMsU0FBUzs7MEVBQ3RCLDhEQUFDYSxNQUFJO2dFQUFDYixTQUFTLEVBQUMsVUFBVTswRUFBRWYsT0FBTyxDQUFDSyxRQUFROzs7OztzRUFBUTswRUFDcEQsOERBQUNhLElBQUU7Z0VBQUNILFNBQVMsRUFBQyxPQUFPOzBFQUFFZixPQUFPLENBQUM2QixLQUFLOzs7OztzRUFBTTswRUFDMUMsOERBQUNMLEtBQUc7Z0VBQ0ZULFNBQVMsRUFBQyxLQUFLO2dFQUNmVSxHQUFHLEVBQUMscUJBQXFCO2dFQUN6QkMsR0FBRyxFQUFDLEVBQUU7Ozs7O3NFQUNOOzs7Ozs7OERBQ0U7a0VBQ04sOERBQUN2QixHQUFDO3dEQUNBWSxTQUFTLEVBQUMsa0NBQWtDO3dEQUM1Q2UsSUFBSSxFQUFDLGdEQUFnRDs7Ozs7OERBQ3JEOzs7Ozs7c0RBQ0U7MkNBNUJ3QjlCLE9BQU8sQ0FBQytCLEdBQUc7Ozs7a0RBNkJ0QztxQ0FDTixDQUFDOzs7Ozt5Q0FDQzs7Ozs7cUNBQ0Q7Ozs7Ozs2QkFFSjs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFDRyxDQUNYO0NBQ0g7R0EvR0tqRCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFnSGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanM/YTZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXNvdG9wZSBmcm9tIFwiaXNvdG9wZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZGF0YUltYWdlIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuaW1wb3J0IERldGFpbHNQb3B1cCBmcm9tIFwiLi9wb3B1cC9EZXRhaWxzUG9wdXBcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVEZXRhaWxzUG9wdXAsIHNldEFjdGl2ZURldGFpbHNQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbWFnZVVSTCwgc2V0SW1hZ2VVUkxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gSXNvdG9wZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkYXRhSW1hZ2UoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBuZXcgSXNvdG9wZShcIi5nYWxsZXJ5X3pvb21cIiwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuZ3JpZC1pdGVtXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgNTAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgICAgICBzZXRVc2VyKFxyXG4gICAgICAgICAgZGF0YS5wcm9qZWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmVuYWJsZWQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNlcXVlbmNlIC0gYi5zZXF1ZW5jZSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZVVybHMgPSBkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5pbWFnZS51cmwpO1xyXG4gICAgICAgIHNldEltYWdlVVJMKGltYWdlVXJscyk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgaWYgKGRhdGEucHJvamVjdHMuaW1hZ2UgJiYgZGF0YS5wcm9qZWN0cy5pbWFnZS51cmwpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuaW1hZ2UudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJFcnJvciBmZXRjaGluZyBJbWFnZS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPERldGFpbHNQb3B1cFxyXG4gICAgICAgIHNob3c9e2FjdGl2ZURldGFpbHNQb3B1cH1cclxuICAgICAgICBjbG9zZT17KCkgPT4gc2V0QWN0aXZlRGV0YWlsc1BvcHVwKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9zZWN0aW9uXCIgaWQ9XCJwb3J0Zm9saW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9tYWluX3RpdGxlXCIgZGF0YS10eXBlPVwiY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+TGF0ZXN0IFByb2plY3RzPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgRnVzY2Ugc29sbGljaXR1ZGluIGVyb3MgaWQgZXggbWF4aW11cyBncmF2aWRhIG5vbiB2aXRhZSBhbnRlLlxyXG4gICAgICAgICAgICAgICAgICBDcmFzIGFjIG1pIGEgZG9sb3Igc3VzY2lwaXQgcnV0cnVtIHV0IHZpdGFlIG1pLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9ydGZvbGlvX2xpc3Qgd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnYWxsZXJ5X3pvb20gZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImdyaWQtc2l6ZXJcIiBrZXk9e3Byb2plY3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVSTFtpbmRleF19IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltZy11cmw9e3Byb2plY3QuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e3Byb2plY3Quc2VxdWVuY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvdmVjdG9yNS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b25uaV90bV9mdWxsX2xpbmsgcG9wdXAteW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzdlOTBnQnU0cGFzP2F1dG9wbGF5PTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XHJcbiJdLCJuYW1lcyI6WyJJc290b3BlIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRhdGFJbWFnZSIsIkRldGFpbHNQb3B1cCIsImZldGNoRGF0YSIsIlBvcnRmb2xpbyIsImFjdGl2ZURldGFpbHNQb3B1cCIsInNldEFjdGl2ZURldGFpbHNQb3B1cCIsInVzZXIiLCJzZXRVc2VyIiwiaW1hZ2VVUkwiLCJzZXRJbWFnZVVSTCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJpdGVtU2VsZWN0b3IiLCJmZXRjaFVzZXJEYXRhIiwiZGF0YSIsImltYWdlVXJscyIsInByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImVuYWJsZWQiLCJzb3J0IiwiYSIsImIiLCJzZXF1ZW5jZSIsIm1hcCIsImltYWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzaG93IiwiY2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImRhdGEtdHlwZSIsImgzIiwicCIsImRhdGEtd293LWR1cmF0aW9uIiwidWwiLCJpbmRleCIsImxpIiwiaW1nIiwic3JjIiwiYWx0IiwiZGF0YS1pbWctdXJsIiwic3BhbiIsInRpdGxlIiwiaHJlZiIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Portfolio.js\n");

/***/ })

});