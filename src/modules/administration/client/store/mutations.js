import * as types from './mutation-types'

export default {
    [types.SET_CLIENTS] (state, payload) {
        state.clients = payload
    },
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    }
}
