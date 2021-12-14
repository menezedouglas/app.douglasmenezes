<template>
  <q-layout view="hHr lpR fFf" class="app-bg">
    <q-btn
      dense
      flat
      size="30px"
      @click="toggleRightDrawer"
      :class="rightDrawerOpen ? `drawerBtn drawer-open` : `drawerBtn`"
      ref="drawerBtn"
    >
      <div class="menu_icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </q-btn>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "publicLayout",
  data () {
    return {
      rightDrawerOpen: ref(false)
    }
  },
  methods: {
    toggleRightDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen
    }
  },
  created() {
    this.$q.dark.set(true)
  }
})
</script>

<style scoped>
  .drawerBtn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
    transition: all .2s ease-in-out;
  }

  .menu_icon {
    width: 40px;
    height: 30px;
    z-index: 100;
    position: relative;
  }

  .menu_icon span:nth-child(1),
  .menu_icon span:nth-child(2),
  .menu_icon span:nth-child(3) {
    position: absolute;
    left: 50%;
    width: 100%;
    height: 5px;
    background: #ffffff;
    transition: all .2s ease-in-out;
  }

  .menu_icon span:nth-child(1) {
    top: 0 !important;
    transform: translateX(-50%);
  }

  .menu_icon span:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .menu_icon span:nth-child(3) {
    bottom: 0 !important;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1000px) {
    .drawer-open {
      transform: translateX(-300px);
    }

    .drawer-open .menu_icon span {
      left: 0 !important;
      top: calc(50% - 2px) !important;
      transform: translateY(-50%);
    }

    .drawer-open .menu_icon span:nth-child(1),
    .drawer-open .menu_icon span:nth-child(2) {
      transform: rotateZ(45deg);
    }

    .drawer-open .menu_icon span:nth-child(3) {
      transform: rotateZ(-45deg);
    }
  }

</style>
