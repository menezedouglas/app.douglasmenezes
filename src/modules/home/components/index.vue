<template>
  <q-scroll-area style="width: 100vw; height: 100vh;">
    <welcome />
    <projects />
  </q-scroll-area>
</template>

<script>
import { defineComponent } from 'vue'
import welcome from './welcome'
import projects from './projects'

export default defineComponent({
  name: "index",
  components: {
    welcome,
    projects
  }
})
</script>
