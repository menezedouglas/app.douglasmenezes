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
    
    let commits = 0

    for (let i = 0; i < data.length; i++) {
      const response = await axios.get(`https://api.github.com/repos/menezedouglas/${data[i].name}/stats/commit_activity`)

      for(let k = 0; k < response.data.length; k++) {

        commits += response.data[k].total

      }

    }
    
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
