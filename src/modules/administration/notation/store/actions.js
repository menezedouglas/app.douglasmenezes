import * as types from './mutation-types'
import requests from 'src/http'
import {ref} from "vue";

export const setNotations = ({commit}, payload) => {
  commit(types.SET_NOTATIONS, payload)
}
export const setLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
}
export const setFormDialog = ({commit}, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
}
export const setFormEditMode = ({commit}, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}
export const setTable = ({commit}, payload) => {
  commit(types.SET_TABLE, payload)
}
export const setTableCols = ({commit}, payload) => {
  commit(types.SET_TABLE_COLS, payload)
}
export const setTableRows = ({commit}, payload) => {
  commit(types.SET_TABLE_ROWS, payload)
}
export const setTableFilter = ({commit}, payload) => {
  commit(types.SET_TABLE_FILTER, payload)
}
export const setTableSelected = ({commit}, payload) => {
  commit(types.SET_TABLE_SELECTED, payload)
}
export const setForm = ({commit}, payload) => {
  commit(types.SET_FORM, payload)
}
export const setFormNotationId = ({commit}, payload) => {
  commit(types.SET_FORM_NOTATION_ID, payload)
}
export const setFormContractId = ({commit}, payload) => {
  commit(types.SET_FORM_CONTRACT_ID, payload)
}
export const setFormTypeNotation = ({commit}, payload) => {
  commit(types.SET_FORM_TYPE_NOTATION, payload)
}
export const setFormReference = ({commit}, payload) => {
  commit(types.SET_FORM_REFERENCE, payload)
}
export const setFormEnter = ({commit}, payload) => {
  commit(types.SET_FORM_ENTER, payload)
}
export const setFormLeave = ({commit}, payload) => {
  commit(types.SET_FORM_LEAVE, payload)
}
export const setFormNote = ({commit}, payload) => {
  commit(types.SET_FORM_NOTE, payload)
}

export const setDay = ({commit}, payload) => {
  commit(types.SET_DAY, payload)
}

export const setDayNow = ({commit}, payload) => {
  commit(types.SET_DAY_NOW, payload)
}

export const setDayNotations = ({commit}, payload) => {
  commit(types.SET_DAY_NOTATIONS, payload)
}

export const setDayContract = ({commit}, payload) => {
  commit(types.SET_DAY_CONTRACT, payload)
}

export const clearForm = ({dispatch}) => {
  dispatch('setFormNotationId', 0)
  dispatch('setFormContractId', null)
  dispatch('setFormTypeNotation', '')
  dispatch('setFormReference', '')
  dispatch('setFormEnter', '')
  dispatch('setFormLeave', '')
  dispatch('setFormNote', '')
}

export const getNotationsByDate = async ({dispatch, getters}, payload) => {
  try {
    dispatch('setLoading', true)
    await dispatch('getNotations')
    const notations = getters.getNotations
    let notationsByDate = []
    notations.map(not => {
      const reference = new Date(not.reference)
      if (
        payload.getFullYear() === reference.getFullYear() &&
        payload.getMonth() === reference.getMonth() &&
        payload.getDate() === reference.getDate()
      ) {
        notationsByDate.push(not)
      }
    })
    dispatch('setDayNotations', notationsByDate)
    dispatch('setLoading', false)
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const commitStatus = async ({dispatch, getters}, payload) => {
  try {
    dispatch('setLoading', true)
    const type_notation = 'first_period,first_period,second_period,second_period'.split(',')
    const data = (payload === 0 || payload === 2) ? {
        contract_id: getters.getDayContract.id,
        type_notation: type_notation[payload],
        reference: `${getters.getDayNow.getFullYear()}/${getters.getDayNow.getMonth()+1}/${getters.getDayNow.getDate()}`,
        enter: getters.getDayNow.toLocaleTimeString(),
        leave: null,
        note: ''
      } : {
      notation_id: (payload === 1) ? getters.getDayNotations[0].id : getters.getDayNotations[1].id,
      contract_id: getters.getDayContract.id,
      type_notation: type_notation[payload],
      reference: `${getters.getDayNow.getFullYear()}/${getters.getDayNow.getMonth()+1}/${getters.getDayNow.getDate()}`,
      enter: (payload === 1 || payload === 3) ? getters.getDayNotations[0].enter : getters.getDayNotations[1].enter,
      leave: getters.getDayNow.toLocaleTimeString(),
      note: ''
    }
    if(payload === 0 || payload === 2)
      await requests.notation.create(data)
    else
      await requests.notation.update(data)
    await dispatch('getNotationsByDate', getters.getDayNow)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const getNotations = async ({dispatch}) => {
  try {
    dispatch('setLoading', true)
    const {request} = await requests.notation.all()
    dispatch('setNotations', request.response)
    dispatch('setTableRows', request.response)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setNotations', [])
    dispatch('setTableRows', [])
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const showNotation = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    const {request} = await requests.notation.show({notation_id: payload})
    dispatch('setFormNotationId', request.response.id)
    dispatch('setFormContractId', request.response.contract_id)
    dispatch('setFormTypeNotation', request.response.type_notation)
    dispatch('setFormReference', request.response.reference)
    dispatch('setFormEnter', request.response.enter)
    dispatch('setFormLeave', request.response.leave)
    dispatch('setFormNote', request.response.note)
    dispatch('setFormEditMode', true)
    dispatch('setFormDialog', true)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('clearForm')
    dispatch('setFormEditMode', false)
    dispatch('setFormDialog', false)
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const createNotation = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    const data = getters.getForm
    await requests.notation.create(data)
    dispatch('getNotations')
    dispatch('setFormDialog', false)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const updateNotation = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    const data = getters.getForm
    await requests.notation.update(data)
    dispatch('getNotations')
    dispatch('setFormDialog', false)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const dropNotation = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.notation.delete({notation_id: payload})
    dispatch('getNotations')
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}
