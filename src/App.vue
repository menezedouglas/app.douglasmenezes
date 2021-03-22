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
import { component as MainMenu } from '@/modules/components/main_menu'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      mainMenu: {
        items: [
          {
            name: 'Início',
            url: '/',
            active: true
          }
          // {
          //   name: 'Início',
          //   url: '/',
          //   active: true
          // },
          // {
          //   name: 'Início',
          //   url: '/',
          //   active: true
          // },
          // {
          //   name: 'Início',
          //   url: '/',
          //   active: true
          // }
        ],
        socialsNetworks: [
          {
            icon: 'fab fa-github',
            url: 'https://github.com/menezedouglas'
          },
          {
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/douglas-menezes-526a45148/'
          },
          {
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/menezedouglas/'
          }
        ]
      }
    }
  },
  components: {
    MainMenu
  },
  methods: {
    ...mapActions('mainMenu', ['ActionSetItems', 'ActionSetSocialsNetworks']),
    closeSideBar: () => {
      const ctrl_sidebar = document.querySelector('#menu_control')
      if(ctrl_sidebar.checked)
        ctrl_sidebar.checked = !ctrl_sidebar.checked
    }
  },
  created () {
    this.ActionSetItems(this.mainMenu.items)
    this.ActionSetSocialsNetworks(this.mainMenu.socialsNetworks)
  }
}
</script>
