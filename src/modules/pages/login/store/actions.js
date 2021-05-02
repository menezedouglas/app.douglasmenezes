import * as types from './mutation-types'
import services from '@/http'
// import { setToken } from '@/http'
import { mapActions, mapGetters } from 'vuex';

const messages = {
    actions: mapActions('messages', ['ActionAddMessage']),
    getters: mapGetters('messages', ['getMessages'])
}

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
            await messages.actions.ActionAddMessage({
                bg: 'success',
                message: 'Login Efetuado'
            })
            dispatch('ActionSetLoading', false)
            resolve()
        } catch (error) {
            await messages.actions.ActionAddMessage({
                bg: 'danger',
                message: `${error.body.msg} ${error.body.error}`
            })
            dispatch('ActionSetLoading', false)
            reject(error)
        }
    })
}
