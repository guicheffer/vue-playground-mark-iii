import axios from 'axios'
import ImageContainer from '~/ImageContainer/ImageContainer.vue'

export default {
  asyncData: ({ store, route }) => {
    return axios.get(`https://glue-api.vivareal.com/v1/listing${route.path}?includeFields=seo,recommendations,listing`)
      .then(response => {
        const { data } = response
        const { seo } = data

        store.commit('setPropertyData', data)
        store.commit('setSeo', seo)
      })
  },

  computed: {
    listing () { return this.$store.state.propertyData.listing },
    recommendations () { return this.$store.state.propertyData.recommendations[0].recommendations },
  },

  components: { ImageContainer }
}
