<template>
  <div>
    <img src="../assets/logo.png">
    <h1>Alisson {{ adjective }}!</h1>
    <button v-on:click="changeAdjective">Clica aqui p/ a verdade!</button>
  </div>
</template>


<script>
export default {
  asyncData: ({ store }) => {
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
    }
  }
}
</script>
