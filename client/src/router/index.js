import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/SignIn/SignIn'
import SignUp from '@/pages/SignUp/SignUp'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // children: [

      // ],
      meta: {
        requireAuth: true
      }
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
