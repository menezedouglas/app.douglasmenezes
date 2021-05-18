<template>
  <div>
    <!-- Card -->
    <q-card
      style="min-width: 255px; min-height: 85px;"
    >
      <q-card-section>
        <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
          <div v-show="!loading">
            <div class="row items-center no-wrap">
              <div class="col">
                <h5 class="m-0 p-0"><strong>{{ name }}</strong></h5>
                <small>{{ email }}</small>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" size="sm" round flat icon="fas fa-ellipsis-v">
                  <q-menu auto-close style="width: 100px" anchor="center right" self="center left" :offset="[30, 10]">
                    <q-list>
                      <q-item clickable>
                        <q-item-section>
                          <div class="row items-center no-wrap">
                            <div class="col-auto">
                              <i class="fas fa-user-edit"></i>
                            </div>
                            <div class="col text-right">
                              Editar
                            </div>
                          </div>
                        </q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section
                            class="text-red"
                            @click="logout()"
                        >

                          <div class="row items-center no-wrap">
                            <div class="col-auto">
                              <i class="fas fa-sign-out-alt"></i>
                            </div>
                            <div class="col text-right">
                              Sair
                            </div>
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
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
