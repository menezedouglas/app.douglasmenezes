import { ref } from 'vue'

export default {
    clients: [],
    formDialog: false,
    options: [],
    form: {
        user_id: ref(0),
        full_name: ref(''),
        fantasy_name: ref(''),
        document_type: ref(''),
        document: ref(0),
        email: ref(''),
        phone: ref('')
    },
    loading: false
}
