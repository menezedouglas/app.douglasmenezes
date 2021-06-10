import { ref } from 'vue'
import helpers from 'src/helpers'

export default {
  notations: ref([]),
  loading: ref(false),
  formDialog: ref(false),
  formEditMode: ref(false),
  table: {
    cols: ref([
      {
        name: 'contract_id',
        label: 'Contrato',
        field: 'contract_id',
        format: val => `Contrato #${val}`,
        align: 'center',
        sortable: true
      },
      {
        name: 'type_notation_description',
        label: 'Tipo',
        field: 'type_notation_description',
        align: 'center',
        sortable: true
      },
      {
        name: 'reference',
        label: 'Referência',
        field: 'reference',
        align: 'center',
        sortable: true,
        format: val => helpers.date.format('d/m/y', val)
      },
      {
        name: 'enter',
        label: 'Entrada',
        field: 'enter',
        align: 'center',
        sortable: true
      },
      {
        name: 'leave',
        label: 'Saída',
        field: 'leave',
        align: 'center',
        sortable: true
      },
      {
        name: 'note',
        label: 'Observações',
        field: 'note',
        align: 'center',
        sortable: true
      },
      {
        name: 'actions',
        label: '',
        field: 'actions',
        align: 'center',
        sortable: false
      }
    ]),
    rows: ref([]),
    filter: ref(''),
    selected: ref([])
  },
  form: {
    notation_id: ref(0),
    contract_id: ref(null),
    type_notation: ref(''),
    reference: ref(''),
    enter: ref(''),
    leave: ref(''),
    note: ref('')
  },
  day: {
    contract: ref(0),
    now: ref(new Date()),
    notations: ref([])
  },
  report: {
    dialog: ref(false),
    data: ref({}),
    form: {
      contract_id: ref(null),
      month: ref(''),
      year: ref('')
    }
  }
}
