import Vue from 'vue'
const server = 'http://10.1.1.91:3001'
export default {
  getUserInfo: function () {
    const url = `${server}/userInfo`
    return Vue.axios.get(url)
  },
  signIn: function (data) {
    const url = `${server}/signIn`
    return Vue.axios.post(url, data)
  },
  signUp: function (data) {
    const url = `${server}/register`
    return Vue.axios.post(url, data)
  },
  signOut: function (data) {
    const url = `${server}/session`
    return Vue.axios.delete(url)
  },
}
