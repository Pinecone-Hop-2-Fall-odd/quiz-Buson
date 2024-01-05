"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createQuiz",{

/***/ "./pages/createQuiz.js":
/*!*****************************!*\
  !*** ./pages/createQuiz.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nsdc;\nfunction CreateQuiz() {\n    _s();\n    const [quiz, setQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        question: \"\",\n        0: {\n            answer: \"\",\n            isCorrect: false\n        },\n        1: {\n            answer: \"\",\n            isCorrect: false\n        },\n        2: {\n            answer: \"\",\n            isCorrect: false\n        },\n        3: {\n            answer: \"\",\n            isCorrect: false\n        }\n    });\n    const [checkValue, setCheckValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(\"quiz\", quiz);\n    function handleQuestion(value) {\n        setQuiz((prev)=>({\n                ...prev,\n                question: value\n            }));\n    }\n    function handleAnswer(index, value) {\n        setQuiz((prev)=>({\n                ...prev,\n                [index]: {\n                    ...prev[index],\n                    answer: value\n                }\n            }));\n    }\n    function TrueFalse(index) {\n        setQuiz((prev)=>({\n                ...prev,\n                [index]: {\n                    ...prev[index],\n                    isCorrect: true\n                }\n            }));\n        Object.keys(quiz).filter((key)=>key !== \"question\" && key != index).forEach((key)=>{\n            setQuiz((prev)=>({\n                    ...prev,\n                    [key]: {\n                        ...prev[key],\n                        isCorrect: false\n                    }\n                }));\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Question ...\",\n                    style: {\n                        color: \"black\"\n                    },\n                    onChange: (e)=>handleQuestion(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-[10px] mt-[5px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                onChange: (e)=>{\n                                    TrueFalse(0);\n                                    setCheckValue(0);\n                                },\n                                checked: checkValue == 0\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Answer ...\",\n                                style: {\n                                    color: \"black\"\n                                },\n                                onChange: (e)=>handleAnswer(0, e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                onChange: (e)=>{\n                                    TrueFalse(1);\n                                    setCheckValue(1);\n                                },\n                                checked: checkValue == 1\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Answer ...\",\n                                style: {\n                                    color: \"black\"\n                                },\n                                onChange: (e)=>handleAnswer(1, e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                onChange: (e)=>{\n                                    TrueFalse(2);\n                                    setCheckValue(2);\n                                },\n                                checked: checkValue == 2\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Answer ...\",\n                                style: {\n                                    color: \"black\"\n                                },\n                                onChange: (e)=>handleAnswer(2, e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                onChange: (e)=>{\n                                    TrueFalse(3);\n                                    setCheckValue(3);\n                                },\n                                checked: checkValue == 3\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Answer ...\",\n                                style: {\n                                    color: \"black\"\n                                },\n                                onChange: (e)=>handleAnswer(3, e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230101/Desktop/quiz/front-end/pages/createQuiz.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateQuiz, \"e0+V3b4W8vRp4hfLnMP3yIdJeMM=\");\n_c = CreateQuiz;\nvar _c;\n$RefreshReg$(_c, \"CreateQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBTztvQ0FBRUMsT0FBTztnQ0FBUTtnQ0FDeEJDLFVBQVUsQ0FBQ0MsSUFBTWYsYUFBYSxHQUFHZSxFQUFFQyxNQUFNLENBQUNsQixLQUFLOzs7Ozs7Ozs7Ozs7a0NBR25ELDhEQUFDVTs7MENBQ0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMSSxVQUFVLENBQUNDO29DQUNUYixVQUFVO29DQUNWUixjQUFjO2dDQUNoQjtnQ0FDQXdCLFNBQVN6QixjQUFjOzs7Ozs7MENBRXpCLDhEQUFDZ0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU87b0NBQUVDLE9BQU87Z0NBQVE7Z0NBQ3hCQyxVQUFVLENBQUNDLElBQU1mLGFBQWEsR0FBR2UsRUFBRUMsTUFBTSxDQUFDbEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNEO0dBakh3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlUXVpei5qcz8xZWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5zZGM7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVRdWl6KCkge1xuICBjb25zdCBbcXVpeiwgc2V0UXVpel0gPSB1c2VTdGF0ZSh7XG4gICAgcXVlc3Rpb246IFwiXCIsXG4gICAgMDogeyBhbnN3ZXI6IFwiXCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcbiAgICAxOiB7IGFuc3dlcjogXCJcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxuICAgIDI6IHsgYW5zd2VyOiBcIlwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXG4gICAgMzogeyBhbnN3ZXI6IFwiXCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcbiAgfSk7XG4gIGNvbnN0IFtjaGVja1ZhbHVlLCBzZXRDaGVja1ZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnNvbGUubG9nKFwicXVpelwiLCBxdWl6KTtcblxuICBmdW5jdGlvbiBoYW5kbGVRdWVzdGlvbih2YWx1ZSkge1xuICAgIHNldFF1aXooKHByZXYpID0+ICh7IC4uLnByZXYsIHF1ZXN0aW9uOiB2YWx1ZSB9KSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQW5zd2VyKGluZGV4LCB2YWx1ZSkge1xuICAgIHNldFF1aXooKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2luZGV4XTogeyAuLi5wcmV2W2luZGV4XSwgYW5zd2VyOiB2YWx1ZSB9LFxuICAgIH0pKTtcbiAgfVxuICBmdW5jdGlvbiBUcnVlRmFsc2UoaW5kZXgpIHtcbiAgICBzZXRRdWl6KChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtpbmRleF06IHsgLi4ucHJldltpbmRleF0sIGlzQ29ycmVjdDogdHJ1ZSB9LFxuICAgIH0pKTtcblxuICAgIE9iamVjdC5rZXlzKHF1aXopXG4gICAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gXCJxdWVzdGlvblwiICYmIGtleSAhPSBpbmRleClcbiAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2V0UXVpeigocHJldikgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIFtrZXldOiB7IC4uLnByZXZba2V5XSwgaXNDb3JyZWN0OiBmYWxzZSB9LFxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWVzdGlvbiAuLi5cIlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC1bMTBweF0gbXQtWzVweF1cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgVHJ1ZUZhbHNlKDApO1xuICAgICAgICAgICAgICBzZXRDaGVja1ZhbHVlKDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrVmFsdWUgPT0gMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbnN3ZXIgLi4uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyKDAsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgVHJ1ZUZhbHNlKDEpO1xuICAgICAgICAgICAgICBzZXRDaGVja1ZhbHVlKDEpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrVmFsdWUgPT0gMX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbnN3ZXIgLi4uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyKDEsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgVHJ1ZUZhbHNlKDIpO1xuICAgICAgICAgICAgICBzZXRDaGVja1ZhbHVlKDIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrVmFsdWUgPT0gMn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbnN3ZXIgLi4uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyKDIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgVHJ1ZUZhbHNlKDMpO1xuICAgICAgICAgICAgICBzZXRDaGVja1ZhbHVlKDMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrVmFsdWUgPT0gM31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbnN3ZXIgLi4uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyKDMsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2RjIiwiQ3JlYXRlUXVpeiIsInF1aXoiLCJzZXRRdWl6IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJjaGVja1ZhbHVlIiwic2V0Q2hlY2tWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVRdWVzdGlvbiIsInZhbHVlIiwicHJldiIsImhhbmRsZUFuc3dlciIsImluZGV4IiwiVHJ1ZUZhbHNlIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImZvckVhY2giLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwiY29sb3IiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createQuiz.js\n"));

/***/ })

});