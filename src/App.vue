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
    <div @click="closeSideBar" id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { component as MainMenu } from './modules/components/main_menu'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      mainMenu: {
        itemsUnauthenticated: [
          {
            name: 'Início',
            url: '/',
            active: true
          },
          {
            name: 'Projetos',
            url: '/projects',
            active: false
          }
        ],
        itemsAuthenticated: [
          {
            name: 'Dashboard',
            url: '/dashboard',
            active: false
          },
          {
            name: 'Usuários',
            url: '/users',
            active: false
          }
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
  computed: {
    menuItems: {
      set (val) {
        this.ActionSetItems(val)
      },
      get () {
        return this.getItems()
      }
    },
    menuSocialNetworks: {
      set (val) {
        this.ActionSetSocialsNetworks(val)
      },
      get () {
        return this.getSocialsNetworks()
      }
    }
  },
  components: {
    MainMenu
  },
  methods: {
    ...mapGetters('login', ['hasAuthorization']),
    ...mapActions('mainMenu', ['ActionSetItems', 'ActionSetSocialsNetworks']),
    ...mapGetters('mainMenu', ['getItems', 'getSocialsNetworks']),
    ...mapActions('login', ['ActionCheckToken']),
    closeSideBar: () => {
      const ctrl_sidebar = document.querySelector('#menu_control')
      if(ctrl_sidebar.checked)
        ctrl_sidebar.checked = !ctrl_sidebar.checked
    }
  },
  created () {
    this.ActionCheckToken()
    if(this.hasAuthorization()) {
      this.menuItems = [
        ...this.mainMenu.itemsUnauthenticated,
        ...this.mainMenu.itemsAuthenticated
      ]
    } else {
      this.menuItems = this.mainMenu.itemsUnauthenticated
    }
    this.menuSocialNetworks = this.mainMenu.socialsNetworks
  }
}
</script>
