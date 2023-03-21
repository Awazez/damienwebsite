exports.ids = [8];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=nav-bar.js.map