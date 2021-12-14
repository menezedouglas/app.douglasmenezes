import * as types from './mutation-types'

export default {
  [types.SET_LOADING] (state, payload) {
    state.loading = payload
  },
  [types.SET_PROJECTS] (state, payload) {
    state.projects = payload
  }
}
