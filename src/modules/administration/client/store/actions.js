import * as types from './mutation-types'
import requests  from '../../../../http'

export const ActionSetLoading = ({ commit }, payload) => {
    commit(types.SET_LOADING, payload)
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
