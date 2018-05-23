import axios from 'axios'

export default {
  asyncData: ({ store, route }) => {
    return axios.get(
      `https://glue-api.vivareal.com/v1/listing${route.path}?includeFields=seo,recommendations,listing`// ,
      // {
      //   headers: {
      //     'x-domain': 'www.vivareal.com.br',
      //   }
      // }
    ).then(response => {
      const data = response.data

      store.commit('setPropertyData', data)
      store.commit('setTitle', data.listing.title)
    })
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
    },
    listing () {
      return this.$store.state.propertyData.listing
    }
  }
}
