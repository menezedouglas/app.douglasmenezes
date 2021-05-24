<template>
  <q-page class="q-pa-md">
    <form-service />
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Serviços</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          grid
          :columns="tableCols"
          :rows="tableRows"
          :filter="tableFilter"
          :selected="tableSelected"
          :loading="loading"
        >

          <template v-slot:top-left>
            <q-input borderless dense debounce="300" v-model="tableFilter" placeholder="Pesquisar">
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
              @click="openForm()"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo Serviço
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:item="props">
            <q-card class="q-ma-sm" style="max-width: 300px">
              <q-card-section horizontal>
                <q-card-section>
                  <h6 class="q-ma-none"><strong>{{ props.row.name }}</strong></h6>
                  <h6 class="text-grey-7">{{ props.row.value }} {{ props.row.type_value }}</h6>
                  <q-badge align="middle">{{ props.row.type_service_state }}</q-badge>
                  <q-separator class="q-my-md" />
                  <p class="text-bold">{{ props.row.description }}</p>
                </q-card-section>

                <q-card-section>
                  <q-btn color="primary" round flat icon="more_vert">
                    <q-menu auto-close anchor="center right" self="center left" :offset="[40,10]">
                      <q-list>
                        <q-item
                          clickable
                          @click="openForm(props.row.id, true)"
                        >
                          <q-item-section>Editar o (a) {{ props.row.name }}</q-item-section>
                        </q-item>
                        <q-item
                          class="bg-red text-white"
                          clickable
                        >
                          <q-item-section>Deletar o (a) {{ props.row.name }}</q-item-section>
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
import formService from '../components/formService'
export default {
  name: "index",
  components: {
    formService
  },
  computed: {
    table: {
      set(val) {
        this.$store.dispatch('services/setTable', val)
      },
      get() {
        return this.$store.getters['services/getTable']
      }
    },
    tableRows: {
      set(val) {
        this.$store.dispatch('services/setTableRows', val)
      },
      get() {
        return this.$store.getters['services/getTableRows']
      }
    },
    tableCols: {
      set(val) {
        this.$store.dispatch('services/setTableCols', val)
      },
      get() {
        return this.$store.getters['services/getTableCols']
      }
    },
    tableSelected: {
      set(val) {
        this.$store.dispatch('services/setTableSelected', val)
      },
      get() {
        return this.$store.getters['services/getTableSelected']
      }
    },
    tableFilter: {
      set(val) {
        this.$store.dispatch('services/setTableFilter', val)
      },
      get() {
        return this.$store.getters['services/getTableFilter']
      }
    },
    loading: {
      set(val) {
        this.$store.dispatch('services/setLoading', val)
      },
      get() {
        return this.$store.getters['services/getLoading']
      }
    },
    formDialog: {
      set (val) {
        this.$store.dispatch('services/setFormDialog', val)
      },
      get () {
        return this.$store.getters['services/getFormDialog']
      }
    }
  },
  methods: {
    async getServices() {
      try {
        await this.$store.dispatch('services/getServices')
      } catch (error) {
        this.loadErrors(error)
      }
    },
    loadErrors(error) {
      this.$store.dispatch('messages/ActionSetErrors', error)
      if (error.request.status === 401) {
        this.$store.dispatch('login/ActionLogOut')
        this.$router.push('/login')
      }
    },
    openForm (id = 0, editMode = false) {
      if(editMode) {
        this.edit(id)
      } else {
        this.$store.dispatch('services/setFormEditMode', false)
        this.formDialog = true
      }
    },
    async edit (id) {
      try {
        this.$q.loading.show()
        await this.$store.dispatch('services/showSerivce', id)
        this.$q.loading.hide()
      } catch (error) {
        this.$q.loading.hide()
        this.loadErrors(error)
      }
    },
    async drop (id) {
      try {
        this.$q.loading.show()
        await this.$store.dispatch('services/dropSerivce', id)
        this.$q.loading.hide()
      } catch (error) {
        this.$q.loading.hide()
        this.loadErrors(error)
      }
    }
  },
  mounted() {
    this.getServices()
  }
}
</script>
