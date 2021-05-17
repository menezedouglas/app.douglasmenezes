import * as types from './mutation-types'

export default {
    [types.SET_CONTRACTS] (state, payload) {
      state.contracts = payload
    },
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    },
    [types.SET_FORM] (state, payload) {
        state.form = payload
    },
    [types.SET_FORM_CONTRACT_ID] ({ form }, payload) {
        form.contract_id = payload
    },
    [types.SET_FORM_CLIENT_ID] ({ form }, payload) {
        form.client_id = payload
    },
    [types.SET_FORM_SEVICE_ID] ({ form }, payload) {
        form.service_id = payload
    },
    [types.SET_FORM_VALUE] ({ form }, payload) {
        form.value = payload
    },
    [types.SET_FORM_CONTRACT_ID] ({ form }, payload) {
        form.contract_id = payload
    },
    [types.SET_FORM_START_VALIDITY] ({ form }, payload) {
      form.start_validity = payload
    },
    [types.SET_FORM_END_VALIDITY] ({ form }, payload) {
      form.end_validity = payload
    },
    [types.SET_FORM_TYPE_VALUE] ({ form }, payload) {
      form.type_value = payload
    },
    [types.SET_FORM_DIALOG] (state, payload) {
        state.formDialog = payload
    },
    [types.SET_OPTIONS] (state, payload) {
        state.options = payload
    },
    [types.SET_FORM_DIALOG_EDIT_MODE] (state, payload) {
        state.formDialogEditMode = payload
    },
    [types.SET_CONTRACT_SHOW] (state, payload) {
        state.contractShow = payload
    },
    [types.SET_TABLE_FILTER] (state, payload) {
        state.tableFilter = payload
    }
}
