import * as types from './mutation-types'

export default {
    [types.SET_MESSAGES] (state, payload) {
        state.messages = payload
    }
}
