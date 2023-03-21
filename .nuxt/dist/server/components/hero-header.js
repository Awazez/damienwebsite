exports.ids = [6];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("075b025e", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeader_vue_vue_type_style_index_0_id_26048075_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeader_vue_vue_type_style_index_0_id_26048075_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeader_vue_vue_type_style_index_0_id_26048075_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeader_vue_vue_type_style_index_0_id_26048075_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeader_vue_vue_type_style_index_0_id_26048075_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(50);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wave-container[data-v-26048075]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");position:relative;background-size:cover;color:#000;text-align:center;overflow:hidden}h1[data-v-26048075]{font-family:\"Lato\",sans-serif;color:#000;font-size:3em;font-weight:700}p[data-v-26048075]{font-size:1.5rem;margin:0 1.25rem 5rem}span[data-v-26048075]{display:inline-block}.box[data-v-26048075]{width:200px;height:50px;background:#ccc;margin:0 auto;text-align:center;line-height:50px}.clip-path[data-v-26048075]{width:100%;min-height:600px;-webkit-clip-path:polygon(0 0,100% 0,100% 92%,0 100%);clip-path:polygon(0 0,100% 0,100% 92%,0 100%)}.hero_title[data-v-26048075]{font-family:\"Raleway\",sans-serif;font-size:50px;color:#fff}.fadeInUp[data-v-26048075]{animation:fadeInUp-26048075 .5s ease backwards;margin-left:8px}@keyframes fadeInUp-26048075{0%{transform:translateY(30px);opacity:0}to{transform:translate(0);opacity:1}}@media only screen and (max-width:768px){.hero_title[data-v-26048075]{font-size:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_couple.74ae071.jpg";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroHeader.vue?vue&type=template&id=26048075&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "px-4 bg-bermuda text-center wave-container clip-path"
  }, [_vm._ssrNode("<div class=\"pb-12 mt-36\" data-v-26048075>", "</div>", [_vm._ssrNode("<div class=\"hero_title\" data-v-26048075><span class=\"fadeInUp\" style=\"animation-delay:0.1s;\" data-v-26048075>Pour </span> <span class=\"fadeInUp\" style=\"animation-delay:0.2s;\" data-v-26048075>retrouver</span> <span class=\"fadeInUp\" style=\"animation-delay:0.3s;\" data-v-26048075>un</span></div> <div class=\"hero_title\" data-v-26048075><span class=\"fadeInUp\" style=\"animation-delay:0.4s;\" data-v-26048075>plaisir </span> <span class=\"fadeInUp\" style=\"animation-delay:0.5s;\" data-v-26048075>partagé  </span></div> "), _vm._ssrNode("<div class=\"mb-36 mt-12 fadeInUp\" style=\"animation-delay:1.1s;\" data-v-26048075>", "</div>", [_vm._ssrNode("<a href=\"https://calendly.com/damien-doussot-therapeute\" class=\"py-2 px-4 md:py-4 md:px-6 mr-2 select-none hover:bg-gray-700 bg-[#111827] rounded shadow-lg text-white\" data-v-26048075>Prendre un RDV</a> "), _c('NuxtLink', {
    staticClass: "py-2 px-4 md:py-4 md:px-6 select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black",
    attrs: {
      "to": "/ContactPage"
    }
  }, [_vm._v("  Contact "), _c('span', [_vm._v("→")])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroHeader.vue?vue&type=template&id=26048075&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/HeroHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroHeadervue_type_script_lang_js_ = (HeroHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26048075",
  "31a7a1ea"
  
)

/* harmony default export */ var HeroHeader = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-header.js.map