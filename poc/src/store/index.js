import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      adjective: 'lindão',
      propertyData: {},
      seo: {}
    },
    mutations: {
      setAdjective: (state, newAdjective) => {
        Vue.set(state, 'adjective', newAdjective)
      },
      setPropertyData: (state, newPropertyData) => {
        Vue.set(state, 'propertyData', newPropertyData)
      },
      setSeo: (state, newSeo) => {
        Vue.set(state, 'seo', newSeo)
      },
    },
  })
}
