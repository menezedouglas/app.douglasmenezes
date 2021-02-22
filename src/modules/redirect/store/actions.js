import * as types from './mutation-types'

export const ActionSetLink = ({ commit, getters }, payload) => {

    let state = getters.getLinks,
        validate = true,
        id = null;

    switch (state.length) {
        case 0:
            commit(types.SET_LINK, [ payload ])
            return 0;

        default:

            state.map((item, index) => {
                if(item === payload) {
                    id = index;
                    validate = false;
                    return validate;
                }
            })

            if(validate) {
                state.push(payload)
                commit(types.SET_LINK, state)
                id = (state.length - 1)
            }

        return id;

    }

}

export const ActionRedirectToLink = ({ getters }, id) => {
    let url = getters.getLinks[id]
    window.open(url)
}