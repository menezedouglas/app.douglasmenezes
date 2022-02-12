<template>
  <div @click="ActionRedirectToLink(id)">
    <slot></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "redirect",
  props: ['to'],
  data () {
    return {
      id: null,
    }
  },
  methods: {
    ...mapActions('redirect', [
      'ActionSetLink',
      'ActionRedirectToLink'
    ]),
  },
  async created() {
    this.id = await this.ActionSetLink(this.to)
  }
}
</script>