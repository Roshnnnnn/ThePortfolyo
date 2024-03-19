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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Portfolio = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return D_ThePortfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            if (data && data.projects) {\n                                setUser(data.projects);\n                                console.log(data.projects);\n                            }\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(\"Error fetching data:\", _ctx.t0.message);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_section\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"tonni_tm_portfolio\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"tonni_tm_main_title\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: \"Latest Projets\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"subtitle\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: \"Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this),\n                        user.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"portfolio_list wow fadeInUp\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: \"gallery_zoom grid\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"grid-sizer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            className: \"grid-item\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, item._id, false, {\n                                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ThePortfolyo\\\\src\\\\components\\\\Portfolio.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Portfolio, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTTs7QUFFbEQsSUFBTUcsU0FBUyxHQUFHLFdBQU07OztJQUN0QixJQUF3QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUp0QyxJQUlhLEdBQWFBLEdBQVksR0FBekIsRUFKYixPQUlzQixHQUFJQSxHQUFZLEdBQWhCO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNTSxhQUFhO3VCQUFHLCtKQUFZO29CQUV4QkMsSUFBSTs7Ozs7O21DQUFTTCwyREFBUyxFQUFFOzs0QkFBeEJLLElBQUksWUFBb0I7NEJBQzlCLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxRQUFRLEVBQUU7Z0NBQ3pCSCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7Z0NBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQzs2QkFDNUI7Ozs7Ozs0QkFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVDLFFBQU1DLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7OzthQUV0RDs0QkFWS04sYUFBYTs7O1dBVWxCO1FBRURBLGFBQWEsRUFBRSxDQUFDO0tBQ2pCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ08sS0FBRztrQkFDRiw0RUFBQ0EsS0FBRztZQUFDQyxTQUFTLEVBQUMsa0JBQWtCO3NCQUMvQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjswQkFDakMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOztzQ0FDeEIsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxxQkFBcUI7OzhDQUNsQyw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLE9BQU87OENBQ3BCLDRFQUFDQyxJQUFFO2tEQUFDLGdCQUFjOzs7Ozs2Q0FBSzs7Ozs7eUNBQ25COzhDQUNOLDhEQUFDRixLQUFHO29DQUFDQyxTQUFTLEVBQUMsVUFBVTs4Q0FDdkIsNEVBQUNFLEdBQUM7a0RBQUMsK0dBR0g7Ozs7OzZDQUFJOzs7Ozt5Q0FDQTs7Ozs7O2lDQUNGO3dCQUNMWixJQUFJLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO2lEQUNiLDhEQUFDTCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzBDQUMxQyw0RUFBQ0ssSUFBRTtvQ0FBQ0wsU0FBUyxFQUFDLG1CQUFtQjs4Q0FDL0IsNEVBQUNNLElBQUU7d0NBQUNOLFNBQVMsRUFBQyxZQUFZO2tEQUN4Qiw0RUFBQ00sSUFBRTs0Q0FBQ04sU0FBUyxFQUFDLFdBQVc7Ozs7O2tEQUFNOzs7Ozs4Q0FDNUI7Ozs7OzBDQUNGOytCQUwyQ0ksSUFBSSxDQUFDRyxHQUFHOzs7O3NDQU1wRDt5QkFDUCxDQUFDOzs7Ozs7eUJBQ0U7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FoREtsQixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFrRGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8uanM/YTZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvaGVsbG9cIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnByb2plY3RzKSB7XHJcbiAgICAgICAgICBzZXRVc2VyKGRhdGEucHJvamVjdHMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5wcm9qZWN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9zZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9ubmlfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5MYXRlc3QgUHJvamV0czwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEZ1c2NlIHNvbGxpY2l0dWRpbiBlcm9zIGlkIGV4IG1heGltdXMgZ3JhdmlkYSBub24gdml0YWUgYW50ZS5cclxuICAgICAgICAgICAgICAgICAgQ3JhcyBhYyBtaSBhIGRvbG9yIHN1c2NpcGl0IHJ1dHJ1bSB1dCB2aXRhZSBtaS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VyLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvX2xpc3Qgd293IGZhZGVJblVwXCIga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2FsbGVyeV96b29tIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImdyaWQtc2l6ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwiUG9ydGZvbGlvIiwidXNlciIsInNldFVzZXIiLCJmZXRjaFVzZXJEYXRhIiwiZGF0YSIsInByb2plY3RzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsIm1hcCIsIml0ZW0iLCJ1bCIsImxpIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio.js\n");

/***/ })

});