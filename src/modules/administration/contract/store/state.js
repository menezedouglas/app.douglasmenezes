import { ref } from 'vue'

export default {
  contracts: ref([]),
  formDialog: ref(false),
  formDialogEditMode: ref(false),
  options: {
    clients: ref([]),
    services: ref([])
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
        sortable: true
      },
      {
        name: 'end_validity',
        label: 'Término',
        align: 'center',
        field: 'end_validity',
        sortable: true
      },
      {
        name: 'value',
        label: 'R$',
        align: 'center',
        field: 'value',
        sortable: true
      },
      {
        name: 'type_value',
        label: 'Pagamento',
        align: 'center',
        field: 'type_value',
        sortable: false
      },
      {
        name: 'actions',
        label: '',
        align: 'center',
        field: 'actions',
        sortable: false
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
    type_value: ref(0)
  },
  loading: ref(false)
}
