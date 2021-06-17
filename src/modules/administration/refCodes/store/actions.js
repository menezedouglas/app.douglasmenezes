import * as types from './mutation-types'
import requests from '../../../../http'

export const ActionSetLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
}

export const ActionSetCodes = async ({commit, dispatch}, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    const name = payload.toLowerCase()
    const {request} = await requests.refCodes.all()
    let codes = []
    request.response.map(code => {
      if (code.name === name) {
        codes.push(code)
      }
    })
    commit(types.SET_CODES, codes)
    dispatch('ActionSetLoading', false)
    return Promise.resolve(codes)
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}
