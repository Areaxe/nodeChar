<template>
  <div id="header">
    <div v-if="isLogin" class="username">
      Hello1 {{userInfo.name}}
      <span class="sign-out-icon" @click="signOut">Sign out</span>
    </div>
    <div v-else>
      Hello
      <span class="sign-in-icon" @click="toSignIn">Sign In</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState({
    userInfo: state => (state.account && state.account.userInfo) || {},
    isLogin: state => {
      return state.account && state.account.userInfo.name;
    }
  }),

  methods: {
    signOut: function(e) {
      this.$store.dispatch("account/signOut");
    },
    toSignIn: function(e) {
      this.$router.push("/sign_in");
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
#header {
  background: #f0f0f0;
  line-height: 60px;
  height: 60px;
}

.sign-out-icon,
.sign-in-icon {
  float: right;
  margin-right: 0.5rem;
}
</style>
