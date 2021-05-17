import * as types from './mutation-types'
import requests  from '../../../../http'
// import helpers from '../../../../helpers'

export const ActionSetLoading = ({ commit }, payload) => {
    commit(types.SET_LOADING, payload)
}

export const ActionSetForm = ({ commit }, payload) => {
    commit(types.SET_FORM, payload)
}

export const ActionSetFormContractId = ({ commit }, payload) => {
    commit(types.SET_FORM_CONTRACT_ID, payload)
}

export const ActionSetFormClientId = ({ commit }, payload) => {
    commit(types.SET_FORM_CLIENT_ID, payload)
}

export const ActionSetFormServiceId = ({ commit }, payload) => {
    commit(types.SET_FORM_SEVICE_ID, payload)
}

export const ActionSetFormStartValidity = ({ commit }, payload) => {
    commit(types.SET_FORM_START_VALIDITY, payload)
}

export const ActionSetFormEndValidity = ({ commit }, payload) => {
    commit(types.SET_FORM_END_VALIDITY, payload)
}

export const ActionSetFormValue = ({ commit }, payload) => {
    commit(types.SET_FORM_VALUE, payload)
}

export const ActionSetFormTypeValue = ({ commit }, payload) => {
    commit(types.SET_FORM_TYPE_VALUE, payload)
}

export const ActionSetFormDialog = ({ commit }, payload) => {
    commit(types.SET_FORM_DIALOG, payload)
}

export const ActionSetOptions = ({ commit }, payload) => {
    commit(types.SET_OPTIONS, payload)
}

export const ActionSetFormDialogEditMode = ({ commit }, payload) => {
    commit(types.SET_FORM_DIALOG_EDIT_MODE, payload)
}

export const ActionSetContracts = ({ commit }, payload) => {
    commit(types.SET_CONTRACTS, payload)
}

export const ActionSetTableFilter = ({ commit }, payload ) => {
    commit(types.SET_TABLE_FILTER, payload)
}

export const ActionGetContracts = async ({ dispatch }) => {
    try {
        dispatch('ActionSetLoading', true)
        const { request } = await requests.contract.all()
        dispatch('ActionSetContracts', request.response)
        dispatch('ActionSetLoading', false)
        return Promise.resolve()
    } catch (error){
        dispatch('ActionSetContracts', [])
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionCreateContract = async ({ dispatch, getters }) => {
    try {
        dispatch('ActionSetLoading', true)
        const data = getters.form
        await requests.contract.create(data)
        dispatch('ActionSetContracts')
        return Promise.resolve()
    } catch (error){
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionUpdateContract = async ({ dispatch, getters }) => {
    try {
        dispatch('ActionSetLoading', true)
        const data = getters.form
        await requests.contract.update(data)
        dispatch('ActionSetContracts')
        return Promise.resolve()
    } catch (error){
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

export const ActionDropContract = async ({ dispatch }, payload) => {
    try {
        dispatch('ActionSetLoading', true)
        await requests.contract.delete({ contract_id: payload })
        dispatch('ActionSetContracts')
        return Promise.resolve()
    } catch (error){
        dispatch('ActionSetLoading', false)
        return Promise.reject(error)
    }
}

