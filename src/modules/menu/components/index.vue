<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">
      <q-item
        clickable
        v-ripple
        v-for="(page, index) in getKeys(pages)"
        :key="index"
        @click="to(page, index)"
      >
        <q-item-section>
          {{ pages[page].label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import {defineComponent} from 'vue'
import * as homeStorage from '../../home/storage'

export default defineComponent({
  name: "index",
  computed: {
    quantityPages: {
      set (val) {
        this.$store.dispatch('menu/setQuantityPages', val)
      },
      get () {
        return this.$store.getters['menu/getQuantityPages']
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
    containerSize: {
      set (val) {
        this.$store.dispatch('menu/setContainerSize', val)
      },
      get () {
        return this.$store.getters['menu/getContainerSize']
      }
    },
    pages: {
      set (val) {
        this.$store.dispatch('menu/setPages', val)
      },
      get () {
        return this.$store.getters['menu/getPages']
      }
    }
  },
  methods: {
    getKeys (data) {
      return Object.keys(data)
    },
    to (page, index) {
      // const adjust = (index === 0 || index === 4) ? 1 : 1
      // console.log(this.pages[page], this.scrollWidth, this.containerSize)
      // const percentage = (
      //   this.pages[page].from * 1 / (this.scrollWidth - this.containerSize)
      // ).toFixed(4)
      // console.log({percentage})
      this.$store.dispatch('home/setGoto', index * this.containerSize)
    },
    loadPages () {
      const sizePerPage = this.containerSize
      const pages = {}
      Object.keys(this.pages).map((page, index) => {
        pages[page] = {label: this.pages[page].label, from: 0, to: 0}
        pages[page].from = sizePerPage * index
        pages[page].to = sizePerPage * (index + 1)
      })
      this.pages = pages
    }
  },
  created() {
    setTimeout(() => {
      this.loadPages()
    }, 100)
  }
})
</script>

<style scoped>

</style>
