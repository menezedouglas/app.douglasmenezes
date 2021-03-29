import * as types from './mutation-types'

export const ActionSetItems = ({ commit }, payload) => {
    commit(types.SET_ITEMS, payload)
}

export const ActionUpdateActiveItem = ({ getters, commit }) => {
    const payload = getters.getItems

    payload.map(item => {
        item.active = (`#${item.url}` === location.hash)
    })

    commit(types.SET_ITEMS, payload)
}

export const ActionSetSocialsNetworks = ({ commit }, payload) => {
    commit(types.SET_SOCIALS_NETWORKS, payload)
}
