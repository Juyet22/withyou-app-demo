import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import getters from './getter'
import actions from './action'
import mutations from './mutation'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    user,
  },
  getters,
  actions,
  mutations,
})

export default store
