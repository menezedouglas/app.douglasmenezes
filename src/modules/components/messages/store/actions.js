import {Notify} from 'quasar'
import helpers from '../../../../helpers'

export const ActionAddMessage = ({dispatch, getters}, payload) => {
  Notify.create({
    type: payload.bg,
    message: payload.message,
    multiLine: false,
    position: "bottom"
  })
}

export const ActionAddMessages = ({dispatch, getters}, payload) => {
  payload.map(msg => {
    dispatch('ActionAddMessage', msg)
  })
}


export const ActionSetErrors = async ({dispatch}, payload) => {
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
