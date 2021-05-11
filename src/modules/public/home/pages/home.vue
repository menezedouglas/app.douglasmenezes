<template>
  <div class="page">
    <div class="flex-item">
      <section class="main">
        <h2 class="title">
          Douglas Menezes
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
        <accordion :show-data="showAccordionData" :show-error="showAccordionError" />
      </div>
    </div>
    <div class="flex-item">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'
import { component as Accordion } from '@/modules/components/accordion'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    PageFooter,
    Accordion
  },
  data () {
    return {
      showAccordionData: false,
      showAccordionError: false
    }
  },
  methods: {
    ...mapActions('home', ['ActionGetServices', 'ActionShowService']),
    ...mapActions('accordion', ['ActionSetItems', 'ActionSetId']),
    ...mapGetters('home', ['getServices']),
    ...mapActions('mainMenu', ['ActionUpdateActiveItem']),
    async loadServices () {
      try {
        this.showAccordionData = false
        await this.ActionGetServices()
        this.ActionSetId('home_services')
        const services = this.getServices()
        this.ActionSetItems(services)
        this.showAccordionData = true
      } catch (err) {
        this.showAccordionData = false
        this.showAccordionError = true
      }
    }
  },
  created () {
    this.loadServices()
    this.ActionUpdateActiveItem()
    console.log('here')
  }
}
</script>
