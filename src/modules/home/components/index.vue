<template>
  <q-scroll-area style="width: 100vw; height: 100vh;scroll-behavior: smooth;" ref="viewScroll" @scroll="viewScroll">
    <welcome id="inicio" />
    <projects id="#repositorios" />
    <skills />
    <contact />
    <about />
  </q-scroll-area>
</template>

<script>
import { defineComponent } from 'vue'
import * as storage from './../storage'
import welcome from './welcome'
import projects from './repositories'
import skills from './skills'
import contact from './contact'
import about from './about'

export default defineComponent({
  name: "index",
  components: {
    welcome,
    projects,
    skills,
    contact,
    about
  },
  computed: {
    verticalScroll: {
      set (val) {
        this.$store.dispatch('home/setVerticalScroll', val)
      },
      get () {
        return this.$store.getters['home/getVerticalScroll']
      }
    },
    containerSize: {
      set (val) {
        this.$store.dispatch('menu/setContainerSize', val)
      },
      get () {
        return this.$store.getters['menu/getContainerSize']
      }
    },
    scrollWidth: {
      set (val) {
        this.$store.dispatch('menu/setScrollWidth', val)
      },
      get () {
        return this.$store.getters['menu/getScrollWidth']
      }
    },
    goTo: {
      set (val) {
        this.$store.dispatch('home/setGoto', val)
      },
      get () {
        return this.$store.getters['home/getGoto']
      }
    }
  },
  watch: {
    goTo (val) {
      this.$refs.viewScroll.setScrollPosition('vertical', val, 300)
    }
  },
  methods: {
    viewScroll ({verticalPosition, verticalSize}) {
      console.log(verticalPosition)
      // let scroll = this.verticalScroll
      // if(verticalPercentage) {
      //   if(verticalPercentage > scroll) {
      //     scroll = verticalPercentage
      //   } else {
      //     scroll -= verticalPercentage
      //   }
      //   storage.setVerticalScroll(scroll < 0.1000 ? 0 : scroll)
      //   this.verticalScroll = scroll
      // }
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollWidth = this.$refs.viewScroll.getScroll().verticalSize
      this.containerSize = this.$refs.viewScroll.getScroll().verticalContainerSize
    }, 1)
  }
})
</script>
