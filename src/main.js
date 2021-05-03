import Vue from 'vue'
import bootstrap from '@/modules/bootstrap'
import http from '@/http'
import App from './App.vue'
import router from './router'
import store from './store'
import helpers from './helpers'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

import AOS from 'aos'
import "aos/dist/aos.css"

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION

window.helpers = helpers

new Vue({
  bootstrap,
  router,
  store,
  http,
  render: h => h(App),
  created () {
    AOS.init()
  }
}).$mount('#app')
