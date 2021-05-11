import { createApp, h } from 'vue';
import { axios } from './http'
import App from './App.vue'
import router from './router'
import store from './store'
import helpers from './helpers'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

import AOS from 'aos'
import "aos/dist/aos.css"

window.helpers = helpers

export const app = createApp({
  axios,
  render: () => h(App),
  created () {
    AOS.init()
  }
}).use(router).use(store).mount('#app')
