<template>
  <b-col :class="[sportsBase, emptyName ? '' : activeClass]">{{ name }}</b-col>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      activeClass: 'sportsActive',
      sportsBase: 'sportsCol'
    }
  },
  computed: {
    emptyName: function () {
      if (this.name === '') return true
      return false
    }
  }
}
</script>

<style scoped>
.sportsCol {
  padding: 12px;
  border-bottom: 1px solid rgb(223,223,223);
}

.sportsActive {
  cursor: pointer;
}
</style>