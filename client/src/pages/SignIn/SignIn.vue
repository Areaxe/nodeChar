<template>
  <div class="sign-in-page">
    <h2>User Login</h2>
    <mt-field label="Username" v-focus placeholder="Input username" v-model="formData.username"></mt-field>
    <mt-field
      label="Password"
      type="password"
      placeholder="Input password"
      v-model="formData.password"
    ></mt-field>
    <mt-button type="primary" @click="onSubmit">Submit</mt-button>
  </div>
</template>

<script>
// import { Field, Button } from 'mint-ui'
// import { mapState, mapActions } from 'vuex'
export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    onSubmit: function(e) {
      this.$store.dispatch('account/signIn', {
        data: this.formData,
        callback: (err, data) => {
          if (!err) {
            this.$router.push('/').catch(err => {
              console.log(err)
            })
            // this.$router.push({ path: '/' })
          }
        }
      })
    }
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
</style>
