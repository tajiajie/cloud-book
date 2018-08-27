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
  // actions: {
  //   // async login (store, login) {
  //   //   const data = await Vue.prototype.$axios.post('/login', login)
  //   //   if (data.code == 200) {
  //   //     Vue.prototype.$message.success('登陆成功')
  //   //     store.commit('SET_USERINFO', data.data)
  //   //     return true
  //   //   } else {
  //   //     Vue.prototype.$message.error(data.msg)
  //   //     return false
  //   //   }
  //   // }
  //   login (store, login) {
  //     this.$axios.post('/login', login).then(res => {
  //       console.log(res);
  //       if (res.code == 200) {
  //         this.$message.success('登陆成功')
  //         store.commit('SET_USERINFO', res.data)
  //         return true
  //       } else {
  //         this.$message.error(res.msg)
  //         return false
  //       }
  //     })
  //   }
  // },
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
