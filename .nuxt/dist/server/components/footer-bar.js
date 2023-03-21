exports.ids = [5];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("22f938c7", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBar_vue_vue_type_style_index_0_id_5b1aebb8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBar_vue_vue_type_style_index_0_id_5b1aebb8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBar_vue_vue_type_style_index_0_id_5b1aebb8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBar_vue_vue_type_style_index_0_id_5b1aebb8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBar_vue_vue_type_style_index_0_id_5b1aebb8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-5b1aebb8]{color:dim-black}h2[data-v-5b1aebb8],h3[data-v-5b1aebb8]{color:#fff}h3[data-v-5b1aebb8]{font-size:50px}.wave-container[data-v-5b1aebb8]{position:relative;background-color:#000;color:#000;text-align:center;overflow:hidden}.footer[data-v-5b1aebb8]{margin-top:100px;float:left;width:100%;line-height:60px;height:400px;-webkit-clip-path:polygon(0 9%,100% 0,100% 100%,0 100%);clip-path:polygon(0 9%,100% 0,100% 100%,0 100%)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterBar.vue?vue&type=template&id=5b1aebb8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "bg-white"
  }, [_vm._ssrNode("<div class=\"max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8\" data-v-5b1aebb8>", "</div>", [_vm._ssrNode("<nav class=\"flex flex-wrap justify-center -mx-5 -my-2\" data-v-5b1aebb8>", "</nav>", [_vm._ssrNode("<div class=\"px-5 py-2\" data-v-5b1aebb8>", "</div>", [_c('NuxtLink', {
    staticClass: "text-base leading-6 text-gray-500 hover:text-gray-900",
    attrs: {
      "to": "/index"
    }
  }, [_vm._v("\n                    Accueil\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"px-5 py-2\" data-v-5b1aebb8>", "</div>", [_c('NuxtLink', {
    staticClass: "text-base leading-6 text-gray-500 hover:text-gray-900",
    attrs: {
      "to": "/WhoPage"
    }
  }, [_vm._v("\n                    Qui Suis Je ?\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"px-5 py-2\" data-v-5b1aebb8>", "</div>", [_c('NuxtLink', {
    staticClass: "text-base leading-6 text-gray-500 hover:text-gray-900",
    attrs: {
      "to": "/AccompagnementPage"
    }
  }, [_vm._v("\n                    Accompagnement\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"px-5 py-2\" data-v-5b1aebb8>", "</div>", [_c('NuxtLink', {
    staticClass: "text-base leading-6 text-gray-500 hover:text-gray-900",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n                    Tarifs \n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"px-5 py-2\" data-v-5b1aebb8>", "</div>", [_c('NuxtLink', {
    staticClass: "text-base leading-6 text-gray-500 hover:text-gray-900",
    attrs: {
      "to": "/ContactPage"
    }
  }, [_vm._v("\n                    Contact\n                ")])], 1)], 2), _vm._ssrNode(" <div class=\"flex justify-center mt-8 space-x-6\" data-v-5b1aebb8><a href=\"#\" class=\"text-gray-400 hover:text-gray-500\" data-v-5b1aebb8><span class=\"sr-only\" data-v-5b1aebb8>Facebook</span> <svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-6 h-6\" data-v-5b1aebb8><path fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z\" clip-rule=\"evenodd\" data-v-5b1aebb8></path></svg></a> <a href=\"#\" class=\"text-gray-400 hover:text-gray-500\" data-v-5b1aebb8><span class=\"sr-only\" data-v-5b1aebb8>Twitter</span> <svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-6 h-6\" data-v-5b1aebb8><path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\" data-v-5b1aebb8></path></svg></a></div> <p class=\"mt-8 text-base leading-6 text-center text-gray-400\" data-v-5b1aebb8>\n            Fait avec ❤️ en Normandie\n        </p>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FooterBar.vue?vue&type=template&id=5b1aebb8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterBar.vue?vue&type=script&lang=js&
/* harmony default export */ var FooterBarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/FooterBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterBarvue_type_script_lang_js_ = (FooterBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FooterBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b1aebb8",
  "5d553678"
  
)

/* harmony default export */ var FooterBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=footer-bar.js.map