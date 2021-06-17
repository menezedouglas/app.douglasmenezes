<template>
  <div class="q-pa-md">
    <formContract></formContract>
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Contratos</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          grid
          :rows="tableRows"
          :loading="loading"
          :columns="tableColumns"
          row-key="fantasy_name"
          :filter="tableFilter"
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
              @click="openFormDialog()"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo contrato
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:item="props">
            <q-card class="q-ma-sm" style="max-width: 300px">
              <q-card-section horizontal>
                <q-card-section>
                  <h6 class="text-grey-6">Contrato #{{ props.row.id }}</h6>
                  <small>De {{ getColValue(props.cols, 'start_validity') }} até {{ getColValue(props.cols, 'end_validity') }}</small>
                  <h6 class="text-grey-7">{{ getColValue(props.cols, 'value') }} {{ props.row.type_value }}</h6>
                  <q-badge :color="props.row.status.bg">{{ props.row.status.label }}</q-badge>
                </q-card-section>

                <q-card-section>
                  <q-btn color="primary" round flat icon="more_vert">
                    <q-menu auto-close anchor="center right" self="center left" :offset="[40,10]">
                      <q-list>
                        <q-item
                          clickable
                          @click="openFormDialog(props.row.id, true)"
                        >
                          <q-item-section>Editar este contrato</q-item-section>
                        </q-item>
                        <q-item
                          class="bg-red text-white"
                          clickable
                          @click="drop(props.row.id)"
                        >
                          <q-item-section>Deletar este contrato</q-item-section>
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
  </div>
</template>

<script>
import formContract from '../component/formContract'

export default {
  name: "index",
  computed: {
    table: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetTable', val)
      },
      get () {
        return this.$store.getters['contracts/getTable']
      }
    },
    tableFilter: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetTableFilter', val)
      },
      get () {
        return this.$store.getters['contracts/getTableFilter']
      }
    },
    tableColumns: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetTableColumns', val)
      },
      get () {
        return this.$store.getters['contracts/getTableColumns']
      }
    },
    tableRows: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetTableRows', val)
      },
      get () {
        return this.$store.getters['contracts/getTableRows']
      }
    },
    tableSelected: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetTableSelected', val)
      },
      get () {
        return this.$store.getters['contracts/getTableSelected']
      }
    },
    loading: {
      set(val) {
        this.$store.dispatch('contracts/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['contracts/getLoading']
      }
    },
    formDialog: {
      set(val) {
        this.$store.dispatch('contracts/ActionSetFormDialog', val)
      },
      get() {
        return this.$store.getters['contracts/getFormDialog']
      }
    },
    formEditMode: {
      set (val) {
        this.$store.dispatch('contracts/ActionSetFormDialogEditMode', val)
      },
      get () {
        return this.$store.getters['contracts/getFormDialogEditMode']
      }
    }
  },
  components: {
    formContract
  },
  methods: {
    async getContracts() {
      try {
        this.tableRows = await this.$store.dispatch('contracts/ActionGetContracts')
      } catch (error) {
        await this.setErrors(error)
      }
    },
    async openFormDialog(id, editMode = false) {
      if(editMode) {
        try {
          await this.$store.dispatch('contracts/ActionShowContract', id)
        } catch (error) {
          await this.setErrors(error)
        }
      } else {
        this.formEditMode = false
        this.formDialog = true
      }
    },
    getColValue(cols, colName) {
      const col = cols.filter(col => col.name.indexOf(colName) >= 0)
      return col[0].value
    },
    async drop (id) {
      const response = await this.$q.dialog({
        title: 'Deletar Contrato',
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
          await this.$store.dispatch('contracts/ActionDropContract', id)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'O contrato foi deletado'
          })
        } catch (error) {
          await this.setErrors(error)
        }
      })
    },
    async setErrors(error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if (error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  },
  created() {
    this.getContracts()
  }
}
</script>

<style scoped>

</style>
