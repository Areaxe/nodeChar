<template>
  <div class="item-link">
    <router-view />
    <span onclick>></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'item-with-link',
  props: {
    link: { type: String }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  text-align: center;
}
.sign-in,
.sign-up {
  display: inline-block;
  width: 30vw;
  height: 30vw;
  margin: 1rem;
  border-radius: 0.5rem;
  line-height: 30vw;
  background: lightcoral;
  color: #fff;
  text-decoration: none;
}
</style>
