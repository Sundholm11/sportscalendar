import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Gym from '../views/Gym.vue'
import Sport from '../views/Sport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gyms',
    name: 'Gyms',
    component: Gym
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sport
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
