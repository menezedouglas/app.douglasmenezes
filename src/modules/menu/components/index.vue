<template>
  <q-tabs align="right" inline-label>
    <q-route-tab
      v-for="({route, icon, label, redirect}, index) in pages"
      :key="index"
      :to="redirect ? null : route"
      :label="isMobile() ? null : label"
      :icon="icon"
      @click="redirect ? redirectTo(route) : null"
    />
  </q-tabs>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "menuList",
  computed: {
    pages: {
      set (val) {
        this.$store.dispatch('menu/setPages', val)
      },
      get () {
        return this.$store.getters['menu/getPages']
      }
    }
  },
  methods: {
    isMobile() {
      return this.$q.platform.is.mobile
    },
    redirectTo(route) {
      window.open(route, '_blank')
    }
  }
});
</script>

<style scoped>
</style>
