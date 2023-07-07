import Vue from "vue"
import Vuex from "vuex"
// getters
import getters from './getters'
// modules
import user from './modules/user'
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
  },
  getters
})

// export store
export default store
