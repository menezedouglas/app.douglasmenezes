<style scoped>
  @media (min-width: 768px) {
    .form-client-card {
      min-width: 450px;
    }
  }
  @media (max-width: 767px) {
    .form-client-card {
      min-width: 300px;
    }
  }
</style>

<template>
  <div>
    <q-dialog
      v-model="dialog"
      persistent
    >
      <q-card class="form-client-card">
        <q-card-section>
          <h5 class="text-grey-7">Novo Cliente</h5>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form
              class="q-gutter-md"
          >
            <q-input
                filled
                v-model="fullName"
                label="Nome Completo"
                hint="Nome completo da empresa"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor, este campo não pode ficar em branco']"
            />

            <q-input
                filled
                v-model="fantasyName"
                label="Nome Fantasia"
                hint="Nome fantasia da empresa"
                lazy-rules
            />

            <q-select
                filled
                v-model="documentType"
                use-input
                input-debounce="0"
                label="Simple filter"
                :options="options"
                @filter="filterFn"
                style="width: 250px"
                behavior="dialog"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'formClient',
  computed: {
    loading: {
      set (val) {
        this.$store.dispatch('client/ActionSetLoading', val)
      },
      get () {
        return this.$store.getters['client/getLoading']
      }
    },
    form: {
      set (val) {
        this.$store.dispatch('client/ActionSetForm', val)
      },
      get () {
        return this.$store.getters['client/getForm']
      }
    },
    userId: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormUserId', val)
      },
      get () {
        return this.$store.getters['client/getFormUserId']
      }
    },
    fullName: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormFullName', val)
      },
      get () {
        return this.$store.getters['client/getFormFullName']
      }
    },
    fantasyName: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormFantasyName', val)
      },
      get () {
        return this.$store.getters['client/getFormFantasyName']
      }
    },
    documentType: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormDocumentType', val)
      },
      get () {
        return this.$store.getters['client/getFormDocumentType']
      }
    },
    document: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormDocument', val)
      },
      get () {
        return this.$store.getters['client/getFormDocument']
      }
    },
    email: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormEmail', val)
      },
      get () {
        return this.$store.getters['client/getFormEmail']
      }
    },
    phone: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormPhone', val)
      },
      get () {
        return this.$store.getters['client/getFormPhone']
      }
    },
    dialog: {
      set (val) {
        this.$store.dispatch('client/ActionSetFormDialog', val)
      },
      get () {
        return this.$store.getters['client/getFormDialog']
      }
    },
    options: {
      set (val) {
        this.$store.dispatch('client/ActionSetOptions', val)
      },
      get () {
        return this.$store.getters['client/getOptions']
      }
    },
    refCodes: {
      async set (val) {
        try {
          await this.$store.dispatch('refCodes/ActionSetCodes', val)
        } catch (error) {
          await this.$store.dispatch('messages/ActionSetErrors', error)
          if(error.request.status === 401) {
            await this.$store.dispatch('login/ActionLogOut')
            await this.$router.push('/login')
          }
        }
      },
      get () {
        return this.$store.getters['refCodes/getCodes']
      }
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.refCodes = 'document_type'
          this.options = this.refCodes
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.refCodes.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  created() {
    this.dialog = true
  }
}
</script>