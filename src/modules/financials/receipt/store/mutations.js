import * as types from './mutation-types'
export default {
  [types.SET_LOADING] (state, payload) {
    state.loading = payload
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
  [types.SET_FORM_EDIT_MODE] (state, payload) {
    state.formEditMode = payload
  },
  [types.SET_FORM_DIALOG] (state, payload) {
    state.formDialog = payload
  },
  [types.SET_FORM_RECEIPT_ID] (state, payload) {
    state.form.receipt_id = payload
  },
  [types.SET_FORM_CONTRACT_ID] (state, payload) {
    state.form.contract_id = payload
  },
  [types.SET_FORM_REFERENCE_MONTH] (state, payload) {
    state.form.reference_month = payload
  },
  [types.SET_FORM_VALUE] (state, payload) {
    state.form.value = payload
  },
  [types.SET_FORM_SHELF_LIFE] (state, payload) {
    state.form.shelf_life = payload
  },
  [types.SET_FORM_URL_TO_DOWNLOAD] (state, payload) {
    state.form.url_to_download = payload
  },
}
