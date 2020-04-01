<template>
  <div class="hello">
    Home
    <router-link to="/sign_in">Sign In</router-link>
   </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return { msg: 'Welcome to Your Home' }
  },
  created () {
    this.$store.dispatch('account/getUserInfo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
