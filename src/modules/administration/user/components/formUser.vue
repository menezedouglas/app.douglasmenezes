<style scoped>
@media (min-width: 768px) {
  .form-user-card {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-user-card {
    min-width: 300px;
  }
}
</style>

<template>
  <q-dialog
    v-model="dialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="form-user-card">
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5 class="text-grey-7">{{ (editMode) ? `Editando o (a) ${name.split(' ')[0]}` : `Novo Usuário` }}</h5>
          </div>
          <div class="col-auto">
            <q-btn
              dense
              round
              flat
              icon="fas fa-times"
              color="grey"
              @click="dialog = !dialog"
            >
              <q-tooltip anchor="center left" self="center right" class="bg-red text-white">
                Fechar o formulário
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-md">
        <q-form
          @submit.prevent="submit"
        >
          <q-input
            v-model="name"
            label="Nome"
            filled
            lazy-rules=""
            :disable="loading"
            :rules="[
            val => val  && val !== '' || 'Por favor, este campo não pode ficar em branco!'
          ]"
          />

          <q-input
            v-model="email"
            type="email"
            label="E-mail"
            filled
            lazy-rules=""
            :disable="loading"
            :rules="[
            val => val  && val !== '' || 'Por favor, este campo não pode ficar em branco!'
          ]"
          />

          <q-input
            v-if="!editMode"
            v-model="password"
            type="password"
            label="Senha"
            filled
            lazy-rules=""
            :disable="loading"
            :rules="[
              val => val  && val !== '' || 'Por favor, este campo não pode ficar em branco!'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="flex items-end justify-end">
            <q-btn
              type="submit"
              ripple=""
              color="positive"
              icon="fas fa-save"
              label="Salvar"
              :loading="loading"
              :disable="loading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "formUser",
  data () {
    return {
      isPwd: ref(true)
    }
  },
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('user/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['user/getLoading']
      }
    },
    dialog: {
      set (val) {
        if(val && !this.editMode) {
          Object.keys(this.form).map(key => {
            this.form[key] = ''
          })
        }
        this.$store.dispatch('user/ActionSetFormDialog', val)
      },
      get () {
        return this.$store.getters['user/getFormDialog']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('user/ActionSetFormEditMode', val)
      },
      get () {
        return this.$store.getters['user/getFormEditMode']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('user/ActionSetForm', val)
      },
      get () {
        return this.$store.getters['user/getForm']
      }
    },
    userId: {
      set (val) {
        this.$store.dispatch('user/ActionSetFormUserId', val)
      },
      get () {
        return this.$store.getters['user/getFormUserId']
      }
    },
    name: {
      set (val) {
        this.$store.dispatch('user/ActionSetFormName', val)
      },
      get () {
        return this.$store.getters['user/getFormName']
      }
    },
    email: {
      set (val) {
        this.$store.dispatch('user/ActionSetFormEmail', val)
      },
      get () {
        return this.$store.getters['user/getFormEmail']
      }
    },
    password: {
      set (val) {
        this.$store.dispatch('user/ActionSetFormPassword', val)
      },
      get () {
        return this.$store.getters['user/getFormPassword']
      }
    }
  },
  methods: {
    async submit() {
      try {
        if(this.editMode) {
          await this.$store.dispatch('user/ActionUpdateUser', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Usuário Atualizado'
          })
        } else {
          await this.$store.dispatch('user/ActionCreateUser', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Usuário Criado'
          })
        }
        this.dialog = false
      } catch (error) {
        await this.$store.dispatch('messages/ActionSetErrors', error)
        if(error.request.status === 401) {
          await this.$store.dispatch('login/ActionLogOut')
          await this.$router.push('/login')
        }
      }
    }
  }
}
</script>
