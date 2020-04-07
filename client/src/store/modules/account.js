// initial state
import account from '@/api/account'
import error from '@/config/toastError'
import { Toast } from 'mint-ui'

let { toastError } = error

const state = {
  userInfo: {}
}

// getters
const getters = {}

// actions
const actions = {
  getUserInfo({ commit }) {
    account.getUserInfo().then((result) => {
      localStorage.setItem('isLogin', true)
      commit('setUserInfo', result.data)
    }).catch(err => {
      let { data } = err.response || {}
      toastError(data, {})
    })
  },

  signIn({ commit, dispatch }, { data, callback }) {

    if (!checkUserInfo(data)) {
      return
    }

    account.signIn(data).then(result => {

      commit('setUserInfo', result.data)
      localStorage.setItem('isLogin', true)
      callback && callback(null, result.data)

    }).catch((err) => {
      let { data } = err.response || {}
      if (data.password === 'invalid') {
        Toast('Password invalid')
      }

      if (data.user === 'not_found') {
        Toast('User not found')
      }

      if (data.name === 'invalid') {
        Toast('Name invalid')
      }
      callback && callback(err.response || {})
    })
  },

  signUp({ commit, dispatch }, info, callback) {
    account.signUp(info).then(result => {
      commit('setUserInfo', result.data)
      localStorage.setItem('isLogin', true)
    }).catch((err) => {
      console.log(err)
    })
  },

  signOut({ commit, dispatch }, info, callback) {
    account.signOut(info).then(result => {
      commit('setUserInfo', {})
    }).catch((err) => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('isLogin', false)
  }
}

function checkUserInfo(data = {}) {
  if (!data.username) {
    Toast('Please type in username')
    return
  }
  if (!data.password) {
    Toast('Please type in password')
    return
  }
  return true
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
