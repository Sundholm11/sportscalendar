<template>
  <div>
    <h1>Gyms</h1>
    <b-container>
      <b-dropdown split dropright variant="outline-dark" split-variant="outline-dark">
        <template v-slot:button-content>
          Displaying: {{ selectedGym }}
        </template>
        <b-dropdown-item v-for="(gymName, index) in gymNames" :key="gymName" :disabled="gyms.length === 0" @click="setSelectedGym(gymName, index)">{{ gymName }}</b-dropdown-item>
      </b-dropdown>
    </b-container>
    <hr id="bigdivider"/>
    <b-container v-if="gyms.length !== 0" variant="outline">
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
      <div v-if="selectedHeatmap !== null">
        <b-row v-for="number in numbers" :key="number">
          <b-col>{{ (6 + number) + '.00' }}</b-col>
          <b-col v-for="day in weekLength" :key="day">{{ displayVisit(selectedHeatmap[day - 1][number + 1]) }}</b-col>
        </b-row>
      </div>
    </b-container>
    <div v-else>
      <h5>Loading gyms...</h5>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectedGym: null,
      selectedHeatmap: null,
      gymNames: ['Asa', 'Educarium', 'Formis', 'Roddis', 'Ruiskatu'],
      numbers: Array.from(Array(17).keys())
    }
  },
  methods: {
    setSelectedGym (gym, index) {
      this.selectedGym = gym
      this.selectedHeatmap = this.gyms[index]
    },
    displayVisit (slot) {
      const [, visits] = slot.split("-")
      if (visits === undefined) return 'Closed'
      return visits
    }
  },
  computed: {
    ...mapState([
      'gyms'
    ]),
    weekLength: function () {
      return this.selectedHeatmap.length
    }
  }
}
</script>

<style scoped>
#bigdivider {
  width: 80%;
}
</style>