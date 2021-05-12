<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Usuários</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-card>
          <q-card-section>
            <q-table
                grid
                :rows="users"
                :columns="columns"
                row-key="id"
                :filter="filter"
                :loading="loading"
                hide-header
            >
              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
                  <template v-slot:append>
                    <q-icon name="fas fa-search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "all",
  data() {
    return {
      filter: '',
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Id',
          align: 'left',
          field: 'id',
          sortable: true
        },
        {name: 'name', align: 'center', label: 'Nome', field: 'name', sortable: true},
        {name: 'email', label: 'E-mail', field: 'email', sortable: true},
      ]
    }
  },
  computed: {
    users: {
      set(/* val */) {
        this.ActionSetUsers()
      }
      ,
      get() {
        return this.getUsers()
      }
    }
    ,
    loading: {
      set(val) {
        this.ActionSetLoading(val)
      }
      ,
      get() {
        return this.getLoading()
      }
    }
  }
  ,
  methods: {
    ...
        mapActions('user', [
          'ActionSetUsers',
          'ActionSetLoading'
        ]),
    ...
        mapGetters('user', [
          'getUsers',
          'getLoading'
        ]),
    showFormUser(/*editMode = false*/) {

    }
  }
  ,
  created() {
    this.users = ''
  }
}
</script>

<style scoped>
  .q-table__bottom>svg {
    display: none !important;
  }
</style>
