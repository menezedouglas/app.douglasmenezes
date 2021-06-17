import { ref } from 'vue'

export default {
  services: ref([]),
  loading: ref(false),
  table: {
    cols: ref([
      {
        name: 'name',
        label: 'Nome',
        field: 'name',
        required: true,
        sortable: true
      },
      {
        name: 'description',
        label: 'Descrição',
        field: 'description',
        required: true,
        sortable: true
      },
      {
        name: 'delivery_time',
        label: 'Tempo de entrega',
        field: 'delivery_time',
        required: true,
        sortable: true
      },
      {
        name: 'type_value',
        label: 'Tipo de Cobrança',
        field: 'type_value',
        required: true,
        sortable: true
      },
      {
        name: 'value',
        label: 'Valor',
        field: 'value',
        required: true,
        sortable: true
      },
      {
        name: 'type_service_state',
        label: 'Situação do serviço',
        field: 'type_service_state',
        required: true,
        sortable: true
      }
    ]),
    rows: ref([]),
    selected: ref([]),
    filter: ref('')
  },
  formEditMode: ref(false),
  formDialog: ref(false),
  form: {
    service_id: ref(0),
    name: ref(''),
    description: ref(''),
    delivery_time: ref(0),
    value: ref(0),
    type_value: ref(''),
    type_service_state: ref('')
  }
}
