// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import promise from 'es6-promise'

axios.defaults.withCredentials = true
promise.polyfill()

router.beforeEach((to, from, next) => {
  let islogin = localStorage.getItem('isLogin')

  if (to.path === '/sign_in') {
    next()
  } else {
    if (to.meta.requireAuth) {
      if (islogin) {
        next()
      } else {
        next('/sign_in')
      }
    } else {
      next()
    }
  }
})

Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
