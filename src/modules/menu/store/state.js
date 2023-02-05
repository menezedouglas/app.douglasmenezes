import { ref } from 'vue'

export default {
    pages: ref([
        {
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
            label: 'Seja um Eagle',
            route: 'https://eagleair.com.br',
            redirect: true
        }
    ])
}
