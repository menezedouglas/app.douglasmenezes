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

export const ActionSetFormUserIsRepresentative = ({ commit }, payload) => {
    commit(types.SET_FORM_USER_IS_REPRESENTATIVE, payload)
}

export const ActionSetFormRepresentativeName = ({ commit }, payload) => {
    commit(types.SET_FORM_REPRESENTATIVE_NAME, payload)
}

export const ActionSetFormRepresentativeOccupation = ({ commit }, payload) => {
    commit(types.SET_FORM_REPRESENTATIVE_OCCUPATION, payload)
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
