import * as types from './mutation-types'
import services from '@/http'
// import { setToken } from '@/http'

export const ActionSetLoading = ({ commit }, payload) => {
    commit(types.SET_LOADING, payload)
}

export const ActionDoLogin = ({ dispatch }, payload) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            dispatch('ActionSetLoading', true)
            const response = await services.login.login(payload)
            console.log(response)
            dispatch('ActionSetLoading', false)
            resolve()
        } catch (error) {
            dispatch('ActionSetLoading', false)
            reject(error)
        }
    })
}
