<style scoped>
.absolute-center {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.q-page {
  height: calc(100vh - 140px);
}
</style>

<template>
  <q-page>
    <div class="row">
      <div class="col">-
        <div class="absolute-center q-pa-sm">
          <q-card>
            <q-card-section>
              <div class="row">
                <div class="col">
                  <h2 class="text-dark q-mb-none">
                    Entrar
                  </h2>
                  <hr class="q-my-sm q-mb-md">
                </div>
              </div>
              <form
                @submit.prevent="submit"
              >
                <div class="row">
                  <div class="col-12">
                    <q-input
                      v-model="credentials.email"
                      filled
                      type="email"
                      label="E-mail"
                      :disable="loading"
                      lazy-rules
                      :rules="[
                      val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
                    ]"
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="credentials.password"
                      filled
                      :type="isPwd ? 'password' : 'text'"
                      label="Senha"
                      :disabled="loading"
                      lazy-rules
                      :rules="[
                      val => val && val !== '' || 'Por favor, este campo não pode ficar vazio!'
                    ]"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12 mt-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <q-btn
                        class="q-px-lg float-right"
                        type="submit"
                        label="Entrar"
                        color="green"
                        :loading="loading"
                        :disable="loading"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "index",
  components: {
    // defaultButton,
    // messages
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      isPwd: true
    }
  },
  computed: {
    loading: {
      set(val) {
        this.ActionSetLoading(val)
      },
      get() {
        return this.getLoading()
      }
    }
  },
  methods: {
    ...mapActions('login', [
      'ActionDoLogin',
      'ActionSetLoading'
    ]),
    ...mapGetters('login', [
      'getLoading'
    ]),
    ...mapActions('messages', [
      'ActionSetErrors'
    ]),
    async submit() {
      try {
        await this.ActionDoLogin(this.credentials)
        await this.$router.push('/dashboard')
      } catch (response) {
        this.ActionSetErrors(response)
      }
    }
  }
}
</script>
