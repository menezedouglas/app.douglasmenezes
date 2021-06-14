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

          <template v-slot:item="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols"
                :key="col.name"
              >
                {{ col.value }}
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
export default {
  name: "index",
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
    }
  },
  methods: {
    async openFormDialog (id, editMode = false) {
      try {
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
    }
  }
}
</script>

<style scoped>

</style>
