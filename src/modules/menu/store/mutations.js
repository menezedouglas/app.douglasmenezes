import * as types from './mutation-types'

export default {
    [types.set_pages] (state, payload) {
        state.pages = payload
    }
}
