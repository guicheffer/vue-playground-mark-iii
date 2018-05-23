import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Alisson from './pages/Alisson.vue'
import Home from './pages/Home.vue'
import Listing from './pages/Listing.vue'

export function createRouter() {
  Vue.use(Router)
  Vue.use(Meta, { keyName: 'meta' })

  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/alisson',
        name: 'alisson',
        component: Alisson
      },
      {
        path: '/(imovel|imoveis-lancamento)/:listing+',
        name: 'listing',
        component: Listing
      },
    ]
  })
}
