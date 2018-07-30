import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from './AppStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AppStore
  },
  strict: true,
  plugins: []
})
