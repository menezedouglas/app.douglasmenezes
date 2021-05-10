import * as types from './mutation-types';


export const ActionUnsetMessage = ({ dispatch, getters }, payload) => {
    const currentMessages = getters.getMessages

    var messages = []

    currentMessages.map((item, index) => {

        if(index !== currentMessages.indexOf(payload)) {

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

export const ActionAddMessages = ({ dispatch, getters }, payload) => {
    let messages = getters.getMessages;

    payload.map(msg => {

        messages.push(msg)

    })

    dispatch('ActionSetMessages', messages)
}

export const ActionSetMessages = ({ commit }, payload) => {
    commit(types.SET_MESSAGES, payload)
}

export const ActionSetErrors = async ({ dispatch }, payload) => {
    // eslint-disable-next-line no-undef
    const error = await helpers.httpResponses.errors(payload)
    switch (payload.request.status) {
        case 422: {
            dispatch('ActionAddMessages', error)
            break
        }
        case 401: {
            dispatch('ActionAddMessage', error)
            break
        }
        default: {
            dispatch('ActionAddMessage', error)
            break
        }
    }
}
