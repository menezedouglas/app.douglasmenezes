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
          <q-select
            v-model="clientId"
            label="Clientes"
            :options="optionsClients"
            :loading="clientLoading"
            :disable="clientLoading"
            filled
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import { ref } from 'vue'
export default {
  name: 'formClient',
  computed: {
    options: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetOptions', val)
      },
      get () {
        return this.$store.getters['contracts/getOptions']
      }
    },
    optionsClients: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetOptionsClients', val)
      },
      get () {
        return JSON.parse(JSON.stringify(this.$store.getters['contracts/getOptionsClients']))
      }
    },
    optionsServices: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetOptionsServices', val)
      },
      get () {
        return this.$store.getters['contracts/getOptionsServices']
      }
    },
    clients: {
      async set (/* val */) {
        try {
          await this.$store.dispatch('client/ActionGetClients')
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
    },
    clients (val) {
      const options = []
      val.map(client => {
        options.push({
          label: client.fantasy_name,
          value: client.id
        })
      })
      this.optionsClients = options
    }
  },
  methods: {
    async setErrors (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  },
}
</script>
