<style scoped>
.absolute-center {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>

<template>
  <div class="absolute-center">
    <div class="card border-0 shadow" style="min-width: 400px;">
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
</template>

<script>
import defaultInput from '../../../../components/forms/default-input'
import defaultButton from '../../../../components/generics/default-button'
import { component as messages } from '../../../messages'
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
    },
    messages: {
      set (val) {
        this.ActionAddMessage(val)
      },
      get () {
        return this.getMessages()
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
        'ActionAddMessage',
        'ActionAddMessages',
        'ActionUnsetMessage'
    ]),
    ...mapGetters('messages', [
       'getMessages'
    ]),
    async submit() {
      try {
        await this.ActionDoLogin(this.credentials)
        this.messages = {
          bg: 'success',
          message: 'Login Efetuado'
        }
      } catch (response) {

        // eslint-disable-next-line no-undef
        const error = await helpers.httpResponses.errors(response)

        switch (response.status) {
          case 422: {
            this.ActionAddMessages(error)
            break
          }
          default: {
            this.ActionAddMessage(error)
            break
          }
        }

      }
    }
  },
}
</script>
