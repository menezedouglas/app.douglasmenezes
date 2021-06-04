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
        filed: 'name',
        align: 'center',
        sortable: true
      },
      {
        name: 'description',
        label: 'Descrição',
        filed: 'description',
        align: 'center',
        sortable: true
      },
      {
        name: 'init',
        label: 'Criado em',
        filed: 'init',
        align: 'center',
        sortable: true
      },
      {
        name: 'is_open_source',
        label: 'Código aberto',
        filed: 'is_open_source',
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
