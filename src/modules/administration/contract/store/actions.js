import * as types from './mutation-types'
import requests  from '../../../../http'
// import helpers from '../../../../helpers'

export const ActionSetLoading = ({ commit }, payload) => {
    commit(types.SET_LOADING, payload)
}

export const ActionSetForm = ({ commit }, payload) => {
    commit(types.SET_FORM, payload)
}

export const ActionSetFormClientId = ({ commit }, payload) => {
    commit(types.SET_FROM_CLIENT_ID, payload)
}

export const ActionSetFormUserId = ({ commit }, payload) => {
    commit(types.SET_FORM_USER_ID, payload)
}

export const ActionSetFormFullName = ({ commit }, payload) => {
    commit(types.SET_FORM_FULL_NAME, payload)
}

export const ActionSetFormFantasyName = ({ commit }, payload) => {
    commit(types.SET_FORM_FANSTASY_NAME, payload)
}

export const ActionSetFormDocumentType = ({ commit }, payload) => {
    commit(types.SET_FORM_DOCUMENT_TYPE, payload)
}

export const ActionSetFormDialog = ({ commit }, payload) => {
    commit(types.SET_FORM_DIALOG, payload)
}

export const ActionSetOptions = ({ commit }, payload) => {
    commit(types.SET_OPTIONS, payload)
}

export const ActionSetFormDialogEditMode = ({ commit }, payload) => {
    commit(types.SET_FORM_DIALOG_EDIT_MODE, payload)
}

export const ActionSetClientShow = async ({ commit, dispatch }, payload) => {
    try {
        dispatch('ActionSetLoading', true)
        const { request } = await requests.client.show({ client_id: payload })
        commit(types.SET_CLIENT_SHOW, {
            client_id: request.response.id,
            user_id: request.response.user_id,
            phone: request.response.phone,
            full_name: request.response.full_name,
            fantasy_name: request.response.fantasy_name,
            email: request.response.email,
            document: request.response.document,
            document_type: request.response.document_type
        })
        dispatch('ActionSetLoading', false)
    } catch (error) {
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionSetClients = async ({ commit, dispatch }) => {
    try {
        dispatch('ActionSetLoading', true)
        const { request } = await requests.client.all()
        commit(types.SET_CLIENTS, request.response)
        dispatch('ActionSetLoading', false)
        return Promise.resolve()
    } catch (error) {
        dispatch('ActionSetLoading', false)
        if(error.request.status === 404) {
            commit(types.SET_CLIENTS, [])
        }
        return Promise.reject(error)
    }
}

export const ActionCreateClients = async ({ dispatch }, payload) => {
    try {
        dispatch('ActionSetLoading', true)
        Object.keys(payload).map(key => {
            if (key === 'document' || key === 'phone') {
                payload[key] = parseInt(payload[key])
            }
        })
        await requests.client.create(payload)
        dispatch('ActionSetClients')
        return Promise.resolve()
    } catch (error) {
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionUpdateClient = async ({ dispatch }, payload) => {
    try {
        dispatch('ActionSetLoading', true)
        Object.keys(payload).map(key => {
            if (key === 'document' || key === 'phone') {
                payload[key] = parseInt(payload[key])
            }
        })
        await requests.client.update(payload)
        dispatch('ActionSetClients')
        return Promise.resolve()
    } catch (error) {
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionDropClient = async ({ dispatch }, payload) => {
    try {
        dispatch('ActionSetLoading', true)
        await requests.client.delete({ client_id: payload })
        dispatch('ActionSetClients')
        return Promise.resolve()
    } catch (error) {
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}
