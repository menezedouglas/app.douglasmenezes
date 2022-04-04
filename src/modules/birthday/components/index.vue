<template>
  <div class="container">
    <div class="one">
      <one />
      <two />
    </div>
    <three />
    <four />
    <five />
    <six />
    <seven />
    <eight />
    <nine />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'
import Five from './five'
import Six from './six'
import Seven from './seven'
import Eight from './eight'
import Nine from './nine'
import '../script/main.js'

export default defineComponent({
  name: 'birthday',
  components: {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine
  },
  mounted () {
    fetchData()
  }
})
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Work+Sans:300,400';
@import '../style/birthday.css';
</style>
