import * as types from './mutation-types'

export default {
    [types.SET_ID] (state, payload) {
        state.id = payload
    },
    [types.SET_NAME] (state, payload) {
        state.name = payload
    },
    [types.SET_EMAIL] (state, payload) {
        state.email = payload
    },
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    },
    [types.SET_USERS] (state, payload) {
        state.users = payload
    },
    [types.SET_EDIT] (state, payload) {
        state.edit = payload
    }
}
