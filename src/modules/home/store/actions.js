import * as types from './mutation-types'
import axios from 'axios'

export const setLoading = ({commit}, payload) => commit(types.SET_LOADING, payload)
export const setProjects = ({commit}, payload) => commit(types.SET_PROJECTS, payload)

export async function loadProjects ({ dispatch }) {
  try {
    dispatch('setLoading', true)
    const { data } = await axios.get('https://api.github.com/users/menezedouglas/repos')
    dispatch('setProjects', data)
    dispatch('setLoading', false)
    return Promise.resolve()
  } catch (error) {
    dispatch('setProjects', [])
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}
