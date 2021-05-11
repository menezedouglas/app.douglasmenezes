import * as types from './mutation-types'
import requests  from '../../../../http'

export const ActionSetId = ({commit}, payload) => {
    commit(types.SET_ID, payload)
}

export const ActionSetName = ({commit}, payload) => {
    commit(types.SET_NAME, payload)
}

export const ActionSetEmail = ({commit}, payload) => {
    commit(types.SET_EMAIL, payload)
}

export const ActionSetLoading = ({commit}, payload) => {
    commit(types.SET_LOADING, payload)
}

export const ActionSetFormEditMode = ({ commit }, payload) => {
    commit(types.SET_FORM_EDIT_MODE, payload)
}

export const ActionSetUsers = ({dispatch, commit}) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            dispatch('ActionSetLoading', true)
            const { request } = await requests.user.all()
            commit(types.SET_USERS, request.response)
            dispatch('ActionSetLoading', false)
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

export const ActionSetUser = ({dispatch}, payload) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            dispatch('ActionSetLoading', true)
            const { request } = await requests.user.show({ user_id: payload })
            dispatch('ActionSetId', request.response.id)
            dispatch('ActionSetName', request.response.name)
            dispatch('ActionSetEmail', request.response.email)
            dispatch('ActionSetLoading', false)
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
