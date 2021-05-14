<style scoped>
@media (min-width: 768px) {
  .form-client-card {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-client-card {
    min-width: 300px;
  }
}
</style>

<template>
  <div>
    <q-dialog
        v-model="dialog"
        persistent
    >
      <q-card class="form-client-card">
        <q-card-section>
          <div class="row">
            <div class="col">
              <h5 class="text-grey-7">Novo Cliente</h5>
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
        <q-separator/>
        <q-card-section>
          <q-form
              class="q-gutter-md"
              @submit.prevent="submit"
          >

            <q-table
                title="Usuários"
                :rows="users"
                :loading="usersLoading"
                :columns="[
                        {
                          name: 'name',
                          required: true,
                          label: 'Nome',
                          align: 'left',
                          field: 'name',
                          sortable: true
                        },
                        {
                          name: 'email',
                          label: 'E-mail',
                          align: 'left',
                          field: 'email',
                          sortable: true
                        }
                    ]"
                row-key="name"
                selection="single"
                v-model:selected="userSelected"
                :filter="userFilter"
            >
              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="userFilter" placeholder="Pesquisar">
                  <template v-slot:append>
                    <q-icon name="fas fa-search"/>
                  </template>
                </q-input>
              </template>
            </q-table>

            <q-input
                filled
                v-model="full_name"
                label="Nome Completo *"
                hint="Nome completo do cliente (Obrigatório)"
                lazy-rules=""
                :rules="[ val => val && val.length > 0 || 'Por favor, este campo não pode ficar em branco']"
            />

            <q-input
                filled
                v-model=fantasy_name
                label="Nome Fantasia"
                hint="Nome fantasia (p/ empresas)"
                lazy-rules=""
            />

            <!-- Init - Document Inputs -->
            <q-card>
              <q-card-section>
                <h6 class="text-grey-5">Documento</h6>
              </q-card-section>
              <q-card-section>
                <div class="row q-gutter-sm">
                  <div class="col-5">
                    <q-select
                        filled
                        v-model="document_type"
                        use-input
                        input-debounce="0"
                        label="Tipo *"
                        :options="options"
                        @filter="filterFn"
                        behavior="dialog"
                        :loading="loading"
                        :disable="loading"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            Sem resultados
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </div>
                  <div class="col-6">
                    <q-input
                        filled
                        v-model="document"
                        :label="`Número do ${document_type || 'Documento'}`"
                        :disable="(! document_type)"
                        :mask="maskDocument"
                        lazy-rules=""
                        :rules="[
                          val => val && val.length > 0 || 'Por favor, este campo não pode ficar em branco',
                          val => !isNaN(val) || 'Somente números'
                        ]"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <!-- End - Document Input -->

            <q-input
                filled
                v-model="email"
                label="E-mail *"
                hint="E-mail para contato (obrigatório)"
                lazy-rules=""
                :rules="[ val => val && val.length > 0 || 'Por favor, este campo não pode ficar em branco']"
            />

            <q-input
                filled
                v-model="phone"
                label="Telefone"
                hint="Telefone para contato"
                :mask="maskPhone"
                lazy-rules=""
            />

            <div class="flex items-end justify-end">
              <q-btn
                  type="submit"
                  ripple=""
                  color="positive"
                  icon="far fa-save"
                  label="Salvar"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'formClient',
  data() {
    return {
      maskPhone: '',
      maskDocument: '',
      users: [],
      userFilter: '',
      userSelected: []
    }
  },
  computed: {
    usersLoading: {
      set(val) {
        this.$store.dispatch('user/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['user/getLoading']
      }
    },
    loading: {
      set(val) {
        this.$store.dispatch('client/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['client/getLoading']
      }
    },
    form: {
      set(val) {
        this.$store.dispatch('client/ActionSetForm', val)
      },
      get() {
        return this.$store.getters['client/getForm']
      }
    },
    editMode: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDialogEditMode', val)
      },
      get() {
        return this.$store.getters['client/getFormDialogEditMode']
      }
    },
    clientShow: {
      set (val) {
        this.$store.dispatch('client/ActionSetClientShow', val)
      },
      get () {
        return this.$store.getters['client/getClientShow']
      }
    },
    userId: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormUserId', val)
      },
      get() {
        return this.$store.getters['client/getFormUserId']
      }
    },
    full_name: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormFullName', val)
      },
      get() {
        return this.$store.getters['client/getFormFullName']
      }
    },
    fantasy_name: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormFantasyName', val)
      },
      get() {
        return this.$store.getters['client/getFormFantasyName']
      }
    },
    document_type: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDocumentType', val)
      },
      get() {
        return this.$store.getters['client/getFormDocumentType']
      }
    },
    document: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDocument', val)
      },
      get() {
        return this.$store.getters['client/getFormDocument']
      }
    },
    email: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormEmail', val)
      },
      get() {
        return this.$store.getters['client/getFormEmail']
      }
    },
    phone: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormPhone', val)
      },
      get() {
        const val = this.$store.getters['client/getFormPhone']

        return (val) ? val : ''
      }
    },
    dialog: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDialog', val)
      },
      get() {
        return this.$store.getters['client/getFormDialog']
      }
    },
    options: {
      set(val) {

        let opt = []

        val.map(item => {
          opt.push(item.value.toUpperCase())
        })

        this.$store.dispatch('client/ActionSetOptions', opt)
      },
      get() {
        return this.$store.getters['client/getOptions']
      }
    },
    refCodes: {
      async set(val) {
        try {
          await this.$store.dispatch('refCodes/ActionSetCodes', val)
          this.options = this.refCodes
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
          if (error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      },
      get() {
        return this.$store.getters['refCodes/getCodes']
      }
    },
    refCodes_loading: {
      set(val) {
        this.$store.dispatch('refCodes/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['refCodes/getLoading']
      }
    }
  },
  watch: {
    async dialog(val) {
      if (val) {
        this.refCodes = 'document_type'
        this.users = await this.getUsers()
      } else {
        Object.keys(this.form).map(key => {
          this[key] = ''
        })
      }
    },
    document_type(val) {
      this.maskDocument = (val === 'CPF') ? '###.###.###-##' : "##.###.###/####-##"
    },
    phone(val) {
      this.maskPhone = (val.length <= 10) ? `(##) #### - #####` : `(##) # #### - ####`
    },
    userSelected(val) {
      this.userId = val[0].id
    }
  },
  methods: {
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.refCodes = 'document_type'
          this.options = this.refCodes
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.refCodes.filter(v => v.value.toLowerCase().indexOf(needle) > -1)
      })
    },
    async getUsers() {
      try {
        const users = await this.$store.dispatch('user/ActionGetUsers')
        if(this.editMode) {
          users.map(user => {
            if(user.id === this.userId) {
              this.userSelected.push(user)
            }
          })
        }
        return users
      } catch (error) {
        this.$store.dispatch('messages/ActionSetErrors', error)
        if (error.request.status === 401) {
          this.$store.dispatch('login/ActionLogOut')
          await this.$router.push('/login')
        }
        return []
      }
    },
    async submit() {
      try {
        this.$q.loading.show()
        if(this.editMode) {
          // await this.$store.dispatch('client/ActionCreateClients', this.form)
        } else {
          await this.$store.dispatch('client/ActionCreateClients', this.form)
        }
        this.$q.loading.hide()
        this.dialog = false
        if(this.editMode) {
          // this.$store.dispatch('messages/ActionAddMessage', {
          //   bg: 'positive',
          //   message: 'Cliente criado com sucesso'
          // })
        } else {
          this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Cliente criado com sucesso'
          })
        }
      } catch (error) {
        this.$q.loading.hide()
        this.$store.dispatch('messages/ActionSetErrors', error)
      }
    }
  }
}
</script>
