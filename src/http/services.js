import { services as home } from '../modules/public/home'
import { services as login } from '../modules/auth/login'
import { services as projects } from '../modules/public/projetos'
import { services as user } from '../modules/administration/user'
import { services as client } from '../modules/administration/client'

export default {
    home,
    login,
    projects,
    user,
    client
}
