<template>
	<div>
		<h1>Sports</h1>
		<b-container>
			<b-row class="justify-content-md-center d-flex align-items-center">
				<b-col md="auto"><b-button variant="outline-dark" size="sm" @click="changeDay(-1)">Previous day</b-button></b-col>
                <b-col md="auto">
                    <b-form-datepicker
                        size="sm"
                        locale="en"
                        v-bind:value-as-date="true"
                        :value='date'
                        @input='date = new Date($event)'
                        /></b-col>
				<b-col md="auto"><b-button variant="outline-dark" size="sm" @click="changeDay(1)">Next day</b-button></b-col>
			</b-row>
		</b-container>
		<SportsTable :day="date.getDay()" />
	</div>
</template>

<script>
import SportsTable from '../components/SportsTable'

export default {
	data () {
		return {
            date: new Date()
		}
	},
	components: {
		SportsTable
    },
	methods: {
		changeDay (amount) {
            this.date.setDate(this.date.getDate() + amount)
            this.date = new Date(this.date)
		}
	}
}
</script>