import * as types from './mutation-types'

export default {
    [types.SET_CODES] (state, payload) {
        state.codes = payload
    },
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    }
}
