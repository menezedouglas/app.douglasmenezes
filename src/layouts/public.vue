<template>
  <div id="app">
    <section class="app-header">
      <q-avatar square class="logo">
        <img src="logo.png">
      </q-avatar>
    </section>
    <main-menu />
    <div @click="closeSideBar" id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { component as MainMenu } from '../modules/components/main_menu'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components: {
    MainMenu
  },
  methods: {
    ...mapActions('login', ['ActionCheckToken']),
    closeSideBar: () => {
      const ctrl_sidebar = document.querySelector('#menu_control')
      if(ctrl_sidebar.checked)
        ctrl_sidebar.checked = !ctrl_sidebar.checked
    }
  },
  created () {
    this.ActionCheckToken()
  }
}
</script>
