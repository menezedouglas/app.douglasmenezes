import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://192.168.0.11:8000/system/v1'

http.interceptors.push(function(request) {
    request.headers.set('X-CSRF-TOKEN', process.env.VUE_APP_API_KEY)
})

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

const setToken = token => {
    http.headers.common['Authorization'] = token
}

export { http, setToken }
export default services

