<template>
  <q-page class="q-pa-md">
    <receipt-form />
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Recebimentos</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          :columns="tableCols"
          :rows="tableRows"
          :loading="loading"
          :filter="tableFilter"
          v-model:selected="tableSelected"
          card-class="bg-transparent no-shadow"
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
                Adicionar Recebimento
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="reference_month" :props="props">
                {{ helpers.date.format('m/y', props.row.reference_month) }}
              </q-td>
              <q-td key="value" :props="props">
                {{ helpers.numeric.format.value(props.row.value) }}
              </q-td>
              <q-td key="shelf_life" :props="props">
                {{ helpers.date.format('d/m/y', props.row.shelf_life) }}
              </q-td>
              <q-td key="actions">
                <q-btn
                  round
                  size="sm"
                  color="primary"
                  icon="fas fa-edit"
                  @click="openFormDialog(props.row.id, true)"
                />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>


<script>
import receiptForm from '../components/receiptForm'
import helpers from 'src/helpers'
export default {
  name: "index",
  data () {
    return {
      helpers
    }
  },
  components: {
    receiptForm
  },
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('receipt/setLoading', val)
      },
      get () {
        return this.$store.getters['receipt/getLoading']
      }
    },
    table: {
      set (val) {
        this.$store.dispatch('receipt/setTable', val)
      },
      get () {
        return this.$store.getters['receipt/getTable']
      }
    },
    tableRows: {
      set (val) {
        this.$store.dispatch('receipt/setTableRows', val)
      },
      get () {
        return this.$store.getters['receipt/getTableRows']
      }
    },
    tableCols: {
      set (val) {
        this.$store.dispatch('receipt/setTableCols', val)
      },
      get () {
        return this.$store.getters['receipt/getTableCols']
      }
    },
    tableFilter: {
      set (val) {
        this.$store.dispatch('receipt/setTableFilter', val)
      },
      get () {
        return this.$store.getters['receipt/getTableFilter']
      }
    },
    tableSelected: {
      set (val) {
        this.$store.dispatch('receipt/setTableSelected', val)
      },
      get () {
        return this.$store.getters['receipt/getTableSelected']
      }
    },
    formDialog: {
      set (val) {
        this.$store.dispatch('receipt/setFormDialog', val)
      },
      get () {
        return this.$store.getters['receipt/getFormDialog']
      }
    },
    formEditMode: {
      set (val) {
        this.$store.dispatch('receipt/setFormEditMode', val)
      },
      get () {
        return this.$store.getters['receipt/getFormEditMode']
      }
    }
  },
  methods: {
    async openFormDialog (id, editMode = false) {
      try {
        this.formEditMode = editMode
        if(editMode) {
          await this.$store.dispatch('receipt/showReceipt', id)
        }
        this.formDialog = true
      } catch (error) {
        await this.setError(error)
      }
    },
    async setError (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    },
    async dropReceipt(id) {
      const response = await this.$q.dialog({
        title: 'Excluir recebimento',
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
          await this.$store.dispatch('receipt/deleteReceipt', id)
          this.$q.loading.hide()
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Recebimento excluído'
          })
        } catch (error) {
          this.$q.loading.hide()
          await this.setError(error)
        }
      })
    }
  },
  async created() {
    try {
      await this.$store.dispatch('receipt/getAllReceipts')
    } catch (error) {
      await this.setError(error)
    }
  }
}
</script>

<style scoped>

</style>
