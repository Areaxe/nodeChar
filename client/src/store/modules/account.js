// initial state
import account from '@/api/account'
const state = {
  userInfo: {}
}

// getters
const getters = {}

// actions
const actions = {
  getUserInfo({ commit }) {
    account.getUserInfo().then((result)=>{
      commit('setUserInfo', result.data)
    });
  },

  signIn({ commit, dispatch }, info, callback) {
    account.signIn(info).then(result => {
      commit('setUserInfo', result.data);
      // dispatch('getUserInfo');
    }).catch(err => {
      console.log(err)
    })
  },

  signUp({ commit, dispatch }, info, callback) {
    account.signUp(info).then(result => {
      commit('setUserInfo', result.data);
      // dispatch('getUserInfo');
    }).catch(err => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
