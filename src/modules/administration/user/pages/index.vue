<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 q-my-sm">
        <h2 class="text-grey-8">Usuários</h2>
        <hr class="q-my-sm">
      </div>
      <div class="col-12">
        <q-table
          grid
          :rows="users"
          :columns="columns"
          row-key="id"
          :filter="filter"
          :loading="loading"
          hide-header
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
              @click="openForm()"
            />
          </template>

          <template v-slot:item="props">
            <q-card class="q-ma-sm">
              <q-card-section horizontal>
                <q-card-section>
                  <strong>{{ props.row.name }}</strong> <br>
                  <small>{{ props.row.email }}</small>
                </q-card-section>

                <q-separator vertical/>

                <q-card-section>
                  <q-btn color="primary" round flat icon="more_vert">
                    <q-menu auto-close anchor="center right" self="center left" :offset="[40,10]">
                      <q-list>
                        <q-item
                          clickable
                          @click="openForm(props.row.id, true)"
                        >
                          <q-item-section>Editar o (a) {{ props.row.name.split(' ')[0] }}</q-item-section>
                        </q-item>
                        <q-item
                          class="bg-red text-white"
                          clickable
                          @click="dropUser(props.row.id, props.row.name)"
                        >
                          <q-item-section>Deletar o (a) {{ props.row.name.split(' ')[0] }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </q-card-section>
              </q-card-section>
            </q-card>
          </template>
        </q-table>
      </div>
    </div>
    <form-user/>
  </div>
</template>

<script>
import formUser from '../components/formUser'

export default {
  name: "all",
  data() {
    return {
      filter: '',
      columns: [
        {name: 'name', required: true, align: 'center', label: 'Nome', field: 'name', sortable: true},
        {name: 'email', label: 'E-mail', field: 'email', sortable: true},
      ]
    }
  },
  computed: {
    users: {
      async set(/* val */) {
        try {
          await this.$store.dispatch('user/ActionSetUsers')
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
          if (error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      },
      get() {
        return this.$store.getters['user/getUsers']
      }
    },
    loading: {
      set(val) {
        this.$store.dispatch('user/ActionSetLoading', val)
      },
      get() {
        return this.$store.getters['user/getLoading']
      }
    },
    formDialog: {
      set(val) {
        this.$store.dispatch('user/ActionSetFormDialog', val)
      },
      get() {
        return this.$store.getters['user/getFormDialog']
      }
    },
    formName: {
      set(val) {
        this.$store.dispatch('user/ActionSetFormName', val)
      },
      get() {
        return this.$store.getters['user/getFormName']
      }
    }
  },
  components: {
    formUser
  },
  methods: {
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
    async dropUser(id, name) {
      const response = await this.$q.dialog({
        title: `Deletar o (a) ${name}`,
        message: `Deseja realmente realizar esta ação?`,
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
          await this.$store.dispatch('user/ActionDropUser', id)
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: `${name} deletado(a)!`
          })
        } catch (error) {
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
  }
  ,
  created() {
    this.users = ''
  }
}
</script>

<style scoped>
.q-table__bottom > svg {
  display: none !important;
}
</style>
