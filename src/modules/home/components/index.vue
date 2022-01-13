<template>
  <div>
    <welcome />
    <counters />
    <credits />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import welcome from './welcome.vue'
import counters from './counters.vue'
import credits from './credits.vue'

export default defineComponent({
  name: 'home',
  components: {
    welcome,
    counters,
    credits
  }
})
</script>
