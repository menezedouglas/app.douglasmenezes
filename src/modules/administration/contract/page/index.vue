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
              @click="formDialog = !formDialog"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo contrato
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
    }
  },
  components: {
    formContract
  },
  methods: {
    async getContracts() {
      try {
        this.rows = await this.$store.dispatch('contracts/ActionGetContracts')
      } catch (error) {
        await this.$store.dispatch('messages/ActionSetErrors', error)
        if (error.request.status === 401) {
          await this.$store.dispatch('login/ActionLogOut')
          await this.$router.push('/login')
        }
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
