<style scoped>
@media (min-width: 768px) {
  .form-notation-card {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-notation-card {
    min-width: 300px;
  }
}
</style>

<template>
  <q-dialog
    v-model="formDialog"
    persistent
  >
    <q-card
      class="form-notation-card"
    >
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5 class="text-grey-7">{{ (formEditMode) ? `Editar` : `Novo` }} Apontamento</h5>
          </div>
          <div class="col-auto">
            <q-btn
              dense
              round
              flat
              icon="fas fa-times"
              color="grey"
              @click="formDialog = !formDialog"
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
            v-model="formContractId"
            label="Contrato #"
            :options="contractsOptions"
            :loading="contractsLoading"
            option-value="id"
            option-label="id"
            emit-value
            map-options
          />

          <q-select
            v-model="formTypeNotation"
            label="Tipo de Apontamento"
            :options="refCodes"
            :loading="refCodesLoading"
            option-value="value"
            option-label="description"
            emit-value
            map-options
          />

          <q-input filled v-model="formReference" label="Referência" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="formReference">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Voltar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled v-model="formEnter" label="Entrada" :disable="(! formReference)">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="formEnter" mask="YYYY/MM/DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="formEnter" mask="YYYY/MM/DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled v-model="formLeave" label="Saída" :disable="(! formReference)">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="formLeave" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="formLeave" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            filled
            v-model="formNote"
            label="Observações"
            type="textarea"
          />

          <div class="row">
            <div class="col text-right">
              <q-btn
                type="submit"
                color="positive"
                icon="fas fa-save"
                label="Salvar"
              />
            </div>
          </div>

        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "formNotation",
  computed: {
    refCodes: {
      async set (val) {
        try {
          await this.$store.dispatch('refCodes/ActionSetCodes', val)
        } catch (error) {
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
    contractsOptions: {
      async set (/* val */) {
        try {
          await this.$store.dispatch('contracts/ActionGetContracts')
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['contracts/getContracts']
      }
    },
    contractsLoading: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['contracts/getLoading']
      }
    },
    formDialog: {
      set(val) {
        this.$store.dispatch('notation/setFormDialog', val)
      },
      get() {
        return this.$store.getters['notation/getFormDialog']
      }
    },
    formEditMode: {
      set(val) {
        this.$store.dispatch('notation/setFormEditMode', val)
      },
      get() {
        return this.$store.getters['notation/getFormEditMode']
      }
    },
    form: {
      set(val) {
        this.$store.dispatch('notation/setForm', val)
      },
      get() {
        return this.$store.getters['notation/getForm']
      }
    },
    formNotationId: {
      set(val) {
        this.$store.dispatch('notation/setFormNotationId', val)
      },
      get() {
        return this.$store.getters['notation/getFormNotationId']
      }
    },
    formContractId: {
      set(val) {
        this.$store.dispatch('notation/setFormContractId', val)
      },
      get() {
        return this.$store.getters['notation/getFormContractId']
      }
    },
    formTypeNotation: {
      set(val) {
        this.$store.dispatch('notation/setFormTypeNotation', val)
      },
      get() {
        return this.$store.getters['notation/getFormTypeNotation']
      }
    },
    formReference: {
      set (val) {
        this.$store.dispatch('notation/setFormReference', val)
      },
      get () {
        return this.$store.getters['notation/getFormReference']
      }
    },
    formEnter: {
      set (val) {
        this.$store.dispatch('notation/setFormEnter', val)
      },
      get () {
        return this.$store.getters['notation/getFormEnter']
      }
    },
    formLeave: {
      set (val) {
        this.$store.dispatch('notation/setFormLeave', val)
      },
      get () {
        return this.$store.getters['notation/getFormLeave']
      }
    },
    formNote: {
      set (val) {
        this.$store.dispatch('notation/setFormNote', val)
      },
      get () {
        return this.$store.getters['notation/getFormNote']
      }
    }
  },
  watch: {
    formReference (val) {
      if(this.formEditMode) {
        this.formEnter = `${val} ${this.formEnter}`
        this.formLeave = `${val} ${this.formLeave}`
      } else {
        this.formEnter = val
        this.formLeave = val
      }
    },
    formDialog (val) {
      if(val) {
        this.refCodes = 'type_notation'
        this.contractsOptions = ''
        if(!this.formEditMode) {
          this.$store.dispatch('notation/clearForm')
        }
      }
    }
  },
  methods: {
    async submit () {
      try {
        this.$q.loading.show()
        if(this.formEditMode) {
          await this.$store.dispatch('notation/updateNotation', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Apontamento atualizado'
          })
        } else {
          await this.$store.dispatch('notation/createNotation', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Apontamento criado'
          })
        }
        this.$q.loading.hide()
      } catch (error) {
        this.$q.loading.hide()
        await this.setErrors(error)
      }
    },
    async setErrors (error) {
      await this.$store.dispatch('messages/ActionSetErrors',error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  }
}
</script>
