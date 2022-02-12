import {ref} from 'vue'

export default {
  id: ref(0),
  name: ref(''),
  email: ref(''),
  loading: ref(false),
  users: ref([]),
  formDialog: ref(false),
  formEditMode: ref(false),
  form: {
    user_id: ref(0),
    name: ref(''),
    email: ref(''),
    password: ref('')
  }
}
