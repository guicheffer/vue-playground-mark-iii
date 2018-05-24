import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      propertyData: {},
      seo: {}
    },
    mutations: {
      setPropertyData: (state, newPropertyData) => {
        Vue.set(state, 'propertyData', newPropertyData)
      },
      setSeo: (state, newSeo) => {
        Vue.set(state, 'seo', newSeo)
      },
    },
  })
}
