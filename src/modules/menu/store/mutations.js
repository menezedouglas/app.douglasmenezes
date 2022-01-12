import * as types from './mutation-types'

export default {
  [types.SET_SCROLL_WIDTH] (state, payload) {
    state.scrollWidth = payload
  },
  [types.SET_QUANTITY_PAGES] (state, payload) {
    state.quantityPages = payload
  },
  [types.SET_PAGES] (state, payload) {
    state.pages = payload
  },
  [types.SET_CONTAINER_SIZE] (state, payload) {
    state.containerSize = payload
  }
}
