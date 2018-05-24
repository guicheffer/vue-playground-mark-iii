<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  meta () {
    const {
      metaTitle: title,
      metaDescription: description,
    } = this.seo.metaContent || {
      metaTitle: 'Bem vindo ao Viva',
      metaDescription: 'Descrição do Site do Viva',
    }

    return {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description }
      ],
    }
  },

  computed: {
    seo () { return this.$store.state.seo },
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
