import * as types from './mutation-types'
import requests from '../../../../http'
import { ref } from 'vue'

export const ActionSetLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
}

export const ActionSetForm = ({commit}, payload) => {
  commit(types.SET_FORM, payload)
}

export const ActionSetFormContractId = ({commit}, payload) => {
  commit(types.SET_FORM_CONTRACT_ID, payload)
}

export const ActionSetFormClientId = ({commit}, payload) => {
  commit(types.SET_FORM_CLIENT_ID, payload)
}

export const ActionSetFormServiceId = ({commit}, payload) => {
  commit(types.SET_FORM_SEVICE_ID, payload)
}

export const ActionSetFormStartValidity = ({commit}, payload) => {
  commit(types.SET_FORM_START_VALIDITY, payload)
}

export const ActionSetFormEndValidity = ({commit}, payload) => {
  commit(types.SET_FORM_END_VALIDITY, payload)
}

export const ActionSetFormValue = ({commit}, payload) => {
  if (typeof payload === 'string') payload = parseInt(payload) * 100
  commit(types.SET_FORM_VALUE, payload)
}

export const ActionSetFormTypeValue = ({commit}, payload) => {
  commit(types.SET_FORM_TYPE_VALUE, payload)
}

export const ActionSetFormDialog = ({commit}, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
}

export const ActionSetOptions = ({commit}, payload) => {
  commit(types.SET_OPTIONS, payload)
}

export const ActionSetOptionsClients = ({commit}, payload) => {
  commit(types.SET_OPTIONS_CLIENTS, payload)
}

export const ActionSetOptionsServices = ({commit}, payload) => {
  commit(types.SET_OPTIONS_SERVICES, payload)
}

export const ActionSetOptionsTypeValue = ({commit}, payload) => {
  commit(types.SET_OPTIONS_TYPE_VALUE, payload)
}

export const ActionSetFormDialogEditMode = ({commit}, payload) => {
  commit(types.SET_FORM_DIALOG_EDIT_MODE, payload)
}

export const ActionSetContracts = ({commit}, payload) => {
  commit(types.SET_CONTRACTS, payload)
}

export const ActionSetTable = ({commit}, payload) => {
  commit(types.SET_TABLE, payload)
}

export const ActionSetTableFilter = ({commit}, payload) => {
  commit(types.SET_TABLE_FILTER, payload)
}

export const ActionSetTableColumns = ({commit}, payload) => {
  commit(types.SET_TABLE_COLUMNS, payload)
}

export const ActionSetTableRows = ({commit}, payload) => {
  commit(types.SET_TABLE_ROWS, payload)
}

export const ActionSetTableSelected = ({commit}, payload) => {
  commit(types.SET_TABLE_SELECTED, payload)
}

export const ActionClearForm = ({dispatch}) => {
  dispatch('ActionSetFormContractId', null)
  dispatch('ActionSetFormClientId', null)
  dispatch('ActionSetFormServiceId', null)
  dispatch('ActionSetFormStartValidity', '')
  dispatch('ActionSetFormEndValidity', '')
  dispatch('ActionSetFormValue', 0)
  dispatch('ActionSetFormTypeValue', '')
}

export const ActionGetClients = async ({dispatch}) => {
  try {
    dispatch('ActionSetLoading', true)
    const {request} = await requests.clients.all()
    let options = []
    request.response.map(client => {
      options.push({
        label: client.name,
        value: client.id
      })
    })
    dispatch('ActionSetOptionsClients', options)
    dispatch('ActionSetLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionShowContract = async ({ dispatch, getters }, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    const { request } = await requests.contract.show({ contract_id: payload })
    await dispatch('ActionSetFormContractId', request.response.id)
    await dispatch('ActionSetFormClientId', request.response.client_id)
    await dispatch('ActionSetFormServiceId', request.response.service_id)
    await dispatch('ActionSetFormStartValidity', request.response.start_validity)
    await dispatch('ActionSetFormEndValidity', request.response.end_validity)
    await dispatch('ActionSetFormValue', request.response.value)
    await dispatch('ActionSetFormTypeValue', request.response.type_value)
    await dispatch('ActionSetLoading', false)
    await dispatch('ActionSetFormDialogEditMode', true)
    await dispatch('ActionSetFormDialog', true)
    console.log(getters.getForm)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const ActionGetContracts = async ({dispatch}) => {
  try {
    dispatch('ActionSetLoading', true)
    const {request} = await requests.contract.all()
    const refCodes = await requests.refCodes.all()
    const contracts = []
    await request.response.map(contract => {
      const today = new Date().getTime()
      const start = new Date(contract.start_validity).getTime()
      const end = new Date(contract.end_validity).getTime()
      contract.status = (today < start && today < end) ? {bg: 'primary', label: `À Vigorar`} : (
        (today >= start && today <= end) ? {bg: 'positive', label: `Em Vigor`} : {bg: 'negative', label: `Expirado`}
      )
      refCodes.request.response.map(refCode => {
        if (refCode.name === 'type_value' && refCode.value === contract.type_value) {
          contract.type_value = refCode.description
          contracts.push(contract)
        }
      })
    })
    dispatch('ActionSetContracts', contracts)
    dispatch('ActionSetTableRows', contracts)
    dispatch('ActionSetLoading', false)
    return Promise.resolve(contracts)
  } catch (error) {
    dispatch('ActionSetContracts', [])
    dispatch('ActionSetTableRows', [])
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionCreateContract = async ({dispatch}, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    await requests.contract.create(payload)
    dispatch('ActionGetContracts')
    dispatch('ActionSetFormDialog', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionUpdateContract = async ({dispatch, getters}) => {
  try {
    dispatch('ActionSetLoading', true)
    const data = getters.getForm
    await requests.contract.update(data)
    dispatch('ActionGetContracts')
    dispatch('ActionSetFormDialog', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

export const ActionDropContract = async ({dispatch}, payload) => {
  try {
    dispatch('ActionSetLoading', true)
    await requests.contract.delete({contract_id: payload})
    dispatch('ActionGetContracts')
    return Promise.resolve()
  } catch (error) {
    dispatch('ActionSetLoading', false)
    return Promise.reject(error)
  }
}

