import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/SignIn/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn,
    },
  ],
})
