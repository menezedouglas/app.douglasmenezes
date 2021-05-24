<template>
  <q-page class="q-pa-md">
    <form-notation/>
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Apontamentos</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          flat
          card-class="transparent"
          :loading="loading"
          :columns="tableCols"
          :rows="tableRows"
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
            <div class="q-gutter-sm">
<!--              <q-btn-->
<!--                color="primary"-->
<!--                icon-right="archive"-->
<!--                label="Export to csv"-->
<!--                no-caps-->
<!--                @click="exportTable"-->
<!--              />-->
              <q-btn
                round
                size="sm"
                color="positive"
                icon="fas fa-plus"
                @click="openFormDialog()"
              >
                <q-tooltip anchor="center left" self="center right">
                  Novo Apontamento
                </q-tooltip>
              </q-btn>
            </div>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="contract_id" :props="props">
                {{ props.row.contract_id }}
              </q-td>
              <q-td key="type_notation_description" :props="props">
                {{ props.row.type_notation_description }}
              </q-td>
              <q-td key="reference" :props="props">
                {{ props.row.reference }}
              </q-td>
              <q-td key="enter" :props="props">
                {{ props.row.enter }}
              </q-td>
              <q-td key="leave" :props="props">
                {{ props.row.leave }}
              </q-td>
              <q-td key="note" :props="props">
                {{ props.row.note }}
              </q-td>
              <q-td key="actions" :props="props" class="q-gutter-sm">
                <q-btn
                  round
                  size="sm"
                  color="primary"
                  icon="fas fa-edit"
                  @click="openFormDialog(props.row.id, true)"
                >
                  <q-tooltip>
                    Alterar apontamento
                  </q-tooltip>
                </q-btn>

                <q-btn
                  round
                  size="sm"
                  color="negative"
                  icon="fas fa-trash"
                  @click="drop(props.row.id)"
                >
                  <q-tooltip>
                    Deletar apontamento
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import formNotation from '../components/formNotation'

export default {
  name: "index",
  computed: {
    loading: {
      set(val) {
        this.$store.dispatch('notation/setLoading', val)
      },
      get() {
        return this.$store.getters['notation/getLoading']
      }
    },
    table: {
      set(val) {
        this.$store.dispatch('notation/setTable', val)
      },
      get() {
        return this.$store.getters['notation/getTable']
      }
    },
    tableCols: {
      set(val) {
        this.$store.dispatch('notation/setTableCols', val)
      },
      get() {
        return this.$store.getters['notation/getTableCols']
      }
    },
    tableRows: {
      set(val) {
        this.$store.dispatch('notation/setTableRows', val)
      },
      get() {
        return this.$store.getters['notation/getTableRows']
      }
    },
    tableFilter: {
      set(val) {
        this.$store.dispatch('notation/setTableFilter', val)
      },
      get() {
        return this.$store.getters['notation/getTableFilter']
      }
    },
    tableSelected: {
      set(val) {
        this.$store.dispatch('notation/setTableSelected', val)
      },
      get() {
        return this.$store.getters['notation/getTableSelected']
      }
    },
    formEditMode: {
      set(val) {
        this.$store.dispatch('notation/setFormEditMode', val)
      },
      get() {
        return this.$store.getters['notation/getFormEditMode']
      }
    },
    formDialog: {
      set(val) {
        this.$store.dispatch('notation/setFormDialog', val)
      },
      get() {
        return this.$store.getters['notation/getFormDialog']
      }
    }
  },
  components: {
    formNotation
  },
  methods: {
    async openFormDialog(id, editMode = false) {
      if (editMode) {
        try {
          this.$q.loading.show()
          await this.$store.dispatch('notation/showNotation', id)
          this.$q.loading.hide()
        } catch (error) {
          this.$q.loading.hide()
          await this.setErrors(error)
        }
      } else {
        this.formEditMode = false
        this.formDialog = true
      }
    },
    async drop(id) {
      const response = await this.$q.dialog({
        title: 'Deletar Apontamento',
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
          await this.$store.dispatch('notation/dropNotation', id)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Apontamento deletado'
          })
          this.$q.loading.hide()
        } catch (error) {
          this.$q.loading.hide()
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
    this.$store.dispatch('notation/getNotations')
  }
}
</script>

<style scoped>

</style>
