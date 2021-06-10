<template>
  <q-page class="q-pa-md">
    <formClient></formClient>
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Clientes</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          flat
          grid
          :rows="clients"
          :loading="loading"
          :columns="columns"
          row-key="fantasy_name"
          :filter="filter"
        >
          <template v-slot:top-left>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
              <template v-slot:append>
                <q-icon name="fas fa-search"/>
              </template>
            </q-input>
          </template>
          <template v-slot:top-right>
            <q-btn
              round
              size="sm"
              color="positive"
              icon="fas fa-plus"
              @click="openFormClient()"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo cliente
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:item="props">
            <q-card class="q-ma-sm">
              <q-card-section horizontal>
                <q-card-section>
                  <strong>{{ props.row.full_name }} ({{ props.row.fantasy_name }})</strong> <br>
                  <small>{{ props.row.document_type.toUpperCase() }} {{ props.row.document }}</small> <br>
                  {{ props.row.email }} {{ (props.row.phone) ? `- ${props.row.phone}` : ``}}
                </q-card-section>

                <q-card-section>
                  <q-btn color="primary" round flat icon="more_vert">
                    <q-menu auto-close anchor="center right" self="center left" :offset="[40,10]">
                      <q-list>
                        <q-item
                          clickable
                          @click="openFormClient(props.row.id, true)"
                        >
                          <q-item-section>Editar o (a) {{ props.row.fantasy_name }}</q-item-section>
                        </q-item>
                        <q-item
                          class="bg-red text-white"
                          clickable
                          @click="dropClient(props.row.id)"
                        >
                          <q-item-section>Deletar o (a) {{ props.row.fantasy_name }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </q-card-section>
              </q-card-section>
            </q-card>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import {ref} from 'vue'
import formClient from '../components/formClient'

export default {
  name: "index",
  setup() {
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
      filter: ref(''),
    }
  },
  computed: {
    loading: {
      set(val) {
        this.$store.dispatch('client/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['client/getLoading']
      }
    },
    clients: {
      async set() {
        try {
          await this.$store.dispatch('client/ActionGetClients')
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
          if (error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      },
      get() {
        return this.$store.getters['client/getClients']
      }
    },
    formClientDialog: {
      set(val) {
        this.$store.dispatch('client/ActionSetFormDialog', val)
      },
      get() {
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
      set(val) {
        this.$store.dispatch('client/ActionSetClientShow', val)
      },
      get() {
        return this.$store.getters['client/getClientShow']
      }
    },
  },
  components: {
    formClient
  },
  methods: {
    async openFormClient(id = 0, editMode = false) {
      this.editMode = editMode
      if (editMode) {
        try {
          await this.$store.dispatch('client/ActionSetClientShow', id)
          await this.$store.dispatch('client/ActionSetForm', this.clientShow)
          await this.$store.dispatch('client/ActionSetFormDialog', true)
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
          if (error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      } else {
        await this.$store.dispatch('client/ActionSetFormDialog', true)
      }
    },
    async dropClient(id) {
      const response = await this.$q.dialog({
        title: 'Deletar Cliente',
        message: 'Deseja realmente realizar esta ação?',
        cancel: {
          push: true,
          color: 'positive',
          label: 'Não'
        },
        persistent: true,
        ok: {
          label: 'Sim',
          color: 'negative'
        },
      })
      response.onOk(async () => {
        try {
          await this.$store.dispatch('client/ActionDropClient', id)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Cliente deletado'
          })
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
        }
      })
    }

  },
  created() {
    this.clients = ''
  }
}
</script>

<style scoped>

</style>
