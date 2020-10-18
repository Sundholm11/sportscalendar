<template>
    <div v-if="heatmap !== null">
        <b-row v-for="number in numbers" :key="number">
            <b-col :class="timeBase">{{ (6 + number) + '.00' }}</b-col>
            <b-col
                v-for="day in weekDays"
                :key="day"
                :class="[gymBase, activityColor(day - 1, number)]">
                {{ displayVisit(heatmap[day - 1][number]) }}
            </b-col>
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
            numbers: Array.from({ length: 17 }, (v, k) => k + 1),
            gymBase: 'gymDefault',
            timeBase: 'timeFrame'
        }
    },
    methods: {
        displayVisit (slot, number) {
			const [, visits] = slot.split("-")
			if (visits === undefined) return 'NaN'
			return visits
		},
        activityColor (day, number) {
            const [, visits] = this.heatmap[day][number].split("-")

            if (visits === undefined) return "gymInactive"

            const parsedVisit = parseInt(visits)
            const activityClass = []

            const visitColor = this.visitColorCheck(parsedVisit)
            activityClass.push(visitColor)

            if (this.neighbourSimilar(this.heatmap[day][number - 1], visitColor)) activityClass.push("borderActivityTop")
            if (this.neighbourSimilar(this.heatmap[day][number + 1], visitColor)) activityClass.push("borderActivityBot")

            return activityClass
        },
        neighbourSimilar (slot, comparison) {
            if (slot === undefined) return true

            const [, visits] = slot.split("-")
            const parsedVisits = parseInt(visits)

            if (this.visitColorCheck(parsedVisits) === comparison) return false

            return true
        },
        visitColorCheck (parsedVisit) {
            if (parsedVisit <= 4) return "gymGreen"
            if (parsedVisit <= 9) return "gymYellow"
            if (parsedVisit >= 10) return "gymRed"
        }
    },
    computed: {
        weekDays: function () {
			return this.heatmap.length
        }
    }
}
</script>

<style scoped>
.gymDefault {
	color: rgba(49, 64, 78, 1);
	background-color: rgba(var(--rgb), 0.3);
	border-right: solid 1px;
    border-left: solid 1px;
    border-color: rgba(var(--rgb), 1);
}

.borderActivityTop {
    border-top: solid 1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-color: rgba(var(--rgb), 1);
}

.borderActivityBot {
    border-bottom: solid 1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-color: rgba(var(--rgb), 1);
}

.gymInactive { --rgb: 255, 255, 255; }

.gymGreen { --rgb: 0, 175, 102; }

.gymYellow { --rgb: 255, 163, 0; }

.gymRed { --rgb: 228, 78, 52; }

@media only screen and (max-width: 770px) {
    .timeFrame {
        padding: 0;
    }
    .gymDefault {
        padding: 0;
    }
}
</style>