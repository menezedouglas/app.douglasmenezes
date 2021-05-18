<template>
    <q-layout view="hHr lpR fFr">
        <q-header elevated class="app-header">
            <q-toolbar>
                <q-toolbar-title>
                  <q-avatar square class="logo">
                    <img src="logo.png">
                  </q-avatar>
                </q-toolbar-title>

            </q-toolbar>
        </q-header>

      <q-drawer
        v-model="rightDrawerOpen"
        side="right"
        overlay
        behavior="mobile"
        elevated
      >
            <q-list>
                <q-item-label
                    header
                    class="text-grey-8"
                >
                    Essential Links
                </q-item-label>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
    {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev'
    },
    {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework'
    },
    {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev'
    },
    {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
    },
    {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
    },
    {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev'
    },
    {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev'
    }
]

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
        return {
          rightDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>
