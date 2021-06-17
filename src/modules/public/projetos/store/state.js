import { ref } from 'vue'

export default {
  projects: ref([]),
  loading: ref(false),
  formEditMode: ref(false),
  formDialog: ref(false),
  table: {
    cols: ref([
      {
        name: 'name',
        label: 'Nome',
        field: 'name',
        align: 'center',
        sortable: true
      },
      {
        name: 'description',
        label: 'Descrição',
        field: 'description',
        align: 'center',
        sortable: true
      },
      {
        name: 'init',
        label: 'Criado em',
        field: 'init',
        align: 'center',
        sortable: true,
        format (val) {
          const date = new Date(val)

          return `${
            (date.getDate() < 10) ?
              `0${date.getDate()}` : date.getDate()
          }/${
            (date.getMonth() + 1 < 10) ?
              `0${date.getMonth() + 1}` : date.getMonth() + 1
          }/${date.getFullYear()}`
        }
      },
      {
        name: 'end',
        label: 'Previsão de Término',
        field: 'end',
        align: 'center',
        sortable: true,
        format (val) {
          const date = new Date(val)

          return `${
            (date.getDate() < 10) ?
              `0${date.getDate()}` : date.getDate()
          }/${
            (date.getMonth() + 1 < 10) ?
              `0${date.getMonth() + 1}` : date.getMonth() + 1
          }/${date.getFullYear()}`
        }
      },
      {
        name: 'is_open_source',
        label: 'Código aberto',
        field: 'is_open_source',
        align: 'center',
        format: val => (val === 0) ? `Não` : `Sim`,
        sortable: true
      }
    ]),
    rows: ref([]),
    filter: ref(''),
    selected: ref([]),
  },
  form: {
    project_id: ref(null),
    name: ref(''),
    description: ref(''),
    init: ref(''),
    end: ref(''),
    is_open_source: ref(false),
  }
}
