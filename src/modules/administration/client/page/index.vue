<template>
  <div class="q-pa-md">
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

export default {
  name: "index",
  data () {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Id',
          align: 'center',
          field: 'id',
          sortable: true
        },
        {
          name: 'user_id',
          align: 'center',
          label: 'Id da Empresa',
          field: 'user_id',
          sortable: true
        },
        {
          name: 'user_is_representative',
          label: 'Representante',
          align: 'center',
          field: 'user_is_representative',
          sortable: true,
          format: val => val === 0 ? `Não` : 'Sim'
        },
        {
          name: 'representative_name',
          label: 'Nome',
          align: 'center',
          field: 'representative_name',
          sortable: true
        },
        {
          name: 'representative_occupation',
          label: 'Cargo',
          align: 'center',
          field: 'representative_occupation',
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
