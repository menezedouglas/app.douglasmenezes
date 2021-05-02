import * as types from './mutation-types';

export const ActionUnsetMessage = ({ dispatch, getters }, payload) => {
    const currentMessages = getters.getMessages

    var messages = []

    currentMessages.map(item => {
        if(
            item.bg !== payload.bg &&
            item.message !== payload.message
        ) {
            messages.push(item)
        }
    })

    dispatch('ActionSetMessages', messages)
}

export const ActionAddMessage = ({ dispatch, getters }, payload) => {
    const messages = getters.getMessages;

    messages.push(payload)

    dispatch('ActionSetMessages', messages)
}

export const ActionSetMessages = ({ commit }, payload) => {
    commit(types.SET_MESSAGES, payload)
}
