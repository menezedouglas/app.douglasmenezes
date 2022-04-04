import * as types from './mutation-types'

export const setLoading = ({ commit }, payload) => commit(types.set_loading, payload)
export const setProjects = ({ commit }, payload) => commit(types.set_projects, payload)
