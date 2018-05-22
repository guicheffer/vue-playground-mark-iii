import Vue from 'vue'
import Router from 'vue-router'

import Alisson from './pages/Alisson.vue'
import Home from './pages/Home.vue'
import Listing from './pages/Listing.vue'

export function createRouter() {
  Vue.use(Router)

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
        path: '/imovel/:listing+',
        name: 'listing',
        component: Listing
      },
    ]
  })
}
