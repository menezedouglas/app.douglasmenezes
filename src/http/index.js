import axios from 'axios'
import services from './services'
import helpers from '../../bkp/src/helpers'

axios.defaults.baseURL = 'http://192.168.0.11:8000/system/v1'

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const requests = {}

// eslint-disable-next-line array-callback-return
Object.keys(services).map(service => {
  const temp = services[service]
  requests[service] = {}
  // eslint-disable-next-line array-callback-return
  Object.keys(temp).map(item => {
    // eslint-disable-next-line no-undef
    helpers.json.extends(requests[service], {
      [item]: data => {
        switch (temp[item].method) {
          case 'get': {
            return axios({
              method: temp[item].method,
              url: `${temp[item].url}${(data) ? helpers.httpResponses.toGet(data) : ''}`,
              responseType: 'json'
            })
          }
          default: {
            return axios({
              method: temp[item].method,
              url: `${temp[item].url}`,
              responseType: 'json',
              data
            })
          }
        }
      }
    })
  })
})

export default requests
export { axios, setToken }
