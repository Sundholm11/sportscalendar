<template>
  <div>
    <h1>Sports</h1>
    <b-container id="sportstable">
      <b-row id="mainRow">
        <b-col>Time</b-col>
        <b-col>Edu liikuntasali</b-col>
        <b-col>Edu voimistelusali</b-col>
        <b-col>Sport Sirkka</b-col>
        <b-col>Iskeri</b-col>
      </b-row>
      <template v-for="number in numbers">
        <b-row id="secondaryRow" :key="number">
          <b-col id="timeCol">{{ (7 + number) + '.00 - ' + (8 + number) + '.00' }}</b-col>
          <b-col id="sportsCol">{{ handleOne(sports[0][0][0], number) }}</b-col>
          <b-col id="sportsCol">{{ handleOne(sports[0][1][0], number) }}</b-col>
          <b-col id="sportsCol">{{ handleOne(sports[0][2][0], number) }}</b-col>
          <b-col id="sportsCol">{{ handleOne(sports[0][3][0], number) }}</b-col>
        </b-row>
      </template>
    </b-container>
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

#sportsCol {
  padding: 12px;
  border-bottom: 1px solid rgb(223,223,223);
  cursor: pointer;
}
</style>