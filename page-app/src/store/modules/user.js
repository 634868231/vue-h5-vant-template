import { login } from '@/api/user'

// state
const state = {
  token: '',
}

// mutations
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

// actions
const actions = {
  /**
   * 用户登录
   * @param {*} commit 
   * @param {*} loginForm 
   */
  login({ commit }, loginForm) {
    const { username, password } = loginForm

    return new Promise((resolve, reject) => {
      login({
        username: username,
        password: password
      }).then(res => {
        // 登录成功的操作
        commit('SET_TOKEN', 123)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// export
export default {
  namespaced: true,
  state,
  mutations,
  actions
}