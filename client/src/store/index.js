import Vue from 'vue'
import Vuex from 'vuex'

import services from '../services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sports: []
  },
  mutations: {
    retrieveSports: async (state) => {
      const sportsData = await services.getSports()
      console.log("Sportsdata", sportsData)
      state.sports.push(sportsData)
    }
  },
  actions: {
    getSports: ({ commit }) => {
      commit('retrieveSports')
    }
  },
  modules: {
  }
})
