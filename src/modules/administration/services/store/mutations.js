import * as types from './mutation-types'

export default {
  [types.SET_TABLE] ({ table }, payload) {
    table = payload
  },
  [types.SET_TABLE_COLS] ({ table }, payload) {
    table.cols = payload
  },
  [types.SET_TABLE_ROWS] ({ table }, payload) {
    table.rows = payload
  },
  [types.SET_TABLE_SELECTED] ({ table }, payload) {
    table.selected = payload
  },
  [types.SET_TABLE_FILTER] ({ table }, payload) {
    table.filter = payload
  },
  [types.SET_FORM] ({ form }, payload) {
    form = payload
  },
  [types.SET_FORM_SERVICE_ID] ({ form }, payload) {
    form.service_id = payload
  },
  [types.SET_FORM_NAME] ({ form }, payload) {
    form.name = payload
  },
  [types.SET_FORM_DESCRIPTION] ({ form }, payload) {
    form.description = payload
  },
  [types.SET_FORM_DELIVERY_TIME] ({ form }, payload) {
    form.delivery_time = payload
  },
  [types.SET_FORM_VALUE] ({ form }, payload) {
    form.value = payload
  },
  [types.SET_FORM_TYPE_VALUE] ({ form }, payload) {
    form.value = payload
  },
  [types.SET_FORM_TYPE_SERVICE_STATE] ({ form }, payload) {
    form.type_service_state = payload
  }
}
