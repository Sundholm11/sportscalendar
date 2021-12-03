<template>
	<div>
		<h1>Gyms</h1>
		<b-container v-if="gyms.length !== 0">
			<b-dropdown split dropright variant="outline-dark" split-variant="outline-dark">
				<template v-slot:button-content>
					Displaying visits: {{ selectedGym }}
				</template>
				<b-dropdown-item
                    v-for="(gymName, index) in gymNames"
                    :key="gymName" :disabled="gyms.length === 0"
                    @click="setSelectedGym(gymName, index)">
                        {{ gymName }}
                </b-dropdown-item>
			</b-dropdown>
		</b-container>
		<hr id="bigdivider"/>
		<b-container id="gymstable" v-if="gyms.length !== 0">
			<b-row>
				<b-col>Time</b-col>
				<b-col>Mon</b-col>
				<b-col>Tue</b-col>
				<b-col>Wed</b-col>
				<b-col>Thu</b-col>
				<b-col>Fri</b-col>
				<b-col>Sat</b-col>
				<b-col>Sun</b-col>
			</b-row>
			<hr />
            <GymTable :heatmap="initialSelectedGym" />
		</b-container>
		<div v-else>
			<h5>Loading gyms...</h5>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

import GymTable from '../components/GymTable'

export default {
	data () {
		return {
            selectedGym: 'Aurum',
            selectedGymIndex: 0,
			selectedHeatmap: null,
			gymNames: ['Aurum', 'Educarium', 'Formis', 'Roddis', 'Ruiskatu']
		}
	},
    components: {
        GymTable
    },
	methods: {
		setSelectedGym (gym, index) {
			this.selectedGym = gym
			this.selectedGymIndex = index
        }
    },
	computed: {
		...mapState([
			'gyms'
        ]),
        initialSelectedGym: function () {
            if (this.gyms.length === 0) return null
            return this.gyms[this.selectedGymIndex]
        }
	}
}
</script>

<style scoped>
#bigdivider {
	width: 80%;
}

#gymstable {
	padding-bottom: 50px;
}

@media only screen and (max-width: 770px) {
    #gymstable {
        width: 100%;
        font-size: x-small;
    }

    .col {
        padding: 0;
    }
}
</style>