<template>
  <div>
    <h1>Sports</h1>
    <b-container id="sportstable">
      <b-row id="mainRow">
        <b-col>Time</b-col>
        <b-col>Edu liikuntasali</b-col>
        <b-col>Edu voimistelusali</b-col>
        <b-col>Iskeri</b-col>
        <b-col>Sport Sirkka</b-col>
      </b-row>
      <template v-for="number in numbers">
        <b-row id="secondaryRow" :key="number">
          <b-col id="timeCol">{{ (6 + number) + '.00 - ' + (7 + number) + '.00' }}</b-col>
          <b-col id="sportsCol">1 of 4</b-col>
          <b-col id="sportsCol">2 of 4</b-col>
          <b-col id="sportsCol">3 of 4</b-col>
          <b-col id="sportsCol">4 of 4</b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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

#sportsCol {
  padding: 12px;
  border-bottom: 1px solid rgb(223,223,223);
  cursor: pointer;
}
</style>