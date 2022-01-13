import { routes as home } from '../modules/home'
import { routes as contact } from '../modules/contact'

export default [
  {
    path: '/',
    component: () => import('layouts/publicLayout.vue'),
    children: [
      ...home,
      ...contact
    ]
  },
  // {
  //   path: '/dashboard',
  //   component: () => import('layouts/restricted.vue'),
  //   children: [
  //   ]
  // }
]
