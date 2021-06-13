import * as types from './mutation-types'
import requests from 'src/http'

export const setLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
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
export const setFormEditMode = ({commit}, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}
export const setFormDialog = ({commit}, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
}
export const setFormReceiptId = ({commit}, payload) => {
  commit(types.SET_FORM_RECEIPT_ID, payload)
}
export const setFormContractId = ({commit}, payload) => {
  commit(types.SET_FORM_CONTRACT_ID, payload)
}
export const setFormReferenceMonth = ({commit}, payload) => {
  commit(types.SET_FORM_REFERENCE_MONTH, payload)
}
export const setFormValue = ({commit}, payload) => {
  commit(types.SET_FORM_VALUE, payload)
}
export const setFormShelfLife = ({commit}, payload) => {
  commit(types.SET_FORM_SHELF_LIFE, payload)
}
export const setFormUrlToDownload = ({commit}, payload) => {
  commit(types.SET_FORM_URL_TO_DOWNLOAD, payload)
}

export const getAllReceipts = async ({dispatch}) => {
  try {
    dispatch('setLoading', true)
    const {request} = await requests.receipt.all()
    dispatch('setTableRows', request.response)
    dispatch('setLoading', false)
    return Promise.resolve(request.response)
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const showReceipt = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    const { request } = await requests.receipt.show({ receipt_id: payload })
    dispatch('setFormReceiptId', request.response.id )
    dispatch('setFormContractId', request.response.contract_id )
    dispatch('setFormValue', request.response.value )
    dispatch('setFormReferenceMonth', request.response.reference_month)
    dispatch('setFormShelfLife', request.response.shelf_life)
    dispatch('setFormUrlToDownload', request.response.url_to_download)
    dispatch('setFormEditMode', true)
    dispatch('setFormDialog', true)
    dispatch('setLoading', false)
    return Promise.resolve(request.response)
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const createReceipt = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    await requests.receipt.create(getters.getForm)
    dispatch('getAllReceipts')
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const updateReceipt = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    await requests.receipt.update(getters.getForm)
    dispatch('getAllReceipts')
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}

export const deleteReceipt = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.receipt.delete({receipt_id: payload})
    dispatch('getAllReceipts')
    return Promise.resolve()
  } catch (error) {
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}
