import services from '@/http'
import * as types from './mutation-types'

export const ActionSetServices = ({ commit }, payload) => {
    commit(types.SET_SERVICES, payload)
}

export const ActionSetService = ({ commit }, payload) => {
    commit(types.SET_SERVICE, payload)
}

export const ActionGetServices = ({ dispatch }) => {
    return services.home.getServices().then(res => {
        dispatch('ActionSetServices', res.data)
    })
}

export const ActionShowService = ({ dispatch }, payload) => {
    return services.home.showService({ id: payload }).then(res => {
        dispatch('ActionSetService', res.data)
    })
}
