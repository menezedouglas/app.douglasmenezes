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
    <router-view/>
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
  created () {

  }
}
</script>
