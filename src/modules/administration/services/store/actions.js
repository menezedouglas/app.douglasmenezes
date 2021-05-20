import * as types from './mutation-types'

export const setTable = ({ commit }, payload) => {
  commit(types.SET_TABLE, payload)
}
export const setTableCols = ({ commit }, payload) => {
  commit(types.SET_TABLE_COLS, payload)
}
export const setTableRows = ({ commit }, payload) => {
  commit(types.SET_TABLE_ROWS, payload)
}
export const setTableSelected = ({ commit }, payload) => {
  commit(types.SET_TABLE_SELECTED, payload)
}
export const setTableFilter = ({ commit }, payload) => {
  commit(types.SET_TABLE_FILTER, payload)
}
export const setForm = ({ commit }, payload) => {
  commit(types.SET_FORM, payload)
}
export const setFormServiceId = ({ commit }, payload) => {
  commit(types.SET_FORM_SERVICE_ID, payload)
}
export const setFormName = ({ commit }, payload) => {
  commit(types.SET_FORM_NAME, payload)
}
export const setFormDescription = ({ commit }, payload) => {
  commit(types.SET_FORM_DESCRIPTION, payload)
}
export const setFormDeliveryTime = ({ commit }, payload) => {
  commit(types.SET_FORM_DELIVERY_TIME, payload)
}
export const setFormValue = ({ commit }, payload) => {
  commit(types.SET_FORM_VALUE, payload)
}
export const setFormTypeValue = ({ commit }, payload) => {
  commit(types.SET_FORM_TYPE_VALUE, payload)
}
export const setFormTypeServiceState = ({ commit }, payload) => {
  commit(types.SET_FORM_TYPE_SERVICE_STATE, payload)
}
