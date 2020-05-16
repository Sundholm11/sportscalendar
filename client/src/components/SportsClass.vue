<template>
	<b-col
		@mouseover="hover = true"
		@mouseleave="hover = false"
		:class="[sportsBase, emptyName ? '' : [activeClass, cardColor]]">
		{{ name }}
	</b-col>
</template>

<script>
export default {
	props: {
		sport: Array
	},
	data () {
		return {
			hover: false,
			activeClass: 'sportsActive',
			sportsBase: 'sportsCol'
		}
	},
	computed: {
		name: function () {
			return this.sport[0]
		},
		emptyName: function () {
			if (this.name === '') return true
			return false
		},
		cardColor: function () {
			let color
			if (this.sport.length < 3) return ''
			switch (this.sport[3]) {
				case "t1":
				color = "sportsGray"
				break
				case "t2":
				color = "sportsGreen"
				break
				case "t3":
				color = "sportsRed"
				break
				case "t4":
				color = "sportsOrange"
				break
				case "t5":
				color = "sportsBlue"
				break
				case "t6":
				color = "sportsYellow"
				break
				case "t7":
				color = "sportsDarkGreen"
				break
				case "t9":
				color = "sportsDarkRed"
				break
			}
			return color
		}
	}
}
</script>

<style scoped>
.sportsCol {
	margin: 0 1px;
	padding: 12px 11px;
	border-bottom: 1px solid rgb(223,223,223);
}

.sportsActive {
	cursor: pointer;
	color: rgba(49, 64, 78, 1);
	background-color: rgba(var(--rgb), 0);
	border: solid 1px;
	border-radius: 5px;
	border-color: rgba(var(--rgb), 1);
	transition: background-color 0.5s, color 0.3s;
}

.sportsActive:hover {
	background-color: rgba(var(--rgb), 1);
	color: white;
}

.sportsGray { --rgb: 163, 163, 163; }

.sportsGreen { --rgb: 0, 175, 102; }

.sportsDarkGreen { --rgb: 0, 120, 41; }

.sportsYellow { --rgb: 255, 163, 0; }

.sportsBlue { --rgb: 0, 169, 224; }

.sportsRed { --rgb: 228, 78, 52; }

.sportsDarkRed { --rgb: 204, 24, 11; }

.sportsOrange { --rgb: 255, 104, 0; }
</style>