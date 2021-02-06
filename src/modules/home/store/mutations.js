import * as types from './mutation-types'

export default {

    [types.SET_SERVICES] (state, payload) {
        state.services = payload
    },

    [types.SET_SERVICE] (state, payload) {
        state.service = payload
    }

}
