import * as types from './mutation-types'

export const setLoading = ({ commit }, payload) => {
  commit(types.SET_LOADING, payload)
}
export const setTable = ({ commit }, payload) => {
  commit(types.SET_TABLE, payload)
}
export const setTableCols = ({ commit }, payload) => {
  commit(types.SET_TABLE_COLS, payload)
}
export const setTableRows = ({ commit }, payload) => {
  commit(types.SET_TABLE_ROWS, payload)
}
export const setTableFilter = ({ commit }, payload) => {
  commit(types.SET_TABLE_FILTER, payload)
}
export const setTableSelected = ({ commit }, payload) => {
  commit(types.SET_TABLE_SELECTED, payload)
}
export const setForm = ({ commit }, payload) => {
  commit(types.SET_FORM, payload)
}
export const setFormEditMode = ({ commit }, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}
export const setFormDialog = ({ commit }, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
}
export const setFormReceiptId = ({ commit }, payload) => {
  commit(types.SET_FORM_RECEIPT_ID, payload)
}
export const setFormContractId = ({ commit }, payload) => {
  commit(types.SET_FORM_CONTRACT_ID, payload)
}
export const setFormReferenceMonth = ({ commit }, payload) => {
  commit(types.SET_FORM_REFERENCE_MONTH, payload)
}
export const setFormValue = ({ commit }, payload) => {
  commit(types.SET_FORM_VALUE, payload)
}
export const setFormShelfLife = ({ commit }, payload) => {
  commit(types.SET_FORM_SHELF_LIFE, payload)
}
export const setFormUrlToDownload = ({ commit }, payload) => {
  commit(types.SET_FORM_URL_TO_DOWNLOAD, payload)
}
