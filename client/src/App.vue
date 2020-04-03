<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/mixinComponents/Header/Header";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    AppHeader
  },
  created() {
    if (!this.isLogin) {
      this.$store.dispatch("account/getUserInfo", (err, data) => {
        console.log("0000000");
        if (!err) {
          localStorage.setItem("islogin", true);
        }
      });
    }
  },
  computed: mapState({
    isLogin: state => state.account && state.account.userInfo.name
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
