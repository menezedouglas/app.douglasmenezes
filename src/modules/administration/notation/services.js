export default {
  create: {
    method: 'post',
      url: 'notation/create'
  },
  update: {
    method: 'put',
    url: 'notation/update'
  },
  show: {
    method: 'get',
    url: 'notation/show'
  },
  showByContract: {
    method: 'get',
    url: 'notation/show/by-contract'
  },
  all: {
    method: 'get',
    url: 'notation/all'
  },
  delete: {
    method: 'get',
    url: 'notation/delete'
  },
  reportByContract: {
    method: 'get',
    url: 'notation/report/contract'
  }
}
