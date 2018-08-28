import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations: {
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo
    }
  },

  plugins: [persistedstate({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key)
    }
  })]
})

export default store
