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
          <q-form
            @submit.prevent="submit()"
            class="q-gutter-md"
          >
            <q-select
              v-model="clientId"
              label="Cliente no contrato"
              :options="optionsClients"
              :loading="clientLoading"
              :disable="clientLoading"
              emit-value
              map-options
              filled
            />

            <q-select
              v-model="serviceId"
              label="Serviço a ser prestado"
              :options="optionsServices"
              :loading="servicesLoading"
              :disable="servicesLoading"
              emit-value
              map-options
              filled
            />

            <q-input filled v-model="startValidity" :loading="loading" :disable="loading" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="startValidity">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Voltar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input filled v-model="endValidity" :loading="loading" :disable="loading" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="endValidity">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Voltar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              v-model="value"
              label="Valor"
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
              :loading="loading"
            />

            <q-select
              v-model="typeValue"
              label="Tipo de Cobrança"
              :options="optionsTypeValue"
              :loading="refCodesLoading"
              :disable="refCodesLoading"
              emit-value
              map-options
              filled
            />

            <div class="row">
              <div class="col text-right">
                <q-btn
                  type="submit"
                  color="positive"
                  icon="fas fa-save"
                  label="Salvar"
                  :loading="loading"
                  :disable="loading"
                />
              </div>
            </div>
          </q-form>
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
    optionsTypeValue: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetOptionsTypeValue', val)
      },
      get () {
        return this.$store.getters['contracts/getOptionsTypeValue']
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
    services: {
      async set (/* val */) {
        try {
          await this.$store.dispatch('services/obtainServices')
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['services/getServices']
      }
    },
    servicesLoading: {
      set (val) {
        this.$store.dispatch('services/setLoading', val)
      },
      get () {
        return this.$store.getters['services/getLoading']
      }
    },
    refCodes: {
      async set (val) {
        try {
          await this.$store.dispatch('refCodes/ActionSetCodes', val)
        } catch (error) {
          console.log(error)
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['refCodes/getCodes']
      }
    },
    refCodesLoading: {
      set (val) {
        this.$store.dispatch('refCodes/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['refCodes/getLoading']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormDialogEditMode', val)
      },
      get () {
        return this.$store.getters['contracts/getFormDialogEditMode']
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
        this.services = ''
        this.refCodes = 'type_value'
        if(!this.editMode) {
          this.$store.dispatch('contracts/ActionClearForm')
        } else {
          console.log(JSON.stringify(this.form))
        }
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
    },
    services (val) {
      const options = []
      val.map(service => {
        options.push({
          label: service.name,
          value: service.id
        })
      })
      this.optionsServices = options
    },
    refCodes (val) {
      const options = []
      val.map(refCode => {
        options.push({
          label: refCode.description,
          value: refCode.value
        })
      })
      this.optionsTypeValue = options
    }
  },
  methods: {
    async submit () {
      try {
        this.$q.loading.show()
         if(!this.editMode) {
           await this.$store.dispatch('contracts/ActionCreateContract', this.form)
           await this.$store.dispatch('messages/ActionAddMessage', {
             bg: 'positive',
             message: 'O contrato foi criado'
           })
         } else {
           await this.$store.dispatch('contracts/ActionUpdateContract', this.form)
           await this.$store.dispatch('messages/ActionAddMessage', {
             bg: 'positive',
             message: 'O contrato foi atualizado'
           })
         }
         this.$q.loading.hide()
      } catch (error) {
        this.$q.loading.hide()
         await this.setErrors(error)
      }
    },
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
