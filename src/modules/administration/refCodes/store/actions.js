import * as types from './mutation-types'
import requests from '../../../../http'

export const ActionSetCodes = async ({ commit }, payload) => {
    try {
        const name = payload.toLowerCase()
        const { request } = await requests.refCodes.all()
        let codes = []
        request.response.map(code => {
            if(code.name === name) {
                codes.push(code)
            }
        })
        commit(types.SET_CODES, codes)
    } catch (error) {
        return Promise.reject(error)
    }
}