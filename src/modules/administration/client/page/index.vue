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

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="fantasy_name" :props="props">
                {{ props.row.fantasy_name }}
              </q-td>
              <q-td key="document_type" :props="props">
                {{ props.row.document_type.toUpperCase() }}
              </q-td>
              <q-td key="document" :props="props">
                {{ props.row.document }}
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="actions" :props="props" class="q-gutter-sm">
                <q-btn
                  round
                  ripple=""
                  size="sm"
                  color="dark"
                  icon="fas fa-user-edit"
                  @click="showEdit(props.row.id)"
                >
                  <q-tooltip anchor="center left" self="center right">
                    Editar
                  </q-tooltip>
                </q-btn>
                <q-btn
                    round
                    ripple=""
                    size="sm"
                    color="red"
                    icon="fas fa-user-minus"
                >
                  <q-tooltip class="bg-red text-white" anchor="center right" self="center left">
                    Deletar
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
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
          sortable: true
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
        },
        {
          name: 'actions',
          label: '',
          align: 'center',
          field: 'actions',
          sortable: false
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
    },
    editMode: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDialogEditMode', val)
      },
      get() {
        return this.$store.getters['client/getFormDialogEditMode']
      }
    },
    clientShow: {
      set (val) {
        this.$store.dispatch('client/ActionSetClientShow', val)
      },
      get () {
        return this.$store.getters['client/getClientShow']
      }
    },
  },
  components: {
    formClient
  },
  methods: {
    ...mapActions('client', ['ActionSetClients', 'ActionSetLoading']),
    ...mapGetters('client', ['getClients', 'getLoading']),
    ...mapActions('messages', ['ActionSetErrors']),
    async showEdit(id) {
      try {
        await this.$store.dispatch('client/ActionSetClientShow', id)
        this.$store.dispatch('client/ActionSetForm', this.clientShow)
        this.editMode = true
        this.formClientDialog = true
      } catch (error) {
        this.$store.dispatch('messages/ActionSetErrors', error)
        if(error.request.status === 401) {
          this.$store.dispatch('login/ActionLogOut')
          await this.$router.push('/login')
        }
      }
    }
  },
  created() {
    this.clients = ''
  }
}
</script>

<style scoped>

</style>
