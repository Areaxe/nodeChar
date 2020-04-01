import Vue from 'vue'
import Vuex from 'vuex'
import account from '../store/modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
