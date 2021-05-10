import { routes as home } from '../modules/public/home'
import { routes as projects } from '../modules/public/projetos'
import { routes as login } from '../modules/auth/login'
import { routes as dashboard } from '../modules/administration/dashboard'
import { routes as users } from '../modules/administration/user'

export default [
    ...home,
    ...projects,
    ...login,
    ...dashboard,
    ...users
]
