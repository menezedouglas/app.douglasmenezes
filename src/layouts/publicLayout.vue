<template>
  <q-layout view="hHh lpR fFf" class="bg-xiketic">
    <q-header :elevated="!$q.platform.is.mobile" class="bg-xiketic text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="toolbar-title q-ml-md q-pt-sm">
          DMES Desenvolvimento de Software
        </q-toolbar-title>

        <sidebar v-if="!$q.platform.is.mobile" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      v-if="$q.platform.is.mobile"
      elevated
      class="bg-xiketic text-white"
      height-hint="98"
    >
      <sidebar />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { sidebar } from "../modules/menu";

export default defineComponent({
  name: "publicLayout",
  components: {
    sidebar,
  },
});
</script>

<style scoped>
.toolbar-title {
  font-size: 16px;
  color: #ffffff99;
  font-weight: 100;
  text-transform: uppercase;
}

</style>
