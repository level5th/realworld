import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4befae01 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _ae9b1d14 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6dd405b2 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _221031b2 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _9d93d58c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _4020d444 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _08da74ff = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4befae01,
    children: [{
      path: "",
      component: _ae9b1d14,
      name: "home"
    }, {
      path: "/login",
      component: _6dd405b2,
      name: "login"
    }, {
      path: "/register",
      component: _6dd405b2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _221031b2,
      name: "profile"
    }, {
      path: "/settings",
      component: _9d93d58c,
      name: "settings"
    }, {
      path: "/editor",
      component: _4020d444,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _08da74ff,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
