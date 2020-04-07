<template>
  <div class="flow-item">
    <div></div>
    <div>
      <p>{{info.title}}</p>
      <p>{{info.lastest.name+''+info.lastest.amount}}</p>
    </div>
    <div>
      <p>{{info.expense}}</p>
      <p>{{info.earn}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'flowItem',
  data() {
    return {}
  },
  props: {
    info: { type: Object, default: () => ({ lastest: {} }) }
  },
  created() {
    console.log(this)
  },
  computed: mapState({
    isLogin: state => state.account && state.account.userInfo.name
  })
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
