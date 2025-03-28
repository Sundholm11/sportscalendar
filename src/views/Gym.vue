<template>
	<b-container>
		<h1>Gyms</h1>
		<b-container v-if="gyms.length !== 0">
			<b-dropdown dropright variant="outline-dark" split-variant="outline-dark">
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
        <b-container v-else-if="gymsRetrieved && gyms.length === 0">
            <hr />
            <h5>No data available</h5>
	    </b-container>
		<b-container v-else>
            <hr />
            <h5>Loading gyms...</h5>
	    </b-container>
	</b-container>
</template>

<script>
import { mapState } from 'vuex'

import GymTable from '../components/GymTable'

export default {
	data () {
		return {
            selectedGym: 'Educarium',
            selectedGymIndex: 0,
			selectedHeatmap: null,
			gymNames: ['Educarium', 'Formis', 'Roddis']
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
			'gyms',
            'gymsRetrieved'
        ]),
        initialSelectedGym: function () {
            if (this.gyms.length === 0) return null
            return this.gyms[this.selectedGymIndex]
        }
	}
}
</script>

<style scoped>
h1 {
    margin-top: 20px;
}

#gymstable {
    margin-top: 25px;
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