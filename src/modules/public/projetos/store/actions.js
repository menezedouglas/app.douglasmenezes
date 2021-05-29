import * as types from './mutation-types'
import requests from 'src/http'

export const setProjects = ({commit}, payload) => {
  commit(types.SET_PROJECTS, payload)
}

export const setLoading = ({commit}, payload) => {
  commit(types.SET_LOADING, payload)
}

export const setFormEditMode = ({commit}, payload) => {
  commit(types.SET_FORM_EDIT_MODE, payload)
}

export const setFormDialog = ({commit}, payload) => {
  commit(types.SET_FORM_DIALOG, payload)
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

export const setFormProjectId = ({commit}, payload) => {
  commit(types.SET_FORM_PROJECT_ID, payload)
}

export const setFormName = ({commit}, payload) => {
  commit(types.SET_FORM_NAME, payload)
}

export const setFormDescription = ({commit}, payload) => {
  commit(types.SET_FORM_DESCRIPTION, payload)
}

export const setFormInit = ({commit}, payload) => {
  commit(types.SET_FORM_INIT, payload)
}

export const setFormIsOpenSource = ({commit}, payload) => {
  commit(types.SET_FORM_IS_OPEN_SOURCE, payload)
}

export const getProjects = async ({dispatch}) => {
  try {
    dispatch('setLoading', true)
    const {request} = await requests.projects.all()
    dispatch('setTableRows', request.response)
    dispatch('setProjects', request.response)
    dispatch('setLoading', false)
    return Promise.resolve(request.response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const showProject = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    const {request} = await requests.projects.show({project_id: payload})
    dispatch('setFormProjectId', request.response.id)
    dispatch('setFormName', request.response.name)
    dispatch('setFormDescription', request.response.description)
    dispatch('setFormInit', request.response.init)
    dispatch('setFormIsOpenSource', request.response.is_open_source)
    dispatch('setFormEditMode', true)
    dispatch('setFormDialog', true)
    dispatch('setLoading', false)
    return Promise.resolve(request.response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const createProject = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    await requests.projects.create(getters.getForm)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateProject = async ({dispatch, getters}) => {
  try {
    dispatch('setLoading', true)
    await requests.projects.update(getters.getForm)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const dropProject = async ({dispatch}, payload) => {
  try {
    dispatch('setLoading', true)
    await requests.projects.delete({ project_id: payload })
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
