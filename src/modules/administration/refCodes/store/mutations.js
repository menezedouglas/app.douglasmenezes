import * as types from './mutation-types'

export default {
    [types.SET_CODES] (state, payload) {
        state.codes = payload
    }
}