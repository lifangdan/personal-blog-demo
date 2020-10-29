import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    headerTitle:'',
  },
  mutations: {
    increment(state){
      state.count ++
    },
    SET_HEADER_TITLE: (state, headerTitle) => {
      state.headerTitle = headerTitle
    },
  },
  actions: {
    setHeaderTitle({ commit }, data) {
      commit('SET_HEADER_TITLE', data)
    },
    increment:({commit})=>{
      commit('increment')
    }
  },
  modules: {

  }
})
