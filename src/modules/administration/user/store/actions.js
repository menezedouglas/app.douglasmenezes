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

export const ActionSetForm = ({ commit }, payload) => {
  commit(types.SET_FORM, payload)
}

export const ActionSetFormUserId = ({ commit }, payload) => {
  commit(types.SET_FORM_USER_ID, payload)
}

export const ActionSetFormName = ({ commit }, payload) => {
  commit(types.SET_FORM_NAME, payload)
}

export const ActionSetFormEmail = ({ commit }, payload) => {
  commit(types.SET_FORM_EMAIL, payload)
}

export const ActionSetFormPassword = ({ commit }, payload) => {
  commit(types.SET_FORM_PASSWORD, payload)
}

export const ActionSetFormDialog = ({ commit }, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
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

export const ActionGetUsers = ({dispatch}) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            dispatch('ActionSetLoading', true)
            const { request } = await requests.user.all()
            dispatch('ActionSetLoading', false)
            resolve(request.response)
        } catch (error) {
            reject(error)
        }
    })
}

export const ActionGetUser = ({dispatch}, payload) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            dispatch('ActionSetLoading', true)
            const { request } = await requests.user.show({ user_id: payload })
            dispatch('ActionSetLoading', false)
            resolve(request.response)
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

export const ActionCreateUser = async ({ dispatch }, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    await requests.user.create(payload)
    dispatch('ActionSetUsers')
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionUpdateUser = async ({ dispatch }, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    await requests.user.update(payload)
    dispatch('ActionSetUsers')
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionDropUser = async ({ dispatch }, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    await requests.user.delete({ user_id: payload })
    dispatch('ActionSetUsers')
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}
