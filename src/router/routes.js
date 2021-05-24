import { routes as home } from '../modules/public/home'
import { routes as projects } from '../modules/public/projetos'
import { routes as login } from '../modules/auth/login'
import { routes as dashboard } from '../modules/administration/dashboard'
import { routes as users } from '../modules/administration/user'
import { routes as client } from '../modules/administration/client'
import { routes as contract } from '../modules/administration/contract'
import { routes as service } from '../modules/administration/services'
import { routes as notations } from '../modules/administration/notation'

export default [
  {
    path: '/',
    component: () => import('layouts/public.vue'),
    children: [
      ...home,
      ...projects,
      ...login
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/restricted.vue'),
    children: [
      ...dashboard,
      ...users,
      ...client,
      ...contract,
      ...service,
      ...notations
    ]
  }
]
