<template>
  <div>
    <welcome />
    <skills />
    <about />
    <!-- <counters /> -->
    <credits />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import welcome from './welcome.vue'
// import counters from './counters.vue'
import credits from '../../../components/credits.vue'
import skills from './skills.vue'
import about from './about.vue'

export default defineComponent({
  name: 'home',
  components: {
    welcome,
    // counters,
    credits,
    skills,
    about
  }
})
</script>
