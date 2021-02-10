<style>
  @import "styles/master.scss";
  @import "styles/desktop.scss";
  @import "styles/mobile.scss";
</style>

<template>
  <div id="app">
    <section class="app-header">
      <h2 class="title">
        Douglas Menezes
      </h2>
      <span class="subtitle">
          Desenvolvedor Web
      </span>
    </section>
    <main-menu />
    <div @click="closeSideBar">
      <router-view />
    </div>
  </div>
</template>

<script>
import { main_menu as MainMenu } from '@/modules/main_menu'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    MainMenu
  },
  methods: {
    closeSideBar: () => {
      const ctrl_sidebar = document.querySelector('#menu_control')
      if(ctrl_sidebar.checked)
        ctrl_sidebar.checked = !ctrl_sidebar.checked
    },
  },
  created () {

  }
}
</script>
