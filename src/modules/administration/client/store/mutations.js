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
    [types.SET_FORM_USER_IS_REPRESENTATIVE] ({ form }, payload) {
        form.user_is_representative = payload
    },
    [types.SET_FORM_REPRESENTATIVE_NAME] ({ form }, payload) {
        form.representative_name = payload
    },
    [types.SET_FORM_REPRESENTATIVE_OCCUPATION] ({ form }, payload) {
        form.representative_occupation = payload
    }
}
