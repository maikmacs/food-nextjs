webpackHotUpdate(5,{

/***/ "./services/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
 //import baseURL from './config';

var baseURL = 'https://sindelantal-backend.herokuapp.com/';
var api = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: baseURL,
  headers: {
    'Cache-Control': 'no-cache'
  },
  timeout: 20000
});

var createUser = function createUser(data) {
  return api.post('user/create', data);
};

var loginUser = function loginUser(data) {
  return api.post('login', data);
};

/* unused harmony default export */ var _unused_webpack_default_export = ({
  createUser: createUser,
  loginUser: loginUser
});

/***/ })

})
//# sourceMappingURL=5.3952f26d32bbd3838aab.hot-update.js.map