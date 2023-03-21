exports.ids = [15,4,8];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0c23c500", content, true, context)
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9da08f24", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAv5JREFUaEPtmf91T0EQxW8qQAdUgApCBaQCVBAqCBWgAlSQqAAVoALpABUk5xM7jPV9b2fn7Tvxzsmckz+S997uvTN3fuxmTxu3vY3j1xWBy47gyAhcl7Qv6aGkm+4Hjqfu50TSJ0k/RpAfQQCwR5IedwJ6K+lFIdb56Z/XlxDA4wB/mt7914evCpFURLIE8PqxpDsV+K+SkMhHJxleMUndKxK7XX33RdJBJhoZAoD+IIkImKFpIgGQiLEGnidnzIjA/Y41Lr7rJVCD/1mAo+eMkTcQuVY+7ibRQwCPfy5yYD/AI4mo16cI4hQkZySoWHejVaqHAF5+VFCMAm+kahLvolUtSoAN8L7ZE0lZ2UxFAjm9cQ9vRZI6SoDK8qAsTsIinTUMKVlivy8Va3afCAG0/92tQqVgozUMx1DhzG60ciFCgNGAmo9R5+vaP5oIRcH6BL2B6E9ahIBP3tcdnZfmZbJDDlSXiFFWD8uLzWSOEPC6jMqnTkjwRBPfy6iZb2sQwPPfJlwdqSzDCZw5MBHCjBQvJwg8K523JaXwnhFA4cUKqv+OAPOJtfmIBJZKyH9Px/dD4z+Ri0Rg80m8pIzSQzBq+aWVUd/IAIGM1jQqGDLChjSyzY8SeMLLiJygoa1hzEE2KDa7MAAiScx7dWVphjbBrh7kIhUvTMAS0WabrlNTkIzXfmiU7omARYFJ0XpCz2DX4vC8XNHwHrWfiTdUtaISMgB+I/4WHe7mCNSnPS672CdkvQRY1M/rdGm0mrqUKl3WXxR0nzcyBOoDOISIRIaErzqpi4IMAaJQz/uUWeb9HuMA7+9To+eFv/bIEqh7A7/3JHXtgFDN3+WdJQR2kYh4cRj43jK6ywGMGXRmf1k7R6IGT9LSwDL5c4FnaQRYI0piOPhRBCIkVgE/ksAcCZ75K8PFsvFaHiEhv94uOfnnQ8GPjoABnSLBHQ+Ho3TCrlFG5xqXP0Ok63yrM46WUL2fXcH3/gezhfv387UJhIFkX7wikPXcqO82H4FzWpK4MUkaxYYAAAAASUVORK5CYII="

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAr1JREFUaEPtmYFNHDEQRT8VBCpIOoBUkKSChAqACoAKklSQpIIkFQAVABUAFQAVhFQQ9CKPNLK86/XKrH3SjrS62z2v/b/nz3js29KG29aG49dKoLUHVw/07IE9SWeS3mRAHkn61YrImITuJ4A33DuSnlqQGCPwrwDQvqTzgvbVmo4RuJW0G0ZKtfsu6Tj8/lXSl2qoCjoaI3Al6V3oKyWRTyFGaHIt6X3BuNWajhHwM/xBEoS8EdzECYb+Ibm4jRFAEp8DolNJEIoN4K/Cw7eSkN2iNkbAS+RCEvexeZk1SadjBFgHbjISaR7IuVLCZ6I4VR5K+ulc0p0HwHYi6VsA+VsSoLEY/JDEXjwech7YlvTHoSDTEAt+5u9CCu1uJTbcrLAfww3ffTA3BQ+mnAdo47ORl0Rz8FMJ0O5B0muHvgvwJQRiLzRZtFIZYYqE7D2/aPGd8qK5lRDwtQ/Ah8qLRUmVEACYr49Im0iJ+GhmpQRYF1idLaCbS6mUADPtayTu2Q9TRjSxOQRSpUSXO7LcjPp4oG2XxVyOBPI5cI3mkCC70QdJga1p0aZoroQ8MV9y85wK9keOefidfTRnTyQHbyQHLvqG1GChWIMAgzOYnWBMDWySwWUCfIr7oGdrELABYzlBik1QavZi8NRWtOO57bE9kcFDg5oE4oWOewZm9vyhVwz+MQA3osQEbbjsUIG+klhrE0ilWJ7hDYggNy+bv2EzNBS4/nRwMQK22DHrvgS3GbaAzYGnn2YEGBygZCQvA6/r1GFZHMBNCRgYNE2A2zGlPccjeInfSJUp64KAAWNTxDmSl5UnY3mfT+RFXHRFwBPhWMYOCiauectloamAiBGIcPlFMPU+qTb5T9FLpNGpBHw7cr7lf4hxzyfEAI/8kqm2FwJzSP9/ZyUwe+oqvbh6oNJEzu5m4z3wDEWBgjEEzB+7AAAAAElFTkSuQmCC"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommercialBar_vue_vue_type_style_index_0_id_fc05a3c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommercialBar_vue_vue_type_style_index_0_id_fc05a3c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommercialBar_vue_vue_type_style_index_0_id_fc05a3c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommercialBar_vue_vue_type_style_index_0_id_fc05a3c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommercialBar_vue_vue_type_style_index_0_id_fc05a3c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-fc05a3c8],.container_address[data-v-fc05a3c8]{height:44px;max-width:100%;background-color:#faf6f2;display:flex}.container_address[data-v-fc05a3c8]{margin-left:50px;align-items:center;justify-content:center}.img_address[data-v-fc05a3c8]{height:19px;width:19px}.container_phone[data-v-fc05a3c8]{margin-left:50px;height:44px;max-width:100%;background-color:#faf6f2;display:flex;align-items:center;justify-content:center}.img_phone[data-v-fc05a3c8]{height:20px;width:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_05c2dbbc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_05c2dbbc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_05c2dbbc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_05c2dbbc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_05c2dbbc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "button[data-v-05c2dbbc]{width:139px;height:56px;border-radius:25px;background-color:#6aff8b}li[data-v-05c2dbbc]{padding:14px}.container[data-v-05c2dbbc]{font-family:\"Ubuntu\",sans-serif;background-color:#fff;display:flex;align-items:center;justify-content:space-between}.container_left[data-v-05c2dbbc]{margin-left:200px}.container_left[data-v-05c2dbbc],.container_right[data-v-05c2dbbc]{height:144px;width:100%;background-color:#fff;display:flex;align-items:center}.container_right[data-v-05c2dbbc]{margin:15px}.logo[data-v-05c2dbbc]{font-family:\"Ubuntu\",sans-serif}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommercialBar.vue?vue&type=template&id=fc05a3c8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"container_address\" data-v-fc05a3c8><img" + _vm._ssrAttr("src", __webpack_require__(25)) + " class=\"img_address\" data-v-fc05a3c8> <p data-v-fc05a3c8>3 Rue Claude Chappe, 14000 Caen</p></div> <div class=\"container_phone\" data-v-fc05a3c8><img" + _vm._ssrAttr("src", __webpack_require__(26)) + " class=\"img_phone\" data-v-fc05a3c8> <p data-v-fc05a3c8>06 63 83 99 37</p></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CommercialBar.vue?vue&type=template&id=fc05a3c8&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CommercialBar.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fc05a3c8",
  "1bb57235"
  
)

/* harmony default export */ var CommercialBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=05c2dbbc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bg-white"
  }, [_vm._ssrNode("<nav class=\"container px-4 py-4 mx-auto md:flex md:justify-between md:items-center\" data-v-05c2dbbc>", "</nav>", [_vm._ssrNode("<div class=\"flex items-center justify-between\" data-v-05c2dbbc>", "</div>", [_c('NuxtLink', {
    staticClass: "w-2/3 font-bold fonted",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": ""
    }
  }), _vm._v(" Damien Doussot")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0\" data-v-05c2dbbc>", "</ul>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_c('li', {
    staticClass: "text-black hover:text-indigo-400"
  }, [_vm._v("Accueil")])]), _vm._ssrNode(" "), _c('NuxtLink', {
    attrs: {
      "to": "/WhoPage"
    }
  }, [_c('li', {
    staticClass: "text-black hover:text-indigo-400"
  }, [_vm._v("Qui suis je?")])]), _vm._ssrNode(" "), _c('NuxtLink', {
    attrs: {
      "to": "/AccompagnementPage"
    }
  }, [_c('li', {
    staticClass: "text-black hover:text-indigo-400"
  }, [_vm._v("Accompagnement")])]), _vm._ssrNode(" "), _c('NuxtLink', {
    attrs: {
      "to": "/TarifsPage"
    }
  }, [_c('li', {
    staticClass: "text-black hover:text-indigo-400"
  }, [_vm._v(" Tarifs")])]), _vm._ssrNode(" "), _c('NuxtLink', {
    attrs: {
      "to": "/ContactPage"
    }
  }, [_c('li', {
    staticClass: "text-black hover:text-indigo-400"
  }, [_vm._v("Contact")])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=05c2dbbc&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavBar.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05c2dbbc",
  "1c505154"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("765f7cb8", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TarifsPage_vue_vue_type_style_index_0_id_1ed74db0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TarifsPage_vue_vue_type_style_index_0_id_1ed74db0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TarifsPage_vue_vue_type_style_index_0_id_1ed74db0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TarifsPage_vue_vue_type_style_index_0_id_1ed74db0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TarifsPage_vue_vue_type_style_index_0_id_1ed74db0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-1ed74db0]{display:flex;align-items:center;justify-content:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/TarifsPage.vue?vue&type=template&id=1ed74db0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('CommercialBar'), _vm._ssrNode(" "), _c('NavBar'), _vm._ssrNode(" <div data-v-1ed74db0><div class=\"w-screen h-screen flex justify-center\" data-v-1ed74db0><div class=\"w-7/12 h-7/12\" data-v-1ed74db0><h1 class=\"text-center\" data-v-1ed74db0>Tarifs</h1> <br data-v-1ed74db0> <p data-v-1ed74db0> Séance individuelle (1h) <br data-v-1ed74db0><br data-v-1ed74db0>\nAdultes, adolescents\t\t\t\t65 €  <br data-v-1ed74db0><br data-v-1ed74db0>\nÉtudiants, demandeurs d’emploi\t\t50 € \t\t\t <br data-v-1ed74db0><br data-v-1ed74db0>\nSéance de respiration individuelle (1h30)\t90 €\t\t\t <br data-v-1ed74db0><br data-v-1ed74db0>\nSéance de couple (1h30)\t\t\t90 €\t\t<br data-v-1ed74db0><br data-v-1ed74db0></p> <p class=\"text-justify\" data-v-1ed74db0>\n    Les consultations ne sont pas remboursées par la sécurité sociale, cependant certaines assurances de complémentaire santé peuvent proposer une prise en charge. <br data-v-1ed74db0><br data-v-1ed74db0>\n\nL’aspect financier ne doit pas être un obstacle, vous pouvez me contacter pour que nous trouvions ensemble des solutions. <br data-v-1ed74db0>\n\nPossibilité de règlement par chèque, espèces ou carte bancaire. <br data-v-1ed74db0><br data-v-1ed74db0>\n\nJ’attire votre attention sur le fait qu’aucune des prestations proposées dans le cadre de mon accompagnement ne vous dispense d’une visite chez votre médecin. <br data-v-1ed74db0>\nSi vous suivez un traitement médical, il doit impérativement être poursuivi. <br data-v-1ed74db0>\nLes prestations proposées viennent en complément et peuvent faciliter l’action de vos traitements médicaux ou de votre accompagnement psychologique. Elles ne peuvent en aucun cas les remplacer.\n    <br data-v-1ed74db0> <br data-v-1ed74db0> <br data-v-1ed74db0></p> <p class=\"text-center\" data-v-1ed74db0><a href=\"https://calendly.com/damien-doussot-therapeute\" class=\"text-center py-2 px-4 md:py-4 md:px-6 mr-2 select-none hover:bg-gray-700 bg-[#111827] rounded shadow-lg text-white\" data-v-1ed74db0>Prendre un RDV</a></p></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/TarifsPage.vue?vue&type=template&id=1ed74db0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/TarifsPage.vue?vue&type=script&lang=js&
/* harmony default export */ var TarifsPagevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/TarifsPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_TarifsPagevue_type_script_lang_js_ = (TarifsPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/TarifsPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_TarifsPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ed74db0",
  "0ccfaf50"
  
)

/* harmony default export */ var TarifsPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommercialBar: __webpack_require__(31).default,NavBar: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=TarifsPage.js.map