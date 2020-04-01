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
      console.log(result.data);
      commit('setUserInfo', result.data)
    });
  },

  signIn({ commit }, info, callback) {
    account.signIn(info).then(result => {
      commit('setUserInfo', result.data)
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
