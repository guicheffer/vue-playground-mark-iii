<template>
  <div>
    <img src="../assets/logo.png">
    <h1>Alisson {{ adjective }}!</h1>
    <button v-on:click="changeAdjective">Clica aqui p/ a verdade!</button>
    <p><router-link to="/imovel/apartamento-2-quartos-recreio-dos-bandeirantes-zona-oeste-rio-de-janeiro-com-garagem-80m2-aluguel-RS1600-id-94371754/">imovelzinho de exemplinho</router-link></p>
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
