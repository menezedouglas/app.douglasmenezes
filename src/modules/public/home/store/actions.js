import requests from '../../../../http'
import * as types from './mutation-types'

export const ActionSetServices = ({ commit }, payload) => {
  commit(types.SET_SERVICES, payload)
}

export const ActionSetService = ({ commit }, payload) => {
  commit(types.SET_SERVICE, payload)
}

export const ActionSetLoading = ({ commit }, payload) => {
  commit(types.SET_LOADING, payload)
}

export const ActionGetServices = async ({ dispatch }) => {
  try {
    dispatch('ActionSetLoading', true)
    const { request } = await requests.service.all()
    dispatch('ActionSetServices', request.response)
    dispatch('ActionSetLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionShowService = async ({ dispatch }, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    const { request } = await requests.service.show({ service_id: payload })
    dispatch('ActionSetService', request.response)
    dispatch('ActionSetLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}
