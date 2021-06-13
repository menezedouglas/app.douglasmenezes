<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Recebimentos</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          :columns="table.cols"
          :rows="table.rows"
          :loading="loading"
          :filter="table.filter"
          v-model:selected="table.selected"
          card-class="bg-transparent no-shadow"
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
              @click="openFormDialog()"
            >
              <q-tooltip anchor="center left" self="center right">
                Novo cliente
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
export default {
  name: "index",
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

  }
}
</script>

<style scoped>

</style>
