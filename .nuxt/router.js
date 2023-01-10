import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f84729c = () => interopDefault(import('../pages/AccompagnementPage.vue' /* webpackChunkName: "pages/AccompagnementPage" */))
const _13d6b370 = () => interopDefault(import('../pages/ContactPage.vue' /* webpackChunkName: "pages/ContactPage" */))
const _39d3c474 = () => interopDefault(import('../pages/MentionLegal.vue' /* webpackChunkName: "pages/MentionLegal" */))
const _667f3977 = () => interopDefault(import('../pages/TarifsPage.vue' /* webpackChunkName: "pages/TarifsPage" */))
const _2b522866 = () => interopDefault(import('../pages/WhoPage.vue' /* webpackChunkName: "pages/WhoPage" */))
const _62cd27ab = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AccompagnementPage",
    component: _2f84729c,
    name: "AccompagnementPage"
  }, {
    path: "/ContactPage",
    component: _13d6b370,
    name: "ContactPage"
  }, {
    path: "/MentionLegal",
    component: _39d3c474,
    name: "MentionLegal"
  }, {
    path: "/TarifsPage",
    component: _667f3977,
    name: "TarifsPage"
  }, {
    path: "/WhoPage",
    component: _2b522866,
    name: "WhoPage"
  }, {
    path: "/",
    component: _62cd27ab,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
