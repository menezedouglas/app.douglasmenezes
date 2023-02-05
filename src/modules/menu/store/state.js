import { ref } from 'vue'

export default {
    pages: ref([
        {
            icon: 'home',
            label: 'Início',
            route: '/'
        },
        // {
        //   icon: 'celebration',
        //   label: 'Aniversário',
        //   route: '/aniversario'
        // },
        // {
        //     icon: 'work',
        //     label: 'Projetos',
        //     route: '/projetos'
        // },
        {
            icon: 'login',
            label: 'Seja um Eagle',
            route: 'https://eagleair.com.br',
            redirect: true
        }
    ])
}
