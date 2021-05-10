<style scoped>
.absolute-center {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>

<template>
  <div class="row h-100">
    <div class="col">
      <div class="absolute-center p-3">
        <div class="card border-0 shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h2 class="text-dark mb-0">
                  Entrar
                </h2>
                <hr class="my-2 mb-3">
              </div>
            </div>
            <form
                @submit.prevent="submit"
            >
              <div class="row">
                <div class="col-12">
                  <defaultInput
                      type="email"
                      label="E-mail"
                      name="email"
                      placeholder="user@mail.com"
                      @value="credentials.email = $event"
                  />
                </div>
                <div class="col-12">
                  <defaultInput
                      type="password"
                      label="Senha"
                      name="password"
                      placeholder="senha1234"
                      @value="credentials.password = $event"
                  />
                </div>
                <div class="col-12 mt-3">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <defaultButton
                        type="submit"
                        bg="primary"
                        :loading="loading"
                        name="Entrar"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <messages
            position="bottom-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import defaultInput from '../../../../components/forms/default-input'
import defaultButton from '../../../../components/generics/default-button'
import {component as messages} from '../../../components/messages'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "index",
  components: {
    defaultInput,
    defaultButton,
    messages
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
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
