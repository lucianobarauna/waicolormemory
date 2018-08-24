import Vue from 'vue'
import Vuex from 'vuex'
import waicolormemory from './waicolormemory'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    waicolormemory
  }
})
