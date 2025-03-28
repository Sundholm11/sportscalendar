<template>
	<b-container id="sportstable" v-if="sports.length !== 0">
		<b-row id="mainRow">
			<b-col>Starting Time</b-col>
			<b-col>Edu liikuntasali</b-col>
			<b-col>Edu voimistelusali</b-col>
			<b-col>Sport Sirkka</b-col>
			<b-col>Iskeri</b-col>
		</b-row>
		<b-row id="secondaryRow" v-for="number in numbers" :key="number">
			<b-col id="timeCol">{{ (7 + number) + '.00'}}</b-col>
			<SportsClass v-for="plaza in sportsLength"
                :sport="displayClass(sports[plaza - 1][dataForDay], number)"
                :key="generateId(plaza, number)"
                :classId="generateId(plaza, number)"
            />
		</b-row>
	</b-container>
	<b-container v-else>
		<hr />
		<h5>Loading sports...</h5>
	</b-container>
</template>

<script>
import { mapState } from 'vuex'

import SportsClass from './SportsClass'

export default {
	props: {
		day: Number
	},
	data () {
		return {
			numbers: Array.from(Array(16).keys())
		}
	},
	components: {
		SportsClass
	},
	methods: {
		displayClass (sport, index) {
			if (sport[index] === undefined || sport[index].length === 0) return ['']
			return sport[index]
        },
        generateId (place, number) {
            return `${place}${number}`
        }
	},
	computed: {
		...mapState([
			'sports'
        ]),
        // Convert Sunday first to Sunday last
		dataForDay: function () {
			if (this.day > 0) {
				return this.day - 1
			} else {
				return 6
			}
		},
		sportsLength: function () {
			return this.sports.length
        }
	}
}
</script>

<style scoped>
#sportstable {
	margin-top: 40px;
	margin-bottom: 80px;
	border: 1px solid rgb(223,223,223);
	border-bottom: 0;
	border-radius: 7px;
}

#mainRow {
	background-color: rgb(243,243,243);
	border-bottom: 1px solid rgb(223,223,223);
	padding: 15px 0px;
}

#secondaryRow {
	margin-bottom: 1px;
}

#timeCol {
	padding: 12px;
}

@media only screen and (max-width: 700px) {
    #sportstable {
        width: 100%;
        font-size: x-small;
    }
}

@media only screen and (max-width: 400px) {
    #sportstable {
        font-size: xx-small;
    }
}
</style>