<template>
  <div>
    <h1>Sports</h1>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="auto"><button @click="changeDay(-1)">Yesterday</button></b-col>
        <b-col md="auto"><p>Displaying: {{ selectedDate }}</p></b-col>
        <b-col md="auto"><button @click="changeDay(1)">Tomorrow</button></b-col>
      </b-row>
    </b-container>
    <b-container id="sportstable">
      <b-row id="mainRow">
        <b-col>Time</b-col>
        <b-col>Edu liikuntasali</b-col>
        <b-col>Edu voimistelusali</b-col>
        <b-col>Sport Sirkka</b-col>
        <b-col>Iskeri</b-col>
      </b-row>
      <SportsTable />
    </b-container>
  </div>
</template>

<script>
import SportsTable from '../components/SportsTable'

export default {
  data () {
    return {
      selectedDate: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.date),
      date: new Date()
    }
  },
  components: {
    SportsTable
  },
  methods: {
    changeDay (amount) {
      this.date.setDate(this.date.getDate() + amount)
      this.selectedDate = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.date)
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
</style>