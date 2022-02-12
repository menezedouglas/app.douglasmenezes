<style scoped>
  @media screen and (min-width: 761px) {
    .card-report {
      min-width: 450px;
    }
  }

  @media screen and (max-width: 760px) {
    .card-report {
      min-width: 300px;
    }
  }
</style>

<template>
  <q-dialog
    v-model="dialog"
    persistent
  >
    <q-card class="card-report">
      <q-card-section>
        <h6 class="text-grey-6">Emitir Relatório de Apontamento</h6>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-md">
        <q-select
          filled
          v-model="contractId"
          label="Contrato"
          :options="contracts"
          :loading="contractsLoading"
          :disable="contractsLoading"
          option-label="id"
          option-value="id"
          emit-value
          map-options
        />

        <q-select
          filled
          v-model="month"
          label="Mês"
          :options="getMonths()"
          :loading="loading"
          :disable="loading"
          emit-value
          map-options
          behavior="dialog"
        />

        <q-select
          filled
          v-model="year"
          label="Ano"
          :options="getYears()"
          :loading="loading"
          :disable="loading"
          emit-value
          map-options
          behavior="dialog"
        />

        <q-toggle
          v-model="response_type"
          checked-icon="table_view"
          color="red"
          :label="`Retorno em ${response_type ? 'Excel' : 'PDF'}`"
          unchecked-icon="picture_as_pdf"
        />
      </q-card-section>
      <q-separator />
      <q-card-section class="flex justify-between">
        <q-btn
          size="sm"
          label="Cancelar"
          color="grey"
          @click="dialog = !dialog"
          :loading="loading"
          :disable="loading"
        />
        <q-btn
          size="sm"
          label="Gerar Relatório"
          color="positive"
          @click="generate()"
          :loading="loading"
          :disable="loading"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { jsPDF } from 'jspdf'
import reportPDF from "src/modules/administration/notation/components/reportPDF";
export default {
  name: "report",
  data () {
    return {
      file: '',
      response_type: false
    }
  },
  computed: {
    contracts: {
      async set (val) {
        try {
          await this.$store.dispatch('contracts/ActionGetContracts', val)
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
    loading: {
      set (val) {
        this.$store.dispatch('notation/setLoading', val)
      },
      get () {
        return this.$store.getters['notation/getLoading']
      }
    },
    dialog: {
      set (val) {
        this.$store.dispatch('notation/setReportDialog', val)
      },
      get () {
        return this.$store.getters['notation/getReportDialog']
      }
    },
    data: {
      async set (val) {
        try {
           await this.$store.dispatch('notation/setReportData', val)
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['notation/getReportData']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('notation/setReportForm', val)
      },
      get () {
        return this.$store.getters['notation/getReportForm']
      }
    },
    contractId: {
      set (val) {
        this.$store.dispatch('notation/setReportFormContractID', val)
      },
      get () {
        return this.$store.getters['notation/getReportFormContractId']
      }
    },
    month: {
      set (val) {
        this.$store.dispatch('notation/setReportFormMonth', val)
      },
      get () {
        return this.$store.getters['notation/getReportFormMonth']
      }
    },
    year: {
      set (val) {
        this.$store.dispatch('notation/setReportFormYear', val)
      },
      get () {
        return this.$store.getters['notation/getReportFormYear']
      }
    }
  },
  methods: {
    getYears () {
      const init = 2020
      const max = new Date().getFullYear()

      let response = []

      for(let y = init; y <= max; y++) {
        response.push({
          label: y,
          value: y
        })
      }

      return response
    },
    getMonths () {
      const months =
        'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro'
          .split(',')

      let response = []

      months.map((month, key) => {
        response.push({
          value: key  + 1,
          label: month
        })
      })

      return response
    },
    async generate () {
      try {
        this.$q.loading.show()
        await this.$store.dispatch('notation/setReportData', this.response_type)
        window.open(this.data.url,"text/pdf")
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
  },
  created() {
    this.contracts = ''
  }
}
</script>
