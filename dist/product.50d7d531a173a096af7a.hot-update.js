/*! For license information please see product.50d7d531a173a096af7a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateassignment("product",{"./src/components/sideNavigation/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/sideNavigation/styles.scss");\n/* harmony import */ var _apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apiCalls/apiCalls */ "./src/apiCalls/apiCalls.js");\n\n\n\nvar sideNavigationBar = function sideNavigationBar(filterProduct) {\n  var sidebarElement = document.createElement("aside");\n  sidebarElement.classList.add("sideNavigation");\n  var categoriesResponse = _apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].getData("/categories");\n  categoriesResponse.then(function (categories) {\n    categories.sort(function (a, b) {\n      return a.order > b.order ? 1 : b.order > a.order ? -1 : 0;\n    });\n    categories.map(function (c) {\n      if (c.enabled == true) {\n        var option = document.createElement("div");\n\n        option.onclick = function () {\n          return filterProduct(c.id);\n        };\n\n        option.classList.add("option");\n        option.innerHTML = c.name;\n        sidebarElement.appendChild(option);\n      }\n    });\n  });\n  return sidebarElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideNavigationBar);\n\n//# sourceURL=webpack://assignment/./src/components/sideNavigation/index.js?')}},(function(e){e.h=()=>"4c265265181ceb4381ac"}));