import * as types from './mutation-types'
import requests  from '../../../../http'

export const ActionSetLoading = ({ commit }, payload) => {
    commit(types.SET_LOADING, payload)
}

export const ActionSetForm = ({ commit }, payload) => {
    commit(types.SET_FORM, payload)
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

export const ActionSetFormDocument = ({ commit }, payload) => {
    commit(types.SET_FORM_DOCUMENT, payload)
}

export const ActionSetFormEmail = ({ commit }, payload) => {
    commit(types.SET_FORM_EMAIL, payload)
}

export const ActionSetFormPhone = ({ commit }, payload) => {
    commit(types.SET_FORM_PHONE, payload)
}

export const ActionSetFormDialog = ({ commit }, payload) => {
    commit(types.SET_FORM_DIALOG, payload)
}

export const ActionSetOptions = ({ commit }, payload) => {
    commit(types.SET_OPTIONS, payload)
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
        return Promise.reject(error)
    }
}
