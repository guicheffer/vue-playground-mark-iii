import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'

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
