exports.ids = [16,4,8];
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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3869a019", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 18.1a37349.png";

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhoPage_vue_vue_type_style_index_0_id_f2b03ef0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhoPage_vue_vue_type_style_index_0_id_f2b03ef0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhoPage_vue_vue_type_style_index_0_id_f2b03ef0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhoPage_vue_vue_type_style_index_0_id_f2b03ef0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhoPage_vue_vue_type_style_index_0_id_f2b03ef0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h2[data-v-f2b03ef0]{font-size:40px;font-weight:700}.container[data-v-f2b03ef0],h2[data-v-f2b03ef0]{display:flex;align-items:center;justify-content:center}.container[data-v-f2b03ef0]{width:auto;margin:auto}.container-left[data-v-f2b03ef0]{font-size:24px;width:600px;height:200px}.container-right[data-v-f2b03ef0]{margin-left:50px;font-size:24px;text-align:justify}.container-text[data-v-f2b03ef0]{padding-top:50px;width:100%;height:500px;font-size:35px;border:none;background-color:#111827;color:#fff;text-align:center}.container-title[data-v-f2b03ef0]{width:1000px;margin:auto}.container-perso[data-v-f2b03ef0]{width:1000px;height:1000px;padding:100px;background-color:#fff;margin:auto auto auto 50px;font-size:24px;text-align:justify}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/WhoPage.vue?vue&type=template&id=f2b03ef0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('CommercialBar'), _vm._ssrNode(" "), _c('NavBar'), _vm._ssrNode(" <section data-v-f2b03ef0><h2 data-v-f2b03ef0>Qui suis je ?</h2> <div class=\"container\" data-v-f2b03ef0><div class=\"container-left\" data-v-f2b03ef0><div data-v-f2b03ef0><img" + _vm._ssrAttr("src", __webpack_require__(80)) + " alt=\"office content 2\" data-v-f2b03ef0></div></div> <div class=\"container-right\" data-v-f2b03ef0><p data-v-f2b03ef0><br data-v-f2b03ef0><br data-v-f2b03ef0><br data-v-f2b03ef0><br data-v-f2b03ef0>\n                Dès mon plus jeune âge, j’ai eu besoin de comprendre et de mettre du sens sur le fonctionnement de la vie et des comportements humains. \n\n                <br data-v-f2b03ef0><br data-v-f2b03ef0> Suite à un parcours juridique dans de grandes entreprises, j’ai eu besoin de revenir à mes racines et retrouver du sens à ma vie. Je me suis alors intéressé au développement personnel, à la psychologie et ouvert à la spiritualité. <br data-v-f2b03ef0><br data-v-f2b03ef0>\n\nJ’ai entrepris un travail sur moi pour comprendre ma structuration, mes blocages et mes enjeux personnels. J’ai ainsi ouvert une porte merveilleuse sur mon monde intérieur pour me réaliser et je continue de cheminer chaque jour en ce sens.\n            </p></div></div> <br data-v-f2b03ef0><br data-v-f2b03ef0> <br data-v-f2b03ef0><br data-v-f2b03ef0> <div class=\"container-text\" data-v-f2b03ef0><div class=\"container-title\" data-v-f2b03ef0>\n        Passionné par le corps humain et son rapport à la psychologie, je me suis également formé à la sexothérapie afin de comprendre comment notre sexualité peut être le reflet de nos enjeux psychiques et permettre aux femmes et aux hommes d’aller connecter leur essence.\n\nAujourd’hui, je me consacre à ce qui me fait vraiment vibrer, vous accompagner à aller à la rencontre de votre monde intérieur afin que vous puissiez vous réaliser.\n    </div></div> <div class=\"container-perso\" data-v-f2b03ef0>\nPour aborder un domaine aussi intime et personnel que la sexualité et la vie de couple, vous avez besoin d’avoir confiance en votre thérapeute.\nLe sexothérapeute est soumis au secret professionnel, ce qui signifie que ce qui se dit dans le cabinet reste dans le cabinet. <br data-v-f2b03ef0><br data-v-f2b03ef0>\nLors des entretiens, le thérapeute s’abstient de formuler tout jugement quant aux confidences qui lui sont faites et accueille la personne dans son authenticité.\nPour les praticiens de la psychothérapie, le code de déontologie constitue un cadre de travail en énonçant plusieurs principes fondamentaux dans l’exercice de leur pratique.<br data-v-f2b03ef0><br data-v-f2b03ef0>\nIl se fonde sur 4 piliers:<br data-v-f2b03ef0>\n- respecter et favoriser l’autonomie de la personne qui consulte.<br data-v-f2b03ef0>\n- respecter la confidentialité des propos échangés.<br data-v-f2b03ef0>\n- développer les compétences du praticien, grâce à la formation initiale, en suivant une thérapie personnelle, en étant suivi dans sa pratique professionnelle (supervision) et en se formant en continu.<br data-v-f2b03ef0>\n- travailler en réseau afin d’orienter les personnes qui pourraient avoir besoin d’un suivi médical.​ <br data-v-f2b03ef0></div></section>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/WhoPage.vue?vue&type=template&id=f2b03ef0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/WhoPage.vue?vue&type=script&lang=js&
/* harmony default export */ var WhoPagevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/WhoPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_WhoPagevue_type_script_lang_js_ = (WhoPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/WhoPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_WhoPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f2b03ef0",
  "391c292d"
  
)

/* harmony default export */ var WhoPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommercialBar: __webpack_require__(31).default,NavBar: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=WhoPage.js.map