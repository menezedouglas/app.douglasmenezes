import * as types from './mutation-types'

export default {
    [types.SET_ITEMS] (state, payload) {
        state.items = payload
    },
    [types.SET_SOCIALS_NETWORKS](state, payload) {
        state.socials_networks = payload
    }
}
