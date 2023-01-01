export { default as ActuSection } from '../../components/ActuSection.vue'
export { default as CommercialBar } from '../../components/CommercialBar.vue'
export { default as FooterBar } from '../../components/FooterBar.vue'
export { default as HeroHeader } from '../../components/HeroHeader.vue'
export { default as InstagramSection } from '../../components/InstagramSection.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as ThreePoint } from '../../components/ThreePoint.vue'
export { default as UsersSection } from '../../components/UsersSection.vue'
export { default as CarousselCarousel } from '../../components/caroussel/Carousel.vue'
export { default as CarousselCarouselItem } from '../../components/caroussel/CarouselItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
