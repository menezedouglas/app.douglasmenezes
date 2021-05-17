<!--<template>-->
<!--  <div id="app">-->
<!--    <-->
<!--    <main-menu />-->
<!--    <div @click="closeSideBar" id="content">-->
<!--      <router-view />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                />

                <q-toolbar-title>
                    <section class="app-header">
                    <q-avatar square class="logo">
                        <img src="logo.png">
                    </q-avatar>
                    </section>
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>


        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
// import { component as MainMenu } from '../modules/components/main_menu'
import { mapActions } from 'vuex'
export default {
  name: 'public',
  components: {
    // MainMenu
  },
  methods: {
    ...mapActions('login', ['ActionCheckToken']),
    closeSideBar: () => {
      // eslint-disable-next-line camelcase
      const ctrl_sidebar = document.querySelector('#menu_control')
      if (ctrl_sidebar.checked) { ctrl_sidebar.checked = !ctrl_sidebar.checked }
    }
  },
  created () {
    this.ActionCheckToken()
  }
}
</script>
