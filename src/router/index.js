import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes'
import beforeEach from './beforeEach'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(beforeEach)

export default router
