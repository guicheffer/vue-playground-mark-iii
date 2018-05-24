<template>
  <div>
    <img src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p><router-link to="/imovel/apartamento-2-quartos-recreio-dos-bandeirantes-zona-oeste-rio-de-janeiro-com-garagem-80m2-aluguel-RS1600-id-94371754/">imovel de exemplo</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return { msg: 'poc vue' }
  },
}
</script>
