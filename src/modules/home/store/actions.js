import * as types from './mutation-types'
import axios from 'axios'

export const setLoading = ({commit}, payload) => commit(types.SET_LOADING, payload)
export const setProjects = ({commit}, payload) => commit(types.SET_PROJECTS, payload)
export const setVerticalScroll = ({commit}, payload) => commit(types.SET_VERTICAL_SCROLL, payload)
export const setGoto = ({commit}, payload) => commit(types.SET_GO_TO, payload)

export async function loadCounters ({ dispatch }) {
  try {
    dispatch('setLoading', true)
    const { data } = await axios.get('https://api.github.com/users/menezedouglas/repos')
    
    console.log(data)
    
    dispatch('setProjects', data)
    dispatch('setLoading', false)
    return Promise.resolve({
      repositories: data.length,
      commits
    })
  } catch (error) {
    dispatch('setProjects', [])
    dispatch('setLoading', false)
    return Promise.reject(error)
  }
}
