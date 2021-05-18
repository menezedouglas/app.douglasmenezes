import * as types from './mutation-types'

export default {
  [types.SET_ID](state, payload) {
    state.id = payload
  },
  [types.SET_NAME](state, payload) {
    state.name = payload
  },
  [types.SET_EMAIL](state, payload) {
    state.email = payload
  },
  [types.SET_LOADING](state, payload) {
    state.loading = payload
  },
  [types.SET_USERS](state, payload) {
    state.users = payload
  },
  [types.SET_EDIT](state, payload) {
    state.edit = payload
  },
  [types.SET_FORM_EDIT_MODE](state, payload) {
    state.formEditMode = payload
  },
  [types.SET_FORM] (state, payload) {
    state.form = payload
  },
  [types.SET_FORM_USER_ID] ({ form }, payload) {
    form.user_id = payload
  },
  [types.SET_FORM_NAME] ({ form }, payload) {
    form.name = payload
  },
  [types.SET_FORM_EMAIL] ({ form }, payload) {
    form.email = payload
  },
  [types.SET_FORM_PASSWORD] ({ form }, payload) {
    form.password = payload
  },
  [types.SET_FORM_DIALOG] (state, payload) {
    state.formDialog = payload
  }
}
