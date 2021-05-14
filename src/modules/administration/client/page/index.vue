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
            row-key="fantasy_name"
            :filter="filter"
        >
          <template v-slot:top-left>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
              <template v-slot:append>
                <q-icon name="fas fa-search" />
              </template>
            </q-input>
          </template>
          <template v-slot:top-right>
            <q-btn
              dense
              size="sm"
              color="positive"
              icon="fas fa-plus"
              @click="formClientDialog = !formClientDialog"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo cliente
              </q-tooltip>
            </q-btn>
          </template>
        </q-table>
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
          required: true,
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
      ],
      filter: ''
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
    },
    formClientDialog: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormDialog', val)
      },
      get () {
        return this.$store.getters['client/getFormDialog']
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
