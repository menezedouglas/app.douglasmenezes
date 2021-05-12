import * as types from './mutation-types'

export default {
    [types.SET_CLIENTS] (state, payload) {
        state.clients = payload
    },
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    },
    [types.SET_FORM] (state, payload) {
        state.form = payload
    },
    [types.SET_FORM_USER_ID] ({ form }, payload) {
        form.user_id = payload
    },
    [types.SET_FORM_FULL_NAME] ({ form }, payload) {
        form.full_name = payload
    },
    [types.SET_FORM_FANSTASY_NAME] ({ form }, payload) {
        form.fantasy_name = payload
    },
    [types.SET_FORM_DOCUMENT_TYPE] ({ form }, payload) {
        form.document_type = payload
    },
    [types.SET_FORM_EMAIL] ({ form }, payload) {
        form.email = payload
    },
    [types.SET_FORM_PHONE] ({ form }, payload) {
        form.phone = payload
    },
    [types.SET_FORM_DIALOG] (state, payload) {
        state.formDialog = payload
    },
    [types.SET_OPTIONS] (state, payload) {
        state.options = payload
    }
}
