import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      title: 'ORIGINAL',
      adjective: 'lindão',
      propertyData: {}
    },
    mutations: {
      setTitle: (state, newTitle) => {
        Vue.set(state, 'title', newTitle)
      },
      setAdjective: (state, newAdjective) => {
        Vue.set(state, 'adjective', newAdjective)
      },
      setPropertyData: (state, newPropertyData) => {
        Vue.set(state, 'propertyData', newPropertyData)
      }
    }
  })
}
