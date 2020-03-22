<template>
  <div>
    <b-row id="secondaryRow" v-for="number in numbers" :key="number">
      <b-col id="timeCol">{{ (7 + number) + '.00 - ' + (8 + number) + '.00' }}</b-col>
      <b-col id="sportsCol">{{ handleOne(sports[0][0][0], number) }}</b-col>
      <b-col id="sportsCol">{{ handleOne(sports[0][1][0], number) }}</b-col>
      <b-col id="sportsCol">{{ handleOne(sports[0][2][0], number) }}</b-col>
      <b-col id="sportsCol">{{ handleOne(sports[0][3][0], number) }}</b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      numbers: Array.from(Array(16).keys())
    }
  },
  methods: {
    handleOne (sport, index) {
      if (sport[index].length === 0) return ''
      return sport[index][0]
    }
  },
  computed: {
    ...mapState([
      'sports'
    ])
  }
}
</script>

<style scoped>
#secondaryRow {
  margin-bottom: 1px;
}

#timeCol {
  padding: 12px;
}

#sportsCol {
  padding: 12px;
  border-bottom: 1px solid rgb(223,223,223);
  cursor: pointer;
}
</style>