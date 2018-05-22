<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>Alisson lindão!</h1>
  </div>
</template>


<script>
export default {
  title () {
    return this.$store.state.title
  }
}
</script>
