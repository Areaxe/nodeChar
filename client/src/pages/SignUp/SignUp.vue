<template>
  <div class="sign-in-page">
    <h2>User SignUp</h2>
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

export default {
  name: "SignUp",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    onSubmit: function(e) {
      this.$store.dispatch("account/signUp", { ...this.formData });
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
</style>
