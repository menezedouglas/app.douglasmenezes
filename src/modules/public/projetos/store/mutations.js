import * as types from './mutation-types'


export default {
  [types.SET_PROJECTS] (state, payload) {
    state.projects = payload
  },
  [types.SET_LOADING] (state, payload) {
    state.loading = payload
  },
  [types.SET_FORM_EDIT_MODE] (state, payload) {
    state.formEditMode = payload
  },
  [types.SET_FORM_DIALOG] (state, payload) {
    state.formDialog = payload
  },
  [types.SET_TABLE] (state, payload) {
    state.table = payload
  },
  [types.SET_TABLE_COLS] (state, payload) {
    state.table.cols = payload
  },
  [types.SET_TABLE_ROWS] (state, payload) {
    state.table.rows = payload
  },
  [types.SET_TABLE_FILTER] (state, payload) {
    state.table.filter = payload
  },
  [types.SET_TABLE_SELECTED] (state, payload) {
    state.table.selected = payload
  },
  [types.SET_FORM] (state, payload) {
    state.form = payload
  },
  [types.SET_FORM_PROJECT_ID] (state, payload) {
    state.form.project_id = payload
  },
  [types.SET_FORM_NAME] (state, payload) {
    state.form.name = payload
  },
  [types.SET_FORM_DESCRIPTION] (state, payload) {
    state.form.description = payload
  },
  [types.SET_FORM_INIT] (state, payload) {
    state.form.init = payload
  },
  [types.SET_FORM_END] (state, payload) {
    state.form.end = payload
  },
  [types.SET_FORM_IS_OPEN_SOURCE] (state, payload) {
    state.form.is_open_source = payload
  }
}
