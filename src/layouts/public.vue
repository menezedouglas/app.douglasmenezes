<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square class="logo">
            <img src="logo.png">
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          flat
          size="20pt"
          icon="fas fa-bars"
          @click="mainMenu = !mainMenu"
        />
      </q-toolbar>
    </q-header>
    <main-menu/>
    <q-page-container class="content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {component as mainMenu} from '../modules/components/main_menu'


export default {
  name: 'MainLayout',
  components: {
    mainMenu
  },
  computed: {
    mainMenu: {
      set (val) {
        this.$store.dispatch('mainMenu/ActionSetOpen', val)
      },
      get () {
        return this.$store.getters['mainMenu/getOpen']
      }
    }
  }
}
</script>
