<template>
  <div class="q-pa-md">
    <formClient></formClient>
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Clientes</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
            :rows="clients"
            :loading="loading"
            :columns="columns"
            row-key="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import formClient from '../components/formClient'
export default {
  name: "index",
  setup () {
    return {
      columns: [
        {
          name: 'fantasy_name',
          align: 'center',
          label: 'Nome Fantasia',
          field: 'fantasy_name',
          sortable: true
        },
        {
          name: 'document_type',
          label: 'Tipo do Documento',
          align: 'center',
          field: 'document_type',
          sortable: true,
          format: val => val.toUpperCase()
        },
        {
          name: 'document',
          label: 'Documento',
          align: 'center',
          field: 'document',
          sortable: true
        },
        {
          name: 'email',
          label: 'E-mail',
          align: 'center',
          field: 'email',
          sortable: true
        }
      ]
    }
  },
  computed: {
    loading: {
      set (val) {
        this.ActionSetLoading(val)
      },
      get () {
        return this.getLoading()
      }
    },
    clients: {
      async set () {
        try {
          await this.ActionSetClients()
        } catch (error) {
          if(error.request.status === 401) {
            this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          } else {
            this.$store.dispatch('messages/ActionSetErrors', error)
          }
        }
      },
      get () {
        return this.getClients()
      }
    }
  },
  components: {
    formClient
  },
  methods: {
    ...mapActions('client', ['ActionSetClients', 'ActionSetLoading']),
    ...mapGetters('client', ['getClients', 'getLoading']),
    ...mapActions('messages', ['ActionSetErrors'])
  },
  created() {
    this.clients = ''
  }
}
</script>

<style scoped>

</style>
