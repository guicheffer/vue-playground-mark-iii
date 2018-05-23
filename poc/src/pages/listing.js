import axios from 'axios'

export default {
  asyncData: ({ store, route }) => {
    return axios.get(`https://glue-api.vivareal.com/v1/listing${route.path}?includeFields=seo,recommendations,listing`)
      .then(response => {
        const data = response.data

        store.commit('setPropertyData', data)
      })
  },
  meta () {
    return {
      title: this.title
    }
  },
  computed: {
    title () {
      return this.$store.state.propertyData.seo.metaContent.metaTitle
    },
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
