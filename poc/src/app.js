import Vue from 'vue'
import App from './App.vue'

import titleMixin from './util/title'
import { createRouter } from './router'

// mixin for handling title
Vue.mixin(titleMixin)

export function createApp() {
  const router = createRouter()
  console.log('fooo')

  const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
  })

  return { app, router }
}
