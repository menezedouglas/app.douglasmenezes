import { ref } from 'vue'
import helpers from 'src/helpers'

export default {
  loading: ref(false),
  table: {
    cols: ref([
      {
        name: 'reference_month',
        label: 'Referência',
        field: 'reference_month',
        sortable: true,
        format: val => helpers.date.format('m/y', val)
      },
      {
        name: 'value',
        label: 'R$',
        field: 'value',
        sortable: true,
        format: val => helpers.numeric.format.value(val)
      },
      {
        name: 'shelf_life',
        label: 'Validade da nota',
        field: 'shelf_life',
        sortable: true,
        format: val => helpers.date.format('d/m/y', val)
      },
      {
        name: 'actions',
        label: '',
        field: 'actions',
        sortable: false
      }
    ]),
    rows: ref([]),
    filter: ref(''),
    selected: ref([])
  },
  formEditMode: ref(false),
  formDialog: ref(false),
  form: {
    receipt_id: ref(0),
    contract_id: ref(0),
    reference_month: ref(''),
    value: ref(''),
    shelf_life: ref(''),
    url_to_download: ref(''),
  }
}
