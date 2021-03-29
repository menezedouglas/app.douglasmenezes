<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "index",
  methods: {
    ...mapActions('mainMenu', ['ActionUpdateActiveItem'])
  },
  created () {
    this.ActionUpdateActiveItem()
  }
}
</script>

<style scoped>

</style>
