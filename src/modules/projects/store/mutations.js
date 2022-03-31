import * as types from './mutation-types'

export default {
  [types.set_loading] (state, payload) {
    state.loading = payload
  },
  [types.set_projects] (state, payload) {
    state.projects = payload
  }
}
