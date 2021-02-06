import Vue from 'vue'
import bootstrap from '@/modules/bootstrap'
// import http from '@/http'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'
import "aos/dist/aos.css"

Vue.config.productionTip = false

new Vue({
  bootstrap,
  router,
  store,
  // http,
  render: h => h(App),
  created () {
    AOS.init()
  }
}).$mount('#app')
