import * as types from './mutation-types'

export const setScrollWidth = ({ commit }, payload) => commit(types.SET_SCROLL_WIDTH,payload)
export const setQuantityPages = ({ commit }, payload) => commit(types.SET_QUANTITY_PAGES,payload)
export const setPages = ({ commit }, payload) => commit(types.SET_PAGES,payload)
export const setContainerSize = ({commit}, payload) => commit(types.SET_CONTAINER_SIZE, payload)
