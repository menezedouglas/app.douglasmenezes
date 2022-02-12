import * as types from './mutation-types'

export const ActionSetItems = ({ commit }, payload) => {
    commit(types.SET_ITEMS, payload)
}

export const ActionSetId = ({ commit }, payload) => {
    commit(types.SET_ID, payload)
}
