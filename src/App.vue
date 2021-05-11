<style>
@import "styles/master.scss";
@import "styles/desktop.scss";
@import "styles/mobile.scss";
</style>

<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "app",
  methods: {
    ...mapActions('login', [
        'ActionCheckToken',
        'ActionLogOut'
    ])
  },
  async mounted() {
    try {
      await this.ActionCheckToken()
    } catch (e) {
      await this.ActionLogOut()
      await this.$router.push('/login')
    }
  }
}
</script>
