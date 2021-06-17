<style scoped>

</style>

<template>
  <div>
    <q-dialog
      v-model="dialog"
    >
      <q-card>
        <q-card-section>
          <q-table
            flat
            :title="date"
            :columns="[
              { name: 'type_notation_description', label: 'Desc.', align: 'center', field: 'type_notation_description', sortable: true },
              { name: 'enter', label: 'Entrada', align: 'center', field: 'enter', sortable: true },
              { name: 'leave', label: 'Saída', align: 'center', field: 'leave', sortable: true },
            ]"
            :rows="dayNotations"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-card>
      <q-card-section
        horizontal
      >
        <q-card-section class="text-center">
          <q-inner-loading :showing="loading">
            <q-spinner-puff
              color="primary"
              size="2em"
            />
          </q-inner-loading>
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div>
              <h6 class="text-grey-9"><strong>{{ timer }}</strong></h6>
              <small class="text-grey-6">{{ date }}</small>
            </div>
          </transition>
        </q-card-section>
        <q-separator  vertical/>
        <q-card-section class="flex flex-center">
          <q-btn
            flat
            round
            size="sm"
            icon="fas fa-ellipsis-v"
            color="primary"
            :loading="loading"
            :disable="loading"
            @click="dialog = !dialog"
          >
            <q-tooltip anchor="center right" self="center left" :offset="[30,10]">
              Detalhes
            </q-tooltip>
          </q-btn>
        </q-card-section>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <q-select
          filled
          bottom-slots
          v-model="dayContract"
          :options="contracts"
          :loading="contractLoading"
          :disable="contractLoading"
          label="Contrato"
          :dense="true"
          :options-dense="true"
          map-options
          option-value="id"
          option-label="id"
        >
          <template v-slot:after>
            <q-btn
              flat
              dense
              color="positive"
              icon="send"
              :loading="loading"
              :disable="loading"
              @click="commit()"
            >
              <q-tooltip anchor="center right" self="center left" :offset="[10,10]">
                {{ statusBtn }}
              </q-tooltip>
            </q-btn>
          </template>
        </q-select>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "notationDay",
  data() {
    return {
      timer: '',
      date: '',
      dialog: false,
      statusBtn: '',
      contracts: [],
      interval: null,
      weekDays: 'Domingo,Segunda-Feira,Terça-Feira,Quarta-Feira,Quinta-Feira,Sexta-Feira,Sábado'.split(','),
      months: 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro'.split(',')
    }
  },
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('notation/setLoading', val)
      },
      get () {
        return this.$store.getters['notation/getLoading']
      }
    },
    day: {
      set(val) {
        this.$store.dispatch('notation/setDay', val)
      },
      get() {
        return this.$store.getters['notation/getDay']
      }
    },
    dayNow: {
      set(val) {
        this.$store.dispatch('notation/setDayNow', val)
      },
      get() {
        return this.$store.getters['notation/getDayNow']
      }
    },
    dayNotations: {
      async set(val) {
        try {
          await this.$store.dispatch('notation/getNotationsByDate', val)
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get() {
        return this.$store.getters['notation/getDayNotations']
      }
    },
    dayContract: {
      set(val) {
        this.$store.dispatch('notation/setDayContract', val)
      },
      get() {
        return this.$store.getters['notation/getDayContract']
      }
    },
    contractLoading: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['contracts/getLoading']
      }
    }
  },
  watch: {
    dayNotations (/* val */) {
      this.statusBtn  = this.getStatusBtn()
    }
  },
  methods: {
    async getContracts () {
      try {
        return await this.$store.dispatch('contracts/ActionGetContracts')
      } catch (error) {
        await this.setErrors(error)
        return []
      }
    },
    async commit () {
      try {
        clearInterval(this.interval)
        const status = await this.getStatus()
        const messages = 'Expediente Iniciado,Almoço Iniciado,Almoço Terminado,Expediente Encerrado'.split(',')
        await this.$store.dispatch('notation/commitStatus', status)
        await this.$store.dispatch('messages/ActionAddMessage', {
          bg: 'positive',
          message: messages[status]
        })
        this.init()
      } catch (error) {
        await this.setErrors(error)
      }
    },
    async setErrors(error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    },
    findByPeriod (period) {
      return this.dayNotations.filter(val => val.type_notation === period.toLowerCase())
    },
    getStatusBtn () {
      const status = 'Iniciar Expediente,Iniciar Almoço,Terminar Almoço,Encerrar Expediente'.split(',')
      return status[this.getStatus()]
    },
    getStatus () {
      const firstPeriod = this.findByPeriod('first_period')
      const secondPeriod = this.findByPeriod('second_period')

      if(firstPeriod.length === 0 && secondPeriod.length === 0) return 0;
      else {
        if(firstPeriod.length > 0 && secondPeriod.length === 0) {
          if(!firstPeriod[0].leave) return 1;
          else return 2;
        } else {
          if(firstPeriod[0].leave && secondPeriod[0].enter) return 3
        }
      }
    },
    getFullDate(date) {
      return `${
        this.weekDays[date.getDay()]
      }, ${
        (date.getDate() < 10) ?
          `0${date.getDate()}` : date.getDate()
      } de ${
        this.months[date.getMonth()]
      } de ${
        date.getFullYear()
      }`
    },
    getFullTime(date) {
      return `${
        (date.getHours() < 10) ?
          `0${date.getHours()}` : date.getHours()
      }:${
        (date.getMinutes() < 10) ?
          `0${date.getMinutes()}` : date.getMinutes()
      }:${
        (date.getSeconds() < 10) ?
          `0${date.getSeconds()}` : date.getSeconds()
      }`
    },
    updateTimer() {
      this.statusBtn  = this.getStatusBtn()
      this.dayNow = new Date()
      this.date = this.getFullDate(this.dayNow)
      this.timer = this.getFullTime(this.dayNow)
    },
    init() {
      this.interval = setInterval(this.updateTimer, 1)
    }
  },
  async created() {
    this.contracts = await this.getContracts()
    this.init()
    this.dayNotations = this.dayNow
  }
}
</script>
