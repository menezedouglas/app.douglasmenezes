import { ref } from 'vue'

export default {
    contracts: ref([]),
    formDialog: ref(false),
    formDialogEditMode: ref(false),
    options: ref([]),
    contractShow: ref({}),
    tableFilter: ref(''),
    form: {
        contract_id: ref(0),
        client_id: ref(0),
        service_id: ref(0),
        start_validity: ref(''),
        end_validity: ref(''),
        value: ref(0),
        type_value: ref(0)
    },
    loading: ref(false)
}
