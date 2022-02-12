import { ref } from 'vue'

export default {
    clients: ref([]),
    formDialog: ref(false),
    formDialogEditMode: ref(false),
    options: ref([]),
    clientShow: ref({}),
    form: {
        client_id: ref(0),
        user_id: ref(0),
        full_name: ref(''),
        fantasy_name: ref(''),
        document_type: ref(''),
        document: ref(''),
        email: ref(''),
        phone: ref('')
    },
    loading: ref(false)
}
