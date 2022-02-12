import * as types from './mutation-types'

export default {
  [types.SET_NOTATIONS] (state, payload) {
    state.notations = payload
  },

  [types.SET_LOADING] (state, payload) {
    state.loading = payload
  },

  [types.SET_FORM_DIALOG] (state, payload) {
    state.formDialog = payload
  },

  [types.SET_FORM_EDIT_MODE] (state, payload) {
    state.formEditMode = payload
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

  [types.SET_FORM_NOTATION_ID] (state, payload) {
    state.form.notation_id = payload
  },

  [types.SET_FORM_CONTRACT_ID] (state, payload) {
    state.form.contract_id = payload
  },

  [types.SET_FORM_TYPE_NOTATION] (state, payload) {
    state.form.type_notation = payload
  },

  [types.SET_FORM_REFERENCE] (state, payload) {
    state.form.reference = payload
  },

  [types.SET_FORM_ENTER] (state, payload) {
    state.form.enter = payload
  },

  [types.SET_FORM_LEAVE] (state, payload) {
    state.form.leave = payload
  },

  [types.SET_FORM_NOTE] (state, payload) {
    state.form.note = payload
  },

  [types.SET_DAY] (state, payload) {
    state.day = payload
  },

  [types.SET_DAY_NOW] (state, payload) {
    state.day.now = payload
  },

  [types.SET_DAY_CONTRACT] (state, payload) {
    state.day.contract = payload
  },

  [types.SET_DAY_NOTATIONS] (state, payload) {
    state.day.notations = payload
  },

  [types.SET_REPORT] (state, payload) {
    state.report = payload
  },

  [types.SET_REPORT_DATA] (state, payload) {
    state.report.data = payload
  },

  [types.SET_REPORT_DIALOG] (state, payload) {
    state.report.dialog = payload
  },

  [types.SET_REPORT_FORM] (state, payload) {
    state.report.form = payload
  },

  [types.SET_REPORT_FORM_CONTRACT_ID] (state, payload) {
    state.report.form.contract_id = payload
  },

  [types.SET_REPORT_FORM_MONTH] (state, payload) {
    state.report.form.month = payload
  },

  [types.SET_REPORT_FORM_YEAR] (state, payload) {
    state.report.form.year = payload
  }
}

