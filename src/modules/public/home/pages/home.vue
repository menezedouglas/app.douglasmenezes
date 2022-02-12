<template>
  <q-page class="page">
    <div class="flex-item">
      <section class="main">
        <h2 class="title">
          Douglas <span>Menezes</span>
        </h2>
        <span class="subtitle">
            Desenvolvedor Web
        </span>
      </section>
      <div class="scrolldown">
        <small>Role para baixo</small> <br>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div class="flex-item">
      <div class="flex-item-content">
        <span class="page-subtitle">
            Do que você precisa?
        </span>
        <accordion :show-data="showAccordionData" :show-error="showAccordionError"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import {component as Accordion} from '../../../components/accordion'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Accordion
  },
  data() {
    return {
      showAccordionData: ref(false),
      showAccordionError: ref(false)
    }
  },
  computed: {
    services: {
      async set() {
        try {
          this.showAccordionData = false
          await this.$store.dispatch('home/ActionGetServices')
          this.accordionId = 'home_services'
          this.accordionItems = this.services
          this.showAccordionData = true
        } catch (error) {
          this.showAccordionData = false
          this.showAccordionError = true
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['home/getServices']
      }
    },
    service: {
      async set(val) {
        try {
          await this.$store.dispatch('home/ActionShowService', val)
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['home/getService']
      }
    },
    accordionItems: {
      set (val) {
        this.$store.dispatch('accordion/ActionSetItems', val)
      },
      get () {
        return this.$store.getters['accordion/getItems']
      }
    },
    accordionId: {
      set (val) {
        this.$store.dispatch('accordion/ActionSetId', val)
      },
      get () {
        return this.$store.getters['accordion/getId']
      }
    }
  },
  methods: {
    loadServices() {
      this.services = ''
    },
    async setErrors (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  },
  created() {
    this.loadServices()
  }
}
</script>
