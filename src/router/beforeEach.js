import store from '../store'

const publicRoutes = [
    '/',
    '/login',
    '/projects'
]

const authenticatedRoutes = [
    '/dashboard',
    '/users',
    '/client'
]

export default async (to) => {
    document.title = `${to.name} - Douglas Menezes`
    store.dispatch('mainMenu/ActionUpdateActiveItem')
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
                    if(authenticatedRoutes.indexOf(to.path) >= 0) {
                        return '/login'
                    } else {
                        return '/'
                    }
                }
            }
        }
    }
}
