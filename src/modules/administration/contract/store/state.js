import { ref } from 'vue'
import helpers from 'src/helpers'

export default {
  contracts: ref([]),
  formDialog: ref(false),
  formDialogEditMode: ref(false),
  options: {
    clients: ref([]),
    services: ref([]),
    typeValue: ref([])
  },
  contractShow: ref({}),
  table: {
    filter: ref(''),
    columns: ref([
      {
        name: 'id',
        required: true,
        align: 'center',
        label: '#',
        field: 'id',
        sortable: true
      },
      {
        name: 'start_validity',
        label: 'Início',
        align: 'center',
        field: 'start_validity',
        sortable: true,
        format: val => {
          return new Date(val).toLocaleDateString()
        }
      },
      {
        name: 'end_validity',
        label: 'Término',
        align: 'center',
        field: 'end_validity',
        sortable: true,
        format: val => {
          return new Date(val).toLocaleDateString()
        }
      },
      {
        name: 'value',
        label: 'R$',
        align: 'center',
        field: 'value',
        sortable: true,
        format: val => {
          return helpers.numeric.format.value(val)
        }
      },
      {
        name: 'type_value',
        label: 'Pagamento',
        align: 'center',
        field: 'type_value',
        sortable: false
      },
      {
        name: 'status',
        label: '',
        align: 'center',
        field: 'status',
        sortable: false,
      }
    ]),
    rows: ref([]),
    selected: ref([])
  },
  form: {
    contract_id: ref(null),
    client_id: ref(null),
    service_id: ref(null),
    start_validity: ref(''),
    end_validity: ref(''),
    value: ref(0),
    type_value: ref('')
  },
  loading: ref(false)
}
