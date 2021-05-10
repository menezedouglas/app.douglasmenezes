import { store as home } from '../modules/public/home'
import { store as projects } from '../modules/public/projetos'
import { store as redirect } from '../modules/redirect'
import { store as mainMenu } from '../modules/components/main_menu'
import { store as accordion } from '../modules/components/accordion'
import { store as messages } from '../modules/components/messages'
import { store as login } from '../modules/auth/login'
import { store as user } from '../modules/administration/user'
import { store as dashboard } from '../modules/administration/dashboard'

export default {
    home,
    login,
    projects,
    redirect,
    mainMenu,
    accordion,
    messages,
    user,
    dashboard
}
