import { routes as home } from '../modules/public/home'
import { routes as projects } from '../modules/public/projetos'
import { routes as login } from '../modules/auth/login'
import { routes as dashboard } from '../modules/administration/dashboard'
import { routes as users } from '../modules/administration/user'
import { routes as client } from '../modules/administration/client'

import publicLayout from '../layouts/public.vue'
import restrictedLayout from '../layouts/restricted.vue'

export default [
    {
        path: '/',
        component: publicLayout,
        children: [
            ...home,
            ...projects,
            ...login
        ]
    },
    {
        path: '/dashboard',
        component: restrictedLayout,
        children: [
            ...dashboard,
            ...users,
            ...client
        ]
    }
]
