<template>
    <div v-if="heatmap !== null">
        <b-row v-for="number in numbers" :key="number">
            <b-col>{{ (6 + number) + '.00' }}</b-col>
            <b-col v-for="day in weekLength" :key="day">{{ displayVisit(heatmap[day - 1][number + 1]) }}</b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    props: {
        heatmap: Array
    },
    data () {
        return {
            numbers: Array.from(Array(17).keys())
        }
    },
    methods: {
        displayVisit (slot) {
			const [, visits] = slot.split("-")
			if (visits === undefined) return 'Closed'
			return visits
		}
    },
    computed: {
        weekLength: function () {
			return this.heatmap.length
		}
    }
}
</script>