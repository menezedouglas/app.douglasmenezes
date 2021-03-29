import * as types from './mutation-types'

export default {
    [types.SET_ITEMS] (state, payload) {
        state.items = payload
    },
    [types.SET_ID] (state, payload) {
        state.id = payload
    }
}
