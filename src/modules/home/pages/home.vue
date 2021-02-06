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
      <span class="page-subtitle">
          Do que você precisa?
      </span>
      <fieldset id="list_select" class="list-select">

        <nav class="list-select-nav">

          <ul>
            <li
              v-for="item in list_select_items"
              v-bind:key="item.name"
              v-on:click="setContent(`${item.name}`)"
            >
              <span class="item-name">
                {{ item.name }}
              </span>
              <span
                  v-if="item.type_service_state !== 'Ativo'"
                  class="badge bg-primary m-2"
              >
                {{ item.type_service_state }}
              </span>
            </li>
          </ul>

        </nav>

        <section class="list-select-content">
          {{ list_select_content }}
        </section>

      </fieldset>
    </div>
    <div class="flex-item">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageFooter from '../../../components/PageFooter.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      list_select_items: [],
      list_select_content: 'Selecione um item!',
    }
  },
  components: {
    PageFooter,
  },
  methods: {
    ...mapActions('home', ['ActionGetServices', 'ActionShowService']),
    getItem(name) {
      return new Promise((resolve, reject) => {
        this.list_select_items.map(item => {
          if(item.name === name) {
            resolve(item)
          }
        })
        reject()
      });
    },
    async setContent(name) {

      try {

        const item = await this.getItem(name)

        this.list_select_content = item.description

      } catch (err) {
        alert('Não foi posível renderizar o conteúdo')
      }
    },

    async getServices () {
      try {
        await this.ActionGetServices()
        this.list_select_items = this.$store.getters['home/getServices']
      } catch (err) {
        alert(`${err.data.msg} ${err.data.error}`)
      }
    }
  },
  created () {
    this.getServices()
  }
}
</script>
