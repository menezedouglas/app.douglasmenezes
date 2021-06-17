<style scoped>
  @media screen and (min-width: 761px) {
    .card-form-project {
      min-width: 450px;
    }
  }

  @media screen and (max-width: 760px) {
    .card-form-project {
      min-width: 300px;
    }
  }
</style>

<template>
  <q-dialog v-model="dialog" persistent>
    <q-card class="card-form-project">
      <q-card-section>
        <div class="row">
          <div class="col">
            <h5 class="text-grey-7">{{ (editMode) ? `Editar` : `Novo` }} Projeto</h5>
          </div>
          <div class="col-auto">
            <q-btn
              dense
              round
              flat
              icon="fas fa-times"
              color="grey"
              @click="dialog = !dialog"
            >
              <q-tooltip anchor="center left" self="center right" class="bg-red text-white">
                Fechar o formulário
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Nome"
          lazy-rules=""
          :rules="[
            val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
          ]"
        />

        <q-input
          filled
          v-model="description"
          label="Descrição"
          lazy-rules=""
          :rules="[
            val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
          ]"
        />

        <q-input filled v-model="init" label="Início" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="init">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Voltar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input filled v-model="end" label="Término" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="end">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Voltar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-toggle
          v-model="isOpenSource"
          :label="(!isOpenSource) ? 'Não é código aberto' : 'É código aberto'"
          color="positive"
          :class="(isOpenSource) ? `text-green` : `` "
        />
      </q-card-section>
      <q-separator />
      <q-card-section class="flex justify-between">
        <q-btn
          color="grey"
          label="Voltar"
          @click="dialog = !dialog"
        />

        <q-btn
          color="positive"
          icon="fas fa-save"
          label="Salvar"
          :loading="loading"
          :disable="loading"
          @click="submit()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "formProject",
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('projects/setLoading', val)
      },
      get () {
        return this.$store.getters['projects/getLoading']
      }
    },
    dialog: {
      set (val) {
        this.$store.dispatch('projects/setFormDialog', val)
      },
      get () {
        return this.$store.getters['projects/getFormDialog']
      }
    },
    editMode: {
      set (val) {
        this.$store.dispatch('projects/setFormEditMode', val)
      },
      get () {
        return this.$store.getters['projects/getFormEditMode']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('projects/setForm', val)
      },
      get () {
        return this.$store.getters['projects/getForm']
      }
    },
    name: {
      set (val) {
        this.$store.dispatch('projects/setFormName', val)
      },
      get () {
        return this.$store.getters['projects/getFormName']
      }
    },
    description: {
      set (val) {
        this.$store.dispatch('projects/setFormDescription', val)
      },
      get () {
        return this.$store.getters['projects/getFormDescription']
      }
    },
    init: {
      set (val) {
        this.$store.dispatch('projects/setFormInit', val)
      },
      get () {
        return this.$store.getters['projects/getFormInit']
      }
    },
    end: {
      set (val) {
        this.$store.dispatch('projects/setFormEnd', val)
      },
      get () {
        return this.$store.getters['projects/getFormEnd']
      }
    },
    isOpenSource: {
      set (val) {
        this.$store.dispatch('projects/setFormIsOpenSource', val)
      },
      get () {
        return this.$store.getters['projects/getFormIsOpenSource']
      }
    }
  },
  methods: {
    async submit () {
      try {
        if(this.editMode) {
          await this.$store.dispatch('projects/updateProject')
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Projeto atualizado'
          })
        } else {
          await this.$store.dispatch('projects/createProject')
          await this.$store.dispatch('messages/ActionAddMessage', {
            bg: 'positive',
            message: 'Projeto criado'
          })
        }
      } catch (error) {
        await this.setErrors(error)
      }
    },
    async setErrors (error) {
      await this.$store.dispatch('messages/ActionSetErrors', error)
      if(error.request.status === 401) {
        await this.$store.dispatch('login/ActionLogOut')
        await this.$router.push('/login')
      }
    }
  }
}
</script>
