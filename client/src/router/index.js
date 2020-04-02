import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/SignIn/SignIn'
import SignUp from '@/pages/SignUp/SignUp'

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
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp,
    },
  ],
})
