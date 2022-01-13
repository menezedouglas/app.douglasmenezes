import { ref } from 'vue'

export default {
    pages: ref([
        {
            icon: 'home',
            label: 'Início',
            route: '/'
        },
        {
            icon: 'phone',
            label: 'Contate-me',
            route: '/contato'
        }
    ])
}
