<template>
  <div class="home">
    <div class="text-center">
      <img src="../assets/logo.png">
      <h1>{{msg}}</h1>
      <p class="lead">
        This is the Home page for your new app, defined in <code>src/components/Home.vue</code>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
