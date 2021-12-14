import { routes as home } from '../modules/home'

export default [
  {
    path: '/',
    component: () => import('layouts/publicLayout.vue'),
    children: [
      ...home
    ]
  },
  // {
  //   path: '/dashboard',
  //   component: () => import('layouts/restricted.vue'),
  //   children: [
  //   ]
  // }
]
