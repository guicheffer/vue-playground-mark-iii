import axios from 'axios'

export default {
  asyncData: ({ store, route }) => {
    return axios.get(
      `https://glue-api.vivareal.com/v1/page${route.path}`,
      {
        headers: {
          'x-domain': 'www.vivareal.com.br',
        }
      }
    ).then(response => {
      store.commit('setPropertyData', response.data.data)
    })

    console.log('ROUTE', route)
    return Promise.resolve(store.commit('setTitle', 'Bem vindo ALISSON LINDAO!!!'))
  },
  title () {
    return this.$store.state.title
  },
  methods: {
    changeAdjective () {
      return Promise.resolve(this.$store.commit('setAdjective', 'gostosão'))
    }
  },
  computed: {
    adjective () {
      return this.$store.state.adjective
    },
    seo () {
      return this.$store.state.propertyData.seo
    },
    recommendations () {
      return this.$store.state.propertyData.recommendations[0].recommendations
    }
  }
}
