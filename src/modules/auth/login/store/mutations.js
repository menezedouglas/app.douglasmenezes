import * as types from './mutation-types'

export default {
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    },
    [types.SET_AUTHORIZATION] (state, payload) {
        state.authorization = payload
    },
    [types.SET_USER_ID] (state, payload) {
        state.user_id = payload
    }
}
