<style scoped>
@media (min-width: 768px) {
  .form-service-card {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-service-card {
    min-width: 300px;
  }
}
</style>

<template>
 <q-dialog
  v-model="formDialog"
 >
    <q-card class="form-service-card">
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5 class="text-grey-7">{{ (editMode) ? `Editar` : `Novo` }} Serviço</h5>
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
          class="q-gutter-md"
          @submit.prevent="submit()"
        >
          <q-input
            filled
            v-model="formName"
            label="Nome"
            :loading="loading"
            lazy-rules=""
            :rules="[
              val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
            ]"
          />

          <q-input
            filled
            type="textarea"
            v-model="formDescription"
            label="Descrição"
            :loading="loading"
            lazy-rules=""
            :rules="[
              val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
            ]"
          />

          <q-input
            filled
            v-model="formDeliveryTime"
            label="Tempo estimado para entrega"
            hint="Em dias"
            :loading="loading"
            lazy-rules=""
            mask="##"
            :rules="[
              val => val > 0 && val <= 31 || 'Atenção, o valor deve ser entre 1 e 31!'
            ]"
          />

          <q-input
            filled
            v-model="formValue"
            label="Valor do Serviço"
            :hint="`R$ ${formValue}`"
            :loading="loading"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
          />

          <q-select
            filled
            label="Tipo de Cobrança"
            v-model="formTypeValue"
            :options="optionsTypeValue"
            :loading="loading"
            emit-value
            map-options
          />

          <q-select
            filled
            label="Situação do Serviço"
            v-model="formTypeServiceState"
            :options="optionsTypeServiceState"
            :loading="loading"
            emit-value
            map-options
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
import { ref } from 'vue'
export default {
  name: "formService",
  computed: {
    form: {
      set (val) {
        this.$store.dispatch('services/setForm', val)
      },
      get () {
        return this.$store.getters['services/getForm']
      }
    },
    formName: {
      set (val) {
        this.$store.dispatch('services/setFormName', val)
      },
      get () {
        return this.$store.getters['services/getFormName']
      }
    },
    formDescription: {
      set (val) {
        this.$store.dispatch('services/setFormDescription', val)
      },
      get () {
        return this.$store.getters['services/getFormDescription']
      }
    },
    formDeliveryTime: {
      set (val) {
        this.$store.dispatch('services/setFormDeliveryTime', val)
      },
      get () {
        return this.$store.getters['services/getFormDeliveryTime']
      }
    },
    formValue: {
      set (val) {
        this.$store.dispatch('services/setFormValue', val)
      },
      get () {
        return this.$store.getters['services/getFormValue']
      }
    },
    formTypeValue: {
      set (val) {
        this.$store.dispatch('services/setFormTypeValue', val)
      },
      get () {
        return this.$store.getters['services/getFormTypeValue']
      }
    },
    formTypeServiceState: {
      set (val) {
        this.$store.dispatch('services/setFormTypeServiceState', val)
      },
      get () {
        return this.$store.getters['services/getFormTypeServiceState']
      }
    },
    formDialog: {
      set (val) {
        this.$store.dispatch('services/setFormDialog', val)
      },
      get () {
        return this.$store.getters['services/getFormDialog']
      }
    },
    loading: {
      set (val) {
        this.$store.dispatch('services/setLoading', val)
      },
      get () {
        return this.$store.getters['services/getLoading']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('services/setFormEditMode', val)
      },
      get () {
        return this.$store.getters['services/getFormEditMode']
      }
    }
  },
  data () {
    return {
      optionsTypeValue: [],
      optionsTypeServiceState: []
    }
  },
  watch: {
    async formDialog (val) {
      if(val) {
        if(!this.editMode) {
          await this.$store.dispatch('services/clearForm')
        }
        try {
          this.loading = true
          this.optionsTypeValue = this.prepareOptions(
            await this.$store.dispatch(
              'refCodes/ActionSetCodes',
              'type_value'
            )
          )
          this.optionsTypeServiceState = this.prepareOptions(
            await this.$store.dispatch(
              'refCodes/ActionSetCodes',
              'type_service_state'
            )
          )
          this.loading = false
        } catch (error) {
          this.loading = false
          await this.loadErrors(error)
        }
      }
    },
  },
  methods: {
    async submit () {
      try {
        this.$q.loading.show()
        if (this.editMode) {
          await this.$store.dispatch('services/updateSerivce', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: `O serviço "${this.formName}" foi atualizado`
          })
        } else {
          await this.$store.dispatch('services/createSerivce', this.form)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: `O serviço "${this.formName}" foi criado`
          })
        }
        this.$q.loading.hide()
        this.formDialog = false
      } catch (error) {
        this.$q.loading.hide()
        this.loadErrors(error)
      }
    },
    prepareOptions (data) {
      let options = []
      data.map(opt => {
        options.push({
          label: opt.description,
          value: opt.value
        })
      })
      console.log(options)
      return options
    },
    loadErrors (error) {
      this.$store.dispatch('messages/ActionSetErrors',error)
      if(error.request.status === 401) {
        this.$store.dispatch('login/ActionLogOut')
        this.$router.push('/login')
      }
    }
  }
}
</script>
