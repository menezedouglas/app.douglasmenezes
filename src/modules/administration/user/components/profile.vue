<template>
  <div>
    <form-user />
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
                        <q-item-section
                          @click="openForm(id, true)"
                        >
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
import formUser from './formUser'
export default {
  name: "index",
  components: {
    formUser
  },
  computed: {
    id: {
      set (val) {
        this.$store.dispatch('user/ActionSetId', val)
      },
      get () {
        return this.$store.getters['user/getId']
      }
    },
    name: {
      set (val) {
        this.$store.dispatch('user/ActionSetName', val)
      },
      get () {
        return this.$store.getters['user/getName']
      }
    },
    email: {
      set (val) {
        this.$store.dispatch('user/ActionSetEmail', val)
      },
      get () {
        return this.$store.getters['user/getEmail']
      }
    },
    loading: {
      set (val) {
        this.$store.dispatch('user/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['user/getLoading']
      }
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('login/ActionLogOut')
      await this.$router.push('/login')
    },
    async openForm(id = 0, editMode = false) {
      await this.$store.dispatch('user/ActionSetFormEditMode', editMode)
      if (editMode) {
        try {
          await this.$store.dispatch('user/ActionShowUser', id)
        } catch (error) {
          await this.setErrors(error)
        }
      } else {
        this.formDialog = true
      }
    },
    async setErrors(error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if (error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  }
}
</script>
