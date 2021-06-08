<template>
  <q-page class="q-pa-md">
    <formProject />
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Projetos</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          flat
          grid
          :filter="tableFilter"
          :columns="tableCols"
          :rows="tableRows"
          :loading="loading"
        >
          <template v-slot:top-left>
            <q-input borderless dense debounce="300" v-model="tableFilter" placeholder="Pesquisar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:top-right>
            <q-btn
              v-if="authenticated"
              round
              size="sm"
              color="positive"
              icon="fas fa-plus"
              @click="openFormDialog()"
            >
              <q-tooltip anchor="center left" self="center right" :offset="[10,10]">
                Novo Projeto
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:item="props">
            <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
              <q-card>
                <q-card-section horizontal>
                  <q-card-section class="q-pa-sm">
                    <q-list dense>
                      <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                        <q-item-section>
                          <q-item-label>{{ col.label }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label caption class="wrap" style="width: 150px;">{{ col.value }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                  <q-separator vertical/>
                  <q-card-section>

                  </q-card-section>
                </q-card-section>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import formProject from '../components/formProject'
export default {
  name: "index",
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('projects/setLoading', val)
      },
      get () {
        return this.$store.getters['projects/getLoading']
      }
    },
    formEditMode: {
      set (val) {
        this.$store.dispatch('projects/setFormEditMode', val)
      },
      get () {
        return this.$store.getters['projects/getFormEditMode']
      }
    },
    formDialog: {
      set (val) {
        this.$store.dispatch('projects/setFormDialog', val)
      },
      get () {
        return this.$store.getters['projects/getFormDialog']
      }
    },
    table: {
      set (val) {
        this.$store.dispatch('projects/setTable', val)
      },
      get () {
        return this.$store.getters['projects/getTable']
      }
    },
    tableCols: {
      set (val) {
        this.$store.dispatch('projects/setTableCols', val)
      },
      get () {
        return this.$store.getters['projects/getTableCols']
      }
    },
    tableRows: {
      set (val) {
        this.$store.dispatch('projects/setTableRows', val)
      },
      get () {
        return this.$store.getters['projects/getTableRows']
      }
    },
    tableFilter: {
      set (val) {
        this.$store.dispatch('projects/setTableFilter', val)
      },
      get () {
        return this.$store.getters['projects/getTableFilter']
      }
    },
    selected: {
      set (val) {
        this.$store.dispatch('projects/setTableSelected', val)
      },
      get () {
        return this.$store.getters['projects/getTableSelected']
      }
    },
    authenticated: {
      async set (/* val */) {
        try {
          await this.$store.dispatch('login/ActionCheckToken')
        } catch (error) {
          await this.setErrors(error)
        }
      },
      get () {
        return this.$store.getters['login/hasAuthorization']
      }
    }
  },
  components: {
    formProject
  },
  methods: {
    openFormDialog(id, editMode = false) {
      this.formEditMode = editMode

      if(editMode) {}
      else {
        this.formDialog = true
      }
    },
    async getProjects () {
      try {
        if(this.authenticated) this.authenticated = ''
        await this.$store.dispatch('projects/getProjects')
      } catch (error) {
        await this.setErrors(error)
      }
    },
    async setErrors (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
    }
  },
  created() {
    this.getProjects()
  }
}
</script>

<style scoped>

</style>
