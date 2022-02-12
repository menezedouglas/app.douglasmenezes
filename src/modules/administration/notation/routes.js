export default [
  {
    name: 'Apontamentos',
    path: '/notations',
    component: () => import('./page')
  },
  {
    name: 'Relatório de Apontamentos',
    path: '/notations/report',
    component: () => import('./components/reportPDF')
  }
]
