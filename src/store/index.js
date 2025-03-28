import Vue from 'vue'
import Vuex from 'vuex'

import services from '../services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sports: [],
        gyms: [],
        gymsRetrieved: false
    },
    mutations: {
        retrieveSports: async (state) => {
            const sportsData = await services.getSports()
            sportsData.map(data => state.sports.push(data))
        },
        retrieveGyms: async (state) => {
            try {
                const gymData = await services.getGyms()
                Object.values(gymData).forEach((gym) => state.gyms.push(gym))
            } catch(error) {
                state.gyms = []
            }
            state.gymsRetrieved = true
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
