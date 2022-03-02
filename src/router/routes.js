import { routes as home } from '../modules/home'
import { routes as about } from '../modules/about'
// import { routes as contact } from '../modules/contact'
// import { routes as projects } from '../modules/projects'

export default [
  {
    path: '/',
    component: () => import('layouts/publicLayout.vue'),
    children: [
      ...home,
      ...about
      // ...contact,
      // ...projects
    ]
  },
  // {
  //   path: '/dashboard',
  //   component: () => import('layouts/restricted.vue'),
  //   children: [
  //   ]
  // }
]
