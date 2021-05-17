<style scoped>
@media (min-width: 768px) {
  .form-contract-dialog {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-contract-dialog {
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
      <q-card class="form-contract-dialog">
        <q-card-section>
          <div class="row">
            <div class="col">
              <h5 class="text-grey-7">{{ (editMode) ? `Editar` : `Novo` }} Contrato</h5>
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


          <q-table
              title="Clientes"
              :rows="clients"
              :loading="clientLoading"
              :columns="clientColumns"
              row-key="name"
              selection="single"
              v-model:selected="clientSelected"
              :filter="clientFilter"
          >
            <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="clientFilter" placeholder="Pesquisar">
                <template v-slot:append>
                  <q-icon name="fas fa-search"/>
                </template>
              </q-input>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'formClient',
  setup () {
    const clientColumns = [
      {
        name: 'fantasy_name',
        required: true,
        align: 'center',
        label: 'Nome Fantasia',
        field: 'fantasy_name',
        sortable: true
      },
      {
        name: 'document_type',
        align: 'center',
        label: 'Tipo de Documento',
        field: 'document_type',
        sortable: true,
        render: val => val.toUpperCase()
      },
      {
        name: 'document',
        align: 'center',
        label: 'Documento',
        field: 'document',
        sortable: true
      }
    ]

    let clientFilter = ''
    let clientSelected = []

    return {
      clientColumns,
      clientFilter,
      clientSelected
    }
  },
  computed: {
    clients: {
      async set (/* val */) {
        try {
          await this.$store.dispatch('client/ActionSetClients')
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['client/getClients']
      }
    },
    clientLoading: {
      set (val) {
        this.$store.dispatch('client/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['client/getLoading']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormDialogEditMode', val)
      },
      get () {
        return this.$store.getters['contracts/getFormDialogEditMode0']
      }
    },
    loading: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['contracts/getLoading']
      }
    },
    dialog: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormDialog', val)
      },
      get () {
        return this.$store.getters['contracts/getFormDialog']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetForm', val)
      },
      get () {
        return this.$store.getters['contracts/getForm']
      }
    },
    clientId: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormClientId', val)
      },
      get () {
        return this.$store.getters['contracts/getFormClientId']
      }
    },
    serviceId: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormServiceId', val)
      },
      get () {
        return this.$store.getters['contracts/getFormServiceId']
      }
    },
    startValidity: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormStartValidity', val)
      },
      get () {
        return this.$store.getters['contracts/getFormStartValidity']
      }
    },
    endValidity: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormEndValidity', val)
      },
      get () {
        return this.$store.getters['contracts/getFormEndValidity']
      }
    },
    value: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormValue', val)
      },
      get () {
        return this.$store.getters['contracts/getFormValue']
      }
    },
    typeValue: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormTypeValue', val)
      },
      get () {
        return this.$store.getters['contracts/getFormTypeValue']
      }
    }
  },
  watch: {
    dialog (val) {
      if(val) {
        this.clients = ''
      }
    }
  },
  methods: {
    async setErrors (error) {
      this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  },
}
</script>
