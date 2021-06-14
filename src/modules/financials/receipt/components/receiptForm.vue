<style scoped>
@media (min-width: 768px) {
  .form-receipt-card {
    min-width: 500px;
  }
}

@media (max-width: 767px) {
  .form-receipt-card {
    min-width: 300px;
  }
}
</style>


<template>
  <q-dialog
    v-model="dialog"
    persistent
  >
    <q-card
      class="form-receipt-card"
    >
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5 class="text-grey-7">{{ (editMode) ? `Editar` : `Adicionar` }} Recebimento</h5>
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
      <q-card-section class="q-gutter-md">
        <q-select
          filled
          label="Contrato"
          v-model="formContractId"
          :options="contracts"
          option-value="id"
          option-label="id"
          :loading="contractLoading"
          map-options
          emit-value
        />

        <q-card>
          <q-card-section>
            <h6 class="text-grey-8">
              Referência
            </h6>
            <q-separator />
            <q-card-section class="row q-gutter-md">
              <div class="col">
                <q-select
                  filled
                  use-input
                  label="Ano"
                  v-model="year"
                  :options="optionsYear"
                  @filter="filterYear"
                  map-options
                  emit-value
                  behavior="dialog"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        Nada foi encontrado
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="col">
                <q-select
                  filled
                  use-input
                  label="Mês"
                  v-model="month"
                  :options="optionsMonth"
                  @filter="filterMonth"
                  map-options
                  emit-value
                  behavior="dialog"
                  :disable="(! year)"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        Nada foi encontrado
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "receiptForm",
  data () {
    return {
      year: ref(''),
      month: ref(''),
      optionsMonth: ref([]),
      optionsYear: ref([])
    }
  },
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('receipt/setLoading', val)
      },
      get () {
        return this.$store.getters['receipt/getLoading']
      }
    },
    contractLoading: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['contracts/getLoading']
      }
    },
    contracts: {
      async set (val) {
        try {
          await this.$store.dispatch('contracts/ActionGetContracts', val)
        } catch (error) {
          await this.setError(error)
        }
      },
      get () {
        return this.$store.getters['contracts/getContracts']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('receipt/setForm', val)
      },
      get () {
        return this.$store.getters['receipt/getForm']
      }
    },
    formContractId: {
      set (val) {
        this.$store.dispatch('receipt/setFormContractId', val)
      },
      get () {
        return this.$store.getters['receipt/getFormContractId']
      }
    },
    formReferenceMonth: {
      set (val) {
        this.$store.dispatch('receipt/setFormReferenceMonth', val)
      },
      get () {
        return this.$store.getters['receipt/getFormReferenceMonth']
      }
    },
    formValue: {
      set (val) {
        this.$store.dispatch('receipt/setFormValue', val)
      },
      get () {
        return this.$store.getters['receipt/getFormValue']
      }
    },
    formShelfLife: {
      set (val) {
        this.$store.dispatch('receipt/setFormShelfLife', val)
      },
      get () {
        return this.$store.getters['receipt/getFormShelfLife']
      }
    },
    formUrlToDownload: {
      set (val) {
        this.$store.dispatch('receipt/setFormUrlToDownload', val)
      },
      get () {
        return this.$store.getters['receipt/getFormUrlToDownload']
      }
    },
    dialog: {
      set (val) {
        this.$store.dispatch('receipt/setFormDialog', val)
      },
      get () {
        return this.$store.getters['receipt/getFormDialog']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('receipt/setFormEditMode', val)
      },
      get () {
        return this.$store.getters['receipt/getFormEditMode']
      }
    }
  },
  watch: {
    dialog (val) {
      if(val) {
        this.contracts = ''
        this.optionsYear = this.generateYearOptions()
        this.optionsMonth = this.generateMonthOptions()
      }
    },
    month (val) {
      if(val !== '') {
        this.formReferenceMonth = `01/${(this.month + 1 < 10) ? `0${this.month + 1}` : this.month + 1}/${this.year}`
      }
    },
    formReferenceMonth (val) {
      console.log(val)
    }
  },
  methods: {
    generateYearOptions () {
      const minYear = 2020
      const maxYear = new Date().getFullYear()
      let optionsYear = []
      for (let y = minYear; y <= maxYear; y++) {
       optionsYear.push({
          value: y,
          label: y
        })
      }
      return optionsYear
    },
    generateMonthOptions () {
      const months = 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro'.split(',')
      let optionsMonth = []
      for(let m = 0; m < 12; m++) {
        optionsMonth.push({
          value: m,
          label: months[m]
        })
      }
      return optionsMonth
    },
    filterYear (val, update) {
      if (val === '') {
        update(() => {
          this.optionsYear = this.generateYearOptions()
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsYear = this.generateYearOptions().filter(v => v.label.toString().toLowerCase().indexOf(needle) > -1)
      })
    },
    filterMonth (val, update) {
      if (val === '') {
        update(() => {
          this.optionsMonth = this.generateMonthOptions()
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsMonth = this.generateMonthOptions().filter(v => v.label.toString().toLowerCase().indexOf(needle) > -1)
      })
    },
    async submit () {
      try {

      } catch (error) {
        await this.setError(error)
      }
    },
    async setError (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  }
}
</script>
