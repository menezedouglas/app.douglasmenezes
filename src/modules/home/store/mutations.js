import * as types from './mutation-types'

export default {
  [types.SET_LOADING] (state, payload) {
    state.loading = payload
  },
  [types.SET_PROJECTS] (state, payload) {
    state.projects = payload
  },
  [types.SET_VERTICAL_SCROLL] (state, payload) {
    state.verticalScroll = payload
  },
  [types.SET_GO_TO] (state, payload) {
    state.goTo = payload
  }
}
