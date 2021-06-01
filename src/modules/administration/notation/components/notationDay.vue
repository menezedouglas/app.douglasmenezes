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
      <q-card-section class="flex flex-center">
        <q-btn
          color="positive"
          :label="statusBtn"
          :loading="loading"
          :disable="loading"
        />
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
      set(val) {
        this.$store.dispatch('notation/setDayNotations', val)
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
    }
  },
  watch: {
    dayNotations (/* val */) {
      this.statusBtn  = this.getStatusBtn()
    }
  },
  methods: {
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
      setInterval(this.updateTimer, 1)
    }
  },
  created() {
    this.init()
    this.$store.dispatch('notation/getNotationsByDate', this.dayNow)
  }
}
</script>
