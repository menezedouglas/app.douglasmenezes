import {boot} from 'quasar/wrappers'
// import { useMeta } from 'quasar'

const publicRoutes = [
  '/',
  '/login',
  '/projects'
]

const authenticatedRoutes = [
  '/dashboard',
  '/users',
  '/clients',
  '/contracts',
  '/service'
]

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app, router, store}) => {
  router.beforeEach(async (to) => {
    document.title = `${to.name} - Douglas Menezes`
    if (
      publicRoutes.indexOf(to.path) < 0 &&
      authenticatedRoutes.indexOf(to.path) >= 0 &&
      await store.getters['login/hasAuthorization']
    ) {
      if (await store.getters['login/hasAuthorization']) {
        return true
      } else {
        return '/login'
      }
    } else {
      if (publicRoutes.indexOf(to.path) < 0 && authenticatedRoutes.indexOf(to.path) < 0) {
        return '/'
      } else {
        if (await store.getters['login/hasAuthorization']) {
          if (to.path === '/login') {
            return '/dashboard'
          }
        } else {
          if (publicRoutes.indexOf(to.path) >= 0) {
            return true
          } else {
            if (authenticatedRoutes.indexOf(to.path) >= 0) {
              return '/login'
            } else {
              return '/'
            }
          }
        }
      }
    }
  })
})
