<template>
  <b-col :class="[sportsBase, emptyName ? '' : [activeClass, cardColor]]">{{ name }}</b-col>
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
          color = "secondary"
          break
        case "t2":
          color = "success"
          break
        case "t3":
          color = "danger"
          break
        case "t4":
          color = "danger"
          break
        case "t5":
          color = "info"
          break
        case "t6":
          color = "warning"
          break
        case "t7":
          color = "primary"
          break
        }
      return `border rounded border-${color}`
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
}
</style>