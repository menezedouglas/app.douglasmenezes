<template>
  <q-tabs align="right" inline-label>
    <q-route-tab 
      v-for="({route, icon, label}, index) in pages"
      :key="index"
      :to="route"
      :label="isMobile() ? null : label"
      :icon="icon" 
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
    }
  }
});
</script>

<style scoped>
</style>
