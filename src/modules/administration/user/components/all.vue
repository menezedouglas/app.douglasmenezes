<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 my-3">
        <h1 class="text-muted">Usuários</h1>
        <hr class="my-2">
      </div>
      <div class="col-12">
        <div class="card border-0 shadow">
          <div class="card-body">
            <div
                v-if="loading"
                class="d-flex align-content-center justify-content-center"
            >
              <div
                  class="spinner-border text-secondary"
                  role="status"
              />
            </div>
            <table
                v-if="!loading"
                class="table"
            >
              <thead class="thead-dark">
              <tr>
                <th scope="col" class="hide-mb">Id</th>
                <th scope="col">Nome</th>
                <th scope="col" class="hide-mb">E-mail</th>
                <th scope="col">
                  <button
                      class="btn btn-sm btn-success"
                      data-bs-toggle="tooltip"
                      title="teste"
                      @click="showFormUser()"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="user in users"
                  v-bind:key="user.id"
              >
                <td class="hide-mb">{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td class="hide-mb">{{ user.email }}</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "all",
  computed: {
    users: {
      set (/* val */) {
        this.ActionSetUsers()
      },
      get () {
        return this.getUsers()
      }
    },
    loading: {
      set (val) {
        this.ActionSetLoading(val)
      },
      get () {
        return this.getLoading()
      }
    }
  },
  methods: {
    ...mapActions('user', [
        'ActionSetUsers',
        'ActionSetLoading'
    ]),
    ...mapGetters('user', [
        'getUsers',
        'getLoading'
    ]),
    showFormUser(/*editMode = false*/) {

    }
  },
  created() {
    this.users = ''
  }
}
</script>

<style scoped>

</style>
