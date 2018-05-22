import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

import titleMixin from './util/title'
import { createStore } from './store'
import { createRouter } from './router'

// mixin for handling title
Vue.mixin(titleMixin)

export function createApp() {
  const router = createRouter()
  const store = createStore()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  const app = new Vue({
    router,
    store,
    // el: '#app',
    render: h => h(App)
  })

  return { app, router, store }
}
