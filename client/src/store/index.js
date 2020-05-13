import Vue from 'vue'
import Vuex from 'vuex'

import services from '../services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sports: [],
    gyms: []
  },
  mutations: {
    retrieveSports: async (state) => {
      const sportsData = await services.getSports()
      sportsData.map(data => state.sports.push(data))
    },
    retrieveGyms: async (state) => {
      const gymData = await services.getGyms()
      gymData.map(data => state.gyms.push(data))
    }
  },
  actions: {
    getSports: ({ commit }) => {
      commit('retrieveSports')
    },
    getGyms: ({ commit }) => {
      commit('retrieveGyms')
    }
  },
  modules: {
  }
})
