exports.ids = [2,3];
exports.modules = {

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/caroussel/CarouselItem.vue?vue&type=template&id=0295cacd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "carousel-item"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.slide) + ">")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/caroussel/CarouselItem.vue?vue&type=template&id=0295cacd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/caroussel/CarouselItem.vue?vue&type=script&lang=js&
/* harmony default export */ var CarouselItemvue_type_script_lang_js_ = ({
  props: ["slide"]
});
// CONCATENATED MODULE: ./components/caroussel/CarouselItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var caroussel_CarouselItemvue_type_script_lang_js_ = (CarouselItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/caroussel/CarouselItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  caroussel_CarouselItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10d6d205"
  
)

/* harmony default export */ var CarouselItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/caroussel/Carousel.vue?vue&type=template&id=45dc0328&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "carousel"
  }, [_vm._ssrNode("<div class=\"carousel-inner\" data-v-45dc0328>", "</div>", _vm._l(_vm.slides, function (slide, index) {
    return _c('carousel-item', {
      key: index,
      attrs: {
        "slide": slide
      }
    });
  }), 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/caroussel/Carousel.vue?vue&type=template&id=45dc0328&scoped=true&

// EXTERNAL MODULE: ./components/caroussel/CarouselItem.vue + 4 modules
var CarouselItem = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/caroussel/Carousel.vue?vue&type=script&lang=js&

/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  components: {
    CarouselItem: CarouselItem["default"]
  }
});
// CONCATENATED MODULE: ./components/caroussel/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var caroussel_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/caroussel/Carousel.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  caroussel_Carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45dc0328",
  "1e5ea152"
  
)

/* harmony default export */ var Carousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=caroussel-carousel.js.map