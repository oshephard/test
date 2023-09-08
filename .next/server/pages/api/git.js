"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/git";
exports.ids = ["pages/api/git"];
exports.modules = {

/***/ "simple-git":
/*!*****************************!*\
  !*** external "simple-git" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("simple-git");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/lib/gitHandler.ts":
/*!*******************************!*\
  !*** ./src/lib/gitHandler.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var simple_git__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-git */ \"simple-git\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([simple_git__WEBPACK_IMPORTED_MODULE_1__]);\nsimple_git__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction gitHandler(url) {\n    try {\n        const date = new Date().toISOString();\n        (0,simple_git__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().clone(url, {}, (err)=>{\n            if (err) {\n                console.error(`Error cloning repository: ${err.message}`);\n                return false;\n            }\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`./tmp/${date}.txt`, `hello world on ${date}!`, function(err) {\n                (0,simple_git__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"./tmp\").addRemote(\"temp\", url, (err)=>{\n                    if (err) {\n                        console.error(`Error cloning repo or adding remote: ${err.message}`);\n                        return false;\n                    }\n                }).add(\".\", (err)=>{\n                    if (err) {\n                        console.error(`Error adding file to repo: ${err.message}`);\n                        return false;\n                    }\n                }).commit(`Adding ${date}.txt`, (err)=>{\n                    if (err) {\n                        console.error(`Error committing changes: ${err.message}`);\n                        return false;\n                    }\n                }).push([\n                    \"-u\",\n                    \"temp\",\n                    \"master\"\n                ], (err)=>{\n                    if (err) {\n                        console.error(`Error pushing to origin: ${err.message}`);\n                        return false;\n                    }\n                }).removeRemote(\"temp\");\n            });\n            return true;\n        });\n    } catch (err) {\n        return err;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gitHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2dpdEhhbmRsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQjtBQUNTO0FBRTdCLFNBQVNFLFdBQVdDLEdBQVc7SUFDN0IsSUFBSTtRQUNGLE1BQU1DLE9BQU8sSUFBSUMsT0FBT0MsV0FBVztRQUVuQ0wsc0RBQUdBLEdBQUdNLEtBQUssQ0FBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQ0s7WUFDcEIsSUFBSUEsS0FBSztnQkFDUEMsUUFBUUMsS0FBSyxDQUFDLENBQUMsMEJBQTBCLEVBQUVGLElBQUlHLE9BQU8sQ0FBQyxDQUFDO2dCQUN4RCxPQUFPO1lBQ1Q7WUFFQVgsbURBQVksQ0FDVixDQUFDLE1BQU0sRUFBRUksS0FBSyxJQUFJLENBQUMsRUFDbkIsQ0FBQyxlQUFlLEVBQUVBLEtBQUssQ0FBQyxDQUFDLEVBQ3pCLFNBQVVJLEdBQUc7Z0JBQ1hQLHNEQUFHQSxDQUFDLFNBQ0RZLFNBQVMsQ0FBQyxRQUFRVixLQUFLLENBQUNLO29CQUN2QixJQUFJQSxLQUFLO3dCQUNQQyxRQUFRQyxLQUFLLENBQ1gsQ0FBQyxxQ0FBcUMsRUFBRUYsSUFBSUcsT0FBTyxDQUFDLENBQUM7d0JBRXZELE9BQU87b0JBQ1Q7Z0JBQ0YsR0FDQ0csR0FBRyxDQUFDLEtBQUssQ0FBQ047b0JBQ1QsSUFBSUEsS0FBSzt3QkFDUEMsUUFBUUMsS0FBSyxDQUFDLENBQUMsMkJBQTJCLEVBQUVGLElBQUlHLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxPQUFPO29CQUNUO2dCQUNGLEdBQ0NJLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRVgsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDSTtvQkFDN0IsSUFBSUEsS0FBSzt3QkFDUEMsUUFBUUMsS0FBSyxDQUFDLENBQUMsMEJBQTBCLEVBQUVGLElBQUlHLE9BQU8sQ0FBQyxDQUFDO3dCQUN4RCxPQUFPO29CQUNUO2dCQUNGLEdBQ0NLLElBQUksQ0FBQztvQkFBQztvQkFBTTtvQkFBUTtpQkFBUyxFQUFFLENBQUNSO29CQUMvQixJQUFJQSxLQUFLO3dCQUNQQyxRQUFRQyxLQUFLLENBQUMsQ0FBQyx5QkFBeUIsRUFBRUYsSUFBSUcsT0FBTyxDQUFDLENBQUM7d0JBQ3ZELE9BQU87b0JBQ1Q7Z0JBQ0YsR0FDQ00sWUFBWSxDQUFDO1lBQ2xCO1lBRUYsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPVCxLQUFLO1FBQ1osT0FBT0E7SUFDVDtBQUNGO0FBRUEsaUVBQWVOLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW51ZS1kZXZvcHMvLi9zcmMvbGliL2dpdEhhbmRsZXIudHM/N2M1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgZ2l0IGZyb20gXCJzaW1wbGUtZ2l0XCI7XG5cbmZ1bmN0aW9uIGdpdEhhbmRsZXIodXJsOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgZ2l0KCkuY2xvbmUodXJsLCB7fSwgKGVycjogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNsb25pbmcgcmVwb3NpdG9yeTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmcy53cml0ZUZpbGUoXG4gICAgICAgIGAuL3RtcC8ke2RhdGV9LnR4dGAsXG4gICAgICAgIGBoZWxsbyB3b3JsZCBvbiAke2RhdGV9IWAsXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBnaXQoXCIuL3RtcFwiKVxuICAgICAgICAgICAgLmFkZFJlbW90ZShcInRlbXBcIiwgdXJsLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgYEVycm9yIGNsb25pbmcgcmVwbyBvciBhZGRpbmcgcmVtb3RlOiAke2Vyci5tZXNzYWdlfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGQoXCIuXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGFkZGluZyBmaWxlIHRvIHJlcG86ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNvbW1pdChgQWRkaW5nICR7ZGF0ZX0udHh0YCwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29tbWl0dGluZyBjaGFuZ2VzOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5wdXNoKFtcIi11XCIsIFwidGVtcFwiLCBcIm1hc3RlclwiXSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHVzaGluZyB0byBvcmlnaW46ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlbW92ZVJlbW90ZShcInRlbXBcIik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnaXRIYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZzIiwiZ2l0IiwiZ2l0SGFuZGxlciIsInVybCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjbG9uZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJ3cml0ZUZpbGUiLCJhZGRSZW1vdGUiLCJhZGQiLCJjb21taXQiLCJwdXNoIiwicmVtb3ZlUmVtb3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/gitHandler.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/git/index.ts":
/*!************************************!*\
  !*** ./src/pages/api/git/index.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_gitHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/gitHandler */ \"(api)/./src/lib/gitHandler.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_gitHandler__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_gitHandler__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { method, body: { url } } = req;\n    switch(method){\n        case \"POST\":\n            try {\n                const success = (0,_lib_gitHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n                if (success) {\n                    res.status(200);\n                } else {\n                    res.status(500).end(\"Error writing to git repo\");\n                }\n            } catch (err) {\n                console.log(err);\n                res.status(500).end(\"Error writing to git repo\");\n            }\n        default:\n            res.setHeader(\"Allow\", [\n                \"POST\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dpdC9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVpRDtBQUVsQyxlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLE1BQU0sRUFDSkMsTUFBTSxFQUNOQyxNQUFNLEVBQUVDLEdBQUcsRUFBRSxFQUNkLEdBQUdKO0lBRUosT0FBUUU7UUFDTixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNRyxVQUFVUCwyREFBVUEsQ0FBQ007Z0JBQzNCLElBQUlDLFNBQVM7b0JBQ1hKLElBQUlLLE1BQU0sQ0FBQztnQkFDYixPQUFPO29CQUNMTCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDO2dCQUN0QjtZQUNGLEVBQUUsT0FBT0MsS0FBSztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWlAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLEdBQUcsQ0FBQztZQUN0QjtRQUNGO1lBQ0VOLElBQUlVLFNBQVMsQ0FBQyxTQUFTO2dCQUFDO2FBQU87WUFDL0JWLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVMLE9BQU8sWUFBWSxDQUFDO0lBQ3REO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW51ZS1kZXZvcHMvLi9zcmMvcGFnZXMvYXBpL2dpdC9pbmRleC50cz8zOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgZ2l0SGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vbGliL2dpdEhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB7XG4gICAgbWV0aG9kLFxuICAgIGJvZHk6IHsgdXJsIH0sXG4gIH0gPSByZXE7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGdpdEhhbmRsZXIodXJsKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIkVycm9yIHdyaXRpbmcgdG8gZ2l0IHJlcG9cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuZW5kKFwiRXJyb3Igd3JpdGluZyB0byBnaXQgcmVwb1wiKTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIlBPU1RcIl0pO1xuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2l0SGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwidXJsIiwic3VjY2VzcyIsInN0YXR1cyIsImVuZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/git/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/git/index.ts"));
module.exports = __webpack_exports__;

})();