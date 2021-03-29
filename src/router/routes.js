import { routes as home } from '@/modules/pages/home'
import { routes as projects } from '@/modules/pages/projetos'
import { routes as login } from '@/modules/pages/login'

export default [
    ...home,
    ...projects,
    ...login,
]
