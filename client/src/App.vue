<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/mixinComponents/Header/Header'
import AppFooter from '@/mixinComponents/Footer/Footer'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    if (!this.isLogin) {
      this.$store.dispatch('account/getUserInfo', (err, data) => {
        if (!err) {
          localStorage.setItem('islogin', true)
        }
      })
    }
  },
  computed: mapState({
    isLogin: state => state.account && state.account.userInfo.name
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.mint-field-core {
  text-indent: 0.5rem;
}
</style>
