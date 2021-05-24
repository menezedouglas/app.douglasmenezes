import * as types from './mutation-types'

export const setProjects = ({ commit }, payload) => {
  commit(types.SET_PROJECTS, payload)
}

export const setLoading = ({ commit }, payload) => {
  commit(types.SET_LOADING, payload)
}

export const setFormEditMode = ({ commit }, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}

export const setFormDialog = ({ commit }, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
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

export const setFormProjectId = ({ commit }, payload) => {
  commit(types.SET_FORM_PROJECT_ID, payload)
}

export const setFormName = ({ commit }, payload) => {
  commit(types.SET_FORM_NAME, payload)
}

export const setFormDescription = ({ commit }, payload) => {
  commit(types.SET_FORM_DESCRIPTION, payload)
}

export const setFormInit = ({ commit }, payload) => {
  commit(types.SET_FORM_INIT, payload)
}

export const setFormIsOpenSource = ({ commit }, payload) => {
  commit(types.SET_FORM_IS_OPEN_SOURCE, payload)
}
