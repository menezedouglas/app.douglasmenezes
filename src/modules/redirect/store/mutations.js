import * as types from './mutation-types'

export default {

    [types.SET_LINK] (state, payload) {
        state.links = payload
    }

}