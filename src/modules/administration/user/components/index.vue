<template>
  <div>
    <!-- Card -->
    <div class="card border-0 shadow">
      <div class="card-body">
        <div
            v-if="loading"
            class="spinner-border text-secondary"
            role="status"
        />
        <div
            v-if="!loading"
            class="row"
        >
          <div class="col">
            <h5 class="m-0 p-0"><strong>{{ name }}</strong></h5>
            <small>{{ email }}</small>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <div
                  style="cursor: pointer;"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v"></i>
              </div>
              <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
              >
                <li
                    class="dropdown-item"
                    style="cursor: pointer;"
                >
                  <i class="fas fa-user-edit"></i>
                  Editar
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li
                    class="dropdown-item text-danger"
                    style="cursor: pointer;"
                    @click="logout()"
                >
                  <i class="fas fa-sign-out-alt"></i>
                  Sair
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "index",
  computed: {
    id: {
      set (val) {
        this.ActionSetId(val)
      },
      get () {
        return this.getId()
      }
    },
    name: {
      set (val) {
        this.ActionSetName(val)
      },
      get () {
        return this.getName()
      }
    },
    email: {
      set (val) {
        this.ActionSetEmail(val)
      },
      get () {
        return this.getEmail()
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
        'ActionSetId',
        'ActionSetName',
        'ActionSetEmail',
        'ActionSetLoading'
    ]),
    ...mapActions('login', [
        'ActionLogOut'
    ]),
    ...mapActions('messages', [
        'ActionSetErrors'
    ]),
    ...mapGetters('user', [
      'getId',
      'getName',
      'getEmail',
      'getLoading'
    ]),
    async logout () {
      this.ActionLogOut()
      await this.$router.push('/login')
    },
    showFormUser(editMode = false) {
      const modal = document.querySelector('#formUserModal')
      switch (editMode) {
        case true: {
          break
        }
        case false: {
          modal.show()
          break
        }
      }
    }
  }
}
</script>
