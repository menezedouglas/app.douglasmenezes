import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://douglasmenezes.dev.br/api/system/v1'

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

const setToken = token => {
    http.headers.common['Authorization'] = token
}

export { http, setToken }
export default services

