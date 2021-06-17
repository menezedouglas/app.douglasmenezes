import * as types from './mutation-types'
import requests from 'src/http'
import helpers from 'src/helpers'

export const setTable = ({ commit }, payload) => {
  commit(types.SET_TABLE, payload)
}
export const setTableCols = ({ commit }, payload) => {
  commit(types.SET_TABLE_COLS, payload)
}
export const setTableRows = ({ commit }, payload) => {

  payload.map(row => {
    row.value = helpers.numeric.format.value(row.value)
  })

  commit(types.SET_TABLE_ROWS, payload)
}
export const setTableSelected = ({ commit }, payload) => {
  commit(types.SET_TABLE_SELECTED, payload)
}
export const setTableFilter = ({ commit }, payload) => {
  commit(types.SET_TABLE_FILTER, payload)
}
export const setForm = ({ commit }, payload) => {
  commit(types.SET_FORM, payload)
}
export const setFormServiceId = ({ commit }, payload) => {
  commit(types.SET_FORM_SERVICE_ID, payload)
}
export const setFormName = ({ commit }, payload) => {
  commit(types.SET_FORM_NAME, payload)
}
export const setFormDescription = ({ commit }, payload) => {
  commit(types.SET_FORM_DESCRIPTION, payload)
}
export const setFormDeliveryTime = ({ commit }, payload) => {
  commit(types.SET_FORM_DELIVERY_TIME, payload)
}
export const setFormValue = ({ commit }, payload) => {
  if(typeof payload === 'string') payload = parseInt(payload) * 100
  commit(types.SET_FORM_VALUE, payload)
}
export const setFormTypeValue = ({ commit }, payload) => {
  commit(types.SET_FORM_TYPE_VALUE, payload)
}
export const setFormTypeServiceState = ({ commit }, payload) => {
  commit(types.SET_FORM_TYPE_SERVICE_STATE, payload)
}

export const setServices = ({ commit }, payload) => {
  commit(types.SET_SERVICES, payload)
}

export const setLoading = ({ commit }, payload) => {
  commit(types.SET_LOADING, payload)
}
export const setFormDialog = ({ commit }, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
}

export const setFormEditMode = ({ commit }, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}

export const obtainServices = async ({ dispatch }) => {
  try {
    dispatch('setLoading', true)
    const { request } = await requests.service.all()
    dispatch('setServices', request.response)
    dispatch('setTableRows', request.response)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const clearForm = ({ dispatch }) => {
  dispatch('setFormName', '')
  dispatch('setFormDescription', '')
  dispatch('setFormDeliveryTime', 0)
  dispatch('setFormValue', 0)
  dispatch('setFormTypeValue', '')
  dispatch('setFormTypeServiceState', '')
}

export const createSerivce = async ({ dispatch }, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.service.create(payload)
    dispatch('obtainServices')
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const showSerivce = async ({ dispatch }, payload) => {
  try {
    dispatch('setLoading', true)
    const { request } = await requests.service.show({ service_id: payload })
    dispatch('setFormEditMode', true)
    dispatch('setFormServiceId', request.response.id)
    dispatch('setFormName', request.response.name)
    dispatch('setFormDescription', request.response.description)
    dispatch('setFormDeliveryTime', request.response.delivery_time)
    dispatch('setFormValue', request.response.value)
    dispatch('setFormTypeValue', request.response.type_value)
    dispatch('setFormTypeServiceState', request.response.type_service_state)
    dispatch('setFormDialog', true)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const updateSerivce = async ({ dispatch }, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.service.update(payload)
    dispatch('obtainServices')
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const dropSerivce = async ({ dispatch }, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.service.delete({ service_id: payload })
    dispatch('obtainServices')
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}
