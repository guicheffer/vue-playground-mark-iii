<template>
  <div>
    <img src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/alisson">Alisson</router-link>
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
