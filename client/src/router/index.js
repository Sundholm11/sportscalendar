import Vue from 'vue'
import VueRouter from 'vue-router'

import Gym from '../views/Gym.vue'
import Sport from '../views/Sport.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Sports',
		component: Sport
	},
	{
		path: '/gyms',
		name: 'Gyms',
		component: Gym
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
