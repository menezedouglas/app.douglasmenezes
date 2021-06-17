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
            <div class="q-pa-md">
              <q-card>
                <q-card-section class="q-pa-none" :horizontal="authenticated">
                  <q-card-section class="q-pa-sm" style="width: 200px;">
                    <div class="row">
                      <strong>{{ props.row.name }}</strong>
                    </div>
                    <p class="wrap text-justify">{{ props.row.description }}</p>
                    <q-badge :color="(props.row.is_open_source === 0) ? `negative` : `positive`">
                      {{ (props.row.is_open_source === 0) ? `Código fechado` : `Código Aberto` }}
                    </q-badge>
                  </q-card-section>
                  <q-separator
                    v-if="authenticated"
                    vertical
                  />
                  <q-card-section
                    v-if="authenticated"
                    class="flex column flex-center justify-around"
                  >
                    <q-btn
                      round
                      size="sm"
                      color="primary"
                      class="q-ml-sm"
                      icon="fas fa-edit"
                      @click="openFormDialog(props.row.id, true)"
                    >
                      <q-tooltip anchor="center left" self="center right" :offset="[10,10]">
                        Editar Projeto
                      </q-tooltip>
                    </q-btn>
                    <q-btn
                      round
                      size="sm"
                      color="negative"
                      class="q-ml-sm"
                      icon="fas fa-trash"
                      @click="drop(props.row.id)"
                    >
                      <q-tooltip anchor="center left" self="center right" :offset="[10,10]">
                        Deletar Projeto
                      </q-tooltip>
                    </q-btn>
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
    async openFormDialog(id, editMode = false) {
      this.formEditMode = editMode
      this.$q.loading.show()
      if(editMode) {
        await this.$store.dispatch('projects/showProject', id)
      }
      else {
        await this.$store.dispatch('projects/clearForm')
        this.formDialog = true
      }
      this.$q.loading.hide()
    },
    async getProjects () {
      try {
        if(this.authenticated) this.authenticated = ''
        await this.$store.dispatch('projects/getProjects')
      } catch (error) {
        await this.setErrors(error)
      }
    },
    async drop(id) {
      const response = await this.$q.dialog({
        title: 'Deletar Projeto',
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
          this.$q.loading.show()
          await this.$store.dispatch('projects/dropProject', id)
          this.$q.loading.hide()
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Projeto deletado'
          })
        } catch (error) {
          this.$q.loading.hide()
          await this.setErrors(error)
          if(error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      })
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
