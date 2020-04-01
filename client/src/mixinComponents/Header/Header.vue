<template>
    <div id="header">
        <div v-if="isLogin" class="username">Hello1 {{userInfo.username}}</div>
        <div v-else>Hello</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Header",
    computed: mapState({
        userInfo: state => state.account && state.account.userInfo || {},
        isLogin: state => {
            console.log(this)
            return state.account && state.account.userInfo.username
        }
    }),

    methods: {
        // onSubmit: function(e) {
        //   this.$store.dispatch("accounts/signIn", { ...this.formData })
        // }
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function(el) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped>
  #header{
    background: #f0f0f0;
    line-height: 60px;
    height: 60px;
  }
  .username{
    /* line-height: 60px; */
  }
</style>
