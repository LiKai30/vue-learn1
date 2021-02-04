import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins:[
    saveInLocal,
  ]
})
