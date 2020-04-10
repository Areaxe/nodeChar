import Vue from 'vue'
// const server = 'http://10.1.1.24:3001'
export default {
  getUserInfo: function () {
    const url = `/api/userInfo`
    return Vue.axios.get(url)
  },
  signIn: function (data) {
    const url = `/api/signIn`
    return Vue.axios.post(url, data)
  },
  signUp: function (data) {
    const url = `/api/register`
    return Vue.axios.post(url, data)
  },
  signOut: function (data) {
    const url = `/api/session`
    return Vue.axios.delete(url)
  },
}
