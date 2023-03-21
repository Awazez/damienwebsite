export const ActuSection = () => import('../../components/ActuSection.vue' /* webpackChunkName: "components/actu-section" */).then(c => wrapFunctional(c.default || c))
export const CommercialBar = () => import('../../components/CommercialBar.vue' /* webpackChunkName: "components/commercial-bar" */).then(c => wrapFunctional(c.default || c))
export const FooterBar = () => import('../../components/FooterBar.vue' /* webpackChunkName: "components/footer-bar" */).then(c => wrapFunctional(c.default || c))
export const HeroHeader = () => import('../../components/HeroHeader.vue' /* webpackChunkName: "components/hero-header" */).then(c => wrapFunctional(c.default || c))
export const InstagramSection = () => import('../../components/InstagramSection.vue' /* webpackChunkName: "components/instagram-section" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const ThreePoint = () => import('../../components/ThreePoint.vue' /* webpackChunkName: "components/three-point" */).then(c => wrapFunctional(c.default || c))
export const UsersSection = () => import('../../components/UsersSection.vue' /* webpackChunkName: "components/users-section" */).then(c => wrapFunctional(c.default || c))
export const WhoIAm = () => import('../../components/WhoIAm.vue' /* webpackChunkName: "components/who-i-am" */).then(c => wrapFunctional(c.default || c))
export const CarousselCarousel = () => import('../../components/caroussel/Carousel.vue' /* webpackChunkName: "components/caroussel-carousel" */).then(c => wrapFunctional(c.default || c))
export const CarousselCarouselItem = () => import('../../components/caroussel/CarouselItem.vue' /* webpackChunkName: "components/caroussel-carousel-item" */).then(c => wrapFunctional(c.default || c))

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
