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
      sportsData.map(data => state.sports.push(data))
      console.log("State after push: ", state.sports)
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
