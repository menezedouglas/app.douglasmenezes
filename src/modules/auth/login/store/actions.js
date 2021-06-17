import * as types from './mutation-types'
import * as storage from '../storage'
import requests from '../../../../http'

export const ActionSetLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
}

export const ActionSetAuthorization = ({commit}, payload) => {
  storage.setLocalAuthorization(payload)
  storage.setHeaderAuthorization(payload)
  commit(types.SET_AUTHORIZATION, payload)
}

export const ActionSetUserId = ({commit}, payload) => {
  storage.setLocalUserID(payload)
  commit(types.SET_USER_ID, payload)
}

export const ActionCheckToken = ({dispatch, state, getters}) => {
  try {

    if (getters.hasAuthorization) {
      return Promise.resolve(state.authorization)
    }

    const authorization = storage.getLocalAuthorization()
    const user_id = storage.getLocalUserID()

    if (!authorization || authorization === 'null') {
      dispatch('ActionLogOut')
    } else {
      if (user_id && user_id > 0) {
        dispatch('ActionSetUserId', parseInt(user_id))
        dispatch('ActionSetAuthorization', authorization)
        return Promise.resolve()
      } else {
        return Promise.reject()
      }
    }
  } catch (error) {
    return Promise.reject()
  }
}

export const ActionDoLogin = ({dispatch}, payload) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      dispatch('ActionSetLoading', true)
      const {request} = await requests.login.login(payload)
      dispatch('ActionSetAuthorization', request.response.access_token)
      dispatch('ActionSetUserId', request.response.user.id)
      dispatch('ActionSetLoading', false)
      resolve()
    } catch (error) {
      dispatch('ActionSetLoading', false)
      reject(error)
    }
  })
}

export const ActionLogOut = ({dispatch}) => {
  dispatch('ActionSetAuthorization', null)
  dispatch('ActionSetUserId', 0)
}
